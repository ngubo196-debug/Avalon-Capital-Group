import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

const url = 'https://www.avaloncapitalgroup.co.za/vantara/international-buyers';
const image = 'https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg';

export const metadata: Metadata = {
  title: { absolute: 'Buy a Car in South Africa as a Foreigner | Vantara' },
  description: 'Buying a car in South Africa from abroad? Vantara sources, checks, inspects and negotiates before you land, and prepares your TRN. From R18,000. Prices in ZAR, USD, EUR and GBP.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Buy a Car in South Africa as a Foreigner | Vantara',
    description: 'Buying a car in South Africa from abroad? Vantara sources, checks, inspects and negotiates before you land, and prepares your TRN. From R18,000. Prices in ZAR, USD, EUR and GBP.',
    url,
    siteName: 'Vantara',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: image, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Buy a Car in South Africa as a Foreigner | Vantara', description: 'Buying a car in South Africa from abroad? Vantara sources, checks, inspects and negotiates before you land, and prepares your TRN. From R18,000. Prices in ZAR, USD, EUR and GBP.', images: [image] },
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
      "@type": "Service",
      "name": "Vehicle buying service for foreign buyers",
      "serviceType": "Vehicle acquisition for international buyers",
      "description": "Sourcing, value checks, inspection, negotiation and TRN and registration paperwork for people buying a car in South Africa from abroad.",
      "url": "https://www.avaloncapitalgroup.co.za/vantara/international-buyers",
      "provider": {
        "@id": "https://www.avaloncapitalgroup.co.za/vantara#vantara"
      },
      "areaServed": {
        "@type": "Country",
        "name": "South Africa"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Vehicles under R350,000",
          "price": "18000",
          "priceCurrency": "ZAR",
          "description": "Sourcing, value checks, negotiation and paperwork for vehicles under R350,000. Pass-through costs billed at actual cost."
        },
        {
          "@type": "Offer",
          "name": "Vehicles R350,000 to R800,000",
          "price": "28000",
          "priceCurrency": "ZAR",
          "description": "Sourcing, value checks, negotiation and paperwork for vehicles between R350,000 and R800,000."
        },
        {
          "@type": "Offer",
          "name": "Vehicles above R800,000",
          "price": "45000",
          "priceCurrency": "ZAR",
          "description": "Starting price for vehicles above R800,000, scoped individually."
        },
        {
          "@type": "Offer",
          "name": "Traffic Register Number preparation",
          "price": "2500",
          "priceCurrency": "ZAR",
          "description": "TRN preparation on its own, credited toward the full service."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a foreigner buy and register a car in South Africa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You need a Traffic Register Number (TRN), which puts you on the national vehicle system without a South African ID number. The City of Cape Town lists a valid passport, a valid visa or permit, two ID photos and proof of address. I prepare the application with you and you attend the appointment in person. More on the TRN."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be in the country?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not for the search. Sourcing, value checks, inspection and negotiation all happen before you arrive. Registration in your name is done in person once you land, and the car can be held for you until then."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a TRN on a tourist entry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the licensing office. Offices apply the visa requirement differently, so I confirm it for your situation before you pay anything."
          }
        },
        {
          "@type": "Question",
          "name": "Who inspects the car?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every car on the shortlist is checked against trade and retail value and gets a physical inspection before you commit. I'm there when it makes sense, and I arrange the inspection when I'm not. You see the report."
          }
        },
        {
          "@type": "Question",
          "name": "Can you import a car for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. South Africa's import rules for used cars are restrictive, so I source locally. That keeps import duties and permits out of your deal."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the brief and how fast the right car is found and checked. Start six to eight weeks before you land so the TRN appointment and the car line up with your arrival."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Vantara",
          "item": "https://www.avaloncapitalgroup.co.za/vantara"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Buying from abroad",
          "item": "https://www.avaloncapitalgroup.co.za/vantara/international-buyers"
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
        <section className="page-hero" aria-labelledby="h1">
          <div className="hero-lines" aria-hidden="true">
            <svg viewBox="0 0 1000 900" preserveAspectRatio="xMidYMid meet">
              <path style={{ '--d': '200' } as CSSProperties} d="M120 -20 L560 860" />
              <path style={{ '--d': '320' } as CSSProperties} d="M168 -20 L584 812" />
              <path style={{ '--d': '440' } as CSSProperties} d="M1020 -20 L584 852" />
            </svg>
          </div>
          <div className="wrap page-hero-grid">
            <div className="hero-copy">
              <nav className="crumbs ld" style={{ '--d': '40' } as CSSProperties} aria-label="Breadcrumb">
                <Link href="/vantara">Vantara</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Buying from abroad</span>
              </nav>
              <p className="eyebrow ld" style={{ '--d': '80' } as CSSProperties}>
                <i></i>
                For buyers outside South Africa
              </p>
              <h1 id="h1">
                <span className="ln">
                  <span style={{ '--d': '160' } as CSSProperties}>Buy a car in South Africa</span>
                </span>
                <span className="ln">
                  <span style={{ '--d': '260' } as CSSProperties}>
                    <em>before you land.</em>
                  </span>
                </span>
              </h1>
              <p className="ld" style={{ '--d': '420' } as CSSProperties}>
                I source the car, check its value, arrange the inspection and negotiate the price while you are still overseas. Your Traffic Register Number is prepared in advance, so registration is one appointment once you arrive.
              </p>
              <div className="cta-row ld" style={{ '--d': '520' } as CSSProperties}>
                <a className="btn btn-ink" href="#start">
                  Start your enquiry
                  {' '}
                  <span className="arr">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                <a className="ghost" href="#pricing">See pricing</a>
              </div>
            </div>
            <div className="svc-card" aria-label="What happens before and after you land">
              <div className="df-head">
                <b>Your purchase file</b>
                <span>From abroad</span>
              </div>
              <div className="phase">
                <small>Before you land</small>
                <ul className="df-list" id="dfList">
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Car sourced to your brief
                  </li>
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Value checked, inspection arranged
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
                    TRN documents and booking ready
                  </li>
                </ul>
              </div>
              <div className="phase">
                <small>After you land</small>
                <ul className="df-list">
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    TRN appointment, in person
                  </li>
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Registration in your name
                  </li>
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Keys handed over
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="sec ways" aria-labelledby="pain-h">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow rv">
                  <i></i>
                  Why buyers get stuck
                </p>
                <h2 id="pain-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                  Buying blind
                  {' '}
                  <em>is expensive.</em>
                </h2>
              </div>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>Doing this alone from another country means guessing on price, trusting a stranger on condition and learning the paperwork the hard way.</p>
            </div>
            <div className="pains">
              <div className="pain rv" style={{ '--s': '0' } as CSSProperties}>
                <h3>No local price reference</h3>
                <p>You can&apos;t tell a fair price from a dealer&apos;s opening number when you don&apos;t know the market.</p>
              </div>
              <div className="pain rv" style={{ '--s': '1' } as CSSProperties}>
                <h3>No way to see the car</h3>
                <p>Photos hide what an inspection finds. Without someone on your side, condition is a guess.</p>
              </div>
              <div className="pain rv" style={{ '--s': '2' } as CSSProperties}>
                <h3>The TRN catches people out</h3>
                <p>A car can&apos;t be registered in your name without a Traffic Register Number, and most buyers hear about it too late.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec" aria-labelledby="scope-h">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow rv">
                  <i></i>
                  What I handle
                </p>
                <h2 id="scope-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                  The full purchase,
                  {' '}
                  <em>one person.</em>
                </h2>
              </div>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>You deal with me from the first message to the keys. No handoffs, no chasing.</p>
            </div>
            <div className="scope">
              <div className="scope-item rv" style={{ '--s': '0' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>Sourcing</h3>
                  <p>Dealer stock, private sales and my network, searched against your budget, spec and non-negotiables. You get a shortlist, not one car.</p>
                </div>
              </div>
              <div className="scope-item rv" style={{ '--s': '1' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>Value checks</h3>
                  <p>Every shortlisted car is checked against trade and retail value before you spend a rand.</p>
                </div>
              </div>
              <div className="scope-item rv" style={{ '--s': '0' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>Inspection</h3>
                  <p>A physical inspection on the car you choose, with the report reviewed with you.</p>
                </div>
              </div>
              <div className="scope-item rv" style={{ '--s': '1' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>Negotiation</h3>
                  <p>I negotiate on your behalf. You approve the final price before anything is committed.</p>
                </div>
              </div>
              <div className="scope-item rv" style={{ '--s': '0' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>TRN and registration</h3>
                  <p>TRN application prepared, registration, ownership transfer and roadworthy where required.</p>
                </div>
              </div>
              <div className="scope-item rv" style={{ '--s': '1' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>Delivery or holding</h3>
                  <p>The car delivered where you land, or held until you arrive.</p>
                </div>
              </div>
              <div className="scope-item rv out" style={{ '--s': '0' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
                <div>
                  <h3>Not included: importing</h3>
                  <p>I source locally. Importing a used car into South Africa is restricted.</p>
                </div>
              </div>
              <div className="scope-item rv out" style={{ '--s': '1' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
                <div>
                  <h3>Not included: attending for you</h3>
                  <p>TRN appointments and registration need you there in person.</p>
                </div>
              </div>
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
                  Five steps
                  {' '}
                  <em>from your inbox to the keys.</em>
                </h2>
              </div>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>You approve every step from wherever you are.</p>
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
                    <p>Tell me your budget, the vehicle you want, your arrival date and the city you land in.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '1' } as CSSProperties}>
                  <span className="dot">02</span>
                  <div>
                    <h3>Shortlist</h3>
                    <p>You see options with value checks attached, not a dealer&apos;s asking price.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '2' } as CSSProperties}>
                  <span className="dot">03</span>
                  <div>
                    <h3>Inspect and negotiate</h3>
                    <p>The chosen car is inspected. I negotiate and you approve the final price.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '3' } as CSSProperties}>
                  <span className="dot">04</span>
                  <div>
                    <h3>Paperwork</h3>
                    <p>Your TRN documents and booking are ready before you fly.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '4' } as CSSProperties}>
                  <span className="dot">05</span>
                  <div>
                    <h3>Handover</h3>
                    <p>One appointment after you land, then the car is registered in your name and ready.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="sec ways" id="pricing" aria-labelledby="price-h">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow rv">
                  <i></i>
                  Pricing
                </p>
                <h2 id="price-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                  Straightforward pricing.
                  {' '}
                  <em>No surprises.</em>
                </h2>
              </div>
              <div style={{ display: 'grid', gap: '12px', justifyItems: 'start' }}>
                <div className="cur" role="group" aria-label="Show prices in">
                  <button type="button" data-c="ZAR" aria-pressed="true">ZAR</button>
                  <button type="button" data-c="USD" aria-pressed="false">USD</button>
                  <button type="button" data-c="EUR" aria-pressed="false">EUR</button>
                  <button type="button" data-c="GBP" aria-pressed="false">GBP</button>
                </div>
                <small id="curNote" style={{ color: 'var(--muted)', fontSize: '13.5px' }} hidden>Approximate. Final price confirmed in ZAR.</small>
              </div>
            </div>
            <div className="tiers">
              <div className="tier rv" style={{ '--s': '0' } as CSSProperties}>
                <small>Vehicles under R350,000</small>
                <span className="amt" data-zar="18000" data-pre="From ">From R18,000</span>
                <p>Most first cars, bakkies and everyday SUVs.</p>
              </div>
              <div className="tier rv feat" style={{ '--s': '1' } as CSSProperties}>
                <small>Vehicles R350,000 to R800,000</small>
                <span className="amt" data-zar="28000" data-pre="">R28,000</span>
                <p>Newer SUVs, double cabs and well-kept 4x4s.</p>
              </div>
              <div className="tier rv" style={{ '--s': '2' } as CSSProperties}>
                <small>Vehicles above R800,000</small>
                <span className="amt" data-zar="45000" data-pre="From ">From R45,000</span>
                <p>Scoped individually for higher-value cars.</p>
              </div>
            </div>
            <p className="price-note rv">My fee covers finding, checking, negotiating and the paperwork. Inspection, transport and registration are billed at actual cost and shown to you separately.</p>
            <div className="addon rv">
              <div>
                <b>
                  TRN only:
                  {' '}
                  <span className="amt" data-zar="2500" style={{ fontSize: 'inherit', fontFamily: 'inherit' }}>R2,500</span>
                </b>
                <p>Not ready to buy yet? I prepare your Traffic Register Number on its own. If you go ahead with the full service later, the R2,500 is credited toward it.</p>
              </div>
              <Link href="/vantara/traffic-register-number" className="btn btn-line">TRN help</Link>
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
                Buying from abroad,
                {' '}
                <em>answered.</em>
              </h2>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>Licensing rules are set by each office and can change. I confirm what applies to you before you pay.</p>
            </div>
            <div>
              <details className="rv" style={{ '--s': '0' } as CSSProperties}>
                <summary>
                  Can a foreigner buy and register a car in South Africa?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    Yes. You need a Traffic Register Number (TRN), which puts you on the national vehicle system without a South African ID number. The City of Cape Town lists a valid passport, a valid visa or permit, two ID photos and proof of address. I prepare the application with you and you attend the appointment in person.
                    {' '}
                    <Link href="/vantara/traffic-register-number" className="ghost">More on the TRN</Link>
                    .
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '1' } as CSSProperties}>
                <summary>
                  Do I need to be in the country?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    Not for the search. Sourcing, value checks, inspection and negotiation all happen before you arrive. Registration in your name is done in person once you land, and the car can be held for you until then.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '2' } as CSSProperties}>
                <summary>
                  Can I get a TRN on a tourist entry?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>It depends on the licensing office. Offices apply the visa requirement differently, so I confirm it for your situation before you pay anything.</p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '3' } as CSSProperties}>
                <summary>
                  Who inspects the car?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    Every car on the shortlist is checked against trade and retail value and gets a physical inspection before you commit. I&apos;m there when it makes sense, and I arrange the inspection when I&apos;m not. You see the report.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '4' } as CSSProperties}>
                <summary>
                  Can you import a car for me?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>No. South Africa&apos;s import rules for used cars are restrictive, so I source locally. That keeps import duties and permits out of your deal.</p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '5' } as CSSProperties}>
                <summary>
                  How long does it take?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    It depends on the brief and how fast the right car is found and checked. Start six to eight weeks before you land so the TRN appointment and the car line up with your arrival.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="sec ways" aria-labelledby="rel-h">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow rv">
                  <i></i>
                  Next
                </p>
                <h2 id="rel-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                  Before you
                  {' '}
                  <em>decide.</em>
                </h2>
              </div>
            </div>
            <div className="related">
              <Link href="/vantara/overland-vehicle-south-africa" className="rel rv" style={{ '--s': '0' } as CSSProperties}>
                <span className="tag">Overland</span>
                <h3>Driving Africa?</h3>
                <p>Buying a 4x4 for a trip north? The overland page covers border papers and what to buy.</p>
              </Link>
              <Link href="/vantara/traffic-register-number" className="rel rv" style={{ '--s': '1' } as CSSProperties}>
                <span className="tag">R2,500</span>
                <h3>TRN help on its own</h3>
                <p>What the Traffic Register Number is, the documents, and how I prepare it.</p>
              </Link>
              <Link href="/vantara/about" className="rel rv" style={{ '--s': '2' } as CSSProperties}>
                <span className="tag">About</span>
                <h3>Who you&apos;d be dealing with</h3>
                <p>Three years on a dealership floor, trained by BAIC South Africa.</p>
              </Link>
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
          <div className="wrap" style={{ alignItems: 'start' }}>
            <div className="close-l">
              <p className="eyebrow">
                <i></i>
                Start your enquiry
              </p>
              <h2 id="close-h">
                Tell me when you land.
                {' '}
                <em>I&apos;ll plan the rest.</em>
              </h2>
              <p>Fill this in and it becomes a WhatsApp message to me, ready to send. Prefer email? Use the address below.</p>
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
            <div>
              <form className="enq" id="enqForm" data-ref="VAN-INTL" noValidate>
                <div className="row">
                  <label htmlFor="f-name">
                    Full name
                    <input id="f-name" name="name" autoComplete="name" required />
                  </label>
                  <label htmlFor="f-country">
                    Coming from
                    <input id="f-country" name="country" autoComplete="country-name" placeholder="United Kingdom" />
                  </label>
                </div>
                <div className="row">
                  <label htmlFor="f-when">
                    Arriving
                    <input id="f-when" name="when" placeholder="23 December" required />
                  </label>
                  <label htmlFor="f-city">
                    Landing in
                    <input id="f-city" name="city" placeholder="Cape Town" />
                  </label>
                </div>
                <div className="row">
                  <label htmlFor="f-need">
                    I need
                    <select defaultValue={'Full vehicle service'} id="f-need" name="need">
                      <option>Full vehicle service</option>
                      <option>TRN only</option>
                      <option>Overland vehicle</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <label htmlFor="f-budget">
                    Budget
                    <input id="f-budget" name="budget" inputMode="decimal" placeholder="R250,000" />
                  </label>
                </div>
                <label htmlFor="f-car">
                  What you&apos;re looking for
                  <textarea id="f-car" name="car" placeholder="Make, model, year range, anything you won't compromise on"></textarea>
                </label>
                <p className="err" id="enqErr" hidden></p>
                <button className="btn btn-ink" type="submit" style={{ background: 'var(--gold)', color: 'var(--ink)' }}>
                  Prepare my message
                  {' '}
                  <span className="arr">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </form>
              <div className="enq ready" id="enqReady" hidden>
                <p>Your message is ready. Open WhatsApp to send it to me directly.</p>
                <a className="btn btn-ink" id="enqLink" href="#" target="_blank" rel="noopener" style={{ background: 'var(--gold)', color: 'var(--ink)' }}>
                  Open WhatsApp
                  {' '}
                  <span className="arr">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                {' '}
                <button className="chip-btn" id="enqEdit" type="button">Edit details</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
