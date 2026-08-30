import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADA Investment | Fixed Price. No Surprises.',
  description: 'Foundation from R18,500. Growth from R34,000. Fixed scope, fixed price. You know the cost before anything starts.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/offers' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function AdaOffers() {
  return (
    <div id="page-ada-offers" className="page ada-section" role="main">
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
        .wds-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 56px; }
        .wds-pricing-card { border: 1px solid var(--ada-line); border-radius: 16px; padding: 2.5rem; background: var(--ada-white); }
        .wds-pricing-card--featured { background: var(--ada-ink); border-color: var(--ada-ink); }
        .wds-pricing-tier { display: block; font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 16px; }
        .wds-pricing-card--featured .wds-pricing-tier { color: #FFFFFF; }
        .wds-pricing-price { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 36px; font-weight: 500; color: var(--ada-ink); margin: 0 0 4px; }
        .wds-pricing-card--featured .wds-pricing-price { color: #FFFFFF; }
        .wds-pricing-sub { display: block; font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-ink-muted); margin-bottom: 20px; }
        .wds-pricing-card--featured .wds-pricing-sub { color: rgba(255,255,255,0.6); }
        .wds-pricing-desc { font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7; color: var(--ada-ink-soft); margin: 0; }
        .wds-pricing-card--featured .wds-pricing-desc { color: rgba(255,255,255,0.6); }
        .wds-pricing-note { display: block; text-align: center; font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-ink-muted); margin-top: 40px; }
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
          .wds-pricing-grid { grid-template-columns: 1fr; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada" className="wds-back">← Back to ADA</Link>
          <div className="wds-label"><span className="wds-label-bar" />Investment</div>
          <h1 className="wds-h1">Fixed price. No surprises.</h1>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="intro-heading">
        <div className="wds-inner">
          <p className="wds-body">Every ADA engagement is scoped before it starts. You know exactly what you are getting, what it costs, and when it is done. No retainers unless you want one. No scope creep. No invoice at the end that does not match the one at the start.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="pricing-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />The Tiers</div>
          <h2 className="wds-h2" id="pricing-heading">Three options. One standard.</h2>

          <div className="wds-pricing-grid">
            <div className="wds-pricing-card">
              <span className="wds-pricing-tier">Foundation</span>
              <p className="wds-pricing-price">R18,500</p>
              <span className="wds-pricing-sub">Once-off</span>
              <p className="wds-pricing-desc">For established businesses that need a site that matches the quality of their work. Ranks for your name, your business, and your core services.</p>
            </div>

            <div className="wds-pricing-card wds-pricing-card--featured">
              <span className="wds-pricing-tier">Growth</span>
              <p className="wds-pricing-price">R34,000</p>
              <span className="wds-pricing-sub">Once-off, or R12,500/month (3-month min)</span>
              <p className="wds-pricing-desc">Website plus targeted SEO architecture. Built to rank for what your clients are actually searching, not just who you are.</p>
            </div>

            <div className="wds-pricing-card">
              <span className="wds-pricing-tier">Authority</span>
              <p className="wds-pricing-price">Custom</p>
              <span className="wds-pricing-sub">By enquiry</span>
              <p className="wds-pricing-desc">For businesses ready to lead their category. Scope built around your market, your competitors, and where you want to own search.</p>
            </div>
          </div>

          <span className="wds-pricing-note">Payment can be split. Terms confirmed on the call before anything starts.</span>
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
