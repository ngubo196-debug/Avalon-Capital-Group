/** @type {import('next').NextConfig} */
const ADA = 'https://adagrowth.co.za';

const nextConfig = {
  async redirects() {
    return [
      // Vantara legacy URLs
      { source: '/vantara-automotive',     destination: '/vantara/automotive',             permanent: true },
      { source: '/vantara-property',       destination: '/vantara',                        permanent: true },
      { source: '/vantara-insight-1',      destination: '/vantara/insight-1',              permanent: true },
      { source: '/vantara-insight-2',      destination: '/vantara',                        permanent: true },
      { source: '/vantara-insight-3',      destination: '/vantara/insight-3',              permanent: true },
      { source: '/vantara/property',       destination: '/vantara',                        permanent: true },
      { source: '/vantara/insight-2',      destination: '/vantara',                        permanent: true },

      // Old ADA URLs that were already renamed: point straight at the final adagrowth.co.za URL (no chained hops)
      { source: '/afripact-civils',        destination: `${ADA}/afripact-civils`,           statusCode: 301 },
      { source: '/blog-ai-awareness',      destination: `${ADA}/insights/ai-awareness`,     statusCode: 301 },
      { source: '/blog-ai-websites',       destination: `${ADA}/insights/ai-websites`,      statusCode: 301 },
      { source: '/blog-canopy-deep-dive',  destination: `${ADA}/insights/canopy-deep-dive`, statusCode: 301 },
      { source: '/blog-revenue-website',   destination: `${ADA}/insights/revenue-website`,  statusCode: 301 },
      { source: '/blog-why-websites-fail', destination: `${ADA}/insights/why-websites-fail`, statusCode: 301 },
      { source: '/ada/seo-agency-durban',          destination: `${ADA}/website-not-generating-leads`, statusCode: 301 },
      { source: '/ada/ai-automation-south-africa', destination: `${ADA}/business-systems`,             statusCode: 301 },
      { source: '/ada/business-automation',        destination: `${ADA}/business-systems`,             statusCode: 301 },
      { source: '/ada/get-your-assistant',         destination: `${ADA}/ai-assistant-for-business`,    statusCode: 301 },
      { source: '/ada/case-studies',               destination: ADA,                                    statusCode: 301 },

      // ADA now lives on adagrowth.co.za
      { source: '/ada',            destination: ADA,                 statusCode: 301 },
      { source: '/ada/:path*',     destination: `${ADA}/:path*`,     statusCode: 301 },
      { source: '/audit',          destination: `${ADA}/contact`,    statusCode: 301 },
      { source: '/offers',         destination: `${ADA}/offers`,     statusCode: 301 },
      { source: '/insights',       destination: `${ADA}/insights`,   statusCode: 301 },
    ];
  },
};

export default nextConfig;
