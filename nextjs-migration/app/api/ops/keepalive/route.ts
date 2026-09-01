import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

// Called on a schedule (see vercel.json) purely to keep the Supabase
// free-tier project from auto-pausing due to inactivity. Doesn't need auth,
// it's a trivial read with no sensitive data in the response.
export async function GET() {
  const { error } = await supabaseAdmin.from('prospects').select('id').limit(1);
  if (error) return new NextResponse(error.message, { status: 500 });
  return NextResponse.json({ ok: true, checked: new Date().toISOString() });
}
