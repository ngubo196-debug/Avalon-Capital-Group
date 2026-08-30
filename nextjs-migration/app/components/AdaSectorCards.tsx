'use client';

import Image from 'next/image';
import Link from 'next/link';

const SECTORS = [
  {
    name: 'Construction',
    desc: 'CIDB-registered contractors and civil engineering firms competing for larger commercial work across KZN.',
    href: '/ada/web-design-construction-kzn',
    image: '/images/sectors/construction.jpg',
  },
  {
    name: 'Fleet Companies',
    desc: 'Vehicle fleet operators attracting corporate contracts and supply chain clients across KZN.',
    href: '/ada/web-design-fleet-companies',
    image: '/images/sectors/fleet.jpg',
  },
  {
    name: 'Logistics & Transport',
    desc: 'Distribution operators building credibility for B2B and tender-based contracts.',
    href: '/ada/web-design-logistics-transport',
    image: '/images/sectors/logistics.jpg',
  },
  {
    name: 'Retail & E-commerce',
    desc: 'Established retail businesses converting traffic into consistent, measurable revenue.',
    href: '/ada/web-design-retail-ecommerce',
    image: '/images/sectors/retail.jpg',
  },
  {
    name: 'Property & Real Estate',
    desc: 'Agencies and developers earning buyer and seller trust before the first conversation.',
    href: '/ada/web-design-property-real-estate',
    image: '/images/sectors/property.jpg',
  },
  {
    name: 'Professional Services',
    desc: 'Consultants and specialist firms whose expertise must translate into online credibility.',
    href: '/ada/web-design-professional-services-durban',
    image: '/images/sectors/professional.jpg',
  },
];

export default function AdaSectorCards() {
  return (
    <>
      <style suppressHydrationWarning>{`
        .asc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .asc-card {
          position: relative;
          display: block;
          height: 340px;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
        }
        .asc-card-img-wrap {
          position: absolute;
          inset: 0;
        }
        .asc-card-img {
          object-fit: cover;
          object-position: center;
          transform: scale(1);
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        .asc-card:hover .asc-card-img {
          transform: scale(1.07);
        }
        .asc-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,12,35,0.93) 0%, rgba(8,12,35,0.52) 45%, rgba(8,12,35,0.18) 100%);
          transition: background 0.4s ease;
        }
        .asc-card:hover .asc-card-overlay {
          background: linear-gradient(to top, rgba(20,44,120,0.92) 0%, rgba(27,58,143,0.48) 50%, rgba(8,12,35,0.15) 100%);
        }
        .asc-card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.75rem 2rem;
          z-index: 2;
        }
        .asc-card-name {
          display: block;
          font-family: Bodoni Moda, Cormorant Garamond, serif;
          font-size: 22px;
          font-weight: 500;
          color: #FFFFFF;
          margin-bottom: 0.6rem;
        }
        .asc-card-desc {
          display: block;
          font-family: DM Sans, sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          margin-bottom: 0.85rem;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.45s ease, opacity 0.4s ease;
        }
        .asc-card:hover .asc-card-desc {
          max-height: 80px;
          opacity: 1;
        }
        .asc-card-arrow {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: DM Sans, sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          transition: color 0.3s ease, gap 0.3s ease;
        }
        .asc-card:hover .asc-card-arrow {
          color: #FFFFFF;
          gap: 8px;
        }
        @media (max-width: 768px) {
          .asc-grid { grid-template-columns: repeat(2, 1fr); }
          .asc-card { height: 260px; }
        }
        @media (max-width: 480px) {
          .asc-grid { grid-template-columns: 1fr; }
          .asc-card { height: 220px; }
        }
      `}</style>
      <div className="asc-grid">
        {SECTORS.map((sector) => (
          <Link key={sector.href} href={sector.href} className="asc-card">
            <div className="asc-card-img-wrap">
              <Image
                src={sector.image}
                alt={sector.name}
                fill
                className="asc-card-img"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="asc-card-overlay" aria-hidden="true" />
            <div className="asc-card-content">
              <span className="asc-card-name">{sector.name}</span>
              <span className="asc-card-desc">{sector.desc}</span>
              <span className="asc-card-arrow">Explore →</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
