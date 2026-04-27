module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { url } = req.body || {};

    // 1. Validate URL
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'Missing url' });
    }

    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      return res.status(400).json({ error: 'Invalid URL' });
    }

    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return res.status(400).json({ error: 'URL must use http or https' });
    }

    const domain = parsed.hostname;

    // 2. Fetch with 10-second timeout and desktop User-Agent
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);

    let response;
    try {
      response = await fetch(url, {
        signal: controller.signal,
        redirect: 'follow',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
    } catch (err) {
      clearTimeout(timer);
      return res.status(400).json({
        error: err.name === 'AbortError' ? 'Request timed out' : `Fetch failed: ${err.message}`
      });
    }
    clearTimeout(timer);

    if (!response.ok) {
      return res.status(400).json({ error: `Target returned HTTP ${response.status}` });
    }

    const html = await response.text();
    const finalUrl = response.url;

    // 3. Extract fields

    // pageTitle
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const pageTitle = titleMatch ? stripTags(titleMatch[1]).trim() : '';

    // metaDescription — find the tag first, then pull content from it (handles either attribute order)
    const metaDescTag = html.match(/<meta\b[^>]*\bname=["']description["'][^>]*>/i)
      || html.match(/<meta\b[^>]*\bcontent=["'][^"']*["'][^>]*\bname=["']description["'][^>]*>/i);
    let metaDescription = '';
    if (metaDescTag) {
      const cm = metaDescTag[0].match(/\bcontent=["']([^"']*)["']/i);
      if (cm) metaDescription = cm[1].trim();
    }

    // h1Tags
    const h1Tags = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)]
      .map(m => stripTags(m[1]).trim())
      .filter(Boolean);

    // h2Count
    const h2Count = (html.match(/<h2[\s>]/gi) || []).length;

    // hasSchemaMarkup
    const hasSchemaMarkup = /<script[^>]+type=["']application\/ld\+json["']/i.test(html);

    // images
    const imgTags = [...html.matchAll(/<img[^>]*>/gi)];
    const imagesTotal = imgTags.length;
    const imagesMissingAlt = imgTags.filter(m => {
      const altMatch = m[0].match(/\balt=["']([^"']*)["']/i);
      return !altMatch || altMatch[1].trim() === '';
    }).length;

    // hasMobileViewport
    const hasMobileViewport = /<meta\b[^>]*\bname=["']viewport["']/i.test(html);

    // isSSL
    const isSSL = finalUrl.startsWith('https://');

    // internalLinkCount
    const internalLinkCount = [...html.matchAll(/\bhref=["']([^"']*?)["']/gi)]
      .filter(m => {
        const href = m[1].trim();
        return href.startsWith('/') || href.includes(domain);
      }).length;

    // wordCount — strip scripts, styles, then all tags
    const wordCount = html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&[a-z#0-9]+;/gi, ' ')
      .trim()
      .split(/\s+/)
      .filter(w => w.length > 0)
      .length;

    // 4. Return result
    return res.status(200).json({
      url: finalUrl,
      pageTitle,
      metaDescription,
      h1Tags,
      h2Count,
      hasSchemaMarkup,
      imagesTotal,
      imagesMissingAlt,
      hasMobileViewport,
      isSSL,
      internalLinkCount,
      wordCount
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

function stripTags(str) {
  return str.replace(/<[^>]+>/g, '');
}
