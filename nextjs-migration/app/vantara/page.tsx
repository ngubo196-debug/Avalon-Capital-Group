import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

const url = 'https://www.avaloncapitalgroup.co.za/vantara';
const image = 'https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg';

export const metadata: Metadata = {
  title: { absolute: 'Vantara | Car Buying Advisor for Buyers in South Africa' },
  description: 'Vantara is a car buying advisor that works only for you. Luyanda Ngubo finds the car, checks its value, negotiates the price and handles the paperwork, in South Africa or from abroad.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Vantara | Car Buying Advisor for Buyers in South Africa',
    description: 'Vantara is a car buying advisor that works only for you. Luyanda Ngubo finds the car, checks its value, negotiates the price and handles the paperwork, in South Africa or from abroad.',
    url,
    siteName: 'Vantara',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: image, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Vantara | Car Buying Advisor for Buyers in South Africa', description: 'Vantara is a car buying advisor that works only for you. Luyanda Ngubo finds the car, checks its value, negotiates the price and handles the paperwork, in South Africa or from abroad.', images: [image] },
};

export const dynamic = 'force-static';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.avaloncapitalgroup.co.za/vantara#vantara",
      "name": "Vantara",
      "description": "Vehicle acquisition advisory that works only for the buyer: sourcing, value checks, inspection, negotiation and paperwork, for buyers in South Africa and from abroad.",
      "url": "https://www.avaloncapitalgroup.co.za/vantara",
      "logo": "https://www.avaloncapitalgroup.co.za/assets/vantara/logo-full-ink.png",
      "image": "https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg",
      "telephone": "+27712205313",
      "email": "luyanda@avaloncapitalgroup.co.za",
      "priceRange": "R2,500 to R45,000+",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pietermaritzburg",
        "addressRegion": "KwaZulu-Natal",
        "addressCountry": "ZA"
      },
      "areaServed": {
        "@type": "Country",
        "name": "South Africa"
      },
      "founder": {
        "@id": "https://www.avaloncapitalgroup.co.za/#luyanda"
      },
      "parentOrganization": {
        "@id": "https://www.avaloncapitalgroup.co.za/#org"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.avaloncapitalgroup.co.za/#luyanda",
      "name": "Luyanda Ngubo",
      "jobTitle": "Founder, Avalon Capital Group",
      "image": "https://www.avaloncapitalgroup.co.za/assets/vantara/luyanda-certificate.jpg",
      "url": "https://www.avaloncapitalgroup.co.za/vantara/about",
      "worksFor": [
        {
          "@id": "https://www.avaloncapitalgroup.co.za/#org"
        },
        {
          "@id": "https://www.avaloncapitalgroup.co.za/vantara#vantara"
        }
      ],
      "description": "Luyanda Ngubo runs Vantara. Three years selling cars on a dealership floor, trained by BAIC South Africa, now working only for the buyer.",
      "knowsAbout": [
        "Vehicle acquisition",
        "Car dealership sales",
        "Vehicle finance structuring",
        "Traffic Register Number applications",
        "Buying a car in South Africa as a foreigner"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "BAIC SA B30 Launch Theme training",
        "credentialCategory": "Certificate of completion",
        "dateCreated": "2025-10",
        "recognizedBy": {
          "@type": "Organization",
          "name": "BAIC Automobile SA"
        }
      }
    },
    {
      "@type": "WebPage",
      "url": "https://www.avaloncapitalgroup.co.za/vantara",
      "name": "Vantara | Car Buying Advisor for Buyers in South Africa",
      "about": {
        "@id": "https://www.avaloncapitalgroup.co.za/vantara#vantara"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does it cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Buying in South Africa starts from R5,000, structured into your budget rather than added on top. Buying from abroad starts from R18,000 and scales with the value of the car. TRN help on its own is R2,500. Inspection, transport and registration are billed at actual cost and shown to you separately."
          }
        },
        {
          "@type": "Question",
          "name": "Who checks the car before I commit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every car on the shortlist is checked against trade and retail value and gets a physical inspection before you commit. I'm there when it makes sense, and I arrange the inspection when I'm not."
          }
        },
        {
          "@type": "Question",
          "name": "I live abroad. Can I still buy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Sourcing, value checks and negotiation happen before you arrive. Registration in your name needs a Traffic Register Number and is done in person once you land. The buying from abroad page covers it in full."
          }
        },
        {
          "@type": "Question",
          "name": "How do I start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Send me a WhatsApp with your budget, the car you have in mind and your timeline. I'll reply directly and tell you honestly whether I can add value."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        <section className="hero" aria-labelledby="h1">
          <div className="hero-lines" aria-hidden="true">
            <svg viewBox="0 0 1000 900" preserveAspectRatio="xMidYMid meet">
              <path style={{ '--d': '200' } as CSSProperties} d="M120 -20 L560 860" />
              <path style={{ '--d': '320' } as CSSProperties} d="M168 -20 L584 812" />
              <path style={{ '--d': '440' } as CSSProperties} d="M1020 -20 L584 852" />
            </svg>
          </div>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow ld" style={{ '--d': '80' } as CSSProperties}>
                <i></i>
                Car buying advisor · South Africa
              </p>
              <h1 id="h1">
                <span className="ln">
                  <span style={{ '--d': '160' } as CSSProperties}>We work for</span>
                </span>
                <span className="ln">
                  <span style={{ '--d': '240' } as CSSProperties}>
                    the
                    {' '}
                    <em>buyer</em>
                    .
                  </span>
                </span>
                <span className="ln">
                  <span style={{ '--d': '320' } as CSSProperties}>Only the buyer.</span>
                </span>
              </h1>
              <p className="lede ld" style={{ '--d': '460' } as CSSProperties}>
                Vantara finds the car, checks what it is worth, negotiates the price and handles the paperwork. You make the final call with the full picture, in South Africa or from abroad.
              </p>
              <div className="cta-row ld" style={{ '--d': '560' } as CSSProperties}>
                <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-HERO)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-HERO">
                  Start the conversation
                  {' '}
                  <span className="arr">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                {' '}
                <Link href="/vantara/international-buyers" className="ghost">Buying from abroad</Link>
              </div>
              <p className="signed ld" style={{ '--d': '660' } as CSSProperties}>
                <span>
                  Run by
                  {' '}
                  <b>Luyanda Ngubo</b>
                </span>
                <span aria-hidden="true">·</span>
                <span className="reg">Reg. 2025/671885/07</span>
              </p>
            </div>
            <div className="hero-art">
              <figure className="portrait" style={{ margin: '0' }}>
                <img src="/assets/vantara/luyanda-certificate.jpg" alt="Luyanda Ngubo holding his BAIC South Africa training certificate" width="640" height="800" fetchPriority="high" />
                <figcaption>
                  <span className="seal" aria-hidden="true">
                    <svg viewBox="0 0 20 20">
                      <path d="M10 2.5l2.2 1.6 2.7-.1.8 2.6 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-.8 2.6-2.7-.1L10 17.5l-2.2-1.6-2.7.1-.8-2.6-2.2-1.6.9-2.6-.9-2.6 2.2-1.6.8-2.6 2.7.1z" fill="none" stroke="currentColor" strokeWidth="1.1" />
                      <path d="M7 10.2l2 2 4-4.2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>
                    <b>Luyanda Ngubo</b>
                    BAIC SA B30 launch training, October 2025
                  </span>
                </figcaption>
              </figure>
              <div className="dealfile" aria-label="What happens on every deal">
                <div className="df-head">
                  <b>Your deal file</b>
                  <span>Every deal</span>
                </div>
                <ul className="df-list" id="dfList">
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Your brief and budget
                  </li>
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Shortlist sourced
                  </li>
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Checked against trade and retail value
                  </li>
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Physical inspection
                  </li>
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Price negotiated, you approve
                  </li>
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Paperwork and handover
                  </li>
                </ul>
                <div className="df-foot">
                  <span>Working for</span>
                  <b>The buyer</b>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section aria-label="Track record">
          <div className="wrap">
            <div className="facts">
              <Link href="/vantara/automotive" className="fact rv" style={{ '--s': '0' } as CSSProperties}>
                <i></i>
                <b data-count="60000" data-prefix="R">R60,000</b>
                <span>Dealer support extracted on one deal</span>
              </Link>
              {' '}
              <Link href="/vantara/insight-4" className="fact rv" style={{ '--s': '1' } as CSSProperties}>
                <i></i>
                <b data-count="19014" data-prefix="R">R19,014</b>
                <span>Below-market price found before negotiation started</span>
              </Link>
              <div className="fact rv" style={{ '--s': '2' } as CSSProperties}>
                <i></i>
                <b data-count="3" data-suffix=" years">3 years</b>
                <span>Selling cars on a dealership floor</span>
              </div>
              <Link href="/vantara/about" className="fact rv" style={{ '--s': '3' } as CSSProperties}>
                <i></i>
                <b>BAIC SA</b>
                <span>Manufacturer launch training, Gqeberha, October 2025</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="sec ways" id="ways" aria-labelledby="ways-h">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow rv">
                  <i></i>
                  Two ways to buy
                </p>
                <h2 id="ways-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                  Here or from abroad.
                  {' '}
                  <em>Same side of the table.</em>
                </h2>
              </div>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>Whether you live down the road or you land next month, the work is the same: the right car, checked, at a fair price.</p>
            </div>
            <div className="ways-grid">
              <article className="way rv" style={{ '--s': '0' } as CSSProperties}>
                <div className="way-top">
                  <span className="tag">In South Africa</span>
                </div>
                <h3>Buying at home</h3>
                <p>Give me your budget. I find the car, negotiate with the dealer and set up the finance if you need it.</p>
                <ul className="checks">
                  <li>
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8.4l3 3 7-7" />
                    </svg>
                    Sourcing to your budget
                  </li>
                  <li>
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8.4l3 3 7-7" />
                    </svg>
                    Full negotiation with the dealer
                  </li>
                  <li>
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8.4l3 3 7-7" />
                    </svg>
                    Finance structuring support
                  </li>
                </ul>
                <div className="price">
                  <b>
                    <small>From</small>
                    R5,000
                  </b>
                  <span>Structured into your budget, not added on top.</span>
                </div>
              </article>
              <article className="way rv" style={{ '--s': '1' } as CSSProperties}>
                <div className="way-top">
                  <span className="tag gold">From abroad</span>
                </div>
                <h3>Buying before you land</h3>
                <p>I source, check and negotiate the car while you are overseas, and prepare your Traffic Register Number. Registration is done in person once you arrive.</p>
                <ul className="checks">
                  <li>
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8.4l3 3 7-7" />
                    </svg>
                    Sourcing and value checks
                  </li>
                  <li>
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8.4l3 3 7-7" />
                    </svg>
                    Negotiation on your behalf
                  </li>
                  <li>
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8.4l3 3 7-7" />
                    </svg>
                    TRN and registration paperwork
                  </li>
                  <li>
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8.4l3 3 7-7" />
                    </svg>
                    Car held or delivered for your arrival
                  </li>
                </ul>
                <div className="price">
                  <b>
                    <small>From</small>
                    R18,000
                  </b>
                  <Link href="/vantara/international-buyers" className="ghost">See the full process</Link>
                </div>
              </article>
            </div>
            <div className="related" style={{ marginTop: '20px' }}>
              <Link href="/vantara/traffic-register-number" className="rel rv" style={{ '--s': '0' } as CSSProperties}>
                <span className="tag">R2,500</span>
                <h3>Only need a TRN?</h3>
                <p>I prepare your Traffic Register Number application remotely so you get through in one visit.</p>
              </Link>
              {' '}
              <Link href="/vantara/overland-vehicle-south-africa" className="rel rv" style={{ '--s': '1' } as CSSProperties}>
                <span className="tag">Overland</span>
                <h3>Driving Africa?</h3>
                <p>Buy your 4x4 in South Africa, checked and ready for the road north when you land.</p>
              </Link>
              {' '}
              <Link href="/vantara/deals" className="rel rv" style={{ '--s': '2' } as CSSProperties}>
                <span className="tag">Real deals</span>
                <h3>See the numbers</h3>
                <p>Two deals broken down in full, from the trade-in to the final decision.</p>
              </Link>
            </div>
          </div>
        </section>
        <section className="sec" id="how" aria-labelledby="how-h">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow rv">
                  <i></i>
                  How it works
                </p>
                <h2 id="how-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                  Five steps.
                  {' '}
                  <em>You sign off on each one.</em>
                </h2>
              </div>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>Nothing moves to the next step until the one before it is done. Nothing is bought until you approve the final price.</p>
            </div>
            <div className="steps-wrap">
              <span className="rail" aria-hidden="true">
                <i id="rail"></i>
              </span>
              <ol className="steps" id="steps">
                <li className="step lit rv" style={{ '--s': '0' } as CSSProperties}>
                  <span className="dot">01</span>
                  <div>
                    <h3>Brief</h3>
                    <p>Tell me your budget, the car you want and your timeline.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '1' } as CSSProperties}>
                  <span className="dot">02</span>
                  <div>
                    <h3>Shortlist</h3>
                    <p>I search dealer stock, private sales and my network, then check every option against trade and retail value.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '2' } as CSSProperties}>
                  <span className="dot">03</span>
                  <div>
                    <h3>Inspect</h3>
                    <p>Every car on the shortlist gets a physical inspection. I&apos;m there when it makes sense, and I arrange it when I&apos;m not.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '3' } as CSSProperties}>
                  <span className="dot">04</span>
                  <div>
                    <h3>Negotiate</h3>
                    <p>I negotiate the price. You approve the final number before anything is signed.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '4' } as CSSProperties}>
                  <span className="dot">05</span>
                  <div>
                    <h3>Handover</h3>
                    <p>Transfer, registration and roadworthy handled. You collect the keys.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="sec proof-band" aria-labelledby="person-h">
          <div className="wrap teaser">
            <div className="teaser-media">
              <figure className="shot">
                <button className="reveal-img" style={{ '--s': '0' } as CSSProperties} data-lb="0" aria-label="View larger: Delivered to the buyer's business">
                  <img src="/assets/vantara/handover-gidmar.jpg" alt="Luyanda shaking hands with a buyer at the buyer's business after delivery" loading="lazy" width="1100" height="825" style={{ objectPosition: '55% 50%' }} />
                </button>
                <figcaption>
                  <b>Delivered to the buyer&apos;s business</b>
                  <span>Handover</span>
                </figcaption>
              </figure>
              <figure className="shot">
                <button className="reveal-img" style={{ '--s': '1' } as CSSProperties} data-lb="1" aria-label="View larger: With the new B30">
                  <img src="/assets/vantara/baic-b30.jpg" alt="Luyanda beside a BAIC B30 at the launch training" loading="lazy" width="900" height="1200" />
                </button>
                <figcaption>
                  <b>With the new B30</b>
                  <span>BAIC SA · Oct 2025</span>
                </figcaption>
              </figure>
              <figure className="shot">
                <button className="reveal-img" style={{ '--s': '2' } as CSSProperties} data-lb="2" aria-label="View larger: Outside the plant">
                  <img src="/assets/vantara/baic-plant.jpg" alt="Luyanda outside the BAIC South Africa plant" loading="lazy" width="900" height="1124" style={{ objectPosition: '50% 70%' }} />
                </button>
                <figcaption>
                  <b>Outside the plant</b>
                  <span>Gqeberha · Oct 2025</span>
                </figcaption>
              </figure>
            </div>
            <div className="teaser-copy">
              <p className="eyebrow rv">
                <i></i>
                The person behind Vantara
              </p>
              <h2 id="person-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                I&apos;m Luyanda.
                {' '}
                <em>I represent buyers.</em>
              </h2>
              <p className="rv" style={{ '--s': '2' } as CSSProperties}>
                Three years selling cars on a dealership floor, and trained by BAIC South Africa at its plant. I know how a price is built and who it is built for. Vantara puts that on your side of the table.
              </p>
              <Link href="/vantara/about" className="btn btn-line rv" style={{ '--s': '3' } as CSSProperties}>Meet Luyanda</Link>
            </div>
          </div>
        </section>
        <section className="sec" id="faq" aria-labelledby="faq-h">
          <div className="wrap faq">
            <div className="faq-intro">
              <p className="eyebrow rv">
                <i></i>
                Questions
              </p>
              <h2 id="faq-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                Straight
                {' '}
                <em>answers.</em>
              </h2>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>Something not covered here? Ask me directly on WhatsApp.</p>
            </div>
            <div>
              <details className="rv" style={{ '--s': '0' } as CSSProperties}>
                <summary>
                  What does it cost?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    Buying in South Africa starts from R5,000, structured into your budget rather than added on top. Buying from abroad starts from R18,000 and scales with the value of the car. TRN help on its own is R2,500.
                  </p>
                  <p>Inspection, transport and registration are billed at actual cost and shown to you separately.</p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '1' } as CSSProperties}>
                <summary>
                  Who checks the car before I commit?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    Every car on the shortlist is checked against trade and retail value and gets a physical inspection before you commit. I&apos;m there when it makes sense, and I arrange the inspection when I&apos;m not.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '2' } as CSSProperties}>
                <summary>
                  I live abroad. Can I still buy?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    Yes. Sourcing, value checks and negotiation happen before you arrive. Registration in your name needs a Traffic Register Number and is done in person once you land. The
                    {' '}
                    <Link href="/vantara/international-buyers" className="ghost">buying from abroad</Link>
                    {' '}
                    page covers it in full.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '3' } as CSSProperties}>
                <summary>
                  How do I start?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>Send me a WhatsApp with your budget, the car you have in mind and your timeline. I&apos;ll reply directly and tell you honestly whether I can add value.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="close" id="start" aria-labelledby="close-h">
          <div className="close-lines" aria-hidden="true">
            <svg viewBox="0 0 900 600">
              <path d="M80 -20 L420 620" />
              <path d="M118 -20 L440 580" />
              <path d="M860 -20 L440 620" />
            </svg>
          </div>
          <div className="wrap">
            <div className="close-l">
              <p className="eyebrow">
                <i></i>
                Start here
              </p>
              <h2 id="close-h">
                Tell me what you&apos;re buying.
                {' '}
                <em>I&apos;ll tell you what it should cost.</em>
              </h2>
              <p>One message with your budget and the car you want. I reply myself.</p>
              <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-CLOSE-HOME)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-CLOSE-HOME">
                Start the conversation
                {' '}
                <span className="arr">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="close-r">
              <div className="contact-card">
                <small>Email</small>
                <div className="contact-row">
                  <span id="email">luyanda@avaloncapitalgroup.co.za</span>
                  <button className="chip-btn" id="copyEmail" type="button">Copy</button>
                </div>
              </div>
              <div className="contact-card">
                <small>WhatsApp</small>
                <div className="contact-row">
                  <span>+27 71 220 5313</span>
                </div>
              </div>
              <div className="contact-card">
                <small>Based in</small>
                <div className="contact-row">
                  <span>Pietermaritzburg. Buyers anywhere in South Africa and abroad.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
