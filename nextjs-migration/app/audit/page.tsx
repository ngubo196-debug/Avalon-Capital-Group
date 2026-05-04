import type { Metadata } from 'next';
import AuditContent from './AuditContent';

export const metadata: Metadata = {
  title: 'Free Website Audit | Avalon Digital Agency',
  description: 'Answer 13 questions and receive a personalised digital presence report scored across 6 dimensions. Free, AI-powered, built for South African businesses.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/audit' },
};

export default function AuditPage() {
  return <AuditContent />;
}
