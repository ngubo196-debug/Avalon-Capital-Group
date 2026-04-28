import { createClient } from '@supabase/supabase-js';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: CORS });
}

export async function POST(request: Request) {
  const body: any = await request.json().catch(() => ({}));
  const { business_name, contact_name, contact_email, contact_whatsapp, contact_city } = body;

  if (!business_name || !contact_name || !contact_email) {
    return Response.json({ error: 'Missing required fields' }, { status: 400, headers: CORS });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) return Response.json({ error: 'Supabase not configured' }, { status: 500, headers: CORS });

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  // Find the most recent audit row for this business_name.
  const { data: rows, error: findErr } = await supabase
    .from('audits')
    .select('id')
    .eq('business_name', business_name)
    .order('created_at', { ascending: false })
    .limit(1);

  if (findErr) return Response.json({ error: findErr.message }, { status: 500, headers: CORS });
  if (!rows || rows.length === 0) return Response.json({ error: 'No audit found for this business' }, { status: 404, headers: CORS });

  const { error: updateErr } = await supabase
    .from('audits')
    .update({ contact_name, contact_email, contact_whatsapp, contact_city })
    .eq('id', rows[0].id);

  if (updateErr) return Response.json({ error: updateErr.message }, { status: 500, headers: CORS });

  return Response.json({ ok: true }, { headers: CORS });
}
