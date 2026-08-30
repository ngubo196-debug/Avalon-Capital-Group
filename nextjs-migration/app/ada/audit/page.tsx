import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADA Diagnostic | Find What Your Website Is Costing You',
  description: 'Most businesses are losing work online without knowing it. The ADA diagnostic shows you exactly where, and what to fix first.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/audit' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function AdaAudit() {
  return (
    <div id="page-ada-audit" className="page ada-section" role="main">
      <style suppressHydrationWarning>{`
        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
        .wds-label-bar { display: inline-block; width: 20px; height: 2px; background: var(--ada-accent); flex-shrink: 0; }
        .wds-h1 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 400; font-size: clamp(38px, 4.4vw, 62px); line-height: 1.12; color: var(--ada-ink); max-width: 820px; margin: 0; }
        .wds-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(28px, 3vw, 42px); line-height: 1.15; color: var(--ada-ink); margin: 0 0 24px; }
        .wds-body { font-family: DM Sans, sans-serif; font-size: 17px; font-weight: 300; line-height: 1.75; color: var(--ada-ink-soft); max-width: 720px; margin: 0; }
        .wds-body strong { font-weight: 600; color: var(--ada-ink); }
        .wds-body + .wds-body { margin-top: 20px; }
        .wds-hero { background: var(--ada-white); padding: calc(68px + 6rem) 3.5rem 6rem; }
        .wds-section { padding: 6rem 3.5rem; }
        .wds-section--white { background: var(--ada-white); }
        .wds-section--wash { background: var(--ada-wash); }
        .wds-inner { max-width: 1160px; margin: 0 auto; }
        .wds-cta-btn { display: inline-block; background: var(--ada-accent); color: #FFFFFF !important; border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--ada-accent); transition: background 0.2s ease, color 0.2s ease; margin-top: 12px; }
        .wds-cta-btn:hover { background: var(--ada-white); color: var(--ada-accent) !important; }
        .wds-cta-note { display: block; font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-ink-muted); margin-top: 16px; }
        .wds-dims-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem 3rem; margin-top: 56px; }
        .wds-dims-item { border-left: 3px solid var(--ada-accent); padding-left: 1.5rem; }
        .wds-dims-title { display: block; font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--ada-ink); margin-bottom: 8px; }
        .wds-dims-desc { font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7; color: var(--ada-ink-soft); margin: 0; }
        .wds-closing { background: var(--ada-accent); padding: 6rem 3.5rem; text-align: center; }
        .wds-closing-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(28px, 3vw, 42px); color: var(--ada-white); margin: 0 0 16px; }
        .wds-closing-body { font-family: DM Sans, sans-serif; font-size: 16px; color: rgba(255,255,255,0.75); max-width: 480px; margin: 0 auto 32px; }
        .wds-closing-btn { display: inline-block; background: var(--ada-white); color: var(--ada-accent); border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 1px solid var(--ada-white); transition: background 0.2s ease, color 0.2s ease; }
        .wds-closing-btn:hover { background: transparent; color: var(--ada-white); }
        .wds-footer { background: var(--ada-ink); padding: 3rem 3.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
        .wds-footer-logo { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 16px; font-weight: 600; color: var(--ada-white); text-decoration: none; }
        .wds-footer-logo span { color: var(--ada-accent); }
        .wds-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .wds-footer-links a { font-family: DM Sans, sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s ease; }
        .wds-footer-links a:hover { color: var(--ada-white); }
        .wds-footer-reg { font-family: DM Sans, sans-serif; font-size: 12px; color: rgba(255,255,255,0.3); width: 100%; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4px; }
        @media (max-width: 768px) {
          .wds-hero { padding: calc(68px + 4rem) 1.5rem 4rem; }
          .wds-section, .wds-closing { padding: 4rem 1.5rem; }
          .wds-dims-grid { grid-template-columns: 1fr; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada" className="wds-back">← Back to ADA</Link>
          <div className="wds-label"><span className="wds-label-bar" />ADA Diagnostic</div>
          <h1 className="wds-h1">You are losing work to businesses that are worse than you.</h1>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="cost-heading">
        <div className="wds-inner">
          <p className="wds-body">They are easier to find. They look more established. They answer faster. That is the whole difference.</p>
          <p className="wds-body">If your website is sending three qualified enquiries a month to a competitor instead of you, and your average job is worth R80,000, that is R240,000 a quarter leaving the business. Most owners never see the number because the enquiry never arrives.</p>
          <p className="wds-body">The diagnostic finds where it is going. Where you rank, what a prospect sees before they call, and which part of the gap is costing you the most.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="tool-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />The Diagnostic</div>
          <h2 className="wds-h2" id="tool-heading">Find the gap. Then fix it.</h2>
          <p className="wds-body">Thirteen questions. Six dimensions. A scored report showing exactly where your online presence is losing you business and what to address first.</p>
          <Link href="/audit" className="wds-cta-btn">Run the diagnostic →</Link>
          <span className="wds-cta-note">Free. 8 minutes. Result is immediate.</span>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="dims-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />What We Measure</div>
          <h2 className="wds-h2" id="dims-heading">Six dimensions. One clear picture.</h2>

          <div className="wds-dims-grid">
            <div className="wds-dims-item">
              <span className="wds-dims-title">Search visibility</span>
              <p className="wds-dims-desc">Whether the right people can find you on Google before they find a competitor.</p>
            </div>
            <div className="wds-dims-item">
              <span className="wds-dims-title">First impression</span>
              <p className="wds-dims-desc">What a prospect sees in the first three seconds and whether it earns trust or loses it.</p>
            </div>
            <div className="wds-dims-item">
              <span className="wds-dims-title">Proof and credibility</span>
              <p className="wds-dims-desc">Whether your completed work, credentials, and client evidence are visible where they matter.</p>
            </div>
            <div className="wds-dims-item">
              <span className="wds-dims-title">Service clarity</span>
              <p className="wds-dims-desc">Whether a visitor immediately understands what you do, who you do it for, and why you.</p>
            </div>
            <div className="wds-dims-item">
              <span className="wds-dims-title">Conversion path</span>
              <p className="wds-dims-desc">Whether there is a clear, low-friction way for a ready prospect to contact you.</p>
            </div>
            <div className="wds-dims-item">
              <span className="wds-dims-title">Mobile experience</span>
              <p className="wds-dims-desc">Whether the site works as well on a phone as it does on desktop, since most searches happen on mobile.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-closing" aria-labelledby="closing-heading">
        <h2 className="wds-closing-h2" id="closing-heading">Ready when you are.</h2>
        <p className="wds-closing-body">One conversation is enough to know if this is the right fit.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="wds-closing-btn">Start a conversation →</a>
      </section>

      <footer className="wds-footer">
        <Link href="/ada" className="wds-footer-logo">ADA<span>.</span></Link>
        <div className="wds-footer-links">
          <Link href="/ada">Our work</Link>
          <Link href="/ada#pricing">Pricing</Link>
          <Link href="/ada/afripact-civils">Case study</Link>
          <Link href="/ada/contact">Contact</Link>
        </div>
        <div className="wds-footer-reg">Avalon Capital Group (Pty) Ltd · Reg. 2025/671885/07</div>
      </footer>
    </div>
  );
}
