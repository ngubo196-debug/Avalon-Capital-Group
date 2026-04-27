const { createClient } = require('@supabase/supabase-js');

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { systemPrompt, userMessage } = req.body || {};
  if (!systemPrompt || !userMessage) {
    return res.status(400).json({ error: 'Missing systemPrompt or userMessage' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  // Crawl the business website and append real data to the system prompt.
  let enrichedPrompt = systemPrompt;
  try {
    const input = JSON.parse(userMessage);
    const websiteUrl = input.websiteUrl;
    if (websiteUrl && typeof websiteUrl === 'string' && websiteUrl.trim()) {
      const crawlRes = await fetch(`${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}/api/crawl`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: websiteUrl.trim() })
      });
      if (crawlRes.ok) {
        const crawlData = await crawlRes.json();
        enrichedPrompt = systemPrompt +
          '\n\n---\n\nREAL CRAWL DATA (live-fetched from the business website)\n' +
          'Use this data to validate or override the self-reported websiteStatus answer. If the crawl data contradicts the self-report, trust the crawl data.\n\n' +
          JSON.stringify(crawlData, null, 2);
      }
    }
  } catch (_) {
    // Crawl failure must not block the audit.
  }

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 4000,
        system: enrichedPrompt,
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: data.error?.message || 'Upstream API error' });
    }

    // Attempt to parse the report and write to Supabase — never block the response on failure.
    try {
      const raw = data.content?.[0]?.text || '';
      const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (match) {
        const report = JSON.parse(match[0]);
        const input = JSON.parse(userMessage);

        const supabase = getSupabase();
        if (supabase) {
          await supabase.from('audits').insert({
            business_name:      report.businessName   || input.businessName   || '',
            industry:           report.industry        || input.industry        || '',
            transaction_bracket: input.transactionBracket || '',
            final_score:        report.finalScore      ?? null,
            benchmark_tier:     report.benchmarkTier   || '',
            severity_label:     report.severityLabel   || '',
            revenue_loss_range: report.revenueLossRange || '',
            recovery_hook:      report.recoveryHook    || '',
            biggest_costly:     report.biggestCostly   || '',
            full_report:        report
          });
        }
      }
    } catch (_) {
      // Supabase write failure must not affect the client response.
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
