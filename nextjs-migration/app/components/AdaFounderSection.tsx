import Image from 'next/image';

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";
const FOUNDER_PHOTO = "/assets/luyanda-ngubo.jpg";

export default function AdaFounderSection() {
  return (
    <section className="ada-founder">
      <style suppressHydrationWarning>{`
        .ada-founder { background: #FFFFFF; padding: 7rem 3.5rem; }
        .ada-founder-inner { max-width: 1160px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .ada-founder-photo { position: relative; width: 100%; aspect-ratio: 4 / 5; border-radius: 20px; overflow: hidden; -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%); mask-image: linear-gradient(to bottom, black 60%, transparent 100%); }
        .ada-founder-label { font-family: 'DM Sans', sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #1B3A8F; margin-bottom: 16px; }
        .ada-founder-h2 { font-family: 'Bodoni Moda', 'Cormorant Garamond', serif; font-weight: 400; font-size: clamp(36px, 4vw, 54px); line-height: 1.15; color: #111111; margin: 0 0 24px; }
        .ada-founder-body { font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 300; line-height: 1.75; color: #3A3A3A; margin: 0 0 32px; max-width: 460px; }
        .ada-founder-cta { display: inline-flex; align-items: center; background: #1B3A8F; color: #FFFFFF; border-radius: 100px; padding: 14px 32px; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; transition: opacity 0.2s ease, transform 0.2s ease; }
        .ada-founder-cta:hover { opacity: 0.88; transform: translateY(-1px); }
        @media (max-width: 900px) {
          .ada-founder-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .ada-founder-photo { aspect-ratio: 1 / 1; }
        }
        @media (max-width: 768px) {
          .ada-founder { padding: 4.5rem 20px; }
        }
      `}</style>
      <div className="ada-founder-inner">
        <div className="ada-founder-photo">
          <Image
            src={FOUNDER_PHOTO}
            alt="Luyanda Ngubo, founder of ADA"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        <div>
          <div className="ada-founder-label">The person behind ADA</div>
          <h2 className="ada-founder-h2">I&apos;m Luyanda.<br />I run ADA.</h2>
          <p className="ada-founder-body">Every business I work with is capable of more.<br />I build online, what makes that happen.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="ada-founder-cta">Start a conversation →</a>
        </div>
      </div>
    </section>
  );
}
