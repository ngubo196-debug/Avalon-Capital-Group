import Link from 'next/link';
import type { Metadata } from 'next';
import IntlBuyersForm from './IntlBuyersForm';

export const metadata: Metadata = {
  title: 'International Buyer Vehicle Concierge | Vantara',
  description: 'Vantara sources, verifies, negotiates, and registers your vehicle in South Africa end to end, Traffic Register Number and NaTIS included, so you can buy with confidence from anywhere.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/vantara/international-buyers' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a foreigner actually buy and register a car in South Africa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. As a foreign national you'll first need a Traffic Register Number, which lets you be registered on the national vehicle system without a South African ID number. To apply you'll need a valid passport or travel document, a certified copy of it, two ID photographs, and proof of address, submitted at a Registering Authority or Licensing Centre. We handle this application as part of the service.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be in the country for this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sourcing, verification, and negotiation happen entirely before you arrive. Registration is finalized in person once you're in South Africa, which fits naturally if you're already relocating here. Everything else is done and waiting by the time you land, registration is the only step that needs you.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Traffic Register Number?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It's the number non-citizens need before a vehicle can be registered in their name in South Africa. We handle the application as part of the service.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you import a car for me instead of buying locally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. South Africa's vehicle import rules are restrictive and don't apply to most relocating buyers. We source locally, which is faster, simpler, and avoids import duties and permits altogether.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does this take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on what you're looking for and how quickly we can verify and negotiate a good match. We'll give you a realistic timeline once we know your brief.",
      },
    },
  ],
};

export default function InternationalBuyers() {
  return (
    <div className="vantara-intl-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .vantara-intl-page {
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
        .vantara-intl-page a:focus-visible,
        .vantara-intl-page button:focus-visible,
        .vantara-intl-page input:focus-visible {
          outline: 2px solid var(--v-gold);
          outline-offset: 2px;
        }

        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--v-gold-deep); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-eyebrow { font-family: DM Sans, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--v-gold-deep); margin-bottom: 20px; }
        .wds-h1 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 400; font-size: clamp(36px, 4.6vw, 60px); line-height: 1.12; color: var(--v-ink); max-width: 820px; margin: 0; }
        .wds-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(26px, 2.8vw, 40px); line-height: 1.18; color: var(--v-ink); margin: 0 0 24px; }
        .wds-subhead { font-family: DM Sans, sans-serif; font-size: 18px; font-weight: 300; line-height: 1.7; color: var(--v-ink-soft); max-width: 620px; margin: 24px 0 36px; }
        .wds-body { font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 300; line-height: 1.8; color: var(--v-ink-soft); max-width: 700px; margin: 0; }
        .wds-body strong { font-weight: 600; color: var(--v-ink); }
        .wds-body + .wds-body { margin-top: 18px; }

        .wds-hero { position: relative; padding: calc(68px + 6rem) 3.5rem 6rem; overflow: hidden; background: var(--v-paper); }
        .wds-hero::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: repeating-linear-gradient(115deg, rgba(201,168,76,0.10) 0px, rgba(201,168,76,0.10) 1px, transparent 1px, transparent 64px);
        }
        .wds-hero-inner { position: relative; z-index: 1; }

        .wds-section { padding: 5.5rem 3.5rem; }
        .wds-section--paper { background: var(--v-paper); }
        .wds-section--tint { background: var(--v-tint); }
        .wds-inner { max-width: 1120px; margin: 0 auto; }

        .wds-cta-btn { display: inline-block; background: var(--v-gold); color: #FFFFFF !important; border-radius: 100px; padding: 14px 34px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--v-gold); cursor: pointer; transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease; }
        .wds-cta-btn:hover { background: var(--v-gold-deep); border-color: var(--v-gold-deep); }
        .wds-cta-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .wds-includes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--v-line); border: 1px solid var(--v-line); border-radius: 16px; overflow: hidden; margin-top: 3rem; }
        .wds-includes-card { background: var(--v-paper); padding: 2.25rem 2rem; }
        .wds-includes-title { display: block; font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--v-ink); margin-bottom: 10px; }
        .wds-includes-desc { font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.75; color: var(--v-ink-soft); margin: 0; }

        .wds-process-list { display: flex; flex-direction: column; gap: 0; margin-top: 3rem; max-width: 720px; }
        .wds-process-step { display: flex; gap: 24px; padding: 28px 0; border-bottom: 1px solid var(--v-line); }
        .wds-process-step:last-child { border-bottom: none; }
        .wds-process-num { flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; background: var(--v-gold); color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 600; }
        .wds-process-title { font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--v-ink); margin-bottom: 6px; }
        .wds-process-desc { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; line-height: 1.7; color: var(--v-ink-soft); margin: 0; }

        .wds-tier-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 3rem; align-items: stretch; }
        .wds-tier-card { background: var(--v-paper); border: 1px solid var(--v-line); border-radius: 16px; padding: 2.25rem 2rem; display: flex; flex-direction: column; }
        .wds-tier-card--entry { border: 2px solid var(--v-gold); box-shadow: 0 8px 28px rgba(201,168,76,0.18); }
        .wds-tier-price { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 30px; font-weight: 500; color: var(--v-ink); margin-bottom: 10px; }
        .wds-tier-range { font-family: DM Sans, sans-serif; font-size: 14px; color: var(--v-ink-muted); line-height: 1.6; }
        .wds-tier-note { font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.8; color: var(--v-ink-soft); background: var(--v-tint); border-radius: 12px; padding: 1.5rem 1.75rem; margin-top: 2rem; max-width: 720px; }

        .wds-faq-list { margin-top: 3rem; max-width: 780px; display: flex; flex-direction: column; gap: 0; }
        .wds-faq-item { border-bottom: 1px solid var(--v-line); padding: 22px 0; }
        .wds-faq-item summary { font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--v-ink); cursor: pointer; list-style: none; }
        .wds-faq-item summary::-webkit-details-marker { display: none; }
        .wds-faq-item summary::after { content: '+'; float: right; color: var(--v-gold-deep); font-weight: 400; }
        .wds-faq-item[open] summary::after { content: '\\2212'; }
        .wds-faq-answer { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; line-height: 1.75; color: var(--v-ink-soft); margin-top: 14px; }

        .wds-contact-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; margin-top: 3rem; align-items: stretch; }
        .wds-form-group { margin-bottom: 18px; }
        .wds-form-label { display: block; font-family: DM Sans, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--v-ink-muted); margin-bottom: 8px; }
        .wds-form-input { width: 100%; padding: 12px 14px; font-family: DM Sans, sans-serif; font-size: 15px; color: var(--v-ink); background: #FFFFFF; border: 1px solid var(--v-line); border-radius: 8px; }
        .wds-form-input::placeholder { color: var(--v-ink-muted); }
        .wds-form-success { background: var(--v-tint); border-radius: 12px; padding: 2rem; font-family: DM Sans, sans-serif; }
        .wds-form-success strong { display: block; color: var(--v-ink); margin-bottom: 8px; font-size: 16px; }
        .wds-form-success p { color: var(--v-ink-soft); font-size: 14px; line-height: 1.7; margin: 0; }

        .wds-contact-side { background: var(--v-tint); border-radius: 16px; padding: 2.25rem; display: flex; flex-direction: column; justify-content: space-between; }
        .wds-contact-email-label { font-family: DM Sans, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--v-ink-muted); margin-bottom: 10px; }
        .wds-contact-email { font-family: DM Sans, sans-serif; font-size: 18px; color: var(--v-gold-deep); text-decoration: none; word-break: break-word; }
        .wds-contact-email:hover { text-decoration: underline; }
        .wds-contact-trust { font-family: DM Sans, sans-serif; font-size: 14px; font-style: italic; line-height: 1.75; color: var(--v-ink-soft); margin-top: 1.75rem; padding-top: 1.75rem; border-top: 1px solid var(--v-line); }

        .wds-footer { background: var(--v-ink); padding: 3rem 3.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
        .wds-footer-brand { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 16px; font-weight: 500; color: #FFFFFF; }
        .wds-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .wds-footer-links a { font-family: DM Sans, sans-serif; font-size: 13px; color: rgba(255,255,255,0.5); text-decoration: none; }
        .wds-footer-links a:hover { color: #FFFFFF; }
        .wds-footer-legal { width: 100%; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4px; }
        .wds-footer-legal p { font-family: DM Sans, sans-serif; font-size: 11px; color: rgba(255,255,255,0.3); margin-bottom: 8px; line-height: 1.7; }

        @media (max-width: 900px) {
          .wds-includes-grid { grid-template-columns: 1fr; }
          .wds-tier-grid { grid-template-columns: 1fr; }
          .wds-contact-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .wds-hero { padding: calc(68px + 4rem) 1.5rem 4rem; }
          .wds-section { padding: 4rem 1.5rem; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      ` }} />

      <section className="wds-hero">
        <div className="wds-inner wds-hero-inner">
          <Link href="/vantara" className="wds-back">← Back to Vantara</Link>
          <div className="wds-eyebrow">Vantara: Vehicle Acquisition Advisory</div>
          <h1 className="wds-h1">Buy a car in South Africa before you even land.</h1>
          <p className="wds-subhead">We source it, verify it, negotiate the price, handle the paperwork, and deliver it. One person on the ground, so you don&apos;t have to be.</p>
          <a href="#contact" className="wds-cta-btn">Start your enquiry</a>
        </div>
      </section>

      <section className="wds-section wds-section--tint" aria-labelledby="problem-heading">
        <div className="wds-inner">
          <h2 className="wds-h2" id="problem-heading">Buying blind is expensive</h2>
          <p className="wds-body">Without a local reference, it&apos;s hard to know if a price is fair. You can&apos;t inspect a car you haven&apos;t seen. And registering a vehicle in South Africa requires a Traffic Register Number before anything else is even possible, a step most people relocating here have never heard of until they&apos;re stuck on it.</p>
          <p className="wds-body">Doing this alone from another country means guessing on price, trusting a stranger&apos;s word on condition, and working through a registration process built for people who already live here.</p>
        </div>
      </section>

      <section className="wds-section wds-section--paper" aria-labelledby="includes-heading">
        <div className="wds-inner">
          <h2 className="wds-h2" id="includes-heading">The full process, handled</h2>
          <div className="wds-includes-grid">
            <div className="wds-includes-card">
              <span className="wds-includes-title">Sourcing</span>
              <p className="wds-includes-desc">We search dealer stock, private sales, and our own network against your brief, budget, make, model, spec, non-negotiables, and bring you a shortlist, not one car.</p>
            </div>
            <div className="wds-includes-card">
              <span className="wds-includes-title">Verification</span>
              <p className="wds-includes-desc">Every shortlisted vehicle is checked against trade and retail value before you spend a rand. We arrange the physical inspection and review the report with you.</p>
            </div>
            <div className="wds-includes-card">
              <span className="wds-includes-title">Negotiation</span>
              <p className="wds-includes-desc">We negotiate on your behalf. This is the part you genuinely can&apos;t do from abroad, you have no local price reference and no leverage.</p>
            </div>
            <div className="wds-includes-card">
              <span className="wds-includes-title">Paperwork</span>
              <p className="wds-includes-desc">Traffic Register Number application, NaTIS registration, ownership transfer, roadworthy where required. Without this, nothing else matters.</p>
            </div>
            <div className="wds-includes-card">
              <span className="wds-includes-title">Delivery</span>
              <p className="wds-includes-desc">Your vehicle delivered to wherever you land, or held ready until you arrive.</p>
            </div>
            <div className="wds-includes-card">
              <span className="wds-includes-title">One point of contact</span>
              <p className="wds-includes-desc">You deal with one person, start to finish. No handoffs, no chasing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--tint" aria-labelledby="process-heading">
        <div className="wds-inner">
          <h2 className="wds-h2" id="process-heading">How it works</h2>
          <div className="wds-process-list">
            <div className="wds-process-step">
              <div className="wds-process-num" aria-hidden="true">1</div>
              <div>
                <p className="wds-process-title">Tell us what you need.</p>
                <p className="wds-process-desc">Budget, vehicle type, timeline.</p>
              </div>
            </div>
            <div className="wds-process-step">
              <div className="wds-process-num" aria-hidden="true">2</div>
              <div>
                <p className="wds-process-title">We shortlist and verify.</p>
                <p className="wds-process-desc">You see options with real value checks attached, not a dealer&apos;s asking price.</p>
              </div>
            </div>
            <div className="wds-process-step">
              <div className="wds-process-num" aria-hidden="true">3</div>
              <div>
                <p className="wds-process-title">We negotiate.</p>
                <p className="wds-process-desc">You approve the final price before anything is committed.</p>
              </div>
            </div>
            <div className="wds-process-step">
              <div className="wds-process-num" aria-hidden="true">4</div>
              <div>
                <p className="wds-process-title">We handle the paperwork.</p>
                <p className="wds-process-desc">TRN, registration, transfer, done for you.</p>
              </div>
            </div>
            <div className="wds-process-step">
              <div className="wds-process-num" aria-hidden="true">5</div>
              <div>
                <p className="wds-process-title">Delivery.</p>
                <p className="wds-process-desc">Your car, ready, wherever you need it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--paper" aria-labelledby="pricing-heading">
        <div className="wds-inner">
          <h2 className="wds-h2" id="pricing-heading">Straightforward pricing, no surprises</h2>
          <div className="wds-tier-grid">
            <div className="wds-tier-card wds-tier-card--entry">
              <div className="wds-tier-price">From R18,000</div>
              <div className="wds-tier-range">Vehicles under R350,000</div>
            </div>
            <div className="wds-tier-card">
              <div className="wds-tier-price">R28,000</div>
              <div className="wds-tier-range">Vehicles R350,000 to R800,000</div>
            </div>
            <div className="wds-tier-card">
              <div className="wds-tier-price">R45,000+</div>
              <div className="wds-tier-range">Vehicles above R800,000, scoped individually</div>
            </div>
          </div>
          <p className="wds-tier-note">Inspection, transport, and registration costs are billed separately at actual cost. What we charge is for the work of finding, verifying, negotiating, and handling the paperwork, nothing hidden inside a bigger number later.</p>
          <div style={{ marginTop: '2rem' }}>
            <a href="#contact" className="wds-cta-btn">Get your quote</a>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--tint" aria-labelledby="faq-heading">
        <div className="wds-inner">
          <h2 className="wds-h2" id="faq-heading">Frequently asked questions</h2>
          <div className="wds-faq-list">
            {faqSchema.mainEntity.map((item) => (
              <details className="wds-faq-item" key={item.name}>
                <summary>{item.name}</summary>
                <p className="wds-faq-answer">{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--paper" id="contact" aria-labelledby="contact-heading">
        <div className="wds-inner">
          <h2 className="wds-h2" id="contact-heading">Start your enquiry</h2>
          <p className="wds-body">Tell us your budget, your vehicle requirements, and your timeline. We&apos;ll respond directly, with a realistic plan for how to get you into the right vehicle.</p>
          <div className="wds-contact-grid">
            <div>
              <IntlBuyersForm />
            </div>
            <div className="wds-contact-side">
              <div>
                <div className="wds-contact-email-label">Or email us directly</div>
                <a href="mailto:hello@avaloncapitalgroup.co.za" className="wds-contact-email">hello@avaloncapitalgroup.co.za</a>
              </div>
              <p className="wds-contact-trust">One advisor, one process, from your first email to the day your car is delivered.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="wds-footer">
        <div className="wds-footer-brand">Vantara - A Division of Avalon Capital Group</div>
        <div className="wds-footer-links">
          <Link href="/vantara">Vantara</Link>
          <Link href="/vantara/automotive">Deal Insights</Link>
          <Link href="/contact">Contact</Link>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
        <div className="wds-footer-legal">
          <p>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa</p>
          <p>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
        </div>
      </footer>
    </div>
  );
}
