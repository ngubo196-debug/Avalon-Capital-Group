import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Automation for Construction Contractors in KZN | ADA',
  description: 'KZN contractors lose contracts every month to admin problems, not bad work. ADA finds the bottleneck and builds the system that removes it.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/business-automation' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function BusinessAutomation() {
  return (
    <div id="page-business-automation" className="page ada-section" role="main">
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
        .wds-case-link { display: block; margin-top: 1.5rem; font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 600; color: var(--ada-accent); text-decoration: none; }
        .wds-case-link:hover { text-decoration: underline; }

        .wds-outcome-block { border-left: 3px solid var(--ada-accent); padding-left: 1.5rem; margin-bottom: 2rem; }
        .wds-outcome-block:last-of-type { margin-bottom: 0; }
        .wds-outcome-title { display: block; font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--ada-ink); margin-bottom: 0.5rem; }
        .wds-outcome-body { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; line-height: 1.7; color: var(--ada-ink-soft); margin: 0; }
        .wds-body--spaced { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; line-height: 1.7; color: var(--ada-ink-soft); margin-top: 2rem; }

        .wds-closing { background: var(--ada-accent); padding: 6rem 3.5rem; text-align: center; }
        .wds-closing-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(28px, 3vw, 42px); color: var(--ada-white); margin: 0 0 16px; }
        .wds-closing-body { font-family: DM Sans, sans-serif; font-size: 16px; color: rgba(255,255,255,0.75); max-width: 480px; margin: 0 auto 32px; }
        .wds-closing-btn { display: inline-block; background: var(--ada-white); color: var(--ada-accent); border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 1px solid var(--ada-white); transition: background 0.2s ease, color 0.2s ease; }
        .wds-closing-btn:hover { background: transparent; color: var(--ada-white); }
        .wds-related { padding: 3rem 3.5rem 0; }
        .wds-related-divider { border-top: 1px solid var(--ada-line); margin-bottom: 2rem; }
        .wds-related-links { display: flex; gap: 2rem; flex-wrap: wrap; padding-bottom: 3rem; }
        .wds-related-links a { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; }
        .wds-related-links a:hover { text-decoration: underline; }
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
          .wds-related { padding: 2rem 1.5rem 0; }
          .wds-related-links { flex-direction: column; gap: 0.75rem; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada" className="wds-back">← Back to ADA</Link>
          <div className="wds-label"><span className="wds-label-bar" />ADA — Asset Development Automation</div>
          <h1 className="wds-h1">KZN contractors lose R80,000 contracts every month to admin problems they have not fixed yet.</h1>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="problem-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />The Problem</div>
          <h2 className="wds-h2" id="problem-heading">The work is there. The back-office is what&apos;s breaking down.</h2>
          <p className="wds-body">A quote takes three days to send because someone has to type it from scratch. A follow-up call does not happen because no one tracked it. A proposal goes out with the wrong figures because it was copied from last week&apos;s job. The client goes with someone else.</p>
          <p className="wds-body">It is not the quality of your work that lost that contract. It is the process around it.</p>
          <p className="wds-body">KZN contractors running R3m to R20m in annual turnover are losing work every month not because they cannot do the job, but because their operation looks less professional than a competitor who has the same capability and a tighter back-office.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="howitworks-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />How It Works</div>
          <h2 className="wds-h2" id="howitworks-heading">We find what is slowing you down. Then we build the system that fixes it.</h2>
          <p className="wds-body">Not a generic software package. Not a template. A diagnostic conversation that identifies the specific bottleneck costing your business the most, followed by a custom-built system that removes it.</p>
          <p className="wds-body">Every contractor has a different problem. Slow quotes. Missed follow-ups. Manual invoicing. Disorganised job tracking. We find yours first, then build around it.</p>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="built-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />What Gets Built</div>
          <h2 className="wds-h2" id="built-heading">The system depends on the problem. Here is what we have solved before.</h2>

          <div className="wds-outcome-block">
            <span className="wds-outcome-title">Quoting and proposal systems.</span>
            <p className="wds-outcome-body">Quotes generated in minutes from a template. Professional, branded, accurate. Sent before the competitor&apos;s quote arrives.</p>
          </div>
          <div className="wds-outcome-block">
            <span className="wds-outcome-title">Follow-up and pipeline tracking.</span>
            <p className="wds-outcome-body">Every lead, every outstanding quote, every job in progress tracked automatically. Reminders that fire without anyone having to remember.</p>
          </div>
          <div className="wds-outcome-block">
            <span className="wds-outcome-title">Invoice and document generation.</span>
            <p className="wds-outcome-body">Invoices, payment demands, and project documents generated at the right stage and sent on time without manual intervention.</p>
          </div>

          <p className="wds-body--spaced">If your bottleneck is something else, we will find it and build around that instead.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="proof-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />Our Work</div>
          <h2 className="wds-h2" id="proof-heading">We build our own systems before we sell them.</h2>
          <p className="wds-body">The ADA audit tool diagnoses a business&apos;s online presence and estimates the revenue impact of the gap. Built on the same stack used for client systems. First real result: a prospect scored 1.8 out of 10. Estimated leakage of R20,000 to R37,000. They replied within the hour.</p>
          <Link href="/ada/audit" className="wds-case-link">Try the diagnostic →</Link>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="for-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />Who This Is For</div>
          <h2 className="wds-h2" id="for-heading">Built for established KZN contractors. Not for everyone.</h2>
          <p className="wds-body">Five or more years operating. Real turnover. Quoting regularly but losing track of leads, follow-ups, or admin. Ready to invest in a system that compounds over time.</p>
          <p className="wds-body">Scope and pricing confirmed on the call.</p>
        </div>
      </section>

      <section className="wds-closing" aria-labelledby="closing-heading">
        <h2 className="wds-closing-h2" id="closing-heading">Tell me what is slowing you down.</h2>
        <p className="wds-closing-body">One conversation is enough to find the bottleneck.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="wds-closing-btn">Start a conversation →</a>
      </section>

      <section className="wds-related">
        <div className="wds-inner">
          <div className="wds-related-divider"></div>
          <div className="wds-label"><span className="wds-label-bar" />Explore More</div>
          <div className="wds-related-links">
            <Link href="/ada/ai-assistant-for-business">AI Assistant for Business</Link>
            <Link href="/ada/web-design-construction-kzn">Web Design Construction KZN</Link>
          </div>
        </div>
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
