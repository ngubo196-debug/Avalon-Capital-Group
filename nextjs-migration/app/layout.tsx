import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.avaloncapitalgroup.co.za'),
  title: 'Avalon Capital Group | Investment, Brokerage & Digital Services | South Africa',
  description:
    'Avalon Capital Group is a South African business ecosystem operating through Vantara (premium acquisition brokerage) and ADA (AI-powered digital infrastructure). We structure deals, build digital systems, and create compounding value.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Avalon Capital Group',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://avaloncapitalgroup.co.za/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Avalon Capital Group" />
        <meta name="google-site-verification" content="xakG5wb8pmc22WJRC2LrpUiq5hJo1lErDmrOzsi-F1U" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://www.avaloncapitalgroup.co.za/#org',
              name: 'Avalon Capital Group',
              legalName: 'Avalon Capital Group (Pty) Ltd',
              identifier: '2025/671885/07',
              description: 'Avalon Capital Group runs two businesses: Vantara, a car buying advisor that works only for the buyer, and ADA, which builds websites, ads and business systems that bring in work. Based in Pietermaritzburg, KwaZulu-Natal.',
              url: 'https://www.avaloncapitalgroup.co.za',
              logo: 'https://www.avaloncapitalgroup.co.za/assets/acg-logo.jpg',
              image: 'https://www.avaloncapitalgroup.co.za/og-image.jpg',
              telephone: '+27712205313',
              email: 'hello@avaloncapitalgroup.co.za',
              sameAs: [
                'https://www.linkedin.com/company/avalon-capital-group',
              ],
            }),
          }}
        />

        {/* Person JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.avaloncapitalgroup.co.za/#luyanda',
              name: 'Luyanda Ngubo',
              jobTitle: 'Founder, Avalon Capital Group',
              worksFor: { '@id': 'https://www.avaloncapitalgroup.co.za/#org' },
              url: 'https://www.avaloncapitalgroup.co.za/about',
              sameAs: [
                'https://www.linkedin.com/in/luyanda-ngubo',
              ],
              knowsAbout: [
                'SEO and organic search strategy',
                'Web design and conversion architecture',
                'Digital agency services, South Africa',
                'Vehicle acquisition advisory',
                'Automotive industry, South Africa',
                'AI-augmented business operations',
                'KwaZulu-Natal business market',
                'Cold outreach and client acquisition',
              ],
              description: 'Luyanda Ngubo is the founder of Avalon Capital Group, which runs Vantara (car buying advisory for buyers in South Africa and abroad) and ADA (websites, ads and business systems for South African businesses).',
            }),
          }}
        />

        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Avalon Capital Group',
              description: 'Avalon Capital Group runs two businesses: Vantara, a car buying advisor that works only for the buyer, and ADA, which builds websites, ads and business systems that bring in work. Based in Pietermaritzburg, KwaZulu-Natal.',
              url: 'https://www.avaloncapitalgroup.co.za',
              telephone: '+27712205313',
              email: 'hello@avaloncapitalgroup.co.za',
              image: 'https://www.avaloncapitalgroup.co.za/og-image.jpg',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pietermaritzburg',
                addressRegion: 'KwaZulu-Natal',
                addressCountry: 'ZA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -29.6006,
                longitude: 30.3794,
              },
              areaServed: { '@type': 'Country', name: 'South Africa' },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vehicle acquisition advisory' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Traffic Register Number preparation' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Websites' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads and Meta ads' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business systems' } },
                ],
              },
              sameAs: [
                'https://www.linkedin.com/company/avalon-capital-group',
              ],
            }),
          }}
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@300;400;500&family=Bodoni+Moda:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId="G-N3677D00PN" />
      </body>
    </html>
  );
}
