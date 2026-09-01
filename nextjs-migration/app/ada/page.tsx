import Link from 'next/link';
import Image from 'next/image';
import AdaHeroMassive from '../components/AdaHeroMassive';
import AdaFounderSection from '../components/AdaFounderSection';
import AdaTrustBar from '../components/AdaTrustBar';
import BrowserMockup from '../components/BrowserMockup';
import AdaFaq from '../components/AdaFaq';
import { FAQS } from '../components/adaFaqData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADA | Websites That Rank & Convert | South Africa',
  description: 'ADA builds conversion-ready websites for South African businesses. Design, SEO, and the full system - so your site ranks on Google and turns visitors into paying clients.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";
const FOUNDER_PHOTO = "/assets/luyanda-ngubo.jpg";

function SectionTag({ children, onDark }: { children: React.ReactNode; onDark?: boolean }) {
  return <div className={`adaw-tag${onDark ? ' adaw-tag--onDark' : ''}`}>{children}</div>;
}

export default function ADA() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
      <div id="page-ada" className="page ada-section" role="main">
        <style suppressHydrationWarning>{`
          .adaw-tag { display: flex; align-items: center; gap: 12px; font-family: 'DM Sans', sans-serif; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; }
          .adaw-tag::before { content: ''; width: 24px; height: 1px; background: var(--ada-accent); display: inline-block; }
          .adaw-tag--onDark { color: rgba(255,255,255,0.4); }
          .adaw-tag--onDark::before { background: rgba(255,255,255,0.4); }

          .adaw-process-layout { display: grid; grid-template-columns: 3fr 2fr; gap: 3rem; align-items: center; }
          .adaw-process-illustration { display: flex; align-items: center; justify-content: center; }
          .adaw-process-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--ada-line); border: 1px solid var(--ada-line); border-radius: 16px; overflow: hidden; margin-top: 3.5rem; }
          .adaw-process-cell { background: var(--ada-white); padding: 2.5rem; transition: background 0.2s ease; }
          .adaw-process-cell:hover { background: var(--ada-wash); }
          .adaw-process-num { font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; color: var(--ada-accent); letter-spacing: 0.06em; margin-bottom: 12px; }
          .adaw-process-title { font-family: 'DM Sans', sans-serif; font-size: 17px; font-weight: 600; color: var(--ada-ink); margin-bottom: 8px; }
          .adaw-process-desc { font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--ada-ink-soft); line-height: 1.65; }

          .adaw-who-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem; }
          .adaw-who-item { display: flex; gap: 12px; align-items: flex-start; }
          .adaw-who-check { width: 20px; height: 20px; border-radius: 50%; background: var(--ada-accent); color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
          .adaw-who-text { font-family: 'DM Sans', sans-serif; font-size: 14.5px; line-height: 1.7; color: rgba(255,255,255,0.72); }
          .adaw-who-text strong { color: #FFFFFF; font-weight: 600; }

          .adaw-work-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem; }
          .adaw-work-card { border: 1px solid var(--ada-line); border-radius: 16px; overflow: hidden; background: var(--ada-white); transition: transform 0.25s ease, box-shadow 0.25s ease; }
          .adaw-work-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.09); }
          .adaw-card-body { padding: 2rem; }
          .adaw-card-tag { font-family: 'DM Sans', sans-serif; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 12px; }
          .adaw-card-title { font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 600; color: var(--ada-ink); margin-bottom: 12px; }
          .adaw-card-desc { font-family: 'DM Sans', sans-serif; font-size: 14px; line-height: 1.75; color: var(--ada-ink-soft); }
          .adaw-card-link { display: inline-block; margin-top: 18px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600; color: var(--ada-accent); text-decoration: none; }
          .adaw-card-link:hover { text-decoration: underline; }

          .adaw-concept-card { margin-top: 2rem; border: 1px solid #F0E0B0; border-radius: 16px; padding: 2.5rem; background: #FFFBF0; }
          .adaw-concept-badge { display: inline-block; background: #FEF3C7; border: 1px solid #F59E0B; color: #92400E; font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; border-radius: 100px; padding: 5px 12px; margin-bottom: 20px; }

          .adaw-pricing-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-top: 3rem; }
          .adaw-pricing-card { border: 1px solid var(--ada-line); border-radius: 16px; padding: 2.5rem; background: var(--ada-white); transition: transform 0.25s ease, box-shadow 0.25s ease; }
          .adaw-pricing-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.09); }
          .adaw-pricing-card--featured { background: var(--ada-ink); border-color: var(--ada-ink); }
          .adaw-pricing-tier { font-family: 'DM Sans', sans-serif; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 16px; }
          .adaw-pricing-card--featured .adaw-pricing-tier { color: #9DB4EE; }
          .adaw-pricing-price { font-family: 'Bodoni Moda', 'Cormorant Garamond', serif; font-size: 24px; color: var(--ada-ink); margin-bottom: 8px; }
          .adaw-pricing-card--featured .adaw-pricing-price { color: #fff; }
          .adaw-pricing-terms { font-family: 'DM Sans', sans-serif; font-size: 12px; color: var(--ada-ink-muted); margin-bottom: 16px; }
          .adaw-pricing-card--featured .adaw-pricing-terms { color: rgba(255,255,255,0.55); }
          .adaw-pricing-desc { font-family: 'DM Sans', sans-serif; font-size: 13.5px; line-height: 1.7; color: var(--ada-ink-soft); }
          .adaw-pricing-card--featured .adaw-pricing-desc { color: rgba(255,255,255,0.75); }

          .adaw-pricing-cta { display: block; margin: 2rem auto 0; text-align: center; width: fit-content; background: var(--ada-accent); color: #FFFFFF !important; border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--ada-accent); transition: background 0.2s ease, color 0.2s ease; }
          .adaw-pricing-cta:hover { background: #FFFFFF; color: var(--ada-accent) !important; }

          .adaw-closing { background: var(--ada-accent); padding: 8rem 3.5rem; text-align: center; }
          .adaw-closing-btn { display: inline-block; background: #FFFFFF; color: var(--ada-accent); font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; padding: 8px 16px; border-radius: 100px; text-decoration: none; margin-top: 28px; transition: background 0.2s ease, color 0.2s ease; }
          .adaw-closing-btn:hover { background: transparent; color: #FFFFFF; box-shadow: inset 0 0 0 1px #FFFFFF; }

          .adaw-footer { background: var(--ada-ink); padding: 3rem 3.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
          .adaw-footer-logo { font-family: 'Bodoni Moda', 'Cormorant Garamond', serif; font-size: 16px; font-weight: 600; color: #fff; text-decoration: none; }
          .adaw-footer-logo span { color: var(--ada-accent); }
          .adaw-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
          .adaw-footer-links a { font-family: 'DM Sans', sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s ease; }
          .adaw-footer-links a:hover { color: #fff; }
          .adaw-footer-reg { font-family: 'DM Sans', sans-serif; font-size: 12px; color: rgba(255,255,255,0.3); }

          @media (max-width: 768px) {
            .adaw-process-layout { grid-template-columns: 1fr; }
            .adaw-process-illustration { display: none; }
            .adaw-process-grid, .adaw-who-grid, .adaw-work-grid, .adaw-pricing-grid { grid-template-columns: 1fr; }
            .adaw-closing { padding: 4.5rem 20px; }
            .adaw-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
          }
        `}</style>

        <AdaHeroMassive />

        <AdaFounderSection />

        <AdaTrustBar />

        {/* OUR WORK */}
        <section id="work" className="ada2-section ada2-section--white" aria-labelledby="work-heading">
          <div className="ada2-inner">
            <SectionTag>Our work</SectionTag>
            <h2 className="ada2-h2 ada-display" id="work-heading">Real work. Real results.</h2>

            <div className="adaw-work-grid">
              <div className="adaw-work-card">
                <BrowserMockup src="/work/afripact-full.webp" url="afripact.net" alt="Afripact Civils website" width={1400} height={8677} speedMultiplier={1.45} />
                <div className="adaw-card-body">
                  <div className="adaw-card-tag">Civil Construction, KZN</div>
                  <div className="adaw-card-title">Zero Search Presence to 100+ Ranking Queries.</div>
                  <p className="adaw-card-desc">Afripact had completed real projects for real clients. Nothing online showed it. We rebuilt the site around the credibility they&apos;d already earned. Within weeks, inspection requests were coming from people who had never heard of them before.</p>
                  <Link href="/ada/afripact-civils" className="adaw-card-link">Read the full case study →</Link>
                </div>
              </div>
              <div className="adaw-work-card">
                <BrowserMockup src="/work/acg-full.webp" url="avaloncapitalgroup.co.za" alt="Avalon Capital Group website" width={1400} height={3429} />
                <div className="adaw-card-body">
                  <div className="adaw-card-tag">Holding Group, Pietermaritzburg</div>
                  <div className="adaw-card-title">We ran our own process on ourselves.</div>
                  <p className="adaw-card-desc">1 page indexed on Google. Now 29. We found the problem, fixed it, and documented every decision.</p>
                  <Link href="/ada/acg-case-study" className="adaw-card-link">Read the full case study →</Link>
                </div>
              </div>
            </div>

            <div className="adaw-concept-card">
              <div className="adaw-concept-badge">⚠ Concept build, not a delivered engagement</div>
              <div className="adaw-card-title">Canopy Courier — what we&apos;d build for a fleet business.</div>
              <p className="adaw-card-desc">This never went live. We built the full strategic and design package to show what a fleet-focused rebuild looks like. Eight components, dual retail and fleet paths, four SEO landing pages. Projected upside modelled at R1M to R2M per year. That is a projection from the pitch, not a measured result.</p>
              <Link href="/ada/canopy-courier" className="adaw-card-link">See the concept →</Link>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" style={{ background: 'var(--ada-wash)', padding: '6rem 0' }} aria-labelledby="pricing-heading">
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 3.5rem' }}>
            <SectionTag>Investment</SectionTag>
            <h2 className="ada2-h2 ada-display" id="pricing-heading">We don&apos;t sell cheap.<br />We sell what works.</h2>

            <div className="adaw-pricing-grid">
              <div className="adaw-pricing-card">
                <div className="adaw-pricing-tier">Foundation</div>
                <div className="adaw-pricing-price ada-display">R18,500</div>
                <div className="adaw-pricing-terms">Once-off</div>
                <p className="adaw-pricing-desc">For businesses that need a site as good as the work they do.</p>
              </div>
              <div className="adaw-pricing-card adaw-pricing-card--featured">
                <div className="adaw-pricing-tier">Growth</div>
                <div className="adaw-pricing-price ada-display">R34,000</div>
                <div className="adaw-pricing-terms">Once-off, or R12,500/month (3-month min)</div>
                <p className="adaw-pricing-desc">Website plus SEO plus a system built to keep bringing in enquiries.</p>
              </div>
              <div className="adaw-pricing-card">
                <div className="adaw-pricing-tier">Authority</div>
                <div className="adaw-pricing-price ada-display">Custom</div>
                <div className="adaw-pricing-terms">By enquiry</div>
                <p className="adaw-pricing-desc">For businesses ready to lead their category. Scope confirmed on the call.</p>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '2rem', fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'var(--ada-ink-muted)' }}>Payment can be split. Terms confirmed on the call.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="adaw-pricing-cta">Start a conversation →</a>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="process" className="ada2-section ada2-section--white" aria-labelledby="process-heading">
          <div className="ada2-inner">
            <div className="adaw-process-layout">
              <div>
                <SectionTag>What we do</SectionTag>
                <h2 className="ada2-h2 ada-display" id="process-heading">Websites that actually work.</h2>
                <p className="ada2-body">We build websites that look professional and turn visitors into enquiries. Clear message. Easy to use. Built to rank on Google and convert.</p>

                <div className="adaw-process-grid">
                  <div className="adaw-process-cell">
                    <div className="adaw-process-num">01</div>
                    <div className="adaw-process-title">Audit</div>
                    <div className="adaw-process-desc">We look at what you have and where it&apos;s losing people. No assumptions, just data.</div>
                  </div>
                  <div className="adaw-process-cell">
                    <div className="adaw-process-num">02</div>
                    <div className="adaw-process-title">Strategy</div>
                    <div className="adaw-process-desc">We decide what each page needs to do before we design anything. Structure first.</div>
                  </div>
                  <div className="adaw-process-cell">
                    <div className="adaw-process-num">03</div>
                    <div className="adaw-process-title">Build</div>
                    <div className="adaw-process-desc">Copy and design, built together, so the site does its job from day one.</div>
                  </div>
                  <div className="adaw-process-cell">
                    <div className="adaw-process-num">04</div>
                    <div className="adaw-process-title">Grow</div>
                    <div className="adaw-process-desc">We confirm indexing, watch what&apos;s working, and build the next layer on top.</div>
                  </div>
                </div>
              </div>
              <div className="adaw-process-illustration">
                <Image src="/illustrations/undraw_building-websites_k2zp.svg" width={420} height={320} alt="Building websites that work" style={{ width: '100%', height: 'auto', opacity: 0.9 }} />
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section style={{ background: 'var(--ada-ink)', padding: '6rem 0' }} aria-labelledby="who-heading">
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 3.5rem' }}>
            <SectionTag onDark>Who this is for</SectionTag>
            <h2 className="ada-display" id="who-heading" style={{ fontWeight: 400, fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.15, color: '#FFFFFF' }}>
              Built for established businesses.<br />Not for everyone.
            </h2>

            <div className="adaw-who-grid">
              <div className="adaw-who-item">
                <div className="adaw-who-check">✓</div>
                <div className="adaw-who-text"><strong>You&apos;ve been operating for years.</strong> You have completed projects, credentials, and clients who trust you. Your website should communicate that to the ones who haven&apos;t met you yet.</div>
              </div>
              <div className="adaw-who-item">
                <div className="adaw-who-check">✓</div>
                <div className="adaw-who-text"><strong>Fixed price on Foundation and Growth.</strong> You know the cost before anything starts.</div>
              </div>
              <div className="adaw-who-item">
                <div className="adaw-who-check">✓</div>
                <div className="adaw-who-text"><strong>No retainer traps.</strong> Every project is scoped before it starts.</div>
              </div>
              <div className="adaw-who-item">
                <div className="adaw-who-check">✓</div>
                <div className="adaw-who-text"><strong>Not the cheapest option.</strong> If you want a site that reflects the business you&apos;ve actually built, we are the right fit.</div>
              </div>
              <div className="adaw-who-item">
                <div className="adaw-who-check">✓</div>
                <div className="adaw-who-text"><strong>Solo-run, AI-augmented.</strong> You work directly with the person doing the work. No overhead.</div>
              </div>
              <div className="adaw-who-item">
                <div className="adaw-who-check">✓</div>
                <div className="adaw-who-text"><strong>Diagnosis before design.</strong> We find the gap first. Everything else follows from that.</div>
              </div>
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
              <Image src="/illustrations/undraw_under-construction_hdrn.svg" width={600} height={200} alt="Built for construction businesses" style={{ width: '100%', maxWidth: '600px', height: 'auto', opacity: 0.15, filter: 'brightness(10)' }} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="ada2-section ada2-section--white" aria-labelledby="faq-ada-heading">
          <div className="ada2-inner">
            <SectionTag>Questions</SectionTag>
            <h2 className="ada2-h2 ada-display" id="faq-ada-heading">Straight answers.</h2>
            <AdaFaq />
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="adaw-closing" aria-labelledby="closing-heading">
          <Image src="/illustrations/undraw_referral_ihsd.svg" width={200} height={175} alt="" style={{ width: '180px', height: 'auto', opacity: 0.25, filter: 'brightness(10)', marginBottom: '2rem' }} />
          <h2 className="ada-display" id="closing-heading" style={{ fontWeight: 400, fontSize: 'clamp(28px, 3.6vw, 44px)', color: '#FFFFFF', marginBottom: '16px' }}>Ready when you are.</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '480px', margin: '0 auto' }}>One conversation is enough to know if this is the right fit.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="adaw-closing-btn" style={{ display: 'inline-flex', alignItems: 'center' }}>
            Start a conversation →
            <span style={{ position: 'relative', width: '48px', height: '48px', marginLeft: '10px', border: '2px solid rgba(255,255,255,0.4)', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
              <Image src={FOUNDER_PHOTO} alt="" fill sizes="48px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            </span>
          </a>
        </section>

        {/* FOOTER */}
        <footer className="adaw-footer">
          <Link href="/ada" className="adaw-footer-logo">ADA<span>.</span></Link>
          <div className="adaw-footer-links">
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="adaw-footer-reg">Avalon Capital Group (Pty) Ltd &bull; Reg. 2025/671885/07</div>
        </footer>
      </div>
    </>
  );
}
