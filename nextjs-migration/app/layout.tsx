import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Avalon Capital Group | Investment, Brokerage & Digital Services | South Africa',
  description:
    'Avalon Capital Group is a South African business ecosystem operating through Vantara (premium acquisition brokerage) and Avalon Digital Agency (AI-powered digital infrastructure). We structure deals, build digital systems, and create compounding value.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://avaloncapitalgroup.co.za/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="author" content="Avalon Capital Group" />
        <meta name="google-site-verification" content="xakG5wb8pmc22WJRC2LrpUiq5hJo1lErDmrOzsi-F1U" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://avaloncapitalgroup.co.za/og-image.jpg" />
        <meta property="og:locale" content="en_ZA" />
        <meta property="og:site_name" content="Avalon Capital Group" />

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
              name: 'Avalon Capital Group',
              url: 'https://www.avaloncapitalgroup.co.za',
              logo: 'https://www.avaloncapitalgroup.co.za/assets/acg-logo.jpg',
              sameAs: [],
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
              description: 'Business acquisition brokerage and AI digital agency based in Durban, KwaZulu-Natal, South Africa.',
              url: 'https://avaloncapitalgroup.co.za',
              telephone: '',
              email: '',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Durban',
                addressRegion: 'KwaZulu-Natal',
                addressCountry: 'ZA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -29.8587,
                longitude: 31.0218,
              },
              areaServed: [
                { '@type': 'City', name: 'Durban' },
                { '@type': 'State', name: 'KwaZulu-Natal' },
                { '@type': 'Country', name: 'South Africa' },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Acquisition Brokerage' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vehicle Acquisition' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design Durban' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Digital Agency' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services KwaZulu-Natal' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Presence Audit' } },
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
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
