import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

const url = 'https://www.avaloncapitalgroup.co.za/vantara/insight-3';
const image = 'https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg';

export const metadata: Metadata = {
  title: { absolute: 'How a Car Buying Advisor Works in South Africa | Vantara' },
  description: 'Why buyers bring an advisor to big purchases, and how Vantara works and gets paid when it sources and negotiates a car for you in South Africa or from abroad.',
  alternates: { canonical: url },
  openGraph: {
    title: 'How a Car Buying Advisor Works in South Africa | Vantara',
    description: 'Why buyers bring an advisor to big purchases, and how Vantara works and gets paid when it sources and negotiates a car for you in South Africa or from abroad.',
    url,
    siteName: 'Vantara',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: image, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'How a Car Buying Advisor Works in South Africa | Vantara', description: 'Why buyers bring an advisor to big purchases, and how Vantara works and gets paid when it sources and negotiates a car for you in South Africa or from abroad.', images: [image] },
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
      "headline": "Getting it right is cheap. Getting it wrong isn't.",
      "description": "Why buyers bring an advisor to big purchases, and how Vantara works and gets paid when it sources and negotiates a car for you in South Africa or from abroad.",
      "url": "https://www.avaloncapitalgroup.co.za/vantara/insight-3",
      "mainEntityOfPage": "https://www.avaloncapitalgroup.co.za/vantara/insight-3",
      "image": "https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg",
      "author": {
        "@id": "https://www.avaloncapitalgroup.co.za/#luyanda"
      },
      "publisher": {
        "@id": "https://www.avaloncapitalgroup.co.za/vantara#vantara"
      },
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
          "name": "Getting it right is cheap",
          "item": "https://www.avaloncapitalgroup.co.za/vantara/insight-3"
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
              <span aria-current="page">Getting it right is cheap</span>
            </nav>
            <p className="eyebrow ld" style={{ '--d': '80' } as CSSProperties}>
              <i></i>
              The Vantara model
            </p>
            <h1 id="h1" className="ld" style={{ '--d': '160' } as CSSProperties}>
              Getting it right is cheap.
              {' '}
              <em>Getting it wrong isn&apos;t.</em>
            </h1>
            <p className="standfirst ld" style={{ '--d': '300' } as CSSProperties}>Most car purchases happen without anyone in the buyer&apos;s corner. Here is why that matters, and how a buyer-side advisor works and gets paid.</p>
            <p className="byline ld" style={{ '--d': '400' } as CSSProperties}>
              <img src="/assets/vantara/luyanda-certificate.jpg" alt="" width="36" height="36" />
              <span>
                By
                {' '}
                <b>Luyanda Ngubo</b>
              </span>
              <span aria-hidden="true">·</span>
              <span>3 min read</span>
              <span aria-hidden="true">·</span>
              <span>Updated October 2026</span>
            </p>
          </div>
        </section>
        <div className="wrap article-wrap">
          <article className="prose">
            <p>
              Every big purchase happens inside a market. On one side are professionals who do this every day and know the pricing, the leverage and how to structure a deal in their favour. On the other side is you, doing it once, without that context.
            </p>
            <h2>Why advice is standard everywhere else</h2>
            <p>
              Company acquisitions have bankers. Legal disputes have attorneys. Tax has accountants. Wherever one side knows far more than the other, people bring a professional, because getting it wrong costs too much.
            </p>
            <p>
              Most private car buyers don&apos;t have one. Not because they don&apos;t need one, but because buyer-side help has rarely been available at that level. Dealers are everywhere. Someone working only for the buyer is rare.
            </p>
            <h2>How the Vantara model works</h2>
            <p>
              You give me a budget. I source a car within it, negotiate the deal and manage everything to delivery. For buyers in South Africa, my fee is built into that budget: you pay no more than you set aside, and in most cases you get more car than you would have found alone.
            </p>
            <p>
              For buyers from abroad, the fee is a fixed amount set by the value of the vehicle, starting at R18,000, with inspection, transport and registration billed at cost.
              {' '}
              <Link href="/vantara/international-buyers" className="ghost">See the pricing</Link>
              .
            </p>
            <h2>What that means for you</h2>
            <p>
              Your advisor&apos;s interest is the right deal, not any deal. The person facing the market is working for you. You make the decision with full information and without the pressure that dealers use to take margin from unprepared buyers.
            </p>
            <p className="pull">
              Most people negotiate against a professional. Vantara puts a professional
              {' '}
              <em>on your side.</em>
            </p>
            <p>Vantara takes a limited number of clients at a time. Every client gets the full process, because that is the only way it works.</p>
          </article>
          <aside className="aside">
            <div className="aside-card rv">
              <h3>Want someone in your corner?</h3>
              <p>Tell me what you are buying. I&apos;ll tell you honestly whether I can add value.</p>
              <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-ART-INSIGHT-3)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-ART-INSIGHT-3">
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
              <Link href="/vantara/insight-1" className="rel rv" style={{ '--s': '0' } as CSSProperties}>
                <span className="tag">Insider</span>
                <h3>Buying a car alone</h3>
                <p>What happens on the other side of the desk.</p>
              </Link>
              <Link href="/vantara/automotive" className="rel rv" style={{ '--s': '1' } as CSSProperties}>
                <span className="tag">Trade-in</span>
                <h3>Two dealers. One client.</h3>
                <p>R60,000 in dealer support on one trade-in.</p>
              </Link>
              <Link href="/vantara/international-buyers" className="rel rv" style={{ '--s': '2' } as CSSProperties}>
                <span className="tag">From abroad</span>
                <h3>Buying from abroad</h3>
                <p>The full service for buyers outside South Africa.</p>
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
