import type { Metadata } from 'next';
import LuyandaCardContent from './LuyandaCardContent';

const TITLE = 'Luyanda Ngubo, Founder, ADA';
const DESCRIPTION =
  'Digital business card for Luyanda Ngubo, Founder of ADA. Google ads, websites and business systems for South African businesses.';
const CARD_URL = 'https://www.avaloncapitalgroup.co.za/digital-card/luyanda';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CARD_URL },
  openGraph: {
    type: 'profile',
    locale: 'en_ZA',
    url: CARD_URL,
    siteName: 'ADA',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: 'https://www.avaloncapitalgroup.co.za/assets/ada-card-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Luyanda Ngubo, Founder, ADA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://www.avaloncapitalgroup.co.za/assets/ada-card-og.jpg'],
  },
};

export default function LuyandaCardPage() {
  return <LuyandaCardContent />;
}
