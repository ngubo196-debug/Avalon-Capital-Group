import Script from 'next/script';
import type { Metadata } from 'next';
import pages from '@/ada-export/pages.json';

type Key = keyof typeof pages;
type Json = Record<string, unknown>;

// pages.json is generated, so the link to the site-wide Organization (declared in app/layout.tsx)
// is applied here instead of by hand-editing it.
const ORG_ID = 'https://www.avaloncapitalgroup.co.za/#org';
const ORG_NAME = 'Avalon Capital Group';

function linkParentOrg(block: Json): Json {
  const graph = block['@graph'];
  if (!Array.isArray(graph)) return block;
  return {
    ...block,
    '@graph': graph.map((node: Json) =>
      node.parentOrganization ? { ...node, parentOrganization: { '@id': ORG_ID, name: ORG_NAME } } : node,
    ),
  };
}

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
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(linkParentOrg(o as Json)) }} />
      ))}
      <div className="ada-v8" dangerouslySetInnerHTML={{ __html: p.html }} />
      <Script src={p.js} strategy="afterInteractive" />
    </>
  );
}
