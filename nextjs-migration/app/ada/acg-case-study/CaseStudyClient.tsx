'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

const useInView = (ref: React.RefObject<HTMLElement | null>, delay = 0) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setVisible(true), delay);
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, delay]);
  return visible;
};

const RevealShot = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useInView(ref, delay);
  return <div ref={ref} className={`wds-shot${vis ? ' vis' : ''}`}>{children}</div>;
};

export default function CaseStudyClient() {
  return (
    <div id="page-acg-case-study" className="page ada-section" role="main">
      <style suppressHydrationWarning>{`
        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; }
        .wds-label-bar { display: inline-block; width: 20px; height: 2px; background: var(--ada-accent); vertical-align: middle; margin-right: 10px; }
        .wds-h1 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 400; font-size: clamp(38px, 4.4vw, 62px); line-height: 1.12; color: var(--ada-ink); max-width: 820px; margin: 0; }
        .wds-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(28px, 3vw, 42px); line-height: 1.15; color: var(--ada-ink); margin: 0 0 24px; }
        .wds-body { font-family: DM Sans, sans-serif; font-size: 17px; font-weight: 300; line-height: 1.75; color: var(--ada-ink-soft); max-width: 720px; margin: 0; }
        .wds-body strong { font-weight: 600; color: var(--ada-ink); }
        .wds-body + .wds-body { margin-top: 20px; }
        .wds-body--spaced { margin-top: 2rem; }
        .wds-hero { background: var(--ada-white); padding: calc(68px + 6rem) 3.5rem 6rem; }
        .wds-section { padding: 6rem 3.5rem; }
        .wds-section--white { background: var(--ada-white); }
        .wds-section--wash { background: var(--ada-wash); }
        .wds-inner { max-width: 1160px; margin: 0 auto; }

        .wds-badge { display: flex; width: fit-content; align-items: center; background: #EEF2FF; border: 1px solid var(--ada-accent); color: var(--ada-accent); border-radius: 100px; padding: 5px 16px; font-family: DM Sans, sans-serif; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1.5rem; }
        .wds-hero-intro { max-width: 600px; margin-top: 24px; }
        .wds-stats { display: flex; flex-wrap: wrap; gap: 2rem; padding-top: 2rem; border-top: 1px solid var(--ada-line); margin-top: 2rem; }
        .wds-stat-value { display: block; font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 28px; font-weight: 500; color: var(--ada-ink); margin-bottom: 4px; }
        .wds-stat-label { display: block; font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ada-ink-muted); }

        .wds-shot-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem 0; }
        .wds-shot { border-radius: 12px; overflow: hidden; border: 1px solid var(--ada-line); margin: 2rem 0; opacity: 0; transform: translateY(16px); transition: opacity 0.55s ease, transform 0.55s ease; }
        .wds-shot.vis { opacity: 1; transform: translateY(0); }
        .wds-shot-pair .wds-shot { margin: 0; }
        .wds-shot img { width: 100%; height: auto; display: block; }
        .wds-shot-caption { display: block; font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-ink-muted); text-align: center; margin-top: 0.75rem; padding: 0 12px 12px; }

        .wds-closing { background: var(--ada-accent); padding: 6rem 3.5rem; text-align: center; }
        .wds-closing-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(28px, 3vw, 42px); color: var(--ada-white); margin: 0 0 16px; }
        .wds-closing-body { font-family: DM Sans, sans-serif; font-size: 16px; color: rgba(255,255,255,0.75); max-width: 480px; margin: 0 auto 32px; }
        .wds-closing-btn { display: inline-block; background: var(--ada-white); color: var(--ada-accent); border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 1px solid var(--ada-white); transition: background 0.2s ease, color 0.2s ease; }
        .wds-closing-btn:hover { background: transparent; color: var(--ada-white); }

        .wds-footer { background: var(--ada-ink); padding: 3rem 3.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
        .wds-footer-logo { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 16px; font-weight: 600; color: #FFFFFF !important; text-decoration: none; }
        .wds-footer-logo span { color: var(--ada-accent); }
        .wds-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .wds-footer-links a { font-family: DM Sans, sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s ease; }
        .wds-footer-links a:hover { color: var(--ada-white); }
        .wds-footer-reg { font-family: DM Sans, sans-serif; font-size: 12px; color: rgba(255,255,255,0.3); width: 100%; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4px; }

        @media (max-width: 768px) {
          .wds-hero { padding: calc(68px + 4rem) 1.5rem 4rem; }
          .wds-section, .wds-closing { padding: 4rem 1.5rem; }
          .wds-shot-pair { grid-template-columns: 1fr; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada" className="wds-back">← Back to ADA</Link>
          <div className="wds-badge">Internal build: our own site</div>
          <div className="wds-label"><span className="wds-label-bar" />ACG: Avalon Capital Group</div>
          <h1 className="wds-h1">The agency without a presence cannot sell presence. So we built ours first.</h1>
          <p className="wds-body wds-hero-intro">This is not a client project. This is what ADA did to its own site. Documented honestly, including the mistakes.</p>

          <div className="wds-stats">
            <div>
              <span className="wds-stat-value">14 days</span>
              <span className="wds-stat-label">Concept to live</span>
            </div>
            <div>
              <span className="wds-stat-value">1 page</span>
              <span className="wds-stat-label">Indexed at start</span>
            </div>
            <div>
              <span className="wds-stat-value">29 pages</span>
              <span className="wds-stat-label">Indexed now</span>
            </div>
            <div>
              <span className="wds-stat-value">Under an hour</span>
              <span className="wds-stat-label">First audit lead response</span>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="problem-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />The Problem</div>
          <h2 className="wds-h2" id="problem-heading">17 pages built. 1 visible to Google.</h2>
          <p className="wds-body">We built the site. It looked right. It worked in the browser. Then we checked Google Search Console.</p>
          <p className="wds-body">17 pages built. 1 indexed. The rest invisible.</p>
          <p className="wds-body">The cause: the original site was a single-page application. Googlebot reads static HTML before JavaScript executes. Every page was serving identical HTML. Google saw one page because every route looked the same to the crawler.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="whatwedid-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />What We Did</div>
          <h2 className="wds-h2" id="whatwedid-heading">Diagnose. Decide. Migrate.</h2>
          <p className="wds-body">We had three options: patch the SPA, add server-side rendering to the existing build, or migrate to Next.js 14 with App Router. We migrated.</p>
          <p className="wds-body">The full site, rebuilt as a server-rendered Next.js application. Every page now generates unique static HTML. Every route is crawlable. Every page is indexable.</p>
          <p className="wds-body">While building, we also shipped the ADA audit tool. A diagnostic that scores a business&apos;s online presence across six dimensions and estimates the revenue impact of the gap. The first real result: a prospect scored 1.8 out of 10. Estimated leakage of R20,000 to R37,000. They replied within the hour.</p>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="result-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />The Result</div>
          <h2 className="wds-h2" id="result-heading">It worked. Here is the proof.</h2>
          <p className="wds-body">1 page indexed. Now 29.</p>

          <div className="wds-shot-pair">
            <RevealShot delay={0}>
              <Image src="/case-study/gsc-indexing-before.png" alt="GSC indexing before migration" width={964} height={347} />
              <span className="wds-shot-caption">Before migration: 1 page indexed, 19 blocked as duplicates.</span>
            </RevealShot>
            <RevealShot delay={80}>
              <Image src="/case-study/gsc-indexing-after.png" alt="GSC indexing after migration" width={901} height={421} />
              <span className="wds-shot-caption">Seven weeks later: 29 pages indexed and climbing.</span>
            </RevealShot>
          </div>

          <RevealShot delay={0}>
            <Image src="/case-study/gsc-performance-after.png" alt="GSC performance overview" width={951} height={370} />
            <span className="wds-shot-caption">Google Search Console, 13 April to 3 June 2026.</span>
          </RevealShot>

          <RevealShot delay={80}>
            <Image src="/case-study/gsc-performance-early.png" alt="GSC performance early period" width={951} height={356} />
            <span className="wds-shot-caption">Two weeks in: 79 impressions. The starting line.</span>
          </RevealShot>

          <RevealShot delay={0}>
            <Image src="/case-study/gsc-daily.png" alt="GSC daily impressions" width={940} height={526} />
            <span className="wds-shot-caption">Daily impressions holding steady through late May and early June.</span>
          </RevealShot>

          <p className="wds-body wds-body--spaced">The site now ranks for searches we were previously invisible for. The foundation is working.</p>
        </div>
      </section>

      <section className="wds-closing" aria-labelledby="closing-heading">
        <h2 className="wds-closing-h2" id="closing-heading">We ran our own process on ourselves first.</h2>
        <p className="wds-closing-body">Every business we work with goes through the same diagnostic. Find the gap. Fix the foundation. Build on top of what the business has actually earned. We did not ask a client to trust a process we had not tested ourselves.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="wds-closing-btn">Start a conversation →</a>
      </section>

      <footer className="wds-footer">
        <Link href="/ada" className="wds-footer-logo">ADA<span>.</span></Link>
        <div className="wds-footer-links">
          <Link href="/ada">Our work</Link>
          <Link href="/ada#pricing">Pricing</Link>
          <Link href="/ada/afripact-civils">Case study</Link>
          <Link href="/ada/contact">Contact</Link>
        </div>
        <div className="wds-footer-reg">Avalon Capital Group (Pty) Ltd · Reg. 2025/671885/07</div>
      </footer>
    </div>
  );
}
