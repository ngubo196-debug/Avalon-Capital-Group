'use client';

import { useMemo, useState } from 'react';
import { logout } from '../actions';

export type Stage =
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'proposal'
  | 'negotiating'
  | 'won'
  | 'stalled'
  | 'lost';

export type Division = 'ADA' | 'Vantara' | 'Vuma' | 'Get Your Assistant' | 'Afripact';

export interface Prospect {
  id: string;
  name: string;
  business: string;
  division: Division;
  stage: Stage;
  value: number | null;
  nextAction: string;
  nextDate: string;
  notes: string;
  updated: string;
}

const STAGES: { key: Stage; label: string; dot: string }[] = [
  { key: 'new', label: 'New', dot: '#9AA1AC' },
  { key: 'contacted', label: 'Contacted', dot: '#3D6FD6' },
  { key: 'qualified', label: 'Qualified', dot: '#6D5BD0' },
  { key: 'proposal', label: 'Proposal sent', dot: '#C1682B' },
  { key: 'negotiating', label: 'Negotiating', dot: '#B98900' },
  { key: 'won', label: 'Won / active', dot: '#2E8B57' },
  { key: 'stalled', label: 'Stalled', dot: '#A15C5C' },
  { key: 'lost', label: 'Lost', dot: '#9AA1AC' },
];

const DIVISIONS: Division[] = ['ADA', 'Vantara', 'Vuma', 'Get Your Assistant', 'Afripact'];

async function api(path: string, method: string, body?: unknown) {
  const res = await fetch(path, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.status === 204 ? null : res.json();
}

function fmtValue(v: number | null) {
  if (v === null || v === undefined) return '\u2014';
  return 'R' + v.toLocaleString('en-ZA');
}

export default function PipelineClient({ initialData }: { initialData: Prospect[] }) {
  const [prospects, setProspects] = useState<Prospect[]>(initialData);
  const [search, setSearch] = useState('');
  const [divisionFilter, setDivisionFilter] = useState('');
  const [stageFilter, setStageFilter] = useState<Stage | null>(null);
  const [sortBy, setSortBy] = useState<'updated' | 'value' | 'name'>('updated');
  const [showAdd, setShowAdd] = useState(false);
  const [showBulk, setShowBulk] = useState(false);
  const [bulkText, setBulkText] = useState('');
  const [saving, setSaving] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: '',
    business: '',
    division: 'ADA' as Division,
    stage: 'new' as Stage,
    value: '',
    nextAction: '',
    nextDate: '',
    notes: '',
  });

  const totalValue = useMemo(
    () =>
      prospects
        .filter((p) => p.stage !== 'lost' && p.value)
        .reduce((sum, p) => sum + (p.value || 0), 0),
    [prospects]
  );

  const stageCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    STAGES.forEach((s) => (counts[s.key] = 0));
    prospects.forEach((p) => (counts[p.stage] = (counts[p.stage] || 0) + 1));
    return counts;
  }, [prospects]);

  const list = useMemo(() => {
    const out = prospects.filter((p) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !q || p.name.toLowerCase().includes(q) || (p.business || '').toLowerCase().includes(q);
      const matchesDiv = !divisionFilter || p.division === divisionFilter;
      const matchesStage = !stageFilter || p.stage === stageFilter;
      return matchesSearch && matchesDiv && matchesStage;
    });
    if (sortBy === 'value') out.sort((a, b) => (b.value || 0) - (a.value || 0));
    else if (sortBy === 'name') out.sort((a, b) => a.name.localeCompare(b.name));
    else out.sort((a, b) => (b.updated || '').localeCompare(a.updated || ''));
    return out;
  }, [prospects, search, divisionFilter, stageFilter, sortBy]);

  async function addProspect() {
    if (!form.name.trim()) return;
    const value = form.value ? parseFloat(form.value.replace(/[^0-9.]/g, '')) : null;
    const created = await api('/api/ops/prospects', 'POST', {
      name: form.name.trim(),
      business: form.business.trim(),
      division: form.division,
      stage: form.stage,
      value: value && !isNaN(value) ? value : null,
      nextAction: form.nextAction.trim(),
      nextDate: form.nextDate || null,
      notes: form.notes.trim(),
    });
    setProspects((prev) => [created, ...prev]);
    setForm({ name: '', business: '', division: 'ADA', stage: 'new', value: '', nextAction: '', nextDate: '', notes: '' });
    setShowAdd(false);
  }

  async function bulkImport() {
    const lines = bulkText.split('\n').map((l) => l.trim()).filter(Boolean);
    const validStages = STAGES.map((s) => s.key);
    const addedRows: Prospect[] = [];
    for (const line of lines) {
      const parts = line.split('|').map((p) => p.trim());
      const name = parts[0];
      if (!name) continue;
      const business = parts[1] || '';
      let division = (parts[2] || 'ADA') as Division;
      if (!DIVISIONS.includes(division)) division = 'ADA';
      let stage = (parts[3] || 'new').toLowerCase() as Stage;
      if (!validStages.includes(stage)) stage = 'new';
      const rawValue = parts[4] || '';
      const value = rawValue ? parseFloat(rawValue.replace(/[^0-9.]/g, '')) : null;
      const nextAction = parts[5] || '';
      const notes = parts[6] || '';
      const created = await api('/api/ops/prospects', 'POST', {
        name,
        business,
        division,
        stage,
        value: value && !isNaN(value) ? value : null,
        nextAction,
        nextDate: null,
        notes,
      });
      addedRows.push(created);
    }
    setProspects((prev) => [...addedRows, ...prev]);
    setBulkText('');
    setShowBulk(false);
  }

  async function updateField(id: string, field: keyof Prospect, value: string) {
    setSaving(id);
    const payload: Record<string, unknown> = {};
    if (field === 'value') {
      const n = parseFloat(value.replace(/[^0-9.]/g, ''));
      payload.value = value === '' || isNaN(n) ? null : n;
    } else {
      payload[field] = value;
    }
    const updated = await api(`/api/ops/prospects/${id}`, 'PATCH', payload);
    setProspects((prev) => prev.map((p) => (p.id === id ? updated : p)));
    setSaving(null);
  }

  async function deleteProspect(id: string) {
    if (!confirm('Remove this prospect from the pipeline?')) return;
    await api(`/api/ops/prospects/${id}`, 'DELETE');
    setProspects((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div style={{ background: '#FAFBF9', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', color: '#14161A' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '36px 28px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 24, marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 600, fontSize: 34, margin: 0 }}>Pipeline</h1>
            <div style={{ color: '#667085', fontSize: 13.5, marginTop: 4 }}>
              {prospects.length} prospect{prospects.length === 1 ? '' : 's'} tracked &middot; R{totalValue.toLocaleString('en-ZA')} in active pipeline
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setShowBulk((s) => !s)} style={btnSecondary}>Batch import</button>
            <button onClick={() => setShowAdd((s) => !s)} style={btnPrimary}>Add prospect</button>
            <form action={logout}>
              <button type="submit" style={btnGhost}>Log out</button>
            </form>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 1, background: '#E4E6E1', border: '1px solid #E4E6E1', borderRadius: 10, overflow: 'hidden', marginBottom: 22, flexWrap: 'wrap' }}>
          <div onClick={() => setStageFilter(null)} style={chipStyle(stageFilter === null)}>
            <div style={chipNum}>{prospects.length}</div>
            <div style={chipLabel}>All</div>
          </div>
          {STAGES.map((s) => (
            <div key={s.key} onClick={() => setStageFilter(stageFilter === s.key ? null : s.key)} style={chipStyle(stageFilter === s.key)}>
              <div style={chipNum}>{stageCounts[s.key] || 0}</div>
              <div style={chipLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {showAdd && (
          <div style={panelStyle}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
              <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ ...inputStyle, flex: '1 1 160px' }} />
              <input placeholder="Business" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} style={{ ...inputStyle, flex: '1 1 160px' }} />
              <select value={form.division} onChange={(e) => setForm({ ...form, division: e.target.value as Division })} style={{ ...inputStyle, flex: '0 0 150px' }}>
                {DIVISIONS.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              <select value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value as Stage })} style={{ ...inputStyle, flex: '0 0 140px' }}>
                {STAGES.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
              </select>
              <input placeholder="Value (R)" value={form.value} onChange={(e) => setForm({ ...form, value: e.target.value })} style={{ ...inputStyle, flex: '0 0 110px' }} />
            </div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <input placeholder="Next action" value={form.nextAction} onChange={(e) => setForm({ ...form, nextAction: e.target.value })} style={{ ...inputStyle, flex: '1 1 240px' }} />
              <input type="date" value={form.nextDate} onChange={(e) => setForm({ ...form, nextDate: e.target.value })} style={{ ...inputStyle, flex: '0 0 150px' }} />
            </div>
            <textarea placeholder="Notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} style={{ ...inputStyle, width: '100%', minHeight: 44, marginBottom: 10 }} />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button onClick={() => setShowAdd(false)} style={btnSecondary}>Cancel</button>
              <button onClick={addProspect} style={btnPrimary}>Add to pipeline</button>
            </div>
          </div>
        )}

        {showBulk && (
          <div style={panelStyle}>
            <div style={{ fontSize: 13, color: '#667085', marginBottom: 8, lineHeight: 1.5 }}>
              One prospect per line, fields separated by <code>|</code>: Name | Business | Division | Stage | Value | Next action | Notes.
              Only Name is required.
            </div>
            <textarea value={bulkText} onChange={(e) => setBulkText(e.target.value)} placeholder="Paste one prospect per line here" style={{ ...inputStyle, width: '100%', minHeight: 110 }} />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 10 }}>
              <button onClick={() => setShowBulk(false)} style={btnSecondary}>Cancel</button>
              <button onClick={bulkImport} style={btnPrimary}>Import all</button>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap' }}>
          <input placeholder="Search name or business" value={search} onChange={(e) => setSearch(e.target.value)} style={{ ...inputStyle, flex: '1 1 220px' }} />
          <select value={divisionFilter} onChange={(e) => setDivisionFilter(e.target.value)} style={inputStyle}>
            <option value="">All divisions</option>
            {DIVISIONS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} style={inputStyle}>
            <option value="updated">Sort: recently updated</option>
            <option value="value">Sort: value (high to low)</option>
            <option value="name">Sort: name</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {list.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#667085', fontSize: 14 }}>
              Nothing here. Add a prospect or clear your filters.
            </div>
          )}
          {list.map((p) => {
            const info = STAGES.find((s) => s.key === p.stage)!;
            return (
              <div key={p.id} style={cardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 9, flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, fontSize: 16 }}>{p.name}</span>
                    {p.business && <span style={{ color: '#667085', fontSize: 13.5 }}>{p.business}</span>}
                    <span style={tagStyle}>{p.division}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 14 }}>{fmtValue(p.value)}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: info.dot, display: 'inline-block' }} />
                      <select
                        value={p.stage}
                        onChange={(e) => updateField(p.id, 'stage', e.target.value)}
                        style={{ ...inputStyle, padding: '5px 8px', fontSize: 13 }}
                      >
                        {STAGES.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
                      </select>
                    </div>
                    <button onClick={() => deleteProspect(p.id)} style={{ background: 'none', border: 'none', color: '#667085', fontSize: 12, cursor: 'pointer' }}>Remove</button>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 22, marginTop: 10, flexWrap: 'wrap', fontSize: 13.5 }}>
                  <div style={{ flex: '1 1 260px' }}>
                    <div style={labelStyle}>Next action</div>
                    <input
                      defaultValue={p.nextAction}
                      onBlur={(e) => updateField(p.id, 'nextAction', e.target.value)}
                      placeholder="What happens next"
                      style={fieldInputStyle}
                    />
                  </div>
                  <div style={{ flex: '0 0 150px' }}>
                    <div style={labelStyle}>Date</div>
                    <input
                      type="date"
                      defaultValue={p.nextDate}
                      onChange={(e) => updateField(p.id, 'nextDate', e.target.value)}
                      style={fieldInputStyle}
                    />
                  </div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <div style={labelStyle}>Notes</div>
                  <textarea
                    defaultValue={p.notes}
                    onBlur={(e) => updateField(p.id, 'notes', e.target.value)}
                    placeholder="Context, objections, history"
                    style={{ ...fieldInputStyle, minHeight: 32, resize: 'vertical', width: '100%' }}
                  />
                </div>
                <div style={{ fontSize: 11, color: '#667085', marginTop: 10 }}>
                  {saving === p.id ? 'Saving\u2026' : `Updated ${p.updated || '\u2014'}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const btnPrimary: React.CSSProperties = {
  background: '#14161A', color: '#fff', border: 'none', padding: '11px 20px',
  borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer',
};
const btnSecondary: React.CSSProperties = {
  background: 'none', border: '1px solid #E4E6E1', color: '#14161A', padding: '11px 20px',
  borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer',
};
const btnGhost: React.CSSProperties = {
  background: 'none', border: 'none', color: '#667085', padding: '11px 8px',
  fontSize: 13, cursor: 'pointer', textDecoration: 'underline',
};
const inputStyle: React.CSSProperties = {
  padding: '9px 12px', border: '1px solid #E4E6E1', borderRadius: 8, fontSize: 13.5,
  fontFamily: 'inherit', background: '#fff', color: '#14161A',
};
const fieldInputStyle: React.CSSProperties = {
  border: 'none', borderBottom: '1px solid transparent', background: 'transparent',
  fontFamily: 'inherit', fontSize: 13.5, color: '#14161A', padding: '2px 0', width: '100%',
};
const panelStyle: React.CSSProperties = {
  background: '#EAEEF8', border: '1px solid #E4E6E1', borderRadius: 10, padding: '16px 18px', marginBottom: 14,
};
const cardStyle: React.CSSProperties = {
  background: '#fff', border: '1px solid #E4E6E1', borderRadius: 10, padding: '16px 18px',
};
const tagStyle: React.CSSProperties = {
  fontSize: 11, color: '#667085', border: '1px solid #E4E6E1', borderRadius: 5, padding: '2px 7px',
  fontFamily: 'IBM Plex Mono, monospace',
};
const labelStyle: React.CSSProperties = { color: '#667085', fontSize: 11.5, marginBottom: 2 };
const chipNum: React.CSSProperties = { fontFamily: 'IBM Plex Mono, monospace', fontSize: 19, fontWeight: 500 };
const chipLabel: React.CSSProperties = { fontSize: 11.5, color: '#667085', marginTop: 2 };
function chipStyle(active: boolean): React.CSSProperties {
  return {
    flex: '1 1 100px', background: active ? '#EAEEF8' : '#fff', padding: '12px 14px', cursor: 'pointer',
  };
}
