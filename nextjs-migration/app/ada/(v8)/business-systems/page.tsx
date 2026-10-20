import AdaPage, { adaMeta } from '../_components/AdaPage';
import '@/ada-export/styles/ada-base.css';
import '@/ada-export/styles/ada-sys.css';
import '../ada-v8-fixes.css';

export const metadata = adaMeta('sys');
export const dynamic = 'force-static';

export default function Page() {
  return <AdaPage k="sys" />;
}
