import type { Metadata } from 'next';
import OffersContent from './OffersContent';

export const metadata: Metadata = {
  title: 'Offers | Avalon Digital Agency | Website Audits & Digital Services',
  description: 'Website audits, performance deep-dives, and ADA digital service tiers. Find out if your website is working, or quietly costing you business.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/offers' },
};

export default function OffersPage() {
  return <OffersContent />;
}
