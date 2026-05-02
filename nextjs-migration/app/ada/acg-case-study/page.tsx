import type { Metadata } from 'next';
import CaseStudyClient from './CaseStudyClient';

export const metadata: Metadata = {
  title: 'ACG — How We Built This | Avalon Digital Agency',
  description: 'The full build story of avaloncapitalgroup.co.za. From a plain HTML SPA with 1 indexed page to a fully server-rendered Next.js site with 16 indexed pages. Documented live.',
};

export default function Page() {
  return <CaseStudyClient />;
}
