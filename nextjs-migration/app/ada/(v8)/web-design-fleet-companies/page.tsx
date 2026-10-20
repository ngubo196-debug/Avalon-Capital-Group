import AdaPage, { adaMeta } from '../_components/AdaPage';
import '@/ada-export/styles/ada-base.css';
import '@/ada-export/styles/ada-ind.css';
import '../ada-v8-fixes.css';

export const metadata = adaMeta('flt');
export const dynamic = 'force-static';
export const viewport = { themeColor: '#ffffff', colorScheme: 'light' };

export default function Page() {
  return <AdaPage k="flt" />;
}
