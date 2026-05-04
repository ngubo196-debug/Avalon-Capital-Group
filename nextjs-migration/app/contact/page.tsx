import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact | Avalon Capital Group',
  description: 'Get in touch with Avalon Capital Group. Every great result begins with a conversation.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
