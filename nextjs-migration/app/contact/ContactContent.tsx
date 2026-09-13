'use client';

import Link from 'next/link';
import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mqewklep', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'qualify_lead', {
            form_location: 'contact_page',
            area_of_interest: data.get('interest') || 'not_specified',
          });
        }
      }
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Nav />
      <div id="page-contact" className="page acg-corporate-page" role="main">
        <style
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
        .acg-corporate-page {
          --acg-paper: #FBF8F3;
          --acg-ink: #221D17;
          --acg-terracotta: #C1682B;
          --acg-terracotta-deep: #96501F;
          --acg-tint: #F3EEE4;

          --black: var(--acg-paper);
          --surface: var(--acg-tint);
          --text: var(--acg-ink);
          --text-light: var(--acg-ink);
          --text-muted: rgba(34,29,23,0.68);
          --text-dim: rgba(34,29,23,0.5);
          --gold: var(--acg-terracotta);
          --gold-light: var(--acg-terracotta);
          --gold-dim: var(--acg-terracotta-deep);
          --border: rgba(34,29,23,0.12);
          --border-hover: rgba(34,29,23,0.22);

          background: var(--acg-paper);
          color: var(--acg-ink);
          font-family: 'DM Sans', sans-serif;
        }
        .acg-corporate-page h1,
        .acg-corporate-page h2,
        .acg-corporate-page .contact-block-value {
          font-family: 'Bodoni Moda', serif !important;
        }
        .acg-corporate-page .form-submit {
          color: #FFFFFF !important;
        }
        .acg-corporate-page .inner-hero-bg {
          background: radial-gradient(ellipse 50% 70% at 90% 50%, rgba(193,104,43,0.05) 0%, transparent 70%);
        }
        .acg-corporate-page .whatsapp-btn {
          border-color: rgba(193,104,43,0.3);
        }
        .acg-corporate-page .whatsapp-btn:hover {
          border-color: var(--acg-terracotta);
          color: var(--acg-terracotta);
        }
      `,
          }}
        />
        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C1682B" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/" style={{cursor:'pointer', position:'relative', zIndex:10}}>Back to Home</Link>
          <div className="section-label">Get in Touch</div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(40px,5.5vw,76px)', fontWeight:300, lineHeight:1.05, maxWidth:'600px'}}>
            Every great result<br />begins with a<br /><em>conversation.</em>
          </h1>
        </div>

        <section>
          <div className="contact-grid">

            {/* FORM */}
            <div>
              {!submitted ? (
                <form
                  id="contactForm"
                  action="https://formspree.io/f/mqewklep"
                  method="POST"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <input type="text" name="_gotcha" style={{display:'none'}} />
                  <input type="hidden" name="_subject" value="New enquiry - Avalon Capital Group" />

                  <div className="contact-form">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name</label>
                      <input className="form-input" type="text" id="name" name="name" placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input className="form-input" type="email" id="email" name="email" placeholder="your@email.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input className="form-input" type="tel" id="phone" name="phone" placeholder="+27" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="interest">Area of Interest</label>
                      <select className="form-select" id="interest" name="interest" required style={{background:'var(--surface)'}}>
                        <option value="" style={{background:'var(--surface)'}}>Select one</option>
                        <option style={{background:'var(--surface)'}}>Vantara - Vehicle Acquisition (South Africa)</option>
                        <option style={{background:'var(--surface)'}}>Vantara - Vehicle Acquisition (International Buyer)</option>
                        <option style={{background:'var(--surface)'}}>ADA - Website Development</option>
                        <option style={{background:'var(--surface)'}}>ADA - AI Automation</option>
                        <option style={{background:'var(--surface)'}}>ADA - SEO or Paid Advertising</option>
                        <option style={{background:'var(--surface)'}}>ADA - Digital Retainer</option>
                        <option style={{background:'var(--surface)'}}>General Enquiry</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Your Message</label>
                      <textarea className="form-textarea" id="message" name="message" placeholder="Tell us about your situation or what you need..." required></textarea>
                    </div>
                    <button type="submit" className="form-submit" disabled={submitting}>
                      {submitting ? 'Sending...' : 'Submit Enquiry'}
                    </button>
                    <a
                      className="whatsapp-btn"
                      href="https://wa.me/27712205313?text=Hi%20Avalon%20Capital%20Group%2C%20I%27d%20like%20to%20make%20an%20enquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Or message us on WhatsApp
                    </a>
                  </div>
                </form>
              ) : (
                <div className="form-success" style={{display:'block'}}>
                  <strong>Enquiry received.</strong>
                  <p>Thank you. We review all enquiries personally and respond within 24 hours. If your matter is time-sensitive, please indicate this in your message or reach us on WhatsApp.</p>
                </div>
              )}
            </div>

            {/* Contact info */}
            <div className="contact-info">
              <div>
                <div className="contact-block-label">The Group</div>
                <div className="contact-block-value">Avalon Capital Group</div>
                <div className="contact-block-sub">Durban, KwaZulu-Natal, South Africa</div>
              </div>
              <div style={{height:'1px', background:'var(--border)'}}></div>
              <div>
                <div className="contact-block-label">Divisions</div>
                <Link href="/vantara" style={{display:'block', textDecoration:'none'}}>
                  <div className="contact-block-value" style={{cursor:'pointer'}}>Vantara</div>
                </Link>
                <div className="contact-block-sub">Sources and negotiates vehicle purchases for buyers.</div>
                <Link href="/ada" style={{display:'block', textDecoration:'none'}}>
                  <div className="contact-block-value" style={{marginTop:'18px', cursor:'pointer'}}>ADA</div>
                </Link>
                <div className="contact-block-sub">AI-powered digital infrastructure for businesses.</div>
                <div className="contact-block-value" style={{marginTop:'18px', opacity:0.55, cursor:'default'}}>Vuma</div>
                <div className="contact-block-sub" style={{opacity:0.55}}>AI-generated quotes, invoices, and compliance documents for South African contractors. Coming soon.</div>
              </div>
              <div style={{height:'1px', background:'var(--border)'}}></div>
              <div>
                <div className="contact-block-label">Direct Contact</div>
                <a href="tel:+27712205313" style={{display:'block', fontSize:'14px', color:'var(--text)', textDecoration:'none', marginBottom:'6px', transition:'color 0.2s'}}>+27 71 220 5313</a>
                <a href="mailto:hello@avaloncapitalgroup.co.za" style={{display:'block', fontSize:'13px', color:'var(--text-muted)', marginBottom:'6px', textDecoration:'none'}}>hello@avaloncapitalgroup.co.za</a>
                <a href="https://wa.me/27712205313?text=Hi%20Avalon%20Capital%20Group%2C%20I%27d%20like%20to%20make%20an%20enquiry." target="_blank" rel="noopener noreferrer" style={{display:'block', fontSize:'13px', color:'var(--text-muted)', textDecoration:'none', transition:'color 0.2s'}}>WhatsApp</a>
              </div>
              <div style={{height:'1px', background:'var(--border)'}}></div>
              <div style={{border:'1px solid var(--border)', padding:'24px'}}>
                <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold-dim)', marginBottom:'10px'}}>Response Time</div>
                <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, fontStyle:'italic'}}>&ldquo;We help first. We transact second. Every engagement begins with understanding, not selling.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
