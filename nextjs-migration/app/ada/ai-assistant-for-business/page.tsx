import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Assistant for Small Businesses in KZN | ADA',
  description: 'The admin is not going to stop. ADA builds you an AI assistant that handles it. 90 minutes, in person, R1,950.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/ai-assistant-for-business' },
};

const WHATSAPP_BOOKING_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20book%20the%20AI%20assistant%20session.";

const faqItems = [
  {
    question: 'Do I need to know anything about AI before the session?',
    answer: 'No. The session is built for people who have never used AI tools before. You only need to bring your laptop and your actual work.',
  },
  {
    question: 'What if I already use ChatGPT?',
    answer: 'Good. The session builds on what you already know and fills the gaps. Most people using ChatGPT are using 10% of what it can do for their business.',
  },
  {
    question: 'Is this a once-off or ongoing?',
    answer: 'The session is once-off. The Jarvis Maintenance retainer is optional and month-to-month.',
  },
  {
    question: 'Where does the session happen?',
    answer: 'In person, at your office or an agreed location in Pietermaritzburg or Durban. Remote sessions available on request.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Assistant Session',
  description: 'A 90-minute in-person AI assistant session for Pietermaritzburg, Durban and KZN small businesses.',
  provider: {
    '@type': 'Organization',
    name: 'Asset Development Automation',
    url: 'https://www.avaloncapitalgroup.co.za/ada',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Avalon Capital Group',
      url: 'https://www.avaloncapitalgroup.co.za',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Pietermaritzburg' },
    { '@type': 'City', name: 'Durban' },
    { '@type': 'State', name: 'KwaZulu-Natal' },
  ],
  serviceType: 'AI Training Session',
  offers: {
    '@type': 'Offer',
    price: '1950',
    priceCurrency: 'ZAR',
  },
};

export default function AiAssistantForBusiness() {
  return (
    <div id="page-ai-assistant-for-business" className="page ada-section" role="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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

        .wds-cta-btn { display: inline-block; background: var(--ada-accent); color: #FFFFFF !important; border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--ada-accent); transition: background 0.2s ease, color 0.2s ease; }
        .wds-cta-btn:hover { background: var(--ada-white); color: var(--ada-accent) !important; }
        .wds-cta-row { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; margin-top: 8px; }
        .wds-ghost-link { font-family: DM Sans, sans-serif; font-size: 14px; color: var(--ada-ink-muted); text-decoration: none; border-bottom: 1px solid var(--ada-line); padding-bottom: 2px; }
        .wds-ghost-link:hover { color: var(--ada-ink); border-color: var(--ada-ink-muted); }
        .wds-footnote { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-ink-muted); margin-top: 1rem; }
        .wds-body--intro { margin-bottom: 2rem; }
        .wds-body--spaced { margin-top: 2rem; }
        .wds-cta-btn--spaced { margin-top: 2rem; }

        .wds-phase-block { border-left: 3px solid var(--ada-accent); padding-left: 1.5rem; margin-bottom: 1.75rem; }
        .wds-phase-block:last-of-type { margin-bottom: 0; }
        .wds-phase-title { display: block; font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--ada-ink); margin-bottom: 0.5rem; }
        .wds-phase-desc { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; line-height: 1.7; color: var(--ada-ink-soft); margin: 0; }

        .wds-pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem; }
        .wds-pricing-card { border: 1px solid var(--ada-line); border-radius: 16px; padding: 2rem; background: var(--ada-white); }
        .wds-pricing-card--featured { background: var(--ada-ink); border-color: var(--ada-ink); }
        .wds-pricing-label { display: block; font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 16px; }
        .wds-pricing-card--featured .wds-pricing-label { color: #FFFFFF; }
        .wds-pricing-price { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 36px; font-weight: 500; color: var(--ada-ink); margin: 0 0 4px; }
        .wds-pricing-card--featured .wds-pricing-price { color: #FFFFFF; }
        .wds-pricing-sub { display: block; font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-ink-muted); }
        .wds-pricing-card--featured .wds-pricing-sub { color: rgba(255,255,255,0.6); }

        .wds-includes { margin-top: 2.5rem; }
        .wds-include-item { border-left: 3px solid var(--ada-accent); padding-left: 1.5rem; margin-bottom: 1rem; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; color: var(--ada-ink-soft); }
        .wds-include-item:last-child { margin-bottom: 0; }

        .wds-retainer { background: var(--ada-wash); border-radius: 12px; padding: 1.5rem 2rem; margin-top: 2rem; }
        .wds-retainer-label { display: block; font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 8px; }
        .wds-retainer-price { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 24px; font-weight: 500; color: var(--ada-ink); margin: 0 0 12px; }
        .wds-retainer-body { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; line-height: 1.7; color: var(--ada-ink-soft); margin: 0; }

        .wds-faq-item { border-top: 1px solid var(--ada-line); }
        .wds-faq-item:last-child { border-bottom: 1px solid var(--ada-line); }
        .wds-faq-summary { font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 500; color: var(--ada-ink); padding: 1.25rem 0; cursor: pointer; list-style: none; }
        .wds-faq-summary::-webkit-details-marker { display: none; }
        .wds-faq-answer { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; color: var(--ada-ink-soft); padding-bottom: 1.25rem; line-height: 1.7; margin: 0; }

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
          .wds-pricing-grid { grid-template-columns: 1fr; }
          .wds-related { padding: 2rem 1.5rem 0; }
          .wds-related-links { flex-direction: column; gap: 0.75rem; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada" className="wds-back">← Back to ADA</Link>
          <div className="wds-label"><span className="wds-label-bar" />ADA: Asset Development Automation</div>
          <h1 className="wds-h1">You are the bottleneck in your own business. An AI assistant fixes that in 90 minutes.</h1>
          <div className="wds-cta-row">
            <a href={WHATSAPP_BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="wds-cta-btn">Book the session, R1,950 →</a>
            <a href="#how-it-works" className="wds-ghost-link">See how it works →</a>
          </div>
          <p className="wds-footnote">Solo: R1,950 · Duo (same business): R2,950 · In person · Pietermaritzburg or Durban</p>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="whatitis-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />What It Is</div>
          <h2 className="wds-h2" id="whatitis-heading">A 90-minute session that sets up your AI assistant and puts it to work on your actual inbox.</h2>
          <p className="wds-body">Not a course. Not a workshop. Not a slideshow about what AI could theoretically do. We sit down with your real work, your actual emails, your real documents, and we build an assistant that handles them. You leave with something working, not a certificate.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="for-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />Who This Is For</div>
          <h2 className="wds-h2" id="for-heading">Built for the one person doing the work of three.</h2>
          <p className="wds-body">The owner who answers every email. The manager who writes every quote. The operator who chases every invoice. If you are the bottleneck in your own business because everything flows through you, this session is built for you.</p>
          <p className="wds-body">Construction contractors, logistics operators, property managers, retail owners, professional services firms. If your day is full of admin that does not require your expertise, an AI assistant changes that.</p>
        </div>
      </section>

      <section id="how-it-works" className="wds-section wds-section--wash" aria-labelledby="session-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />The Session</div>
          <h2 className="wds-h2" id="session-heading">90 minutes. Your real work. A working assistant at the end.</h2>
          <p className="wds-body wds-body--intro">Five phases, no wasted time.</p>

          <div className="wds-phase-block">
            <span className="wds-phase-title">The frame.</span>
            <p className="wds-phase-desc">We identify the three tasks eating the most of your time. That is what the assistant gets built around.</p>
          </div>
          <div className="wds-phase-block">
            <span className="wds-phase-title">Your actual inbox.</span>
            <p className="wds-phase-desc">We open your real emails, your real documents, your real follow-ups. The assistant learns your voice, your context, your clients.</p>
          </div>
          <div className="wds-phase-block">
            <span className="wds-phase-title">You drive.</span>
            <p className="wds-phase-desc">You use the assistant live. We fix what does not work. You leave knowing how to use it without help.</p>
          </div>
          <div className="wds-phase-block">
            <span className="wds-phase-title">Your cheat sheet.</span>
            <p className="wds-phase-desc">A one-page reference document covering your assistant&apos;s key commands. No guessing after the session.</p>
          </div>
          <div className="wds-phase-block">
            <span className="wds-phase-title">What is next.</span>
            <p className="wds-phase-desc">If you want the assistant to keep improving, we cover that too.</p>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="offer-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />The Offer</div>
          <h2 className="wds-h2" id="offer-heading">One session. One assistant. Working before lunch.</h2>

          <div className="wds-pricing-grid">
            <div className="wds-pricing-card">
              <span className="wds-pricing-label">Solo Session</span>
              <p className="wds-pricing-price">R1,950</p>
              <span className="wds-pricing-sub">One person, 90 minutes</span>
            </div>
            <div className="wds-pricing-card wds-pricing-card--featured">
              <span className="wds-pricing-label">Duo Session</span>
              <p className="wds-pricing-price">R2,950</p>
              <span className="wds-pricing-sub">Two people, same business, 90 minutes</span>
            </div>
          </div>

          <p className="wds-body wds-body--spaced">In person. Pietermaritzburg or Durban.</p>

          <div className="wds-includes">
            <div className="wds-include-item">90-minute in-person session</div>
            <div className="wds-include-item">Custom assistant setup on your own device</div>
            <div className="wds-include-item">One-page cheat sheet with key commands</div>
            <div className="wds-include-item">7-day WhatsApp support after the session</div>
          </div>

          <a href={WHATSAPP_BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="wds-cta-btn wds-cta-btn--spaced">Book the session →</a>

          <div className="wds-retainer">
            <span className="wds-retainer-label">Jarvis Maintenance</span>
            <p className="wds-retainer-price">R950/month</p>
            <p className="wds-retainer-body">If you want the assistant to keep improving as your business grows, the monthly retainer covers ongoing updates, new use cases, and direct access when something needs adjusting. Month-to-month. Cancel any time.</p>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="faq-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />Questions</div>
          <h2 className="wds-h2" id="faq-heading">Straight answers.</h2>
          <div>
            {faqItems.map((item) => (
              <details key={item.question} className="wds-faq-item">
                <summary className="wds-faq-summary">{item.question}</summary>
                <p className="wds-faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="wds-closing" aria-labelledby="closing-heading">
        <h2 className="wds-closing-h2" id="closing-heading">Give your busiest person their assistant.</h2>
        <p className="wds-closing-body">One conversation is enough to get started.</p>
        <a href={WHATSAPP_BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="wds-closing-btn">Start a conversation →</a>
      </section>

      <section className="wds-related">
        <div className="wds-inner">
          <div className="wds-related-divider"></div>
          <div className="wds-label"><span className="wds-label-bar" />Explore More</div>
          <div className="wds-related-links">
            <Link href="/ada/business-automation">Business Automation</Link>
            <Link href="/ada/audit">Start with a diagnostic</Link>
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
