import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

const url = 'https://www.avaloncapitalgroup.co.za/vantara/overland-vehicle-south-africa';
const image = 'https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg';

export const metadata: Metadata = {
  title: { absolute: 'Buy an Overland 4x4 in South Africa as a Foreigner | Vantara' },
  description: 'Driving Africa? Buy your overland 4x4 in South Africa before you land. Vantara sources, inspects and negotiates the vehicle, prepares your TRN and lists the border papers for your route.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Buy an Overland 4x4 in South Africa as a Foreigner | Vantara',
    description: 'Driving Africa? Buy your overland 4x4 in South Africa before you land. Vantara sources, inspects and negotiates the vehicle, prepares your TRN and lists the border papers for your route.',
    url,
    siteName: 'Vantara',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: image, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Buy an Overland 4x4 in South Africa as a Foreigner | Vantara', description: 'Driving Africa? Buy your overland 4x4 in South Africa before you land. Vantara sources, inspects and negotiates the vehicle, prepares your TRN and lists the border papers for your route.', images: [image] },
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
      "name": "Overland vehicle buying service",
      "serviceType": "Vehicle acquisition for overland travellers",
      "description": "Sourcing, inspection, negotiation, TRN preparation and registration for travellers buying a 4x4 in South Africa for an overland trip.",
      "url": "https://www.avaloncapitalgroup.co.za/vantara/overland-vehicle-south-africa",
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
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a foreigner buy a car in South Africa for an overland trip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You register it in your own name with a Traffic Register Number, which I prepare before you land. You attend that appointment in person."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I collect the car?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I source across South Africa, and the car can be ready in the city you land in, whether that's Cape Town, Johannesburg or Durban."
          }
        },
        {
          "@type": "Question",
          "name": "What do I need to take it across borders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Carry the registration papers, certified copies, and your passport. Some border posts ask for a police clearance on South African registered vehicles, so it is worth getting one before you leave. I give you the list for your route."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a Carnet de Passages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "According to the AA of South Africa, a carnet is compulsory for Egypt and Kenya and recommended for travel outside the Southern African Customs Union. Whether you need one depends on your route."
          }
        },
        {
          "@type": "Question",
          "name": "How early should I start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Six to eight weeks before you land. That leaves time to find and inspect the right vehicle and to book your TRN appointment around your arrival, especially over December and January when offices run reduced hours."
          }
        },
        {
          "@type": "Question",
          "name": "What does it cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The same as the full service for buyers from abroad: from R18,000, scaling with the value of the vehicle, with the TRN included. Inspection, transport and registration are billed at actual cost."
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Overland vehicles",
          "item": "https://www.avaloncapitalgroup.co.za/vantara/overland-vehicle-south-africa"
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
                <Link href="/vantara/international-buyers">Buying from abroad</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Overland vehicles</span>
              </nav>
              <p className="eyebrow ld" style={{ '--d': '80' } as CSSProperties}>
                <i></i>
                Overland vehicles · South Africa
              </p>
              <h1 id="h1">
                <span className="ln">
                  <span style={{ '--d': '160' } as CSSProperties}>Buy your overland 4x4</span>
                </span>
                <span className="ln">
                  <span style={{ '--d': '260' } as CSSProperties}>
                    <em>before you land.</em>
                  </span>
                </span>
              </h1>
              <p className="ld" style={{ '--d': '420' } as CSSProperties}>
                Planning to drive Africa from South Africa? I find, check and negotiate the right vehicle while you are still at home, and prepare your Traffic Register Number so it can be registered in your name the week you arrive.
              </p>
              <div className="cta-row ld" style={{ '--d': '520' } as CSSProperties}>
                <a className="btn btn-ink" href="#start">
                  Plan my vehicle
                  {' '}
                  <span className="arr">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                <a className="ghost" href="#borders">Border papers</a>
              </div>
            </div>
            <div className="svc-card" aria-label="From landing to the road north">
              <div className="df-head">
                <b>Your overland file</b>
                <span>Ready on arrival</span>
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
                    4x4 sourced to your route and budget
                  </li>
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Inspected by a mechanic
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
                    TRN booked around your arrival
                  </li>
                </ul>
              </div>
              <div className="phase">
                <small>Before you head north</small>
                <ul className="df-list">
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Registered in your name
                  </li>
                  <li className="on">
                    <span className="tick">
                      <svg viewBox="0 0 12 12">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                      </svg>
                    </span>
                    Border paper list for your route
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
                  Why it goes wrong
                </p>
                <h2 id="pain-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                  The trip starts
                  {' '}
                  <em>with the paperwork.</em>
                </h2>
              </div>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>Travellers who buy on arrival lose weeks of their trip to searching, inspections and licensing queues.</p>
            </div>
            <div className="pains">
              <div className="pain rv" style={{ '--s': '0' } as CSSProperties}>
                <h3>Buying against the clock</h3>
                <p>Your time in South Africa is limited. Every week spent looking at cars is a week not driving.</p>
              </div>
              <div className="pain rv" style={{ '--s': '1' } as CSSProperties}>
                <h3>Hard-used 4x4s</h3>
                <p>Overland vehicles work hard. Without an inspection you inherit someone else&apos;s problems on a remote road.</p>
              </div>
              <div className="pain rv" style={{ '--s': '2' } as CSSProperties}>
                <h3>Old forum advice</h3>
                <p>Licensing and border rules change. Advice from a few years ago can cost you days at a counter or a border post.</p>
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
                  From your brief
                  {' '}
                  <em>to the open road.</em>
                </h2>
              </div>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>One person on your side in South Africa while you plan the trip.</p>
            </div>
            <div className="scope">
              <div className="scope-item rv" style={{ '--s': '0' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>Sourcing for the trip</h3>
                  <p>4x4s and bakkies searched against your route, budget, seats and the kit you want, from dealers, private sellers and my network.</p>
                </div>
              </div>
              <div className="scope-item rv" style={{ '--s': '1' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>Mechanical inspection</h3>
                  <p>A physical inspection before you commit, with the report reviewed with you.</p>
                </div>
              </div>
              <div className="scope-item rv" style={{ '--s': '0' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>Negotiation</h3>
                  <p>I negotiate the price. You approve the final number before anything is signed.</p>
                </div>
              </div>
              <div className="scope-item rv" style={{ '--s': '1' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>TRN and registration</h3>
                  <p>Your Traffic Register Number prepared and booked, then registration in your name after you land.</p>
                </div>
              </div>
              <div className="scope-item rv" style={{ '--s': '0' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>Border paper list</h3>
                  <p>What to carry for the countries on your route, so you leave South Africa prepared.</p>
                </div>
              </div>
              <div className="scope-item rv" style={{ '--s': '1' } as CSSProperties}>
                <svg viewBox="0 0 16 16">
                  <path d="M3 8.4l3 3 7-7" />
                </svg>
                <div>
                  <h3>Ready where you land</h3>
                  <p>The vehicle held or delivered in the city you arrive in.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec ways" id="borders" aria-labelledby="border-h">
          <div className="wrap two-col">
            <div>
              <p className="eyebrow rv">
                <i></i>
                Border papers
              </p>
              <h2 id="border-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                What a South African registered car
                {' '}
                <em>carries north.</em>
              </h2>
              <p className="rv" style={{ '--s': '2' } as CSSProperties}>
                Requirements depend on your route and change over time. These are the papers travellers are most often asked for. I confirm the list for your route before you leave.
              </p>
            </div>
            <div>
              <ol className="docs">
                <li className="rv" style={{ '--s': '0' } as CSSProperties}>
                  <span className="n">1</span>
                  <div>
                    <b>Registration papers</b>
                    <span>The registration certificate in your name, with certified copies.</span>
                  </div>
                </li>
                <li className="rv" style={{ '--s': '1' } as CSSProperties}>
                  <span className="n">2</span>
                  <div>
                    <b>Police clearance</b>
                    <span>Some border posts ask for one on South African registered vehicles. Worth getting before you leave.</span>
                  </div>
                </li>
                <li className="rv" style={{ '--s': '2' } as CSSProperties}>
                  <span className="n">3</span>
                  <div>
                    <b>Carnet de Passages</b>
                    <span>Compulsory for Egypt and Kenya and recommended outside the Southern African Customs Union, according to the AA.</span>
                  </div>
                </li>
                <li className="rv" style={{ '--s': '3' } as CSSProperties}>
                  <span className="n">4</span>
                  <div>
                    <b>Insurance</b>
                    <span>Third-party cover for the countries you drive through, bought before you go or at the border.</span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="sec" id="pricing" aria-labelledby="price-h">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow rv">
                  <i></i>
                  Pricing
                </p>
                <h2 id="price-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                  Priced by
                  {' '}
                  <em>the value of the vehicle.</em>
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
            <p className="price-note rv">TRN preparation is included. Inspection, transport and registration are billed at actual cost and shown to you separately.</p>
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
                Overland,
                {' '}
                <em>answered.</em>
              </h2>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>Every route is different. Send me yours and I&apos;ll tell you what applies.</p>
            </div>
            <div>
              <details className="rv" style={{ '--s': '0' } as CSSProperties}>
                <summary>
                  Can a foreigner buy a car in South Africa for an overland trip?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>Yes. You register it in your own name with a Traffic Register Number, which I prepare before you land. You attend that appointment in person.</p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '1' } as CSSProperties}>
                <summary>
                  Where can I collect the car?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>I source across South Africa, and the car can be ready in the city you land in, whether that&apos;s Cape Town, Johannesburg or Durban.</p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '2' } as CSSProperties}>
                <summary>
                  What do I need to take it across borders?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    Carry the registration papers, certified copies, and your passport. Some border posts ask for a police clearance on South African registered vehicles, so it is worth getting one before you leave. I give you the list for your route.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '3' } as CSSProperties}>
                <summary>
                  Do I need a Carnet de Passages?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    According to the AA of South Africa, a carnet is compulsory for Egypt and Kenya and recommended for travel outside the Southern African Customs Union. Whether you need one depends on your route.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '4' } as CSSProperties}>
                <summary>
                  How early should I start?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    Six to eight weeks before you land. That leaves time to find and inspect the right vehicle and to book your TRN appointment around your arrival, especially over December and January when offices run reduced hours.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '5' } as CSSProperties}>
                <summary>
                  What does it cost?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    The same as the full service for buyers from abroad: from R18,000, scaling with the value of the vehicle, with the TRN included. Inspection, transport and registration are billed at actual cost.
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
                  Plan the
                  {' '}
                  <em>rest.</em>
                </h2>
              </div>
            </div>
            <div className="related">
              <Link href="/vantara/traffic-register-number" className="rel rv" style={{ '--s': '0' } as CSSProperties}>
                <span className="tag">R2,500</span>
                <h3>TRN help</h3>
                <p>What the Traffic Register Number is, the documents, and how I prepare it.</p>
              </Link>
              <Link href="/vantara/international-buyers" className="rel rv" style={{ '--s': '1' } as CSSProperties}>
                <span className="tag">From R18,000</span>
                <h3>Buying from abroad</h3>
                <p>The full service for buyers outside South Africa, with pricing in your currency.</p>
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
                Send your route.
                {' '}
                <em>I&apos;ll find the vehicle.</em>
              </h2>
              <p>Fill this in and it becomes a WhatsApp message to me, ready to send. Add your route in the last box.</p>
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
              <form className="enq" id="enqForm" data-ref="VAN-OVER" noValidate>
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
                    <select defaultValue={'Overland vehicle'} id="f-need" name="need">
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
