import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

const url = 'https://www.avaloncapitalgroup.co.za/vantara/automotive';
const image = 'https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg';

export const metadata: Metadata = {
  title: { absolute: 'Trade-In Negotiation Case Study: R60,000 Dealer Support | Vantara' },
  description: 'How Vantara handled a trade-in across two dealerships: R60,000 in dealer support negotiated on a 2022 BAIC X55 and eight finance scenarios modelled for the buyer.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Trade-In Negotiation Case Study: R60,000 Dealer Support | Vantara',
    description: 'How Vantara handled a trade-in across two dealerships: R60,000 in dealer support negotiated on a 2022 BAIC X55 and eight finance scenarios modelled for the buyer.',
    url,
    siteName: 'Vantara',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: image, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Trade-In Negotiation Case Study: R60,000 Dealer Support | Vantara', description: 'How Vantara handled a trade-in across two dealerships: R60,000 in dealer support negotiated on a 2022 BAIC X55 and eight finance scenarios modelled for the buyer.', images: [image] },
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
      "headline": "Two dealers. One client. R60,000 extracted.",
      "description": "How Vantara handled a trade-in across two dealerships: R60,000 in dealer support negotiated on a 2022 BAIC X55 and eight finance scenarios modelled for the buyer.",
      "url": "https://www.avaloncapitalgroup.co.za/vantara/automotive",
      "mainEntityOfPage": "https://www.avaloncapitalgroup.co.za/vantara/automotive",
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
          "name": "Two dealers, one client",
          "item": "https://www.avaloncapitalgroup.co.za/vantara/automotive"
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
              <span aria-current="page">Two dealers, one client</span>
            </nav>
            <p className="eyebrow ld" style={{ '--d': '80' } as CSSProperties}>
              <i></i>
              Deal breakdown · Trade-in
            </p>
            <h1 id="h1" className="ld" style={{ '--d': '160' } as CSSProperties}>
              Two dealers. One client.
              {' '}
              <em>R60,000 extracted.</em>
            </h1>
            <p className="standfirst ld" style={{ '--d': '300' } as CSSProperties}>
              A vehicle upgrade that needed trade-in work across two competing dealerships, dealer support negotiated, and eight finance scenarios modelled, all managed for the buyer.
            </p>
            <p className="byline ld" style={{ '--d': '400' } as CSSProperties}>
              <img src="/assets/vantara/luyanda-certificate.jpg" alt="" width="36" height="36" />
              <span>
                By
                {' '}
                <b>Luyanda Ngubo</b>
              </span>
              <span aria-hidden="true">·</span>
              <span>4 min read</span>
              <span aria-hidden="true">·</span>
              <span>Updated October 2026</span>
            </p>
          </div>
        </section>
        <div className="wrap article-wrap">
          <article className="prose">
            <div className="stats rv">
              <div>
                <b>R60,000</b>
                <span>Dealer support negotiated</span>
              </div>
              <div>
                <b>8</b>
                <span>Finance scenarios modelled</span>
              </div>
              <div>
                <b>0</b>
                <span>Dealer pressure in the decision</span>
              </div>
            </div>
            <h2>The client knew what they wanted. The market didn&apos;t make it simple.</h2>
            <p>
              The brief was clear: upgrade the current vehicle within a set budget. What looked straightforward had layers. A trade-in with a real shortfall, two dealerships offering very different valuations, competing vehicles at similar prices, and several finance structures that each produced a different monthly figure.
            </p>
            <p>
              Without a structure, the client would have made a high-value decision under dealer time pressure, with incomplete information and no way to compare the options fairly.
            </p>
            <h2>Trade-in analysis across two dealers</h2>
            <p>
              The client&apos;s 2022 BAIC X55, with a settlement of R325,000, went to two dealerships at the same time. The valuations came back far apart. I mapped both positions, worked out the real shortfall at each dealer and found where dealer support could close the gap.
            </p>
            <h2>R60,000 in combined dealer support</h2>
            <p>
              On one of the two options I negotiated R30,000 in trade-in assistance and a further R30,000 over-allowance. That is
              {' '}
              <strong>R60,000 in combined support</strong>
              {' '}
              that cut the client&apos;s effective shortfall. Dealers offer this kind of concession. They rarely volunteer it.
            </p>
            <h2>Eight finance scenarios, side by side</h2>
            <p>
              Both vehicles were modelled at four balloon options, 20%, 25%, 30% and 35%, over 72 months at market rates. The client could see each monthly figure, the balloon owed at the end, and how each option compared on total cost.
            </p>
            <h2>Both options on the table</h2>
            <p>
              I didn&apos;t push one outcome. Both options were presented in full, with an honest view of the trade-offs and a clear recommendation: apply for finance on both at once and let the bank approval and final trade-in figure decide the stronger deal.
            </p>
            <p className="pull">
              The client walked in with the same information advantage
              {' '}
              <em>dealers use every day.</em>
            </p>
            <h2>What this shows</h2>
            <p>
              Vehicle deals are rarely about the car. They are about pricing, structure, timing and leverage. The client didn&apos;t need to understand dealer incentive structures, balloon payments or trade-in arbitrage. They needed someone who did, working for them and not for the dealer.
            </p>
          </article>
          <aside className="aside">
            <div className="aside-card rv">
              <h3>Upgrading with a trade-in?</h3>
              <p>Send me the car, the settlement figure and what you want next. I&apos;ll tell you where the room is.</p>
              <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-ART-AUTOMOTIVE)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-ART-AUTOMOTIVE">
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
              <Link href="/vantara/insight-4" className="rel rv" style={{ '--s': '0' } as CSSProperties}>
                <span className="tag">First car</span>
                <h3>First vehicle. Two options.</h3>
                <p>R19,014 found before negotiation started.</p>
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
