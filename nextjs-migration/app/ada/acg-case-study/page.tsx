import type { Metadata } from 'next';
import CaseStudyClient from './CaseStudyClient';

export const metadata: Metadata = {
  title: 'How We Built ACG — Next.js Migration Case Study | Avalon Digital Agency, Durban',
  description: 'The full story of how ADA migrated avaloncapitalgroup.co.za from a plain HTML SPA to a server-rendered Next.js site — documented live by a digital agency in Durban, South Africa.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/acg-case-study' },
};

export default function Page() {
  return <CaseStudyClient />;
}
