'use client';

import { useState } from 'react';

export default function SaudCardContent() {
  const [toastVisible, setToastVisible] = useState(false);

  function saveContact() {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Saud Olla',
      'N:Olla;Saud;;;',
      'ORG:Avalon Capital Group',
      'TITLE:Co-Founder & Chief Executive',
      'TEL;TYPE=CELL,VOICE:+27658839408',
      'TEL;TYPE=CELL,WHATSAPP:+27658839408',
      'EMAIL:saud@avaloncapitalgroup.co.za',
      'URL:https://avaloncapitalgroup.co.za',
      'ADR;TYPE=WORK:;;Durban;KwaZulu-Natal;;;ZA',
      'NOTE:Co-Founder & Chief Executive, Avalon Capital Group. Divisions: Vantara | Avalon Digital Agency (ADA)',
      'END:VCARD'
    ].join('\n');

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Saud-Olla-ACG.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  }

  return (
    <>
      <style suppressHydrationWarning>{`
        .card-root {
          background: #0A0A0A;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          font-family: 'Montserrat', sans-serif;
        }
        .card {
          background: #111111;
          width: 100%;
          max-width: 420px;
          border: 1px solid rgba(201,168,76,0.2);
          position: relative;
          overflow: hidden;
        }
        .card-top-bar {
          height: 3px;
          background: linear-gradient(90deg, #8A6E2F, #C9A84C, #E8D5A3, #C9A84C, #8A6E2F);
        }
        .card-header {
          padding: 44px 40px 36px;
          text-align: center;
          border-bottom: 1px solid rgba(201,168,76,0.12);
          position: relative;
        }
        .card-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .logo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 28px;
        }
        .person-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          color: #F0EDE8;
          letter-spacing: 0.02em;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .person-title {
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 6px;
        }
        .person-group {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #555250;
        }
        .card-body {
          padding: 32px 40px;
        }
        .contact-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(201,168,76,0.08);
        }
        .contact-row:last-of-type {
          border-bottom: none;
        }
        .contact-icon {
          width: 32px;
          height: 32px;
          border: 1px solid rgba(201,168,76,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-icon svg {
          width: 14px;
          height: 14px;
        }
        .contact-label {
          font-size: 8px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #555250;
          margin-bottom: 3px;
        }
        .contact-value {
          font-size: 13px;
          color: #F0EDE8;
          font-weight: 300;
          letter-spacing: 0.03em;
        }
        .contact-value a {
          color: #F0EDE8;
          text-decoration: none;
        }
        .card-actions {
          padding: 0 40px 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 16px;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s;
          border: none;
          font-family: 'Montserrat', sans-serif;
        }
        .action-btn svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }
        .btn-whatsapp { background: #C9A84C; color: #0A0A0A; }
        .btn-whatsapp:hover { background: #E8D5A3; }
        .btn-call { background: transparent; color: #C9A84C; border: 1px solid rgba(201,168,76,0.35); }
        .btn-call:hover { background: rgba(201,168,76,0.08); }
        .btn-email { background: transparent; color: #8A8680; border: 1px solid rgba(201,168,76,0.12); grid-column: span 2; }
        .btn-email:hover { color: #C9A84C; border-color: rgba(201,168,76,0.3); }
        .card-divider {
          height: 1px;
          background: rgba(201,168,76,0.1);
          margin: 0 40px 28px;
        }
        .divisions-row {
          padding: 0 40px 36px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .division-pill {
          border: 1px solid rgba(201,168,76,0.15);
          padding: 14px 16px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s;
        }
        .division-pill:hover { border-color: rgba(201,168,76,0.35); background: rgba(201,168,76,0.04); }
        .division-pill-label {
          font-size: 8px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #8A6E2F;
          margin-bottom: 4px;
        }
        .division-pill-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          font-weight: 400;
          color: #F0EDE8;
          line-height: 1.2;
        }
        .division-pill-tag {
          font-size: 8px;
          color: #555250;
          margin-top: 3px;
          letter-spacing: 0.05em;
        }
        .card-footer {
          padding: 20px 40px;
          border-top: 1px solid rgba(201,168,76,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-web {
          font-size: 9px;
          letter-spacing: 0.14em;
          color: #555250;
          text-decoration: none;
        }
        .footer-web:hover { color: #C9A84C; }
        .save-btn {
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C9A84C;
          border: 1px solid rgba(201,168,76,0.3);
          padding: 8px 16px;
          cursor: pointer;
          background: transparent;
          font-family: 'Montserrat', sans-serif;
          transition: all 0.25s;
        }
        .save-btn:hover { background: rgba(201,168,76,0.08); }
        .toast {
          position: fixed;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          background: #1E1E1E;
          border: 1px solid rgba(201,168,76,0.3);
          color: #C9A84C;
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 12px 24px;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
          white-space: nowrap;
          z-index: 999;
        }
        .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
      `}</style>

      <div className="card-root">
        <div className="card">
          <div className="card-top-bar"></div>

          <div className="card-header">
            <div className="logo-wrap">
              <img src="/assets/acg-logo.jpg" alt="Avalon Capital Group" style={{height:'160px', width:'auto', display:'block', mixBlendMode:'screen'}} />
            </div>
            <div className="person-name">Saud Olla</div>
            <div className="person-title">Co-Founder &amp; Chief Executive</div>
            <div className="person-group">Avalon Capital Group</div>
          </div>

          <div className="card-body">
            <div className="contact-row">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <div className="contact-label">Phone &amp; WhatsApp</div>
                <div className="contact-value">+27 65 883 9408</div>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">saud@avaloncapitalgroup.co.za</div>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
                </svg>
              </div>
              <div>
                <div className="contact-label">Website</div>
                <div className="contact-value">avaloncapitalgroup.co.za</div>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Durban, KwaZulu-Natal</div>
              </div>
            </div>
          </div>

          <div className="card-actions">
            <a className="action-btn btn-whatsapp" href="https://wa.me/27658839408">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a className="action-btn btn-call" href="tel:+27658839408">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call
            </a>
            <a className="action-btn btn-email" href="mailto:saud@avaloncapitalgroup.co.za">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Send Email
            </a>
          </div>

          <div className="card-divider"></div>

          <div className="divisions-row">
            <a className="division-pill" href="https://www.avaloncapitalgroup.co.za/vantara">
              <div className="division-pill-label">Division</div>
              <div className="division-pill-name">Vantara</div>
              <div className="division-pill-tag">Structured. Advised. Delivered.</div>
            </a>
            <a className="division-pill" href="https://www.avaloncapitalgroup.co.za/ada">
              <div className="division-pill-label">Division</div>
              <div className="division-pill-name">Avalon Digital Agency</div>
              <div className="division-pill-tag">AI-Powered Digital</div>
            </a>
          </div>

          <div className="card-footer">
            <a href="https://www.avaloncapitalgroup.co.za" className="footer-web">avaloncapitalgroup.co.za</a>
            <button className="save-btn" onClick={saveContact}>Save Contact</button>
          </div>
        </div>
      </div>

      <div className={`toast${toastVisible ? ' show' : ''}`}>Contact saved to your device</div>
    </>
  );
}
