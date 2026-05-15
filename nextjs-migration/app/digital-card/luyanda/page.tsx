import type { Metadata } from 'next';
import LuyandaCardContent from './LuyandaCardContent';

export const metadata: Metadata = {
  title: 'Luyanda Ngubo, Avalon Capital Group',
  description: 'Digital business card for Luyanda Ngubo, Founder of Avalon Capital Group.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/digital-card/luyanda' },
};

export default function LuyandaCardPage() {
  return <LuyandaCardContent />;
}
