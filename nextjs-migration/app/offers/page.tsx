import type { Metadata } from 'next';
import OffersContent from './OffersContent';

export const metadata: Metadata = {
  title: 'Website Audit & Digital Services | Avalon Digital Agency | South Africa',
  description: 'Free website audit, paid deep-dives, and full digital growth packages from R18,500. Find out if your website is generating leads - or quietly costing you business.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/offers' },
};

export default function OffersPage() {
  return <OffersContent />;
}
