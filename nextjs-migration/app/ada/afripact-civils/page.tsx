import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Afripact Civils — From Invisible to Credible | ADA',
  description: 'Afripact was losing trust before the first call. The site fixed that. Within weeks, inspection requests came from people who had never heard of them.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/afripact-civils' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function AfripactCivils() {
  return (
    <div id="page-afripact-civils" className="page ada-section" role="main">
      <style suppressHydrationWarning>{`
        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; }
        .wds-label-bar { display: inline-block; width: 20px; height: 2px; background: var(--ada-accent); vertical-align: middle; margin-right: 10px; }
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

        .wds-badge { display: flex; width: fit-content; align-items: center; background: #DCFCE7; border: 1px solid #16A34A; color: #14532D; border-radius: 100px; padding: 5px 16px; font-family: DM Sans, sans-serif; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1.5rem; }
        .wds-hero-intro { max-width: 600px; margin-top: 24px; }
        .wds-stats { display: flex; flex-wrap: wrap; gap: 2rem; padding-top: 2rem; border-top: 1px solid var(--ada-line); margin-top: 2rem; }
        .wds-stat-value { display: block; font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 22px; font-weight: 500; color: var(--ada-ink); margin-bottom: 4px; }
        .wds-stat-label { display: block; font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ada-ink-muted); }

        .wds-quote { background: var(--ada-wash); border-left: 4px solid var(--ada-accent); padding: 1.5rem 2rem; border-radius: 0 8px 8px 0; margin: 1.5rem 0; max-width: 720px; }
        .wds-quote-text { font-family: Bodoni Moda, Cormorant Garamond, serif; font-style: italic; font-size: clamp(18px, 2.5vw, 24px); font-weight: 400; color: var(--ada-ink); line-height: 1.5; margin: 0; }
        .wds-quote-cite { display: block; margin-top: 14px; font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-ink-muted); font-style: normal; }

        .wds-outcome-block { border-left: 3px solid var(--ada-accent); padding-left: 1.5rem; margin-bottom: 2rem; }
        .wds-outcome-block:last-of-type { margin-bottom: 0; }
        .wds-outcome-title { display: block; font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--ada-ink); margin-bottom: 0.5rem; }
        .wds-outcome-body { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; line-height: 1.7; color: var(--ada-ink-soft); margin: 0; }

        .wds-callout { background: var(--ada-accent); border-radius: 12px; padding: 1.5rem 2rem; margin-top: 2rem; }
        .wds-callout-text { font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 500; color: #FFFFFF; margin: 0; }

        .wds-external-link { display: block; margin-top: 1.5rem; font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 600; color: var(--ada-accent); text-decoration: none; }
        .wds-external-link:hover { text-decoration: underline; }

        .wds-cta-btn { display: inline-block; background: var(--ada-accent); color: #FFFFFF !important; border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--ada-accent); transition: background 0.2s ease, color 0.2s ease; }
        .wds-cta-btn:hover { background: var(--ada-white); color: var(--ada-accent) !important; }

        .wds-closing { background: var(--ada-accent); padding: 6rem 3.5rem; text-align: center; }
        .wds-closing-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(28px, 3vw, 42px); color: var(--ada-white); margin: 0 0 16px; }
        .wds-closing-body { font-family: DM Sans, sans-serif; font-size: 16px; color: rgba(255,255,255,0.75); max-width: 480px; margin: 0 auto 32px; }
        .wds-closing-btn { display: inline-block; background: var(--ada-white); color: var(--ada-accent); border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 1px solid var(--ada-white); transition: background 0.2s ease, color 0.2s ease; }
        .wds-closing-btn:hover { background: transparent; color: var(--ada-white); }

        .wds-footer { background: var(--ada-ink); padding: 3rem 3.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
        .wds-footer-logo { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 16px; font-weight: 600; color: #FFFFFF !important; text-decoration: none; }
        .wds-footer-logo span { color: var(--ada-accent); }
        .wds-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .wds-footer-links a { font-family: DM Sans, sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s ease; }
        .wds-footer-links a:hover { color: var(--ada-white); }
        .wds-footer-reg { font-family: DM Sans, sans-serif; font-size: 12px; color: rgba(255,255,255,0.3); width: 100%; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4px; }

        @media (max-width: 768px) {
          .wds-hero { padding: calc(68px + 4rem) 1.5rem 4rem; }
          .wds-section, .wds-closing { padding: 4rem 1.5rem; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada" className="wds-back">← Back to ADA</Link>
          <div className="wds-badge">Live client — delivered engagement</div>
          <div className="wds-label"><span className="wds-label-bar" />Afripact Civils — Civil Construction, KZN</div>
          <h1 className="wds-h1">Building credibility before the conversation starts.</h1>
          <p className="wds-body wds-hero-intro">Afripact Civils had completed real projects for real clients across KwaZulu-Natal. Nothing online reflected that. New prospects had no way to verify them before the first call. The site needed to close that gap.</p>

          <div className="wds-stats">
            <div>
              <span className="wds-stat-value">Civil construction</span>
              <span className="wds-stat-label">Industry</span>
            </div>
            <div>
              <span className="wds-stat-value">Trust + visibility</span>
              <span className="wds-stat-label">Phase one objective</span>
            </div>
            <div>
              <span className="wds-stat-value">Phase two active</span>
              <span className="wds-stat-label">Pipeline underway</span>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="situation-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />The Situation</div>
          <h2 className="wds-h2" id="situation-heading">Real capability. No proof online.</h2>
          <p className="wds-body">Afripact had the track record, the credentials, and the completed work. What they did not have was a digital presence that showed any of it. A new prospect searching online would find nothing that matched the quality of the business behind the name.</p>
          <p className="wds-body">That gap costs work. Not because the business is weak, but because trust is built or lost before the first conversation.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="brief-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />The Brief</div>
          <h2 className="wds-h2" id="brief-heading">The clearest brief we have ever received.</h2>
          <p className="wds-body">The client said it directly:</p>
          <div className="wds-quote">
            <p className="wds-quote-text">The website shows people I have never done business with that Afripact is not a scam but an actual business.</p>
            <span className="wds-quote-cite">— Client, Afripact Civils</span>
          </div>
          <p className="wds-body">That one sentence defined the entire engagement. The site was not a marketing tool. It was trust infrastructure. Built to answer the question a new prospect asks before they pick up the phone.</p>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="phase-one-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />Phase One</div>
          <h2 className="wds-h2" id="phase-one-heading">Every element in service of one objective.</h2>

          <div className="wds-outcome-block">
            <span className="wds-outcome-title">Professional credibility.</span>
            <p className="wds-outcome-body">A site that looks and feels like the business Afripact actually is. Not a template. Not a placeholder. A presence that earns trust on arrival.</p>
          </div>
          <div className="wds-outcome-block">
            <span className="wds-outcome-title">Social proof architecture.</span>
            <p className="wds-outcome-body">Completed projects visible. Credentials front and centre. Evidence that the business has done this before and done it well.</p>
          </div>
          <div className="wds-outcome-block">
            <span className="wds-outcome-title">Clear service communication.</span>
            <p className="wds-outcome-body">What Afripact does, who they do it for, and where they operate, structured so the right prospect self-identifies immediately.</p>
          </div>

          <div className="wds-callout">
            <p className="wds-callout-text">Within weeks of launch, inspection requests were coming from people who had never heard of Afripact before.</p>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="phase-two-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />Phase Two</div>
          <h2 className="wds-h2" id="phase-two-heading">Credibility solved. Pipeline next.</h2>
          <p className="wds-body">The foundation is live and ranking. Phase two is already underway.</p>
          <p className="wds-body">Google Business Profile verified and active. Project photography going up. Paid search launching within weeks, targeting KZN homeowners and commercial clients searching for a contractor they can trust.</p>
          <p className="wds-body">The site gave Afripact something to point to. Phase two puts it in front of the right people at the right moment.</p>
          <a href="https://afripact.net" target="_blank" rel="noopener noreferrer" className="wds-external-link">Visit Afripact Civils →</a>
        </div>
      </section>

      <section className="wds-closing" aria-labelledby="closing-heading">
        <h2 className="wds-closing-h2" id="closing-heading">This is what ADA builds for every client.</h2>
        <p className="wds-closing-body">Credibility is the entry point. Revenue is the destination. The work starts with making your business look like what it actually is.</p>
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
