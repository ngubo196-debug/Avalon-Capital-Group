import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%2C%20I%20have%20a%20deal%20I%27d%20like%20to%20discuss%20with%20Vantara.";
const FOUNDER_PHOTO = "/assets/luyanda-ngubo.jpg";

export const metadata: Metadata = {
  title: 'Vantara | Vehicle Acquisition Advisory | South Africa',
  description: 'Vantara represents buyers, not dealers. We source, verify, negotiate, and handle the paperwork on every vehicle purchase, in South Africa or from abroad.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/vantara' },
};

const faqItems = [
  {
    question: 'What does it cost to use Vantara for a vehicle acquisition?',
    answer: 'For domestic (South African-based) acquisitions, nothing additional out of your pocket. You give us your budget and your criteria. We source the right vehicle, negotiate the deal, and manage the transaction to delivery. Our fee is built into the deal, you pay within your budget, not on top of it. You never pay more than you would have going alone. In most cases, you pay less.',
  },
  {
    question: 'How do you find the vehicles you source?',
    answer: "We use every available channel: dealer networks, online platforms, private listings. What we bring that the platforms don't is a personal network built on dealer relationships, and every vehicle verified directly against trade and retail value before it reaches you. We've worked every department of a dealership: sales, stock control, workshop, finance, reconditioning, and vehicle listings. We know what a car is actually worth, what dealers don't disclose, and where the margin is. That knowledge isn't on Autotrader. We are.",
  },
  {
    question: 'What do I actually have to do as the buyer?',
    answer: 'Tell us your budget, your requirements, and what matters to you. From there, we handle everything: sourcing, shortlisting, negotiating, finance structuring if needed, and delivery coordination. The only time you need to move is to sign the deal and take delivery. Everything else is handled.',
  },
  {
    question: 'What is strategic deal structuring and how do I know if it applies to me?',
    answer: 'Strategic deal structuring covers transactions that do not fit a standard category - supply arrangements, business transactions, and partnerships that need proper architecture before they can close. A supply arrangement, a business transaction, a partnership that needs structuring, if there is a deal to be made and you need someone who can see the structure, make the right connections, and execute cleanly, that is what strategic brokerage covers. We engage selectively. If you have something worth exploring, bring it to us and we will tell you honestly whether we can add value.',
  },
  {
    question: 'How do I engage Vantara?',
    answer: 'Start with a conversation. Tell us what you are looking to acquire, structure, or explore. We will respond directly, ask the right questions, and tell you honestly what we can do. No forms, no waiting. WhatsApp is the fastest way to reach us.',
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

function IconClipboard() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--v-gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
      <path d="M8 11h8M8 14h8M8 17h5" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--v-gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.8-4.8" />
    </svg>
  );
}

function IconBars() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--v-gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 20V13M12 20V6M19 20v-9" />
      <path d="M3 20h18" />
    </svg>
  );
}

function IconCheckCircle() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--v-gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.5l2.3 2.3L16 9.5" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--v-gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5z" />
    </svg>
  );
}

function IconCar() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--v-gold)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 16v-3l2-4.5A2 2 0 018 7h8a2 2 0 011.9 1.5L20 13v3" />
      <path d="M3.5 16h17v2.5a1 1 0 01-1 1H17a1 1 0 01-1-1V17H8v1.5a1 1 0 01-1 1H4.5a1 1 0 01-1-1V16z" />
      <circle cx="7.5" cy="16" r="1.4" />
      <circle cx="16.5" cy="16" r="1.4" />
    </svg>
  );
}

const trustItems = [
  'Registered business · 2025/671885/07',
  'Two years in vehicle sales',
  '6 vehicles sourced, Q1 2026',
  'Based in Pietermaritzburg, South Africa',
];

function TrustStrip({ hidden }: { hidden?: boolean }) {
  return (
    <div className="wds-trust-strip" aria-hidden={hidden}>
      {trustItems.map((text, i) => (
        <span key={i} className="wds-trust-item">
          <span className="wds-trust-text">{text}</span>
          <span className="wds-trust-dot">&middot;</span>
        </span>
      ))}
    </div>
  );
}

export default function Vantara() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="vantara-home-page">
        <style
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
        .vantara-home-page {
          --v-gold: #C9A84C;
          --v-gold-deep: #8C6D2C;
          --v-ink: #111111;
          --v-ink-soft: #3A3A3A;
          --v-ink-muted: #7A7A7A;
          --v-paper: #FDFCFA;
          --v-tint: #F8F6F0;
          --v-line: #E5E1D6;
          background: var(--v-paper);
        }
        .vantara-home-page a:focus-visible,
        .vantara-home-page button:focus-visible {
          outline: 2px solid var(--v-gold);
          outline-offset: 2px;
        }

        .wds-eyebrow { font-family: DM Sans, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--v-gold-deep); margin-bottom: 20px; }
        .wds-h1 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 400; font-size: clamp(38px, 5vw, 66px); line-height: 1.12; color: var(--v-ink); max-width: 820px; margin: 0; }
        .wds-h1 em { font-style: italic; color: var(--v-gold-deep); }
        .wds-subhead { font-family: DM Sans, sans-serif; font-size: 18px; font-weight: 300; line-height: 1.7; color: var(--v-ink-soft); max-width: 620px; margin: 24px 0 36px; }
        .wds-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(26px, 2.8vw, 40px); line-height: 1.18; color: var(--v-ink); margin: 0 0 24px; }
        .wds-body { font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 300; line-height: 1.8; color: var(--v-ink-soft); max-width: 700px; margin: 0; }
        .wds-body + .wds-body { margin-top: 18px; }

        .wds-hero { position: relative; min-height: 100vh; display: flex; align-items: center; padding: calc(72px + 3rem) 3.5rem 3rem; overflow: hidden; background: var(--v-paper); }
        .wds-hero::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: repeating-linear-gradient(115deg, rgba(201,168,76,0.15) 0px, rgba(201,168,76,0.15) 1px, transparent 1px, transparent 46px);
        }
        .wds-hero-inner { position: relative; z-index: 1; }

        /* Introduction: mirrors the hero's line-motif so wide viewports don't read as unfinished */
        .wds-intro-section { position: relative; overflow: hidden; }
        .wds-intro-section::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: repeating-linear-gradient(115deg, rgba(201,168,76,0.10) 0px, rgba(201,168,76,0.10) 1px, transparent 1px, transparent 46px);
        }
        .wds-intro-section .wds-intro-grid { position: relative; z-index: 1; }

        .wds-section { padding: 5.5rem 3.5rem; }
        .wds-section--paper { background: var(--v-paper); }
        .wds-section--tint { background: var(--v-tint); }
        .wds-inner { max-width: 1120px; margin: 0 auto; }

        .wds-numeral { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 300; font-style: italic; font-size: 64px; line-height: 1; color: var(--v-line); margin-bottom: 12px; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--v-gold-deep); margin-bottom: 16px; }

        .wds-cta-btn { display: inline-block; background: var(--v-gold); color: #FFFFFF !important; border-radius: 100px; padding: 14px 34px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--v-gold); transition: background 0.2s ease, border-color 0.2s ease; }
        .wds-cta-btn:hover { background: var(--v-gold-deep); border-color: var(--v-gold-deep); }
        .wds-cta-ghost { display: inline-flex; align-items: center; gap: 8px; font-family: DM Sans, sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.04em; color: var(--v-gold-deep); text-decoration: none; border-bottom: 1px solid var(--v-gold-deep); padding-bottom: 2px; }

        /* Introduction */
        .wds-intro-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 4rem; align-items: center; max-width: 1120px; margin: 0 auto; }
        .wds-intro-photo { position: relative; width: 100%; aspect-ratio: 4/5; border-radius: 20px; overflow: hidden; }
        .wds-intro-body { max-width: 520px; }

        /* Trust bar */
        .wds-trust { background: var(--v-ink); width: 100%; height: 64px; overflow: hidden; display: flex; align-items: center; }
        .wds-trust-track { display: flex; align-items: center; width: max-content; animation: wds-trust-scroll 35s linear infinite; }
        .wds-trust:hover .wds-trust-track { animation-play-state: paused; }
        .wds-trust-strip { display: flex; align-items: center; white-space: nowrap; flex-shrink: 0; }
        .wds-trust-item { display: flex; align-items: center; }
        .wds-trust-text { font-family: DM Sans, sans-serif; font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.8); letter-spacing: 0.03em; white-space: nowrap; }
        .wds-trust-dot { color: var(--v-gold); font-size: 15px; margin: 0 22px; flex-shrink: 0; }
        @keyframes wds-trust-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* Difference / mandate grid */
        .wds-diff-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--v-line); border: 1px solid var(--v-line); border-radius: 16px; overflow: hidden; margin-top: 3rem; }
        .wds-diff-card { background: var(--v-paper); padding: 2.5rem 2.25rem; }
        .wds-diff-card--muted { opacity: 0.7; }
        .wds-diff-card-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--v-gold-deep); margin-bottom: 16px; }
        .wds-diff-card-title { font-family: DM Sans, sans-serif; font-size: 17px; font-weight: 600; color: var(--v-ink); line-height: 1.4; margin-bottom: 14px; }
        .wds-diff-list { display: flex; flex-direction: column; border-top: 1px solid var(--v-line); }
        .wds-diff-list p { font-family: DM Sans, sans-serif; font-size: 14px; line-height: 1.75; color: var(--v-ink-soft); padding: 12px 0; border-bottom: 1px solid var(--v-line); margin: 0; }
        .wds-diff-list p:last-child { border-bottom: none; }

        .wds-pullquote { font-family: Bodoni Moda, Cormorant Garamond, serif; font-style: italic; font-weight: 400; font-size: clamp(26px, 3.4vw, 42px); line-height: 1.4; color: var(--v-ink); max-width: 880px; margin: 0 auto; text-align: center; }

        /* Proof / mandate cards shared grid */
        .wds-proof-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--v-line); border: 1px solid var(--v-line); border-radius: 16px; overflow: hidden; margin-top: 3rem; }
        .wds-proof-card { background: var(--v-paper); padding: 2.5rem 2.25rem; border-top: 3px solid var(--v-gold); }
        .wds-proof-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--v-gold-deep); margin-bottom: 18px; }
        .wds-proof-title { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 24px; font-weight: 400; color: var(--v-ink); line-height: 1.3; margin-bottom: 16px; }
        .wds-proof-body { font-family: DM Sans, sans-serif; font-size: 14px; line-height: 1.8; color: var(--v-ink-soft); margin-bottom: 14px; }
        .wds-proof-meta { border-top: 1px solid var(--v-line); padding-top: 20px; margin-top: 8px; display: flex; flex-direction: column; gap: 6px; }
        .wds-proof-meta p { font-family: DM Sans, sans-serif; font-size: 11px; letter-spacing: 0.05em; color: var(--v-ink-muted); margin: 0; }
        .wds-proof-meta span { color: var(--v-gold-deep); font-style: italic; }

        /* Insights list */
        .wds-insights-list { margin-top: 3rem; display: flex; flex-direction: column; }
        .wds-insights-row { padding: 26px 0; border-bottom: 1px solid var(--v-line); display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; text-decoration: none; transition: transform 0.2s ease; }
        .wds-insights-row:hover { transform: translateY(-2px); }
        .wds-insights-row-label { font-family: DM Sans, sans-serif; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--v-gold-deep); margin-bottom: 8px; }
        .wds-insights-row-title { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 19px; font-weight: 400; color: var(--v-ink); line-height: 1.3; margin: 0; }
        .wds-insights-row-sub { font-family: DM Sans, sans-serif; font-size: 13px; line-height: 1.65; color: var(--v-ink-muted); margin-top: 8px; }
        .wds-insights-row-arrow { font-family: DM Sans, sans-serif; font-size: 18px; color: var(--v-ink-muted); flex-shrink: 0; margin-top: 4px; }
        .wds-insights-footnote { font-family: DM Sans, sans-serif; font-size: 12px; font-style: italic; color: var(--v-ink-muted); margin-top: 32px; }
        .wds-insights-footnote a { color: var(--v-gold-deep); text-decoration: none; }

        /* Process (How We Work) */
        .wds-process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--v-line); border: 1px solid var(--v-line); border-radius: 16px; overflow: hidden; margin-top: 3rem; }
        .wds-process-card { background: var(--v-paper); padding: 2.25rem 1.75rem; }
        .wds-process-icon { margin-bottom: 18px; }
        .wds-process-title { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 600; color: var(--v-ink); margin-bottom: 10px; }
        .wds-process-desc { font-family: DM Sans, sans-serif; font-size: 13px; line-height: 1.75; color: var(--v-ink-soft); margin: 0; }

        /* Qualification */
        .wds-qual { text-align: center; }
        .wds-qual .wds-h2 { max-width: 780px; margin-left: auto; margin-right: auto; }
        .wds-qual .wds-body { max-width: 680px; margin-left: auto; margin-right: auto; }

        /* Mandate cards (How We Engage) */
        .wds-mandate-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 3rem; }
        .wds-mandate-card { background: var(--v-paper); border: 1px solid var(--v-line); border-radius: 16px; padding: 2.5rem 2.25rem; display: flex; flex-direction: column; position: relative; }
        .wds-mandate-card--primary { border: 2px solid var(--v-gold); box-shadow: 0 8px 28px rgba(201,168,76,0.16); }
        .wds-mandate-badge { position: absolute; top: -1px; left: 50%; transform: translateX(-50%); background: var(--v-gold); color: #FFFFFF; font-family: DM Sans, sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; padding: 5px 16px; border-radius: 0 0 8px 8px; white-space: nowrap; }
        .wds-mandate-icon { margin-bottom: 18px; margin-top: 8px; }
        .wds-mandate-title { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 26px; font-weight: 400; color: var(--v-ink); line-height: 1.2; margin-bottom: 18px; }
        .wds-mandate-body { font-family: DM Sans, sans-serif; font-size: 14px; line-height: 1.8; color: var(--v-ink-soft); margin-bottom: 24px; }
        .wds-mandate-list { display: flex; flex-direction: column; border-top: 1px solid var(--v-line); margin-top: auto; }
        .wds-mandate-list p { font-family: DM Sans, sans-serif; font-size: 13px; line-height: 1.75; color: var(--v-ink-soft); padding: 11px 0; border-bottom: 1px solid var(--v-line); margin: 0; }
        .wds-mandate-price { color: var(--v-gold-deep) !important; font-style: italic; border-bottom: none !important; padding-top: 14px !important; }
        .wds-mandate-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 20px; font-family: DM Sans, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--v-gold-deep); text-decoration: none; border-bottom: 1px solid transparent; padding-bottom: 2px; }

        .wds-note { background: var(--v-tint); border-radius: 12px; padding: 1.75rem 2rem; margin-top: 2.5rem; }
        .wds-note-title { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 17px; font-weight: 400; color: var(--v-ink); margin-bottom: 10px; }
        .wds-note-body { font-family: DM Sans, sans-serif; font-size: 14px; line-height: 1.8; color: var(--v-ink-soft); margin: 0; }

        /* FAQ */
        .wds-faq-list { margin-top: 3rem; max-width: 780px; margin-left: auto; margin-right: auto; display: flex; flex-direction: column; }
        .wds-faq-item { border-bottom: 1px solid var(--v-line); padding: 22px 0; }
        .wds-faq-item summary { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 19px; font-weight: 400; color: var(--v-ink); cursor: pointer; list-style: none; }
        .wds-faq-item summary::-webkit-details-marker { display: none; }
        .wds-faq-item summary::after { content: '+'; float: right; color: var(--v-gold-deep); font-family: DM Sans, sans-serif; font-weight: 400; }
        .wds-faq-item[open] summary::after { content: '\\2212'; }
        .wds-faq-answer { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; line-height: 1.8; color: var(--v-ink-soft); margin-top: 14px; }

        /* Closing CTA */
        .wds-closing { text-align: center; }
        .wds-closing .wds-h2 { max-width: 640px; margin: 0 auto 24px; }
        .wds-closing .wds-body { margin: 0 auto 36px; }
        .wds-closing-actions { display: flex; flex-direction: column; align-items: center; gap: 16px; }

        /* Footer */
        .wds-footer { background: var(--v-ink); padding: 3rem 3.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
        .wds-footer-brand { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 16px; font-weight: 500; color: #FFFFFF; }
        .wds-footer-brand em { color: var(--v-gold); font-style: normal; }
        .wds-footer-location { font-family: DM Sans, sans-serif; font-size: 11px; color: rgba(255,255,255,0.4); letter-spacing: 0.05em; }
        .wds-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .wds-footer-links a { font-family: DM Sans, sans-serif; font-size: 13px; color: rgba(255,255,255,0.5); text-decoration: none; border-bottom: 1px solid transparent; padding-bottom: 2px; }
        .wds-footer-legal { width: 100%; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4px; }
        .wds-footer-legal p { font-family: DM Sans, sans-serif; font-size: 11px; color: rgba(255,255,255,0.3); margin-bottom: 8px; line-height: 1.7; }

        @media (max-width: 900px) {
          .wds-intro-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .wds-intro-photo { aspect-ratio: 1/1; }
          .wds-diff-grid, .wds-proof-grid, .wds-mandate-grid { grid-template-columns: 1fr; }
          .wds-process-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .wds-hero { padding: calc(72px + 4rem) 1.5rem 4rem; }
          .wds-section { padding: 4rem 1.5rem; }
          .wds-process-grid { grid-template-columns: 1fr; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `,
          }}
        />

        {/* Hero */}
        <section className="wds-hero">
          <div className="wds-inner wds-hero-inner">
            <h1 className="wds-h1">Vehicle acquisition. For the <em>buyer</em>.</h1>
            <p className="wds-subhead">We source, verify, negotiate, and handle the paperwork, working only for you, never the seller.</p>
            <div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="wds-cta-btn">Start the Conversation</a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="wds-section wds-section--paper wds-intro-section" aria-labelledby="intro-heading">
          <div className="wds-intro-grid">
            <div className="wds-intro-photo">
              <Image
                src={FOUNDER_PHOTO}
                alt="Luyanda, founder of Vantara"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div className="wds-intro-body">
              <div className="wds-eyebrow">The person behind Vantara</div>
              <h2 className="wds-h2" id="intro-heading">I&apos;m Luyanda. I represent buyers.</h2>
              <p className="wds-body">I&apos;ve worked inside the car sales industry, dealer networks included. I know exactly whose interest they&apos;re built to protect, and it isn&apos;t the buyer&apos;s. Vantara exists to change that. One person, every deal, start to handover.</p>
              <div style={{ marginTop: '28px' }}>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="wds-cta-btn">Start the Conversation</a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <div className="wds-trust" role="group" aria-label="Vantara trust indicators">
          <div className="wds-trust-track">
            <TrustStrip />
            <TrustStrip hidden />
          </div>
        </div>

        {/* How We Engage */}
        <section className="wds-section wds-section--paper" aria-labelledby="vantara-engage-heading">
          <div className="wds-inner">
            <div className="wds-label">How We Help</div>
            <h2 className="wds-h2" id="vantara-engage-heading">How we help you buy, locally or abroad.</h2>
            <p className="wds-body" style={{ maxWidth: '540px' }}>Buying from abroad or buying locally, the process is the same: structured, thorough, and in your interest.</p>

            <div className="wds-mandate-grid">
              <div className="wds-mandate-card wds-mandate-card--primary">
                <div className="wds-mandate-badge">Most Booked</div>
                <div className="wds-mandate-icon"><IconGlobe /></div>
                <h3 className="wds-mandate-title">International Buyer Concierge</h3>
                <p className="wds-mandate-body">For buyers relocating to or investing in South Africa. We source, verify, negotiate, and handle the paperwork, wherever you are.</p>
                <div className="wds-mandate-list">
                  <p>Sourcing and value verification</p>
                  <p>Negotiation on your behalf</p>
                  <p>Registration handled once you land</p>
                  <p className="wds-mandate-price">From R18,000. Pricing scales with vehicle value.</p>
                </div>
                <Link href="/vantara/international-buyers" className="wds-mandate-link">See the full process →</Link>
              </div>
              <div className="wds-mandate-card">
                <div className="wds-mandate-icon"><IconCar /></div>
                <h3 className="wds-mandate-title">Domestic Vehicle Acquisition</h3>
                <p className="wds-mandate-body">Give us your budget. We source, negotiate, and deliver, no dealer markup eating into what you set aside.</p>
                <div className="wds-mandate-list">
                  <p>Budget-based sourcing</p>
                  <p>Full dealer negotiation</p>
                  <p>Finance structuring support</p>
                  <p className="wds-mandate-price">From R5,000. Fee structured into your budget, not added on top.</p>
                </div>
              </div>
            </div>

            <div className="wds-note">
              <p className="wds-note-title">A straightforward note on how we work</p>
              <p className="wds-note-body">Vantara works with a limited number of clients at any given time. We are not a high-volume operation. We take on engagements where we can genuinely add value and execute to the standard we hold ourselves to. If we can&apos;t help, we&apos;ll tell you. If we can, we&apos;ll show you exactly how.</p>
            </div>
          </div>
        </section>

        {/* 01 - The Difference */}
        <section className="wds-section wds-section--paper" aria-labelledby="vantara-difference">
          <div className="wds-inner">
            <div className="wds-numeral" aria-hidden="true">01</div>
            <div className="wds-label">The Difference</div>
            <h2 className="wds-h2" id="vantara-difference">Advisory-first. Always.</h2>
            <p className="wds-body">Everyone else at the table is paid to close. We&apos;re not.</p>

            <div className="wds-diff-grid">
              <div className="wds-diff-card">
                <p className="wds-diff-card-label">Vantara is</p>
                <h3 className="wds-diff-card-title">A deal execution partner who works for you</h3>
                <p className="wds-body" style={{ marginBottom: '20px', maxWidth: 'none' }}>Before anything moves, we understand your position: your objective, your constraints, your risk. Then we structure the transaction, control the variables, and execute. You make the final call with full information, not under pressure.</p>
                <div className="wds-diff-list">
                  <p>Advisory-first, strategy before any transaction</p>
                  <p>Your interest first, not the market&apos;s</p>
                  <p>Full-cycle, brief to handover, every step managed</p>
                  <p>Vehicle acquisition, domestic and international</p>
                </div>
              </div>
              <div className="wds-diff-card wds-diff-card--muted">
                <p className="wds-diff-card-label" style={{ color: 'var(--v-ink-muted)' }}>Vantara is not</p>
                <h3 className="wds-diff-card-title">A platform with inventory to push</h3>
                <p className="wds-body" style={{ marginBottom: '20px', maxWidth: 'none' }}>Dealerships have stock to move. Listing platforms have placements to sell. Most channels in any market have a financial incentive to close, not necessarily to close the right deal for you. Vantara carries none of that conflict.</p>
                <div className="wds-diff-list">
                  <p>A dealership or inventory-based seller</p>
                  <p>A broker collecting commission from both sides</p>
                  <p>A middleman profiting from the spread</p>
                  <p>Open to everyone, selective by design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wds-section wds-section--tint">
          <p className="wds-pullquote">&ldquo;Most people negotiate against a professional on the other side. Vantara puts a professional on your side.&rdquo;</p>
        </section>

        {/* Deal Insights */}
        <section className="wds-section wds-section--paper" aria-labelledby="vantara-insights">
          <div className="wds-inner">
            <div className="wds-label">Proof</div>
            <h2 className="wds-h2" id="vantara-insights">Real transactions. Real outcomes.</h2>
            <p className="wds-body" style={{ maxWidth: '520px' }}>Two deals broken down in full, the thinking, the structure, and the execution. Read these to understand how Vantara approaches a deal before you bring us yours.</p>
            <div className="wds-proof-grid">
              <div className="wds-proof-card">
                <p className="wds-proof-label">Automotive Deal Execution</p>
                <h3 className="wds-proof-title">Two dealers. One client. Every variable controlled.</h3>
                <p className="wds-proof-body">A trade-in shortfall across two competing dealerships, mapped and negotiated side by side. R60,000 in dealer support extracted, and the client decided with complete information, no pressure.</p>
                <div className="wds-proof-meta">
                  <p>Scope: <span>Vehicle acquisition, trade-in arbitrage, finance structuring</span></p>
                  <p>Outcome: <span>Full dual-option analysis. Client decided with complete information.</span></p>
                </div>
                <Link href="/vantara/automotive" className="wds-mandate-link">Read the full case →</Link>
              </div>
              <div className="wds-proof-card">
                <p className="wds-proof-label">International Buyer Concierge</p>
                <h3 className="wds-proof-title">Buy a car in South Africa before you even land.</h3>
                <p className="wds-proof-body">We source it, verify it, negotiate the price, handle the paperwork, and deliver it. One person on the ground, so you don&apos;t have to be.</p>
                <div className="wds-proof-meta">
                  <p>Scope: <span>Sourcing, verification, negotiation, TRN and registration paperwork</span></p>
                  <p>Outcome: <span>A vehicle ready and waiting, or delivered to wherever you land.</span></p>
                </div>
                <Link href="/vantara/international-buyers" className="wds-mandate-link">See the full process →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="wds-section wds-section--tint" aria-labelledby="vantara-outcomes">
          <div className="wds-inner">
            <div className="wds-label">Recent Outcomes</div>
            <h2 className="wds-h2" id="vantara-outcomes">Recent client outcomes. Real numbers.</h2>
            <p className="wds-body" style={{ maxWidth: '520px' }}>Two deals. What the process delivered in practice.</p>
            <div className="wds-proof-grid">
              <div className="wds-proof-card">
                <p className="wds-proof-label">Automotive &middot; Deal Insight</p>
                <h3 className="wds-proof-title">Two dealers. One client. R60,000 extracted.</h3>
                <p className="wds-proof-body">A vehicle acquisition where every variable was controlled: trade-in arbitrage, dual-dealer leverage, and four balloon scenarios modelled across two vehicles. The client made the final call with full information and nothing left to chance.</p>
                <div className="wds-proof-meta">
                  <p><span>R60,000 dealer support</span></p>
                  <p><span>8 scenarios modelled</span></p>
                  <p><span>0 dealer pressure</span></p>
                </div>
                <Link href="/vantara/automotive" className="wds-mandate-link">Read the full breakdown →</Link>
              </div>
              <div className="wds-proof-card">
                <p className="wds-proof-label">Automotive &middot; Client Outcome</p>
                <h3 className="wds-proof-title">First vehicle. R19,014 found before negotiation started.</h3>
                <p className="wds-proof-body">A first-time buyer, two options, and a budget that pulled in two directions. Vantara assessed the full KZN market, modelled eight finance scenarios, and mapped the complete cost of ownership before the client saw a single dealer.</p>
                <div className="wds-proof-meta">
                  <p><span>R19,014 below-market pricing identified</span></p>
                  <p><span>8 finance scenarios modelled</span></p>
                  <p><span>Full cost of ownership mapped</span></p>
                </div>
                <Link href="/vantara/insight-4" className="wds-mandate-link">Read the full breakdown →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="wds-section wds-section--paper" aria-labelledby="vantara-insights-heading">
          <div className="wds-inner">
            <div className="wds-label">Insights</div>
            <h2 className="wds-h2" id="vantara-insights-heading">We share how we think.</h2>
            <p className="wds-body" style={{ maxWidth: '520px' }}>Everything here comes from real transactions, what we saw, what we found, and what it cost the people who went in without the right information. Read it before your next acquisition. It will change how you see the process.</p>
            <div className="wds-insights-list">
              <Link href="/vantara/insight-1" className="wds-insights-row">
                <div>
                  <p className="wds-insights-row-label">Automotive &middot; Insider perspective</p>
                  <p className="wds-insights-row-title">Why buying a car alone is the most expensive thing you&apos;ll do this year</p>
                </div>
                <span className="wds-insights-row-arrow">→</span>
              </Link>
              <Link href="/vantara/insight-3" className="wds-insights-row">
                <div>
                  <p className="wds-insights-row-label">Advisory &middot; The Vantara model</p>
                  <p className="wds-insights-row-title">Getting it right is cheap. Getting it wrong isn&apos;t.</p>
                </div>
                <span className="wds-insights-row-arrow">→</span>
              </Link>
              <Link href="/vantara/insight-4" className="wds-insights-row">
                <div>
                  <p className="wds-insights-row-label">Automotive</p>
                  <p className="wds-insights-row-title">First vehicle. Two options. One right decision.</p>
                  <p className="wds-insights-row-sub">What Vantara does before the deal starts, and how a first-time buyer made the right call with full information.</p>
                </div>
                <span className="wds-insights-row-arrow">→</span>
              </Link>
            </div>
            <p className="wds-insights-footnote">Written by Luyanda, from the inside of every deal. If something raises a question, <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">start a conversation</a>.</p>
          </div>
        </section>

        {/* How We Work */}
        <section className="wds-section wds-section--paper" aria-labelledby="vantara-how">
          <div className="wds-inner">
            <div className="wds-numeral" aria-hidden="true">02</div>
            <div className="wds-label">How We Work</div>
            <h2 className="wds-h2" id="vantara-how">Clarity. Structure. Execution.</h2>
            <p className="wds-body">Vantara runs every engagement through four stages: brief and objectives, market intelligence, structured analysis, and negotiation through to close. Each stage has a defined output. Nothing moves until the previous stage is complete.</p>
            <div className="wds-process-grid">
              <div className="wds-process-card">
                <div className="wds-process-icon"><IconClipboard /></div>
                <h4 className="wds-process-title">Brief &amp; Objectives</h4>
                <p className="wds-process-desc">We begin with a conversation. We map your objective, your constraints, and what the right outcome looks like for you, not generically, specifically.</p>
              </div>
              <div className="wds-process-card">
                <div className="wds-process-icon"><IconSearch /></div>
                <h4 className="wds-process-title">Market Intelligence</h4>
                <p className="wds-process-desc">We scan the South African market on your behalf, identifying value, flagging what&apos;s overpriced or misrepresented, and surfacing options you wouldn&apos;t find alone.</p>
              </div>
              <div className="wds-process-card">
                <div className="wds-process-icon"><IconBars /></div>
                <h4 className="wds-process-title">Structure &amp; Analysis</h4>
                <p className="wds-process-desc">We present shortlisted options with clear analysis: financials, risk, trade-offs. You make an informed decision, not one made under time pressure from a seller.</p>
              </div>
              <div className="wds-process-card">
                <div className="wds-process-icon"><IconCheckCircle /></div>
                <h4 className="wds-process-title">Negotiation &amp; Close</h4>
                <p className="wds-process-desc">We lead or support the negotiation, handle the moving parts, and see the transaction through to completion. Your position is protected at every stage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Qualification */}
        <section className="wds-section wds-section--tint wds-qual" aria-labelledby="vantara-qual">
          <div className="wds-inner">
            <div className="wds-label" style={{ justifyContent: 'center', display: 'flex' }}>Who This Is For</div>
            <h2 className="wds-h2" id="vantara-qual">Built for two kinds of buyers.</h2>
            <p className="wds-body">Someone in South Africa making a high-value vehicle purchase, unwilling to negotiate against a professional alone. Someone buying from outside the country, who needs a person on the ground they can trust completely. Neither situation gives you a fair shot without representation.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="wds-section wds-section--tint" aria-labelledby="vantara-faq-heading">
          <div className="wds-inner">
            <div className="wds-label">FAQ</div>
            <h2 className="wds-h2" id="vantara-faq-heading">Common questions. Straight answers.</h2>
            <p className="wds-body" style={{ maxWidth: '520px' }}>If something isn&apos;t covered here, ask us directly. We&apos;d rather have a conversation than leave you guessing.</p>
            <div className="wds-faq-list">
              {faqItems.map((item) => (
                <details className="wds-faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p className="wds-faq-answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Engage Vantara (closing CTA) */}
        <section className="wds-section wds-section--paper wds-closing" aria-labelledby="vantara-cta-heading">
          <div className="wds-inner">
            <div className="wds-label" style={{ justifyContent: 'center', display: 'flex' }}>Engage Vantara</div>
            <h2 className="wds-h2" id="vantara-cta-heading">Bring us <em>the deal.</em></h2>
            <p className="wds-body">Tell us what you&apos;re looking at. It doesn&apos;t have to be fully formed, a vehicle here in South Africa or a purchase from outside the country, an opportunity you&apos;re not sure about. We&apos;ll tell you honestly whether Vantara can add value, and what that looks like. No obligation. No pitch.</p>
            <div className="wds-closing-actions">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="wds-cta-btn">Start the Conversation</a>
              <Link href="/" className="wds-cta-ghost">Back to Avalon Capital Group</Link>
            </div>
          </div>
        </section>

        <footer className="wds-footer">
          <div>
            <div className="wds-footer-brand"><em>Vantara</em> - A Division of Avalon Capital Group</div>
            <div className="wds-footer-location">Pietermaritzburg, KwaZulu-Natal &middot; South Africa</div>
          </div>
          <div className="wds-footer-links">
            <Link href="/vantara/automotive">Deal Insights</Link>
            <Link href="/vantara/international-buyers">International Buyers</Link>
            <Link href="/contact">Contact</Link>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
          <div className="wds-footer-legal">
            <p>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Pietermaritzburg, KwaZulu-Natal, South Africa</p>
            <p>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
