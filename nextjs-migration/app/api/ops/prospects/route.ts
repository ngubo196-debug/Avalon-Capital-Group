import { NextRequest, NextResponse } from 'next/server';
import { isOpsAuthed } from '@/lib/opsAuth';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

function toRow(body: any) {
  return {
    name: body.name,
    business: body.business || null,
    division: body.division || 'ADA',
    stage: body.stage || 'new',
    value: body.value ?? null,
    next_action: body.nextAction || null,
    next_date: body.nextDate || null,
    notes: body.notes || null,
    updated: new Date().toISOString().slice(0, 10),
  };
}

function toClient(row: any) {
  return {
    id: row.id,
    name: row.name,
    business: row.business || '',
    division: row.division,
    stage: row.stage,
    value: row.value,
    nextAction: row.next_action || '',
    nextDate: row.next_date || '',
    notes: row.notes || '',
    updated: row.updated,
  };
}

export async function GET() {
  if (!isOpsAuthed()) return new NextResponse('Unauthorized', { status: 401 });
  const { data, error } = await supabaseAdmin.from('prospects').select('*').order('updated', { ascending: false });
  if (error) return new NextResponse(error.message, { status: 500 });
  return NextResponse.json((data || []).map(toClient));
}

export async function POST(req: NextRequest) {
  if (!isOpsAuthed()) return new NextResponse('Unauthorized', { status: 401 });
  const body = await req.json();
  if (!body.name || !String(body.name).trim()) {
    return new NextResponse('Name is required', { status: 400 });
  }
  const { data, error } = await supabaseAdmin.from('prospects').insert(toRow(body)).select().single();
  if (error) return new NextResponse(error.message, { status: 500 });
  return NextResponse.json(toClient(data));
}
