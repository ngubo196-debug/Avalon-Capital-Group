import type { Metadata } from 'next';
import CaseStudyClient from './CaseStudyClient';

export const metadata: Metadata = {
  title: 'We Built Our Own Site First. Here Is What Happened. | ADA',
  description: '1 page indexed on Google. 17 pages built but invisible. We found the problem, fixed it, and documented everything. Now 29 pages indexed.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/acg-case-study' },
};

export default function Page() {
  return <CaseStudyClient />;
}
