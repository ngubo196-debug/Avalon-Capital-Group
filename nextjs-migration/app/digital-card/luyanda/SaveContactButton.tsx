'use client';

import { useEffect, useRef, useState } from 'react';

const VCARD = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'FN:Luyanda Ngubo',
  'N:Ngubo;Luyanda;;;',
  'TITLE:Founder',
  'ORG:ADA',
  'TEL;TYPE=CELL,VOICE:+27712205313',
  'EMAIL:luyanda@avaloncapitalgroup.co.za',
  'URL:https://adagrowth.co.za',
  'ADR;TYPE=WORK:;;;Pietermaritzburg;KwaZulu-Natal;;South Africa',
  'END:VCARD',
  '',
].join('\r\n');

export default function SaveContactButton() {
  const [saved, setSaved] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function saveContact() {
    const blob = new Blob([VCARD], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Luyanda-Ngubo-ADA.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setSaved(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setSaved(false), 3000);
  }

  return (
    <>
      <button type="button" className="lc-btn lc-save" onClick={saveContact}>
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4v11" />
          <path d="M7.5 11 12 15.5 16.5 11" />
          <path d="M5 19h14" />
        </svg>
        Save Contact
      </button>
      <div className={`lc-toast${saved ? ' show' : ''}`} role="status" aria-live="polite">
        {saved ? 'Contact saved to your device.' : ''}
      </div>
    </>
  );
}
