import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

const url = 'https://www.avaloncapitalgroup.co.za/vantara/deals';
const image = 'https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg';

export const metadata: Metadata = {
  title: { absolute: 'Car Buying Deals, Broken Down | Vantara' },
  description: 'Real Vantara deals broken down in full: R60,000 in dealer support on one trade-in, R19,014 below market on a first car. See how a buyer-side advisor works.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Car Buying Deals, Broken Down | Vantara',
    description: 'Real Vantara deals broken down in full: R60,000 in dealer support on one trade-in, R19,014 below market on a first car. See how a buyer-side advisor works.',
    url,
    siteName: 'Vantara',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: image, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Car Buying Deals, Broken Down | Vantara', description: 'Real Vantara deals broken down in full: R60,000 in dealer support on one trade-in, R19,014 below market on a first car. See how a buyer-side advisor works.', images: [image] },
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
      "@type": "CollectionPage",
      "url": "https://www.avaloncapitalgroup.co.za/vantara/deals",
      "name": "Vantara deals"
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
          "name": "Deals",
          "item": "https://www.avaloncapitalgroup.co.za/vantara/deals"
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
        <section className="page-hero solo" aria-labelledby="h1">
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
                <span aria-current="page">Deals</span>
              </nav>
              <p className="eyebrow ld" style={{ '--d': '80' } as CSSProperties}>
                <i></i>
                Real deals
              </p>
              <h1 id="h1">
                <span className="ln">
                  <span style={{ '--d': '160' } as CSSProperties}>The numbers</span>
                </span>
                <span className="ln">
                  <span style={{ '--d': '260' } as CSSProperties}>
                    <em>from real buyers.</em>
                  </span>
                </span>
              </h1>
              <p className="ld" style={{ '--d': '420' } as CSSProperties}>Two deals broken down in full: what was on the table, what I found and what the buyer decided. Read them before you bring me yours.</p>
            </div>
          </div>
        </section>
        <section className="sec deals" style={{ paddingTop: 'clamp(48px,6vw,80px)' }} aria-label="Deal breakdowns">
          <div className="wrap">
            <div className="deal-grid">
              <Link href="/vantara/automotive" className="deal rv" style={{ '--s': '0' } as CSSProperties}>
                <span className="tag">Trade-in · two dealers</span>
                <h2 style={{ fontSize: 'clamp(26px,2.5vw,34px)' }}>Two dealers. One client. R60,000 extracted.</h2>
                <p>A trade-in shortfall across two competing dealerships, mapped and negotiated side by side. The client chose with the full picture and no pressure.</p>
                <dl>
                  <div>
                    <dt>R60,000</dt>
                    <dd>Dealer support</dd>
                  </div>
                  <div>
                    <dt>8</dt>
                    <dd>Scenarios modelled</dd>
                  </div>
                  <div>
                    <dt>2</dt>
                    <dd>Dealers in play</dd>
                  </div>
                </dl>
                <span>
                  <span className="ghost">Read the full breakdown</span>
                </span>
              </Link>
              {' '}
              <Link href="/vantara/insight-4" className="deal rv" style={{ '--s': '1' } as CSSProperties}>
                <span className="tag">First-time buyer</span>
                <h2 style={{ fontSize: 'clamp(26px,2.5vw,34px)' }}>First vehicle. R19,014 found before negotiation.</h2>
                <p>
                  Two options and a budget pulling in two directions. I checked the KZN market, modelled the finance and mapped the full cost of ownership before the buyer saw a dealer.
                </p>
                <dl>
                  <div>
                    <dt>R19,014</dt>
                    <dd>Below market</dd>
                  </div>
                  <div>
                    <dt>8</dt>
                    <dd>Finance scenarios</dd>
                  </div>
                  <div>
                    <dt>2</dt>
                    <dd>Cars compared</dd>
                  </div>
                </dl>
                <span>
                  <span className="ghost">Read the full breakdown</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="sec" aria-labelledby="reads-h">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow rv">
                  <i></i>
                  From the inside
                </p>
                <h2 id="reads-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                  Read this
                  {' '}
                  <em>before you buy.</em>
                </h2>
              </div>
              <p className="lede rv" style={{ '--s': '2' } as CSSProperties}>What I saw on the dealer side, and what it cost the people who went in without the right information.</p>
            </div>
            <div className="reads">
              <Link href="/vantara/insight-1" className="read rv" style={{ '--s': '0' } as CSSProperties}>
                <div>
                  <span className="tag">Insider perspective</span>
                  <h3>Why buying a car alone is the most expensive thing you&apos;ll do this year</h3>
                </div>
                <span className="go">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
              {' '}
              <Link href="/vantara/insight-3" className="read rv" style={{ '--s': '1' } as CSSProperties}>
                <div>
                  <span className="tag">The Vantara model</span>
                  <h3>Getting it right is cheap. Getting it wrong isn&apos;t.</h3>
                </div>
                <span className="go">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
              {' '}
              <Link href="/vantara/insight-4" className="read rv" style={{ '--s': '2' } as CSSProperties}>
                <div>
                  <span className="tag">First-time buyer</span>
                  <h3>First vehicle. Two options. One right decision.</h3>
                </div>
                <span className="go">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
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
              <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-CLOSE-DEALS)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-CLOSE-DEALS">
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
