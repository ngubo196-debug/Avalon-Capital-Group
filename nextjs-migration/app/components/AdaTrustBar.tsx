'use client';

import Image from 'next/image';

type Item =
  | { type: 'text'; text: string }
  | { type: 'dot' };

const STAT_ITEMS: Item[] = [
  { type: 'text', text: '214 ranking queries' },
  { type: 'dot' },
  { type: 'text', text: '120 days from launch' },
  { type: 'dot' },
  { type: 'text', text: '5,000+ organic impressions · 4 months' },
  { type: 'dot' },
  { type: 'text', text: 'Ranking #1 for branded and service searches' },
  { type: 'dot' },
  { type: 'text', text: '29 pages indexed from 1' },
  { type: 'dot' },
  { type: 'text', text: 'Registered in South Africa · Reg. 2025/671885/07' },
  { type: 'dot' },
];

function TrustStrip({ hidden }: { hidden?: boolean }) {
  return (
    <div className="ada-trustbar-strip" aria-hidden={hidden}>
      <Image
        src="/logos/afripact-logo.jpeg"
        alt="Afripact Civils"
        width={134}
        height={99}
        className="ada-trustbar-logo"
        style={{ height: '32px', width: 'auto' }}
      />
      <span className="ada-trustbar-dot">·</span>
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: '600', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.02em' }}>Pitchd</span>
      <span className="ada-trustbar-dot">·</span>
      <span style={{ fontFamily: 'Bodoni Moda, Georgia, serif', fontSize: '13px', fontWeight: '400', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Vantara</span>
      <span className="ada-trustbar-dot">·</span>
      {STAT_ITEMS.map((item, i) => {
        if (item.type === 'dot') {
          return <span key={i} className="ada-trustbar-dot">·</span>;
        }
        return (
          <span key={i} className="ada-trustbar-text">{item.text}</span>
        );
      })}
    </div>
  );
}

export default function AdaTrustBar() {
  return (
    <div className="ada-trustbar" role="group" aria-label="Client results and trust indicators">
      <style suppressHydrationWarning>{`
        .ada-trustbar { background: var(--ada-ink); width: 100%; height: 72px; overflow: hidden; display: flex; align-items: center; }
        .ada-trustbar-track { display: flex; align-items: center; width: max-content; animation: ada-trustbar-scroll 35s linear infinite; }
        .ada-trustbar-strip { display: flex; align-items: center; white-space: nowrap; flex-shrink: 0; }
        .ada-trustbar-text { font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.75); letter-spacing: 0.04em; white-space: nowrap; }
        .ada-trustbar-dot { color: rgba(255,255,255,0.3); font-size: 16px; margin: 0 24px; flex-shrink: 0; }
        .ada-trustbar-logo { opacity: 0.85; object-fit: contain; vertical-align: middle; flex-shrink: 0; }
        @keyframes ada-trustbar-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .ada-trustbar { height: 60px; }
          .ada-trustbar-text { font-size: 11px; }
          .ada-trustbar-logo { height: 24px !important; }
          .ada-trustbar-dot { margin: 0 16px; }
        }
      `}</style>
      <div className="ada-trustbar-track">
        <TrustStrip />
        <TrustStrip hidden />
      </div>
    </div>
  );
}
