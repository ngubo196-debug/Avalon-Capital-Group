import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

const url = 'https://www.avaloncapitalgroup.co.za/vantara/insight-4';
const image = 'https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg';

export const metadata: Metadata = {
  title: { absolute: 'How to Buy Your First Car in South Africa | Vantara' },
  description: 'A first-time buyer case study: R19,014 below market found before negotiation, eight finance scenarios and the full cost of ownership, so the buyer chose with confidence.',
  alternates: { canonical: url },
  openGraph: {
    title: 'How to Buy Your First Car in South Africa | Vantara',
    description: 'A first-time buyer case study: R19,014 below market found before negotiation, eight finance scenarios and the full cost of ownership, so the buyer chose with confidence.',
    url,
    siteName: 'Vantara',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: image, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'How to Buy Your First Car in South Africa | Vantara', description: 'A first-time buyer case study: R19,014 below market found before negotiation, eight finance scenarios and the full cost of ownership, so the buyer chose with confidence.', images: [image] },
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
      "@type": "Article",
      "headline": "First vehicle. Two options. One right decision.",
      "description": "A first-time buyer case study: R19,014 below market found before negotiation, eight finance scenarios and the full cost of ownership, so the buyer chose with confidence.",
      "url": "https://www.avaloncapitalgroup.co.za/vantara/insight-4",
      "mainEntityOfPage": "https://www.avaloncapitalgroup.co.za/vantara/insight-4",
      "image": "https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg",
      "author": {
        "@id": "https://www.avaloncapitalgroup.co.za/#luyanda"
      },
      "publisher": {
        "@id": "https://www.avaloncapitalgroup.co.za/vantara#vantara"
      },
      "datePublished": "2026-05-27",
      "dateModified": "2026-10-22",
      "inLanguage": "en-ZA"
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "First vehicle",
          "item": "https://www.avaloncapitalgroup.co.za/vantara/insight-4"
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
        <section className="article-hero" aria-labelledby="h1">
          <div className="hero-lines" aria-hidden="true">
            <svg viewBox="0 0 1000 900" preserveAspectRatio="xMidYMid meet">
              <path style={{ '--d': '200' } as CSSProperties} d="M120 -20 L560 860" />
              <path style={{ '--d': '320' } as CSSProperties} d="M168 -20 L584 812" />
              <path style={{ '--d': '440' } as CSSProperties} d="M1020 -20 L584 852" />
            </svg>
          </div>
          <div className="wrap" style={{ position: 'relative', zIndex: '1' }}>
            <nav className="crumbs ld" style={{ '--d': '40' } as CSSProperties} aria-label="Breadcrumb">
              <Link href="/vantara">Vantara</Link>
              <span aria-hidden="true">/</span>
              <Link href="/vantara/deals">Deals</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">First vehicle</span>
            </nav>
            <p className="eyebrow ld" style={{ '--d': '80' } as CSSProperties}>
              <i></i>
              First-time buyer · Deal breakdown
            </p>
            <h1 id="h1" className="ld" style={{ '--d': '160' } as CSSProperties}>
              First vehicle. Two options.
              {' '}
              <em>One right decision.</em>
            </h1>
            <p className="standfirst ld" style={{ '--d': '300' } as CSSProperties}>
              A first-time buyer, two well-priced cars and a budget pulling in two directions. This is the work done before the client saw a single listing, and how the decision got made.
            </p>
            <p className="byline ld" style={{ '--d': '400' } as CSSProperties}>
              <img src="/assets/vantara/luyanda-certificate.jpg" alt="" width="36" height="36" />
              <span>
                By
                {' '}
                <b>Luyanda Ngubo</b>
              </span>
              <span aria-hidden="true">·</span>
              <span>5 min read</span>
              <span aria-hidden="true">·</span>
              <span>Updated October 2026</span>
            </p>
          </div>
        </section>
        <div className="wrap article-wrap">
          <article className="prose">
            <div className="stats rv">
              <div>
                <b>R19,014</b>
                <span>Below market, before negotiation</span>
              </div>
              <div>
                <b>8</b>
                <span>Finance scenarios modelled</span>
              </div>
              <div>
                <b>R1,400</b>
                <span>Monthly difference between the two</span>
              </div>
            </div>
            <h2>Where most first-time buyers start</h2>
            <p>
              Most people buying their first car start in the wrong place. They open AutoTrader, find something they like, contact the dealer and go from there. The platform isn&apos;t the problem. The order is. By the time they sit with a salesperson they haven&apos;t modelled the finance, checked the market or worked out the full cost of ownership.
            </p>
            <p>
              The dealer has done this thousands of times. The buyer is doing it once. That gap is where money gets lost, through information the dealer has no reason to share: that a comparable unit sits at another dealer for R14,000 less, what a balloon payment really costs over the term, or that the warranty offered at signing can be bought elsewhere for less.
            </p>
            <h2>What this deal looked like</h2>
            <p>
              The brief: first vehicle, automatic, finance-assisted, a specific colour, and a timeline of late May to early June. Two cars were in play: a proven city hatchback at the comfortable price point, and a newer crossover with a stronger spec at a higher monthly cost.
            </p>
            <p>
              Before the client saw a listing, I assessed every matching unit in KwaZulu-Natal on price, mileage, dealer credibility and finance suitability. The two strongest units were both below market, one by R14,498 and the other by R4,516.
              {' '}
              <strong>R19,014 identified before any negotiation.</strong>
            </p>
            <p>
              Finance was modelled across eight scenarios, two cars at four deposit and residual structures each, using prime as the baseline. Running costs were mapped: servicing, tyres, brakes, battery, insurance and licensing. Dealer charges and common signing-table extras were explained in advance, and safety ratings and spec were compared side by side.
            </p>
            <h2>When the numbers pull in two directions</h2>
            <p>
              The hatchback was the cleaner entry. Over 72 months with no deposit, the instalment came in about R1,400 lower than the crossover, money for insurance, savings or breathing room in the first months of ownership.
            </p>
            <p>
              The crossover was the stronger car: better safety rating, smoother gearbox, more space and higher ground clearance. If finance approval allowed it, it would serve the client longer before the next upgrade.
            </p>
            <p>
              My job wasn&apos;t to push the pricier car. It was to lay out both options clearly, what each cost to own and what each delivered, and let the client decide with full information.
            </p>
            <p className="pull">
              Not a sale.
              {' '}
              <em>A decision the client can stand behind.</em>
            </p>
            <h2>What the client had before seeing a dealer</h2>
            <ul>
              <li>R19,014 in below-market pricing identified across both options</li>
              <li>8 finance scenarios across two cars</li>
              <li>Full cost of ownership mapped</li>
              <li>Dealer charges and five common signing-table extras explained</li>
              <li>Safety and spec compared independently</li>
              <li>A clear position on both options, tied to neither</li>
            </ul>
          </article>
          <aside className="aside">
            <div className="aside-card rv">
              <h3>Buying your first car?</h3>
              <p>Send me your budget and the cars you are looking at. I&apos;ll show you where the market sits first.</p>
              <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-ART-INSIGHT-4)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-ART-INSIGHT-4">
                Start the conversation
                {' '}
                <span className="arr">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="aside-card rv" style={{ '--s': '1' } as CSSProperties}>
              <p style={{ fontSize: '14px' }}>Written by Luyanda Ngubo, who spent three years selling cars on a dealership floor and now works only for buyers.</p>
              <Link href="/vantara/about" className="ghost" style={{ justifySelf: 'start' }}>About Luyanda</Link>
            </div>
          </aside>
        </div>
        <section className="sec ways" aria-labelledby="rel-h">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow rv">
                  <i></i>
                  Next
                </p>
                <h2 id="rel-h" className="rv" style={{ '--s': '1' } as CSSProperties}>
                  Keep
                  {' '}
                  <em>reading.</em>
                </h2>
              </div>
            </div>
            <div className="related">
              <Link href="/vantara/automotive" className="rel rv" style={{ '--s': '0' } as CSSProperties}>
                <span className="tag">Trade-in</span>
                <h3>Two dealers. One client.</h3>
                <p>R60,000 in dealer support on one trade-in.</p>
              </Link>
              <Link href="/vantara/insight-1" className="rel rv" style={{ '--s': '1' } as CSSProperties}>
                <span className="tag">Insider</span>
                <h3>Buying a car alone</h3>
                <p>What happens on the other side of the desk.</p>
              </Link>
              <Link href="/vantara/insight-3" className="rel rv" style={{ '--s': '2' } as CSSProperties}>
                <span className="tag">The model</span>
                <h3>Getting it right is cheap</h3>
                <p>How a buyer-side advisor works and earns.</p>
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
              <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-CLOSE-ART)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-CLOSE-ART">
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
