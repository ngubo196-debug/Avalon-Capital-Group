import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What a Website That Actually Generates Leads Looks Like | ADA',
  description: 'Most websites exist. Few convert. Here are the six elements that separate a lead-generating website from a digital brochure, with real examples.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/insights/revenue-website' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function RevenueWebsite() {
  return (
    <div id="page-blog-revenue-website" className="page ada-section" role="main">
      <style suppressHydrationWarning>{`
        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; }
        .wds-label-bar { display: inline-block; width: 20px; height: 2px; background: var(--ada-accent); vertical-align: middle; margin-right: 10px; }
        .wds-h1 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 400; font-size: clamp(38px, 4.4vw, 62px); line-height: 1.12; color: var(--ada-ink); margin: 0; }
        .wds-byline { font-family: DM Sans, sans-serif; font-size: 13px; letter-spacing: 0.05em; color: var(--ada-ink-muted); margin: 20px 0 0; }
        .wds-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(24px, 2.5vw, 36px); line-height: 1.2; color: var(--ada-ink); margin: 0 0 20px; }
        .wds-body { font-family: DM Sans, sans-serif; font-size: 17px; font-weight: 300; line-height: 1.85; color: var(--ada-ink-soft); margin: 0; }
        .wds-body strong { font-weight: 600; color: var(--ada-ink); }
        .wds-body a { color: var(--ada-accent); font-weight: 600; }
        .wds-body + .wds-body { margin-top: 20px; }
        .wds-hero { background: var(--ada-white); padding: calc(68px + 5rem) 3.5rem 5rem; }
        .wds-section { padding: 5rem 3.5rem; background: var(--ada-white); }
        .wds-inner { max-width: 760px; margin: 0 auto; }
        .wds-quote { border-left: 3px solid var(--ada-accent); padding-left: 1.5rem; margin: 2.5rem 0; }
        .wds-quote p { font-family: Bodoni Moda, Cormorant Garamond, serif; font-style: italic; font-size: clamp(18px, 2.2vw, 24px); font-weight: 400; color: var(--ada-ink); line-height: 1.5; margin: 0; }
        .wds-card-grid { display: flex; flex-direction: column; gap: 1px; background: var(--ada-line); margin-top: 2.5rem; border: 1px solid var(--ada-line); border-radius: 12px; overflow: hidden; }
        .wds-card { background: var(--ada-white); padding: 2rem; }
        .wds-card-title { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 20px; font-weight: 500; color: var(--ada-ink); margin-bottom: 0.75rem; }
        .wds-card-body { font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.75; color: var(--ada-ink-soft); }
        .wds-case-link { display: block; margin-top: 1.5rem; font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 600; color: var(--ada-accent); text-decoration: none; letter-spacing: 0.04em; }
        .wds-case-link:hover { text-decoration: underline; }
        .wds-cta-btn { display: inline-block; background: var(--ada-accent); color: #FFFFFF !important; border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--ada-accent); transition: background 0.2s ease, color 0.2s ease; margin-top: 8px; }
        .wds-cta-btn:hover { background: var(--ada-white); color: var(--ada-accent) !important; }
        .wds-footer { background: var(--ada-ink); padding: 3rem 3.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
        .wds-footer-logo { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 16px; font-weight: 600; color: #FFFFFF !important; text-decoration: none; }
        .wds-footer-logo span { color: var(--ada-accent); }
        .wds-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .wds-footer-links a { font-family: DM Sans, sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s ease; }
        .wds-footer-links a:hover { color: var(--ada-white); }
        .wds-footer-reg { font-family: DM Sans, sans-serif; font-size: 12px; color: rgba(255,255,255,0.3); width: 100%; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4px; }
        @media (max-width: 768px) {
          .wds-hero { padding: calc(68px + 3.5rem) 1.5rem 3.5rem; }
          .wds-section { padding: 3.5rem 1.5rem; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada" className="wds-back">← Back to ADA</Link>
          <div className="wds-label"><span className="wds-label-bar" />The Solution</div>
          <h1 className="wds-h1">What a revenue-driven website actually looks like</h1>
          <p className="wds-byline">By Luyanda Ngubo · ADA · Durban, KZN</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="rw-not">
        <div className="wds-inner">
          <h2 className="wds-h2" id="rw-not">First: what it isn&apos;t</h2>
          <p className="wds-body">A revenue-driven website isn&apos;t necessarily the most beautiful website. It isn&apos;t the one with the most animations, the most pages, or the biggest budget. Some of the highest-converting websites in the world are remarkably simple.</p>
          <p className="wds-body">What makes a website generate revenue isn&apos;t how it looks. It&apos;s how it thinks. Every element: every headline, every section, every button: is placed with a specific purpose, to move a visitor one step closer to becoming a client.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="rw-headline">
        <div className="wds-inner">
          <h2 className="wds-h2" id="rw-headline">Element 1 - A headline that does real work</h2>
          <p className="wds-body">The first thing a visitor reads determines whether they stay or leave. Most business website headlines describe the company. Revenue-driven headlines address the visitor. There&apos;s a significant difference between &apos;Welcome to Acme Construction&apos; and &apos;KZN&apos;s civil construction specialists, on time, on budget, no surprises.&apos; One is about you. One is about them. The second one makes people stay.</p>
          <div className="wds-quote">
            <p>You have approximately five seconds to answer the visitor&apos;s first question: am I in the right place? Your headline either answers it or loses them.</p>
          </div>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="rw-offer">
        <div className="wds-inner">
          <h2 className="wds-h2" id="rw-offer">Element 2 - Offer clarity above the fold</h2>
          <p className="wds-body">Above the fold means everything visible before the visitor scrolls. This is the most valuable real estate on your website and most businesses waste it. By the time a visitor reaches the bottom of your first screen, they should know exactly what you do, who you do it for, and what they should do next. If any of those three things are unclear, you&apos;re already losing people.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="rw-path">
        <div className="wds-inner">
          <h2 className="wds-h2" id="rw-path">Element 3 - A logical conversion path</h2>
          <p className="wds-body">A conversion path is the journey from arriving on your website to taking an action: calling, emailing, booking, buying. Most websites don&apos;t have one. They have pages. Pages are not a path.</p>
          <p className="wds-body">A revenue-driven website is structured like a conversation. It starts by acknowledging the visitor&apos;s situation, moves into the problem they&apos;re facing, introduces your solution, proves you can deliver it, and then makes the next step obvious. Every section has a job. Nothing is there just to fill space.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="rw-trust">
        <div className="wds-inner">
          <h2 className="wds-h2" id="rw-trust">Element 4 - Trust architecture</h2>
          <p className="wds-body">Trust doesn&apos;t happen by accident on a website. It has to be deliberately built into the structure. The specific elements that build trust vary by industry: in construction it&apos;s project photos and client references, in professional services it&apos;s credentials and case studies, in e-commerce it&apos;s reviews and return policies. The principle is the same. Objections exist in every visitor&apos;s mind before they reach out. A revenue-driven website identifies those objections and answers them before they&apos;re raised.</p>
          <div className="wds-card-grid">
            <div className="wds-card">
              <div className="wds-card-title">Case studies</div>
              <div className="wds-card-body">Real projects, real outcomes. Not vague claims: specific proof of what you&apos;ve delivered and what it produced.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">Testimonials</div>
              <div className="wds-card-body">Other people vouching for you carries more weight than anything you say about yourself. One specific, honest testimonial outperforms ten generic ones.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">Process transparency</div>
              <div className="wds-card-body">Showing how you work reduces the fear of the unknown. Clients who understand your process before engaging are easier to work with and more likely to convert.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">Credentials and signals</div>
              <div className="wds-card-body">Years in business, number of clients served, industry affiliations, recognisable client names: these aren&apos;t vanity metrics. They&apos;re trust signals.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="rw-cta">
        <div className="wds-inner">
          <h2 className="wds-h2" id="rw-cta">Element 5 - CTAs that create action</h2>
          <p className="wds-body">A call to action is not just a button. It&apos;s the moment where interest becomes intent. &apos;Contact us&apos; is not a call to action. It&apos;s a direction. &apos;Book a free 30-minute strategy call&apos; is a call to action. It tells the visitor exactly what will happen, how long it will take, and removes the risk. The specificity is the difference.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="rw-mobile">
        <div className="wds-inner">
          <h2 className="wds-h2" id="rw-mobile">Element 6 - Mobile-first conversion</h2>
          <p className="wds-body">In South Africa, the majority of web traffic is mobile. If your website isn&apos;t built for mobile conversion: fast load times, easy tap targets, click-to-call buttons, WhatsApp integration: you&apos;re optimising for a minority of your visitors. A revenue-driven website is built for the device your clients actually use.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="rw-practice">
        <div className="wds-inner">
          <h2 className="wds-h2" id="rw-practice">What this looks like in practice</h2>
          <p className="wds-body"><Link href="/ada/afripact-civils">Afripact Civils</Link> needed a website that answered one question before anything else: is this a real business? Every element: the design, the copy, the case studies, the contact information: was structured to answer that question immediately and credibly. The result was a website that converted sceptical prospects into confident ones before a single conversation happened.</p>
          <p className="wds-body"><Link href="/ada/canopy-courier">Canopy Courier</Link> needed a website that spoke to two completely different buyers simultaneously: retail walk-ins and fleet managers: without confusing either. The solution was a dual-path structure where each visitor type was routed to a completely different offer and conversion path within seconds of landing.</p>
          <p className="wds-body">Different problems. Different solutions. Same principle: every element serves the revenue outcome.</p>
          <Link href="/ada/audit" className="wds-case-link">Run the ADA diagnostic →</Link>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="closing-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />Ready To Act On This?</div>
          <h2 className="wds-h2" id="closing-heading">Start a conversation.</h2>
          <p className="wds-body">One conversation is enough to know if this is the right fit.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="wds-cta-btn">Start a conversation →</a>
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
