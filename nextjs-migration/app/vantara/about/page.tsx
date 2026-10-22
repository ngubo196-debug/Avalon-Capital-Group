import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

const url = 'https://www.avaloncapitalgroup.co.za/vantara/about';
const image = 'https://www.avaloncapitalgroup.co.za/assets/vantara/og-vantara.jpg';

export const metadata: Metadata = {
  title: { absolute: 'About Luyanda Ngubo | Vantara' },
  description: 'Luyanda Ngubo runs Vantara. Three years on a dealership floor, trained by BAIC South Africa, now working only for the buyer. See the training and the handovers.',
  alternates: { canonical: url },
  openGraph: {
    title: 'About Luyanda Ngubo | Vantara',
    description: 'Luyanda Ngubo runs Vantara. Three years on a dealership floor, trained by BAIC South Africa, now working only for the buyer. See the training and the handovers.',
    url,
    siteName: 'Vantara',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: image, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'About Luyanda Ngubo | Vantara', description: 'Luyanda Ngubo runs Vantara. Three years on a dealership floor, trained by BAIC South Africa, now working only for the buyer. See the training and the handovers.', images: [image] },
};

export const dynamic = 'force-static';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
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
      "@type": "AboutPage",
      "url": "https://www.avaloncapitalgroup.co.za/vantara/about",
      "mainEntity": {
        "@id": "https://www.avaloncapitalgroup.co.za/#luyanda"
      }
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
          "name": "About Luyanda",
          "item": "https://www.avaloncapitalgroup.co.za/vantara/about"
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
                <span aria-current="page">About Luyanda</span>
              </nav>
              <p className="eyebrow ld" style={{ '--d': '80' } as CSSProperties}>
                <i></i>
                The person behind Vantara
              </p>
              <h1 id="h1">
                <span className="ln">
                  <span style={{ '--d': '160' } as CSSProperties}>I&apos;m Luyanda.</span>
                </span>
                <span className="ln">
                  <span style={{ '--d': '260' } as CSSProperties}>
                    <em>I represent buyers.</em>
                  </span>
                </span>
              </h1>
              <p className="ld" style={{ '--d': '420' } as CSSProperties}>
                I spent three years selling cars on a dealership floor. I know how a price is built and who it is built for.
                {' '}
                <strong>It is not the buyer.</strong>
              </p>
              <p className="ld" style={{ '--d': '500' } as CSSProperties}>
                Vantara is the other side of that table. I run every deal myself: sourcing, checking value, negotiating and the paperwork. One person, accountable from your first message to the keys.
              </p>
              <div className="cta-row ld" style={{ '--d': '580' } as CSSProperties}>
                <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-ABOUT)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-ABOUT">
                  Start the conversation
                  {' '}
                  <span className="arr">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <figure className="wide">
              <img src="/assets/vantara/handover-gidmar.jpg" alt="Luyanda shaking hands with a buyer at the buyer's business after delivery" width="1100" height="825" fetchPriority="high" />
            </figure>
          </div>
        </section>
        <section className="sec proof-band" aria-label="Background">
          <div className="wrap">
            <div className="about-top">
              <p className="statement" aria-label="Trained by the manufacturer. Sold on the dealer floor. Now working for the buyer.">
                <span data-st="" style={{ '--s': '0' } as CSSProperties}>Trained by the manufacturer.</span>
                {' '}
                <span data-st="" style={{ '--s': '1' } as CSSProperties}>Sold on the dealer floor.</span>
                {' '}
                <span data-st="" className="last" style={{ '--s': '2' } as CSSProperties}>Now working for the buyer.</span>
              </p>
              <div className="about-copy">
                <div className="cert rv" style={{ '--s': '1' } as CSSProperties}>
                  <span className="seal" aria-hidden="true">
                    <svg viewBox="0 0 20 20">
                      <path d="M10 2.5l2.2 1.6 2.7-.1.8 2.6 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-.8 2.6-2.7-.1L10 17.5l-2.2-1.6-2.7.1-.8-2.6-2.2-1.6.9-2.6-.9-2.6 2.2-1.6.8-2.6 2.7.1z" fill="none" stroke="currentColor" strokeWidth="1.1" />
                      <path d="M7 10.2l2 2 4-4.2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <small>Certificate of completion · October 2025</small>
                    <q>BAIC SA B30 Launch Theme training</q>
                  </div>
                </div>
                <p className="rv" style={{ '--s': '2' } as CSSProperties}>
                  In October 2025 BAIC South Africa brought its dealer network to the Gqeberha plant ahead of the B30 launch. I was there for the training, the plant tour and the product sessions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec" aria-labelledby="trained-h">
          <div className="wrap">
            <div className="subhead" style={{ marginTop: '0' }}>
              <div>
                <h2 id="trained-h" className="rv" style={{ fontSize: 'clamp(26px,2.6vw,34px)' }}>Trained by the manufacturer</h2>
                <p className="rv" style={{ '--s': '1' } as CSSProperties}>BAIC South Africa plant, Gqeberha. B30 launch training, October 2025.</p>
              </div>
              <div className="ctrls">
                <button className="icon-btn" id="gPrev" aria-label="Previous photos">
                  <svg viewBox="0 0 16 16">
                    <path d="M10 3L5 8l5 5" />
                  </svg>
                </button>
                <button className="icon-btn" id="gNext" aria-label="Next photos">
                  <svg viewBox="0 0 16 16">
                    <path d="M6 3l5 5-5 5" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="gallery" id="gallery" tabIndex={0} aria-label="Photos from BAIC South Africa training">
              <figure className="shot">
                <button className="reveal-img" style={{ '--s': '0' } as CSSProperties} data-lb="0" aria-label="View larger: Outside the plant">
                  <img src="/assets/vantara/baic-plant.jpg" alt="Luyanda outside the BAIC South Africa plant with the South African, Chinese and BAIC flags" loading="lazy" width="900" height="1124" />
                </button>
                <figcaption>
                  <b>Outside the plant</b>
                  <span>Gqeberha · Oct 2025</span>
                </figcaption>
              </figure>
              <figure className="shot">
                <button className="reveal-img" style={{ '--s': '1' } as CSSProperties} data-lb="1" aria-label="View larger: BAIC Automobile SA">
                  <img src="/assets/vantara/baic-sign.jpg" alt="Luyanda at BAIC Automobile SA reception in front of the plant model" loading="lazy" width="900" height="1138" />
                </button>
                <figcaption>
                  <b>BAIC Automobile SA</b>
                  <span>Reception · Oct 2025</span>
                </figcaption>
              </figure>
              <figure className="shot">
                <button className="reveal-img" style={{ '--s': '2' } as CSSProperties} data-lb="2" aria-label="View larger: With the new B30">
                  <img src="/assets/vantara/baic-b30.jpg" alt="Luyanda beside a BAIC B30 at the launch training" loading="lazy" width="900" height="1200" />
                </button>
                <figcaption>
                  <b>With the new B30</b>
                  <span>Launch training · Oct 2025</span>
                </figcaption>
              </figure>
              <figure className="shot">
                <button className="reveal-img" style={{ '--s': '3' } as CSSProperties} data-lb="3" aria-label="View larger: Assembly shop, trim line">
                  <img src="/assets/vantara/baic-trim-line.jpg" alt="Luyanda on the BAIC assembly shop trim line" loading="lazy" width="900" height="1200" />
                </button>
                <figcaption>
                  <b>Assembly shop, trim line</b>
                  <span>Plant tour · Oct 2025</span>
                </figcaption>
              </figure>
              <figure className="shot">
                <button className="reveal-img" style={{ '--s': '4' } as CSSProperties} data-lb="4" aria-label="View larger: The training room">
                  <img src="/assets/vantara/baic-training-room.jpg" alt="Training room with the BAIC SA B30 Launch Theme Training banner" loading="lazy" width="1000" height="684" style={{ objectPosition: '40% 50%' }} />
                </button>
                <figcaption>
                  <b>The training room</b>
                  <span>B30 launch theme training</span>
                </figcaption>
              </figure>
            </div>
            <div className="subhead">
              <div>
                <h2 className="rv" style={{ fontSize: 'clamp(26px,2.6vw,34px)' }}>Sold on the dealer floor</h2>
                <p className="rv" style={{ '--s': '1' } as CSSProperties}>Handovers from my dealership years in Pietermaritzburg.</p>
              </div>
            </div>
            <div className="floor two">
              <figure className="shot">
                <button className="reveal-img" style={{ '--s': '0' } as CSSProperties} data-lb="5" aria-label="View larger: Showroom handover">
                  <img src="/assets/vantara/handover-mercedes.jpg" alt="Luyanda shaking hands with a buyer beside a Mercedes-Benz in the showroom" loading="lazy" width="900" height="998" />
                </button>
                <figcaption>
                  <b>Showroom handover</b>
                  <span>Dealership years</span>
                </figcaption>
              </figure>
              <figure className="shot">
                <button className="reveal-img" style={{ '--s': '1' } as CSSProperties} data-lb="6" aria-label="View larger: On the floor">
                  <img src="/assets/vantara/dealer-floor.jpg" alt="Luyanda on the dealership floor between two cars" loading="lazy" width="900" height="1116" style={{ objectPosition: '50% 40%' }} />
                </button>
                <figcaption>
                  <b>On the floor</b>
                  <span>Pietermaritzburg</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="sec quote" aria-label="Why Vantara">
          <div className="wrap">
            <blockquote className="rv">
              <p>
                Most people negotiate against a professional on the other side. Vantara puts a professional
                {' '}
                <em>on your side.</em>
              </p>
              <cite>Luyanda Ngubo, Vantara</cite>
            </blockquote>
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
              <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-CLOSE-ABOUT)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-CLOSE-ABOUT">
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
