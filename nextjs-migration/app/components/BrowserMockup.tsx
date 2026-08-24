'use client';

import { useEffect, useId, useRef } from 'react';
import Image from 'next/image';

interface BrowserMockupProps {
  src: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
  speedMultiplier?: number;
}

// Calibrated against the ACG mockup (3429px tall, 24s per pass) confirmed to feel right.
// Duration scales with image height so every mockup scrolls at the same perceived speed.
// speedMultiplier lets an individual instance be tuned faster/slower than that baseline.
const SCROLL_PX_PER_SECOND = 3429 / 24;

export default function BrowserMockup({ src, url, alt, width = 1400, height = 3000, speedMultiplier = 1 }: BrowserMockupProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const duration = (height / SCROLL_PX_PER_SECOND) / speedMultiplier;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          wrapper.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={`browser-mockup bm-${uid}`}>
      <style suppressHydrationWarning>{`
        .bm-${uid} { width: 100%; border-radius: 12px; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.2); }
        .bm-${uid} .bm-chrome { height: 40px; background: #1E1E1E; display: flex; align-items: center; padding: 0 16px; gap: 16px; }
        .bm-${uid} .bm-dots { display: flex; gap: 6px; flex-shrink: 0; }
        .bm-${uid} .bm-dot { width: 12px; height: 12px; border-radius: 50%; display: block; }
        .bm-${uid} .bm-address { flex: 1; display: flex; justify-content: center; min-width: 0; }
        .bm-${uid} .bm-address-bar { background: #2E2E2E; border-radius: 6px; height: 24px; width: 50%; display: flex; align-items: center; justify-content: center; font-family: 'DM Sans', sans-serif; font-size: 12px; color: rgba(255,255,255,0.6); padding: 0 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .bm-${uid} .bm-viewport { position: relative; overflow: hidden; height: 252px; }
        .bm-${uid} .bm-imgwrap {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          will-change: transform;
          animation: bm-scroll-${uid} ${duration}s linear infinite alternate both;
          animation-play-state: paused;
        }
        .bm-${uid}.is-visible .bm-imgwrap {
          animation-play-state: running;
        }
        @keyframes bm-scroll-${uid} {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-100% + 252px)); }
        }
        @media (max-width: 768px) {
          .bm-${uid} .bm-viewport { height: 144px; }
          @keyframes bm-scroll-${uid} {
            from { transform: translateY(0); }
            to { transform: translateY(calc(-100% + 144px)); }
          }
        }
      `}</style>

      <div className="bm-chrome">
        <div className="bm-dots">
          <span className="bm-dot" style={{ background: '#FF5F57' }} />
          <span className="bm-dot" style={{ background: '#FEBC2E' }} />
          <span className="bm-dot" style={{ background: '#28C840' }} />
        </div>
        <div className="bm-address">
          <div className="bm-address-bar">{url}</div>
        </div>
      </div>

      <div className="bm-viewport">
        <div className="bm-imgwrap">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
}
