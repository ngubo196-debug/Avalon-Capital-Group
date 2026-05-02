const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: CORS });
}

export async function POST(request: Request) {
  try {
    const body: any = await request.json().catch(() => ({}));
    const { url } = body;

    // 1. Validate URL
    if (!url || typeof url !== 'string') {
      return Response.json({ error: 'Missing url' }, { status: 400, headers: CORS });
    }

    let parsed: URL;
    try {
      parsed = new URL(url);
    } catch {
      return Response.json({ error: 'Invalid URL' }, { status: 400, headers: CORS });
    }

    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return Response.json({ error: 'URL must use http or https' }, { status: 400, headers: CORS });
    }

    const domain = parsed.hostname;

    // 2. Fetch with 10-second timeout and desktop User-Agent
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);

    let response: globalThis.Response;
    try {
      response = await fetch(url, {
        signal: controller.signal,
        redirect: 'follow',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
    } catch (err: any) {
      clearTimeout(timer);
      return Response.json(
        { error: err.name === 'AbortError' ? 'Request timed out' : `Fetch failed: ${err.message}` },
        { status: 400, headers: CORS }
      );
    }
    clearTimeout(timer);

    if (!response.ok) {
      return Response.json({ error: `Target returned HTTP ${response.status}` }, { status: 400, headers: CORS });
    }

    const html = await response.text();
    const finalUrl = response.url;

    // 3. Extract fields

    // pageTitle
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const pageTitle = titleMatch ? stripTags(titleMatch[1]).trim() : '';

    // metaDescription — find the tag first, then pull content from it (handles either attribute order)
    const metaDescTag = html.match(/<meta\b[^>]*\bname=["']description["'][^>]*>/i)
      || html.match(/<meta\b[^>]*\bcontent=["'][^"']*["'][^>]*\bname=["']description["'][^>]*>/i);
    let metaDescription = '';
    if (metaDescTag) {
      const cm = metaDescTag[0].match(/\bcontent=["']([^"']*)["']/i);
      if (cm) metaDescription = cm[1].trim();
    }

    // h1Tags
    const h1Tags = Array.from(html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi))
      .map(m => stripTags(m[1]).trim())
      .filter(Boolean);

    // h2Count
    const h2Count = (html.match(/<h2[\s>]/gi) || []).length;

    // hasSchemaMarkup
    const hasSchemaMarkup = /<script[^>]+type=["']application\/ld\+json["']/i.test(html);

    // images
    const imgTags = Array.from(html.matchAll(/<img[^>]*>/gi));
    const imagesTotal = imgTags.length;
    const imagesMissingAlt = imgTags.filter(m => {
      const altMatch = m[0].match(/\balt=["']([^"']*)["']/i);
      return !altMatch || altMatch[1].trim() === '';
    }).length;

    // hasMobileViewport
    const hasMobileViewport = /<meta\b[^>]*\bname=["']viewport["']/i.test(html);

    // isSSL
    const isSSL = finalUrl.startsWith('https://');

    // internalLinkCount
    const internalLinkCount = Array.from(html.matchAll(/\bhref=["']([^"']*?)["']/gi))
      .filter(m => {
        const href = m[1].trim();
        return href.startsWith('/') || href.includes(domain);
      }).length;

    // wordCount — strip scripts, styles, then all tags
    const wordCount = html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&[a-z#0-9]+;/gi, ' ')
      .trim()
      .split(/\s+/)
      .filter((w: string) => w.length > 0)
      .length;

    // 4. Return result
    return Response.json({
      url: finalUrl,
      pageTitle,
      metaDescription,
      h1Tags,
      h2Count,
      hasSchemaMarkup,
      imagesTotal,
      imagesMissingAlt,
      hasMobileViewport,
      isSSL,
      internalLinkCount,
      wordCount
    }, { headers: CORS });

  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500, headers: CORS });
  }
}

function stripTags(str: string): string {
  return str.replace(/<[^>]+>/g, '');
}
