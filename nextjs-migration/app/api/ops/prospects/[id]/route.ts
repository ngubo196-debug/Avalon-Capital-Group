import { NextRequest, NextResponse } from 'next/server';
import { isOpsAuthed } from '@/lib/opsAuth';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

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

const FIELD_MAP: Record<string, string> = {
  name: 'name',
  business: 'business',
  division: 'division',
  stage: 'stage',
  value: 'value',
  nextAction: 'next_action',
  nextDate: 'next_date',
  notes: 'notes',
};

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isOpsAuthed()) return new NextResponse('Unauthorized', { status: 401 });
  const body = await req.json();

  const patch: Record<string, unknown> = { updated: new Date().toISOString().slice(0, 10) };
  for (const [key, val] of Object.entries(body)) {
    if (FIELD_MAP[key]) patch[FIELD_MAP[key]] = val;
  }

  const { data, error } = await supabaseAdmin
    .from('prospects')
    .update(patch)
    .eq('id', params.id)
    .select()
    .single();

  if (error) return new NextResponse(error.message, { status: 500 });
  return NextResponse.json(toClient(data));
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  if (!isOpsAuthed()) return new NextResponse('Unauthorized', { status: 401 });
  const { error } = await supabaseAdmin.from('prospects').delete().eq('id', params.id);
  if (error) return new NextResponse(error.message, { status: 500 });
  return new NextResponse(null, { status: 204 });
}
