'use client';

import { useEffect, useRef } from 'react';

export default function PhilosophyGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = Array.from(container.children) as HTMLElement[];
    const delays = [0, 150, 300];
    const observers: IntersectionObserver[] = [];

    // Hide container background to prevent the gold/olive border colour
    // from showing through children while they are at opacity:0.
    container.style.background = 'transparent';
    let restoreScheduled = false;

    items.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Restore grid-line background after the last item finishes transitioning.
            if (!restoreScheduled) {
              restoreScheduled = true;
              setTimeout(() => { container.style.background = ''; }, delays[delays.length - 1] + 650);
            }
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, delays[i]);
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -80px 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => { observers.forEach(o => o.disconnect()); };
  }, []);

  return (
    <div className="philosophy-grid" ref={containerRef}>
      <div className="philosophy-item">
        <div className="philosophy-num">01</div>
        <div className="philosophy-title">Advisory Before Transaction</div>
        <div className="philosophy-desc">We never push for a deal that isn&apos;t right for the client. Our value is in understanding your situation fully before we structure anything.</div>
      </div>
      <div className="philosophy-item">
        <div className="philosophy-num">02</div>
        <div className="philosophy-title">Precision in Execution</div>
        <div className="philosophy-desc">Every deal, every system, every campaign is built with intent. No wasted motion. No misaligned outcomes. We deliver what we commit to.</div>
      </div>
      <div className="philosophy-item">
        <div className="philosophy-num">03</div>
        <div className="philosophy-title">Long-Term Value</div>
        <div className="philosophy-desc">We measure success by the value created after the transaction, not by the commission before it. Our clients return because results compound.</div>
      </div>
    </div>
  );
}
