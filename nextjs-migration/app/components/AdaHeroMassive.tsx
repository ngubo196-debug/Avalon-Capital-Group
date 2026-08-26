'use client';

import AdaParticleMesh from './AdaParticleMesh';

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function AdaHeroMassive() {
  return (
    <section className="ada-hero-massive">
      <style suppressHydrationWarning>{`
        .ada-hero-massive { position: relative; min-height: 100vh; background: var(--ada-white); display: flex; align-items: center; justify-content: flex-start; padding: 68px 3.5rem 0; overflow: hidden; }
        .ada-hero-massive-inner { position: relative; z-index: 2; max-width: 1160px; margin: 0 auto; width: 100%; }
        .ada-hero-massive-h1 { font-family: 'Bodoni Moda', 'Cormorant Garamond', serif; font-weight: 400; font-size: clamp(72px, 9vw, 128px); line-height: 1.0; letter-spacing: -0.03em; color: var(--ada-ink); margin: 0; }
        .ada-hero-massive-h1 em { font-style: italic; color: var(--ada-accent); }
        .ada-hero-massive-ctas { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; margin-top: 3rem; }
        .ada-hero-massive-primary { display: inline-flex; align-items: center; background: var(--ada-accent); color: var(--ada-white); border-radius: 100px; padding: 14px 32px; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; transition: opacity 0.2s ease, transform 0.2s ease; }
        .ada-hero-massive-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .ada-hero-massive-ghost { font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--ada-ink-muted); text-decoration: none; border-bottom: 1px solid var(--ada-line); padding-bottom: 2px; transition: color 0.2s ease, border-color 0.2s ease; }
        .ada-hero-massive-ghost:hover { color: var(--ada-ink); border-color: var(--ada-ink); }
        .ada-hero-massive-scroll { position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 8px; color: var(--ada-ink-muted); font-family: 'DM Sans', sans-serif; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }
        .ada-hero-massive-scroll-arrow { animation: ada-hero-scroll-bounce 1.8s ease-in-out infinite; }
        @keyframes ada-hero-scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (max-width: 1023px) {
          .ada-hero-massive-h1 { font-size: clamp(52px, 8vw, 80px); }
        }
        @media (max-width: 767px) {
          .ada-hero-massive-h1 { font-size: clamp(42px, 10vw, 64px); }
          .ada-hero-massive-ctas { flex-direction: column; align-items: stretch; margin-top: 2.25rem; }
          .ada-hero-massive-primary, .ada-hero-massive-ghost { justify-content: center; text-align: center; }
        }
      `}</style>

      <AdaParticleMesh />

      <div className="ada-hero-massive-inner">
        <h1 className="ada-hero-massive-h1">
          We build great<br />
          websites that<br />
          grow your<br />
          <em>business.</em>
        </h1>
        <div className="ada-hero-massive-ctas">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="ada-hero-massive-primary">Start a conversation →</a>
          <a href="#work" className="ada-hero-massive-ghost">See our work →</a>
        </div>
      </div>

      <div className="ada-hero-massive-scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="ada-hero-massive-scroll-arrow">↓</span>
      </div>
    </section>
  );
}
