import Script from 'next/script';
import type { Metadata } from 'next';
import pages from '@/ada-export/pages.json';

type Key = keyof typeof pages;

export function adaMeta(k: Key): Metadata {
  const p = pages[k];
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: p.canonical },
    openGraph: { title: p.title, description: p.description, url: p.canonical, type: 'website', locale: 'en_ZA', siteName: 'ADA' },
  };
}

export default function AdaPage({ k }: { k: Key }) {
  const p = pages[k];
  return (
    <>
      {p.jsonld.map((o, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />
      ))}
      <div className="ada-v8" dangerouslySetInnerHTML={{ __html: p.html }} />
      <Script src={p.js} strategy="afterInteractive" />
    </>
  );
}
