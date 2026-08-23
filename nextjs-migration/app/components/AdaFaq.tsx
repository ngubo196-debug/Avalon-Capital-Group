'use client';

import { useState } from 'react';
import { FAQS } from './adaFaqData';

export default function AdaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ borderTop: '1px solid var(--ada-line)' }}>
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} style={{ borderBottom: '1px solid var(--ada-line)' }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '22px 0',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--ada-ink)',
              }}
            >
              <span>{item.q}</span>
              <span
                aria-hidden="true"
                style={{
                  color: 'var(--ada-accent)',
                  fontSize: '18px',
                  lineHeight: 1,
                  flexShrink: 0,
                  marginLeft: '16px',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? '400px' : '0px',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.35s ease, opacity 0.3s ease',
              }}
            >
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: 'var(--ada-ink-soft)',
                  paddingBottom: '22px',
                  maxWidth: '640px',
                }}
              >
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
