import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

const url = 'https://www.avaloncapitalgroup.co.za/vantara/traffic-register-number';
const image = 'https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg';

export const metadata: Metadata = {
  title: { absolute: 'Traffic Register Number (TRN) for Foreigners in South Africa | Vantara' },
  description: 'How to get a Traffic Register Number in South Africa as a foreigner: documents, tourist entries, timing and costs. Vantara prepares your TRN remotely for R2,500 so one visit is enough.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Traffic Register Number (TRN) for Foreigners in South Africa | Vantara',
    description: 'How to get a Traffic Register Number in South Africa as a foreigner: documents, tourist entries, timing and costs. Vantara prepares your TRN remotely for R2,500 so one visit is enough.',
    url,
    siteName: 'Vantara',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: image, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Traffic Register Number (TRN) for Foreigners in South Africa | Vantara', description: 'How to get a Traffic Register Number in South Africa as a foreigner: documents, tourist entries, timing and costs. Vantara prepares your TRN remotely for R2,500 so one visit is enough.', images: [image] },
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
      "name": "Traffic Register Number preparation",
      "serviceType": "TRN application preparation for foreign nationals",
      "description": "Remote preparation of a South African Traffic Register Number application: office confirmation, document checklist, form, booking and walkthrough.",
      "url": "https://www.avaloncapitalgroup.co.za/vantara/traffic-register-number",
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
          "name": "TRN preparation",
          "price": "2500",
          "priceCurrency": "ZAR",
          "description": "Government fees paid directly at the office. Credited toward the full vehicle service."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Traffic Register Number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A TRN is the number a foreign national uses on South Africa's national vehicle system, eNaTIS, in place of a South African ID number. You need one before a car can be registered in your name, and for most other licensing transactions."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a TRN on a tourist entry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the office. The City of Cape Town lists a valid visa, work or study permit among the documents, and offices apply that differently to visitors. I confirm whether your entry is accepted at the office I book you into before you pay anything."
          }
        },
        {
          "@type": "Question",
          "name": "What documents do I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For Cape Town the City lists a copy of a valid passport, a valid visa or permit, two ID photos, proof of address and the completed TRN application form. Other offices ask for much the same, and some want certified copies. I give you the exact list for your office."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some offices issue the number on the day, others take longer. Offices also run reduced hours over Christmas and New Year, which matters if you land in late December. I check what is realistic for your dates."
          }
        },
        {
          "@type": "Question",
          "name": "Can you apply on my behalf?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You attend the appointment yourself. I do everything around it so that one visit is enough: the checklist, the right office, the booking and a walkthrough beforehand."
          }
        },
        {
          "@type": "Question",
          "name": "What does it cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "My fee is R2,500. Government fees are paid directly at the office. If you go ahead with the full vehicle service later, the R2,500 is credited toward it."
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
          "name": "Traffic Register Number",
          "item": "https://www.avaloncapitalgroup.co.za/vantara/traffic-register-number"
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
                <span aria-current="page">Traffic Register Number</span>
              </nav>
              <p className="eyebrow ld" style={{ '--d': '80' } as CSSProperties}>
                <i></i>
                Traffic Register Number for foreigners
              </p>
              <h1 id="h1">
                <span className="ln">
                  <span style={{ '--d': '160' } as CSSProperties}>Your TRN, ready</span>
                </span>
                <span className="ln">
                  <span style={{ '--d': '260' } as CSSProperties}>
                    <em>in one visit.</em>
                  </span>
                </span>
              </h1>
              <p className="ld" style={{ '--d': '420' } as CSSProperties}>
                You need a Traffic Register Number before a car can be registered in your name in South Africa. I prepare everything remotely: the document checklist, the right licensing office, the booking and a walkthrough. You attend the appointment yourself.
              </p>
              <div className="cta-row ld" style={{ '--d': '520' } as CSSProperties}>
                <a className="btn btn-ink" href="#start">
                  Start my TRN
                  {' '}
                  <span className="arr">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                <span style={{ fontSize: '15px', color: 'var(--muted)' }}>R2,500 plus government fees</span>
              </div>
            </div>
            <div className="svc-card" aria-label="What I prepare for your TRN">
              <div className="df-head">
                <b>Your TRN file</b>
                <span>Prepared remotely</span>
              </div>
              <ul className="df-list" id="dfList">
                <li className="on">
                  <span className="tick">
                    <svg viewBox="0 0 12 12">
                      <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                    </svg>
                  </span>
                  Entry type confirmed with the office
                </li>
                <li className="on">
                  <span className="tick">
                    <svg viewBox="0 0 12 12">
                      <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                    </svg>
                  </span>
                  Document checklist for that office
                </li>
                <li className="on">
                  <span className="tick">
                    <svg viewBox="0 0 12 12">
                      <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                    </svg>
                  </span>
                  Application form filled in with you
                </li>
                <li className="on">
                  <span className="tick">
                    <svg viewBox="0 0 12 12">
                      <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                    </svg>
                  </span>
                  Appointment booked around your arrival
                </li>
                <li className="on">
                  <span className="tick">
                    <svg viewBox="0 0 12 12">
                      <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                    </svg>
                  </span>
                  Walkthrough call before you go
                </li>
              </ul>
              <div className="df-foot">
                <span>You attend</span>
                <b>One appointment</b>
              </div>
            </div>
          </div>
        </section>
        <section className="sec ways" aria-labelledby="what-h">
          <div className="wrap two-col">
            <div>
              <p className="eyebrow rv">
                <i></i>
                What a TRN is
              </p>
              <h2 id="what-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                The number that stands in for
                {' '}
                <em>a South African ID.</em>
              </h2>
              <p className="rv" style={{ '--s': '2' } as CSSProperties}>
                A Traffic Register Number puts a foreign national on eNaTIS, South Africa&apos;s national vehicle and licence system. Without one, a car can&apos;t be registered in your name, whether you buy from a dealer or privately.
              </p>
              <p className="rv" style={{ '--s': '3' } as CSSProperties}>
                You apply in person at a motor vehicle registration centre. The forms are simple. Most trouble comes from bringing the wrong document, going to an office that treats your visa differently, or arriving when the office is short-staffed.
              </p>
              <div className="note rv" style={{ '--s': '4' } as CSSProperties}>
                <span className="seal" aria-hidden="true">
                  <svg viewBox="0 0 20 20">
                    <path d="M10 2.5l2.2 1.6 2.7-.1.8 2.6 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-.8 2.6-2.7-.1L10 17.5l-2.2-1.6-2.7.1-.8-2.6-2.2-1.6.9-2.6-.9-2.6 2.2-1.6.8-2.6 2.7.1z" fill="none" stroke="currentColor" strokeWidth="1.1" />
                    <path d="M7 10.2l2 2 4-4.2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p>
                  <b>Rules are under review.</b>
                  {' '}
                  In June 2026 Parliament was briefed on TRN abuse, and tighter checks against Home Affairs records were recommended. Expect offices to check your visa closely, which makes the right paperwork matter more.
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow rv">
                <i></i>
                What you&apos;ll usually need
              </p>
              <ol className="docs">
                <li className="rv" style={{ '--s': '0' } as CSSProperties}>
                  <span className="n">1</span>
                  <div>
                    <b>Valid passport</b>
                    <span>A copy of the photo page. Some offices want it certified.</span>
                  </div>
                </li>
                <li className="rv" style={{ '--s': '1' } as CSSProperties}>
                  <span className="n">2</span>
                  <div>
                    <b>Valid visa or permit</b>
                    <span>Visa, work or study permit. How a tourist entry is treated depends on the office.</span>
                  </div>
                </li>
                <li className="rv" style={{ '--s': '2' } as CSSProperties}>
                  <span className="n">3</span>
                  <div>
                    <b>Two ID photos</b>
                    <span>Standard passport-size photos.</span>
                  </div>
                </li>
                <li className="rv" style={{ '--s': '3' } as CSSProperties}>
                  <span className="n">4</span>
                  <div>
                    <b>Proof of address</b>
                    <span>A South African address. If the bill isn&apos;t in your name, an affidavit from the person whose name it&apos;s in.</span>
                  </div>
                </li>
                <li className="rv" style={{ '--s': '4' } as CSSProperties}>
                  <span className="n">5</span>
                  <div>
                    <b>TRN application form</b>
                    <span>The Application and Notice in respect of Traffic Register Number. I fill it in with you.</span>
                  </div>
                </li>
              </ol>
              <p className="rv" style={{ fontSize: '14px', color: 'var(--muted)' }}>Based on the City of Cape Town&apos;s published list. Your exact list comes with your booking.</p>
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
                  Prepared remotely.
                  {' '}
                  <em>Done in one visit.</em>
                </h2>
              </div>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>Nothing is paid until I&apos;ve confirmed the office accepts your entry type.</p>
            </div>
            <div className="steps-wrap">
              <span className="rail" aria-hidden="true">
                <i id="rail"></i>
              </span>
              <ol className="steps" id="steps">
                <li className="step lit rv" style={{ '--s': '0' } as CSSProperties}>
                  <span className="dot">01</span>
                  <div>
                    <h3>Your dates</h3>
                    <p>Send your arrival date, how long you&apos;re staying and the area you&apos;ll be in.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '1' } as CSSProperties}>
                  <span className="dot">02</span>
                  <div>
                    <h3>Confirm</h3>
                    <p>I confirm which office suits you and whether it accepts your entry type, before you pay.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '2' } as CSSProperties}>
                  <span className="dot">03</span>
                  <div>
                    <h3>Prepare</h3>
                    <p>Exact document list, the form filled in with you, and the booking made around your arrival.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '3' } as CSSProperties}>
                  <span className="dot">04</span>
                  <div>
                    <h3>Walkthrough</h3>
                    <p>A short call so you know what happens at the counter and what to say.</p>
                  </div>
                </li>
                <li className="step lit rv" style={{ '--s': '4' } as CSSProperties}>
                  <span className="dot">05</span>
                  <div>
                    <h3>Your visit</h3>
                    <p>You attend the appointment and leave with your TRN or a clear date for it.</p>
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
                  One fee.
                  {' '}
                  <em>Credited if you buy.</em>
                </h2>
              </div>
            </div>
            <div className="tiers" style={{ gridTemplateColumns: 'repeat(2,minmax(0,1fr))' }}>
              <div className="tier feat rv">
                <small>TRN preparation</small>
                <span className="amt">R2,500</span>
                <p>Office confirmed, checklist, form, booking and walkthrough. Government fees paid directly at the office.</p>
              </div>
              <div className="tier rv" style={{ '--s': '1' } as CSSProperties}>
                <small>Full vehicle service</small>
                <span className="amt">From R18,000</span>
                <p>
                  Car sourced, checked, inspected and negotiated, with the TRN included. Your R2,500 is credited if you upgrade.
                  {' '}
                  <Link href="/vantara/international-buyers" className="ghost">See the full service</Link>
                </p>
              </div>
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
                TRN questions,
                {' '}
                <em>answered.</em>
              </h2>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>Licensing rules are set by each office and can change. I confirm what applies to you before you pay.</p>
            </div>
            <div>
              <details className="rv" style={{ '--s': '0' } as CSSProperties}>
                <summary>
                  What is a Traffic Register Number?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    A TRN is the number a foreign national uses on South Africa&apos;s national vehicle system, eNaTIS, in place of a South African ID number. You need one before a car can be registered in your name, and for most other licensing transactions.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '1' } as CSSProperties}>
                <summary>
                  Can I get a TRN on a tourist entry?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    It depends on the office. The City of Cape Town lists a valid visa, work or study permit among the documents, and offices apply that differently to visitors. I confirm whether your entry is accepted at the office I book you into before you pay anything.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '2' } as CSSProperties}>
                <summary>
                  What documents do I need?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    For Cape Town the City lists a copy of a valid passport, a valid visa or permit, two ID photos, proof of address and the completed TRN application form. Other offices ask for much the same, and some want certified copies. I give you the exact list for your office.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '3' } as CSSProperties}>
                <summary>
                  How long does it take?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    Some offices issue the number on the day, others take longer. Offices also run reduced hours over Christmas and New Year, which matters if you land in late December. I check what is realistic for your dates.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '4' } as CSSProperties}>
                <summary>
                  Can you apply on my behalf?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>
                    No. You attend the appointment yourself. I do everything around it so that one visit is enough: the checklist, the right office, the booking and a walkthrough beforehand.
                  </p>
                </div>
              </details>
              <details className="rv" style={{ '--s': '5' } as CSSProperties}>
                <summary>
                  What does it cost?
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <div className="ans">
                  <p>My fee is R2,500. Government fees are paid directly at the office. If you go ahead with the full vehicle service later, the R2,500 is credited toward it.</p>
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
                  Where to
                  {' '}
                  <em>next.</em>
                </h2>
              </div>
            </div>
            <div className="related">
              <Link href="/vantara/international-buyers" className="rel rv" style={{ '--s': '0' } as CSSProperties}>
                <span className="tag">From R18,000</span>
                <h3>Buying the car too?</h3>
                <p>The full service: sourcing, inspection, negotiation and registration before you land.</p>
              </Link>
              <Link href="/vantara/overland-vehicle-south-africa" className="rel rv" style={{ '--s': '1' } as CSSProperties}>
                <span className="tag">Overland</span>
                <h3>Driving Africa?</h3>
                <p>Buying a 4x4 for a trip north, and the papers it needs at the border.</p>
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
                Send your dates.
                {' '}
                <em>I&apos;ll confirm the office first.</em>
              </h2>
              <p>Fill this in and it becomes a WhatsApp message to me, ready to send. Nothing is paid until your entry type is confirmed.</p>
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
              <form className="enq" id="enqForm" data-ref="VAN-TRN" noValidate>
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
                    <select defaultValue={'TRN only'} id="f-need" name="need">
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
