import { createClient } from '@supabase/supabase-js';

// Server-only client. Uses the service role key, so this file must never be
// imported from a 'use client' component. RLS on the prospects table is left
// with no public policies, so only this key (server-side) can read/write it.
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  { auth: { persistSession: false } }
);
