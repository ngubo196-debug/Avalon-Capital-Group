import Link from 'next/link';
import type { Metadata } from 'next';
import AdaSectorCards from '../../components/AdaSectorCards';

export const metadata: Metadata = {
  title: 'Websites for Established Businesses in Durban | ADA',
  description: 'ADA builds websites for established Durban businesses. Sites that rank on Google, earn trust on arrival, and turn visitors into clients.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/web-design-durban' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function WebDesignDurban() {
  return (
    <div id="page-web-design-durban" className="page ada-section" role="main">
      <style suppressHydrationWarning>{`
        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; }
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
        .wds-cards-intro { margin-bottom: 3rem; }
        .wds-case-link { display: block; margin-top: 1.5rem; font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 600; color: var(--ada-accent); text-decoration: none; }
        .wds-case-link:hover { text-decoration: underline; }
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
          <div className="wds-label">ADA — Asset Development Automation</div>
          <h1 className="wds-h1">Every week your website doesn&apos;t rank, a Durban competitor gets the call instead.</h1>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="problem-heading">
        <div className="wds-inner">
          <div className="wds-label">The Problem</div>
          <h2 className="wds-h2" id="problem-heading">Durban&apos;s best businesses are losing work to weaker competitors.</h2>
          <p className="wds-body">Not because the competition is better. Because they are easier to find online.</p>
          <p className="wds-body">A procurement manager searches for a contractor in Durban. A developer looks for a logistics operator in KZN. A new client tries to verify a referral. In every case, the first business they find and trust gets the call. If that is not you, the work goes elsewhere.</p>
          <p className="wds-body">If your average client is worth R50,000 and you miss even two qualified enquiries a month, that is R100,000 leaving your business. Every month. To someone less capable than you.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="changes-heading">
        <div className="wds-inner">
          <div className="wds-label">What Changes</div>
          <h2 className="wds-h2" id="changes-heading">A site that earns trust before the first call.</h2>
          <p className="wds-body">Your completed work, visible. Your credentials, front and centre. Your service offering structured so that when someone in Durban searches for what you do, they find you and trust you before they pick up the phone.</p>
          <p className="wds-body">The result: enquiries from prospects who have already made the decision before they contact you, because the site handled the verification for them.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="sectors-heading">
        <div className="wds-inner">
          <div className="wds-cards-intro">
            <div className="wds-label">Who We Work With</div>
            <h2 className="wds-h2" id="sectors-heading">Established Durban businesses across six sectors.</h2>
            <p className="wds-body">We build for businesses that compete on quality, not price. Operators who have been in their market for years and whose online presence does not yet match what they have built.</p>
          </div>
          <AdaSectorCards />
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="proof-heading">
        <div className="wds-inner">
          <div className="wds-label">Our Work</div>
          <h2 className="wds-h2" id="proof-heading">We have done this. Here is the evidence.</h2>
          <p className="wds-body">Afripact Civils had the track record. Nothing online showed it. Within weeks of the rebuild, inspection requests were coming from people who had never heard of them before.</p>
          <Link href="/ada/afripact-civils" className="wds-case-link">Read the case study →</Link>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="for-heading">
        <div className="wds-inner">
          <div className="wds-label">Who This Is For</div>
          <h2 className="wds-h2" id="for-heading">Built for established businesses. Not for everyone.</h2>
          <p className="wds-body">Five or more years operating. Real clients. Real completed work. Looking to win larger or better-quality business. If that is not you, this is not the right fit.</p>
          <p className="wds-body">Foundation starts at R18,500. Scope confirmed on the call.</p>
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
          <Link href="/contact">Contact</Link>
        </div>
        <div className="wds-footer-reg">Avalon Capital Group (Pty) Ltd · Reg. 2025/671885/07</div>
      </footer>
    </div>
  );
}
