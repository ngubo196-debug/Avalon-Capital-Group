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
    images: [],
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: [],
  },
};

export default function LuyandaCardPage() {
  return <LuyandaCardContent />;
}
