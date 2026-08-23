'use client';

import { useEffect, useRef } from 'react';

interface AdaRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function AdaReveal({ children, className }: AdaRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const items = Array.from(container.children) as HTMLElement[];

    items.forEach((el, i) => {
      el.classList.add('ada-reveal');
      el.style.transitionDelay = `${i * 60}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((el) => el.classList.add('is-visible'));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
