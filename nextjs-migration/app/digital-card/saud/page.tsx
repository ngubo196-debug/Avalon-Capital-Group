import type { Metadata } from 'next';
import SaudCardContent from './SaudCardContent';

export const metadata: Metadata = {
  title: 'Saud Olla — Avalon Capital Group',
  description: 'Digital business card for Saud Olla, Co-Founder & Chief Executive of Avalon Capital Group.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/digital-card/saud' },
};

export default function SaudCardPage() {
  return <SaudCardContent />;
}
