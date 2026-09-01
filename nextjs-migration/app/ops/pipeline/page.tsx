import { redirect } from 'next/navigation';
import { isOpsAuthed } from '@/lib/opsAuth';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import PipelineClient, { Prospect } from './PipelineClient';

export const metadata = {
  robots: { index: false, follow: false },
  title: 'Pipeline',
};

export const dynamic = 'force-dynamic';

export default async function PipelinePage() {
  if (!isOpsAuthed()) {
    redirect('/ops');
  }

  const { data, error } = await supabaseAdmin
    .from('prospects')
    .select('*')
    .order('updated', { ascending: false });

  if (error) {
    return (
      <main style={{ padding: 40, fontFamily: 'system-ui' }}>
        Could not load prospects: {error.message}
      </main>
    );
  }

  const initial: Prospect[] = (data || []).map((row) => ({
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
  }));

  return <PipelineClient initialData={initial} />;
}
