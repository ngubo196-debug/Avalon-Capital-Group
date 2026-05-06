import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact | Avalon Capital Group',
  description: 'Reach Avalon Capital Group directly via WhatsApp or email. Whether it is a deal, a project, or a partnership — every great result begins with a conversation.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
