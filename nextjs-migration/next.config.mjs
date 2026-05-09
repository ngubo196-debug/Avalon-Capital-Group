/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/afripact-civils',       destination: '/ada/afripact-civils',            permanent: true },
      { source: '/vantara-automotive',     destination: '/vantara/automotive',             permanent: true },
      { source: '/vantara-property',       destination: '/vantara/property',               permanent: true },
      { source: '/vantara-insight-1',      destination: '/vantara/insight-1',              permanent: true },
      { source: '/vantara-insight-2',      destination: '/vantara/insight-2',              permanent: true },
      { source: '/vantara-insight-3',      destination: '/vantara/insight-3',              permanent: true },
      { source: '/blog-ai-awareness',      destination: '/ada/insights/ai-awareness',      permanent: true },
      { source: '/blog-ai-websites',       destination: '/ada/insights/ai-websites',       permanent: true },
      { source: '/blog-canopy-deep-dive',  destination: '/ada/insights/canopy-deep-dive',  permanent: true },
      { source: '/blog-revenue-website',   destination: '/ada/insights/revenue-website',   permanent: true },
      { source: '/blog-why-websites-fail', destination: '/ada/insights/why-websites-fail', permanent: true },
    ];
  },
};

export default nextConfig;
