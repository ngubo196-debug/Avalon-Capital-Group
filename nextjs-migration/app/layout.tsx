import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Avalon Capital Group | Investment, Brokerage & Digital Services | South Africa',
  description:
    'Avalon Capital Group is a South African business ecosystem operating through Vantara (premium acquisition brokerage) and Avalon Digital Agency (AI-powered digital infrastructure). We structure deals, build digital systems, and create compounding value.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
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

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avalon Capital Group | South Africa" />
        <meta name="twitter:description" content="Premium brokerage and AI-powered digital services. Vantara. Avalon Digital Agency." />
        <meta name="twitter:image" content="https://avaloncapitalgroup.co.za/og-image.jpg" />

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
