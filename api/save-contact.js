const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { business_name, contact_name, contact_email, contact_whatsapp, contact_city } = req.body || {};
  if (!business_name || !contact_name || !contact_email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) return res.status(500).json({ error: 'Supabase not configured' });

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  // Find the most recent audit row for this business_name.
  const { data: rows, error: findErr } = await supabase
    .from('audits')
    .select('id')
    .eq('business_name', business_name)
    .order('created_at', { ascending: false })
    .limit(1);

  if (findErr) return res.status(500).json({ error: findErr.message });
  if (!rows || rows.length === 0) return res.status(404).json({ error: 'No audit found for this business' });

  const { error: updateErr } = await supabase
    .from('audits')
    .update({ contact_name, contact_email, contact_whatsapp, contact_city })
    .eq('id', rows[0].id);

  if (updateErr) return res.status(500).json({ error: updateErr.message });

  return res.status(200).json({ ok: true });
};
