import Link from 'next/link';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Your Assistant | 90-Minute AI Session for KZN Businesses | ADA',
  description: 'A 90-minute in-person AI assistant session for Pietermaritzburg, Durban and KZN small businesses. One seat R1,950. Walk in overwhelmed. Walk out with help.',
  alternates: {
    canonical: 'https://www.avaloncapitalgroup.co.za/ada/get-your-assistant',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Your Assistant | 90-Minute AI Session for KZN Businesses | ADA',
    description: 'A 90-minute in-person AI assistant session for Pietermaritzburg, Durban and KZN small businesses. One seat R1,950. Walk in overwhelmed. Walk out with help.',
    images: ['https://avaloncapitalgroup.co.za/og-image.jpg'],
  },
};

const faqItems = [
  {
    question: 'Do I need to buy any software first?',
    answer: "No. We work with what you already have, ChatGPT, Claude, Gemini, Copilot, whatever your team is already on or open to using. If you're not on anything yet, we'll help you choose during the session.",
  },
  {
    question: 'Is 90 minutes really enough?',
    answer: "Yes, because we're not covering everything, we're fixing the two or three things that actually eat your week. That's enough to build the habit. The cheat sheet and ongoing support handle the rest.",
  },
  {
    question: 'What if my team is nervous about AI replacing them?',
    answer: "This isn't about replacing anyone. It's the opposite, the person doing the most manual work gets the most relief. They leave with help, not a threat.",
  },
  {
    question: 'Is our information safe?',
    answer: "We work on your own devices, with your own accounts. Nothing you show us leaves the room, and we never ask you to paste anything you're not comfortable sharing.",
  },
  {
    question: "What if our internet is slow, or I'm not great with technology?",
    answer: "That's exactly who this is built for. The session is hands-on and paced to you, not a lecture. If you can send a WhatsApp message, you can do this.",
  },
  {
    question: 'Can this be done for more than two people?',
    answer: "The 90-minute format is built for one or two people doing real, hands-on work. For a larger team session, get in touch and we'll scope something that fits.",
  },
  {
    question: 'Where do you run sessions?',
    answer: 'In person, at your premises, across Pietermaritzburg, Durban, and the wider KwaZulu-Natal region.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Get Your Assistant - 90-Minute AI Session',
  description: 'A 90-minute in-person AI assistant session for Pietermaritzburg, Durban and KZN small businesses. One seat R1,950. Walk in overwhelmed. Walk out with help.',
  provider: {
    '@type': 'Organization',
    name: 'Asset Development Automation (ADA)',
    url: 'https://www.avaloncapitalgroup.co.za/ada',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Avalon Capital Group',
      url: 'https://www.avaloncapitalgroup.co.za',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Pietermaritzburg' },
    { '@type': 'City', name: 'Durban' },
    { '@type': 'State', name: 'KwaZulu-Natal' },
  ],
  serviceType: 'AI Training Session',
  offers: {
    '@type': 'Offer',
    price: '1950',
    priceCurrency: 'ZAR',
  },
};

const painPoints = [
  'Quotes go out slower than they should, because formatting them takes longer than pricing the job.',
  'The same kind of email gets written ten times a week, just with different names and numbers.',
  'A supplier sends a 40-page PDF and someone has to read the whole thing to find three numbers.',
  'The boss asks for a quick summary and it takes the rest of the afternoon.',
  'When that one person is off sick, everyone feels it by lunchtime.',
  "You're the bottleneck, and you already know it.",
];

const capabilities = [
  'Rewrite a messy email into a professional reply',
  'Read a long supplier PDF and pull out only what matters',
  'Build a quote using your existing template',
  "Summarise a meeting or a phone call's worth of notes",
  'Draft the first version of a tender or proposal',
  'Compare price lists in seconds',
  'Find a clause buried inside a long contract',
  'Turn a voice note into a finished email',
  'Rewrite a difficult customer message before you send it',
];

const whyPoints = [
  'Three years of daily, hands-on AI use, not a weekend course',
  'Built specifically for Pietermaritzburg, Durban, and KZN small businesses',
  'In-person, at your premises, on your real work',
  'No slides. No certificates. No generic curriculum.',
  "We've sat inside a real KZN contracting business and seen the actual admin grind up close",
];

const sessionRows = [
  { time: '0–10 min', name: 'The frame', desc: "You're not learning software. You're getting an assistant. We set the mental model first, so everything after this makes sense immediately." },
  { time: '10–25 min', name: 'Your actual inbox', desc: 'We open your real email, your real quote template, your real supplier document. One task, done live, narrated step by step.' },
  { time: '25–65 min', name: 'You drive', desc: 'You do the next two or three tasks yourself, with us right there. This is where the habit actually forms, not from watching, from doing.' },
  { time: '65–80 min', name: 'Your cheat sheet', desc: "We build it together, in your words, covering exactly what you do most. Not a generic PDF, yours." },
  { time: '80–90 min', name: "What's next", desc: "If you want ongoing support so this keeps sharpening instead of fading, we'll show you exactly what that looks like." },
];

const includes = [
  '90 minutes, one-on-one, on your real work',
  'Built around how you actually use email, quotes, and documents today',
  'A personalised cheat sheet you keep',
  'At least one repetitive task permanently changed before we leave',
];

export default function GetYourAssistant() {
  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div id="page-get-your-assistant" className="page" role="main">
        <style>{`
          @media (max-width: 768px) {
            .gya-grid-3 { grid-template-columns: 1fr !important; }
            .gya-grid-2 { grid-template-columns: 1fr 1fr !important; }
            .gya-mechanism { grid-template-columns: 1fr !important; }
            .gya-table-row { grid-template-columns: 1fr !important; border-bottom: 1px solid rgba(201,168,76,0.15); }
            .gya-table-row > div { border-right: none !important; border-bottom: none !important; padding: 12px 20px !important; }
            .gya-table-row > div:first-child { padding-top: 20px !important; }
            .gya-table-row > div:last-child { padding-bottom: 20px !important; }
          }
          details summary::-webkit-details-marker { display: none; }
        `}</style>

        {/* HERO */}
        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute',right:'-120px',top:'50%',transform:'translateY(-50%)',opacity:0.11,pointerEvents:'none',zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" style={{cursor:'pointer',position:'relative',zIndex:10}} href="/ada">← ADA</Link>
          <p style={{fontSize:'9px',letterSpacing:'0.25em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'10px',position:'relative',zIndex:2}}>Asset Development Automation (ADA) · Pietermaritzburg · Durban · KwaZulu-Natal</p>
          <p style={{fontSize:'13px',color:'var(--text-muted)',marginBottom:'20px',fontStyle:'italic',position:'relative',zIndex:2}}>For the one person doing the work of three</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,5vw,64px)',fontWeight:300,lineHeight:1.15,marginBottom:'24px',maxWidth:'680px'}}>Your inbox isn&apos;t the problem. Doing it all alone is.</h1>
          <p style={{maxWidth:'540px',fontSize:'14px',color:'var(--text-muted)',lineHeight:1.9,marginBottom:'28px'}}>A 90-minute, in-person session that gives one person on your team their own AI assistant, trained on your real work, not a demo. Walk in overwhelmed. Walk out with help.</p>
          <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'20px'}}>
            <Link className="btn-primary" href="/contact" style={{position:'relative',zIndex:9999}}>Book the Session &mdash; R1,950</Link>
            <a href="#how-it-works" className="btn-ghost">See How It Works</a>
          </div>
          <p style={{fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em',lineHeight:1.7}}>90 minutes &middot; one seat R1,950 &middot; two seats R2,950 &middot; Pietermaritzburg &amp; KZN</p>
        </div>

        {/* PERFECT FOR */}
        <section aria-labelledby="for-heading">
          <div className="section-label">Built for businesses like yours</div>
          <h2 className="section-title" id="for-heading">Sound like yours?</h2>
          <div className="gya-grid-3" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--border)',marginTop:'40px'}}>
            {[
              'Construction & civil contractors',
              'Engineering firms',
              'Property & estate agencies',
              'Logistics & transport',
              'Retail operators',
              'Any admin-heavy small business',
            ].map((item) => (
              <div key={item} style={{background:'var(--surface)',padding:'28px 32px'}}>
                <div style={{fontSize:'9px',letterSpacing:'0.2em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'10px'}}>✦</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:300,color:'#F0EDE8',lineHeight:1.3}}>{item}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        {/* THE PAIN */}
        <section aria-labelledby="pain-heading">
          <div className="section-label">Sound familiar</div>
          <h2 className="section-title" id="pain-heading">Every business has one person holding the whole thing together.</h2>
          <div className="gya-grid-2" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'1px',background:'var(--border)',marginTop:'48px'}}>
            {painPoints.map((point) => (
              <div key={point} style={{background:'var(--surface)',padding:'32px 36px'}}>
                <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:1.85}}>{point}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        {/* THE MECHANISM */}
        <section id="how-it-works" aria-labelledby="mechanism-heading">
          <div className="section-label">What actually happens</div>
          <h2 className="section-title" id="mechanism-heading">We don&apos;t start with AI. We start with today&apos;s work.</h2>
          <div className="gya-mechanism" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2px',background:'var(--border)',marginTop:'48px'}}>
            <div style={{background:'#141414',padding:'36px'}}>
              <div style={{fontSize:'9px',letterSpacing:'0.2em',textTransform:'uppercase',color:'#8A8680',marginBottom:'16px'}}>Before</div>
              <div style={{background:'#1a2019',border:'1px solid rgba(37,211,102,0.12)',borderRadius:'0 12px 12px 12px',padding:'20px 24px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'12px'}}>
                  <div style={{width:'7px',height:'7px',borderRadius:'50%',background:'#25D366',flexShrink:0}}></div>
                  <span style={{fontSize:'10px',letterSpacing:'0.1em',color:'#25D366',textTransform:'uppercase'}}>WhatsApp</span>
                </div>
                <p style={{fontSize:'13px',color:'#8A8680',lineHeight:1.9,fontStyle:'italic'}}>hi ya so the client wants the quote for the renovation job, need to send by tmrw, also the other guy from the supply co emailed about prices going up but not sure by how much, need to check the pdf he sent its long</p>
              </div>
            </div>
            <div style={{background:'var(--surface)',padding:'36px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
              <div style={{fontSize:'9px',letterSpacing:'0.2em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'20px'}}>After</div>
              <div style={{display:'flex',flexDirection:'column',gap:'18px',marginBottom:'28px'}}>
                <div style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                  <div style={{width:'4px',height:'4px',borderRadius:'50%',background:'var(--gold)',flexShrink:0,marginTop:'9px'}}></div>
                  <p style={{fontSize:'14px',color:'#F0EDE8',lineHeight:1.8}}>A formatted quote, sent.</p>
                </div>
                <div style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                  <div style={{width:'4px',height:'4px',borderRadius:'50%',background:'var(--gold)',flexShrink:0,marginTop:'9px'}}></div>
                  <p style={{fontSize:'14px',color:'#F0EDE8',lineHeight:1.8}}>A three-line summary of the supplier&apos;s price increase, pulled straight from their PDF.</p>
                </div>
                <div style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                  <div style={{width:'4px',height:'4px',borderRadius:'50%',background:'var(--gold)',flexShrink:0,marginTop:'9px'}}></div>
                  <p style={{fontSize:'14px',color:'#F0EDE8',lineHeight:1.8}}>And a way to do both again tomorrow, in minutes, not an hour.</p>
                </div>
              </div>
              <p style={{fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text-muted)',paddingTop:'20px',borderTop:'1px solid var(--border)'}}>Same inbox. Different outcome.</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* WHAT YOUR ASSISTANT CAN ALREADY DO */}
        <section aria-labelledby="capabilities-heading">
          <div className="section-label">By lunchtime, it can</div>
          <h2 className="section-title" id="capabilities-heading">Nine things your assistant already knows how to do.</h2>
          <div className="gya-grid-3" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--border)',marginTop:'48px'}}>
            {capabilities.map((cap, i) => (
              <div key={i} style={{background:'var(--surface)',padding:'28px 32px'}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'32px',fontWeight:300,color:'rgba(201,168,76,0.2)',lineHeight:1,marginBottom:'12px'}}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p style={{fontSize:'13px',color:'var(--text-muted)',lineHeight:1.8}}>{cap}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        {/* THE FRAME */}
        <section aria-labelledby="frame-heading">
          <div className="section-label">The idea behind it</div>
          <h3 id="frame-heading" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(28px,3.5vw,44px)',fontWeight:300,lineHeight:1.15,marginBottom:'24px',maxWidth:'640px',color:'#F0EDE8'}}>Every Tony Stark needs a Jarvis.</h3>
          <p className="section-body">Not because this is science fiction. Because every business has one person who could use a second brain, somebody who already understands the context, takes the brief, and handles the rest, so that person can focus on the part only they can do. That&apos;s the frame we teach. Not &ldquo;learn a tool.&rdquo; Get an assistant. One you brief properly, the way you&apos;d brief a person, and one that gives you back exactly what you asked for, because you finally know how to ask.</p>
          <div style={{marginTop:'40px',background:'var(--surface)',borderLeft:'3px solid var(--gold)',padding:'28px 36px',maxWidth:'640px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontStyle:'italic',color:'#F0EDE8',lineHeight:1.65,marginBottom:'16px'}}>&ldquo;I&apos;ve used AI every day for three years. The only thing that changed everything wasn&apos;t a better tool, it was learning to give it enough context to actually help.&rdquo;</p>
            <p style={{fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--gold)'}}>Luyanda Ngubo, Founder, ADA</p>
          </div>
        </section>

        <div className="divider"></div>

        {/* WHY ADA */}
        <section aria-labelledby="why-heading">
          <div className="section-label">Why this, and why us</div>
          <h2 className="section-title" id="why-heading">Why ADA</h2>
          <div style={{marginTop:'40px',display:'flex',flexDirection:'column',gap:'1px',background:'var(--border)',maxWidth:'800px'}}>
            {whyPoints.map((point, i) => (
              <div key={i} style={{background:'var(--surface)',padding:'24px 32px',display:'flex',gap:'24px',alignItems:'flex-start'}}>
                <div style={{color:'var(--gold)',fontSize:'11px',letterSpacing:'0.1em',flexShrink:0,paddingTop:'3px',fontFamily:'Montserrat'}}>0{i + 1}</div>
                <p style={{fontSize:'14px',color:'#F0EDE8',lineHeight:1.8}}>{point}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        {/* THE STRUCTURE */}
        <section id="structure" aria-labelledby="structure-heading">
          <div className="section-label">The 90 minutes</div>
          <h2 className="section-title" id="structure-heading">Built around your real work, not a slideshow.</h2>
          <div style={{marginTop:'48px',display:'flex',flexDirection:'column',gap:'1px',background:'var(--border)'}}>
            {sessionRows.map((row, i) => (
              <div key={i} className="gya-table-row" style={{display:'grid',gridTemplateColumns:'140px 180px 1fr',background:'var(--surface)'}}>
                <div style={{padding:'24px 28px',borderRight:'1px solid rgba(201,168,76,0.15)',fontFamily:'Montserrat,sans-serif',fontSize:'11px',letterSpacing:'0.08em',color:'var(--gold)',lineHeight:1.5}}>
                  {row.time}
                </div>
                <div style={{padding:'24px 28px',borderRight:'1px solid rgba(201,168,76,0.15)',fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',fontWeight:300,color:'#F0EDE8',lineHeight:1.4}}>
                  {row.name}
                </div>
                <div style={{padding:'24px 28px',fontSize:'13px',color:'var(--text-muted)',lineHeight:1.8}}>
                  {row.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        {/* THE OFFER */}
        <section aria-labelledby="offer-heading">
          <div className="section-label">The offer</div>
          <h2 className="section-title" id="offer-heading">One session. No course. No half-day out of your business.</h2>
          <div style={{marginTop:'48px',maxWidth:'600px',border:'1px solid rgba(201,168,76,0.4)',background:'#1C1C1C',padding:'48px'}}>
            <div style={{fontSize:'9px',letterSpacing:'0.25em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'12px'}}>Get Your Assistant</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'26px',fontWeight:300,color:'#F0EDE8',marginBottom:'28px'}}>The 90-Minute Session</div>
            <div style={{display:'flex',alignItems:'baseline',gap:'8px',marginBottom:'6px'}}>
              <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'56px',fontWeight:300,color:'#F0EDE8',lineHeight:1}}>R1,950</span>
            </div>
            <div style={{fontSize:'12px',color:'var(--text-muted)',marginBottom:'28px',letterSpacing:'0.04em'}}>per person</div>
            <p style={{fontSize:'13px',color:'var(--text-muted)',lineHeight:1.85,marginBottom:'28px',fontStyle:'italic',borderLeft:'2px solid var(--gold)',paddingLeft:'16px'}}>One missed quote or one slow reply often costs more than this session does.</p>
            <p style={{fontSize:'12px',color:'var(--text-muted)',marginBottom:'28px',letterSpacing:'0.04em'}}>In-person, at your premises, Pietermaritzburg, Durban &amp; surrounding KZN</p>
            <div style={{display:'flex',flexDirection:'column',gap:'14px',marginBottom:'36px'}}>
              {includes.map((item, i) => (
                <div key={i} style={{display:'flex',gap:'14px',alignItems:'flex-start'}}>
                  <div style={{color:'var(--gold)',fontSize:'12px',flexShrink:0,paddingTop:'2px'}}>—</div>
                  <p style={{fontSize:'13px',color:'#F0EDE8',lineHeight:1.75}}>{item}</p>
                </div>
              ))}
            </div>
            <Link className="btn-primary" href="/contact">Book the Session</Link>
            <p style={{fontSize:'12px',color:'var(--text-muted)',marginTop:'20px',lineHeight:1.7}}>Bringing two people? R2,950 for two seats, same session, same depth.</p>
          </div>

          {/* TESTIMONIAL - hidden until real result exists */}
          <div style={{display:'none'}}>
            <div style={{marginTop:'40px',maxWidth:'600px',background:'var(--surface)',borderLeft:'3px solid var(--gold)',padding:'28px 36px'}}>
              <div style={{fontSize:'9px',letterSpacing:'0.2em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'12px'}}>Client result</div>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontStyle:'italic',color:'#F0EDE8',lineHeight:1.65,marginBottom:'16px'}}></p>
              <p style={{fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text-muted)'}}></p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* THE RETAINER */}
        <section aria-labelledby="retainer-heading">
          <div className="section-label">If you want it to keep going</div>
          <h2 className="section-title" id="retainer-heading">Jarvis Maintenance</h2>
          <div style={{display:'flex',alignItems:'baseline',gap:'8px',margin:'16px 0 24px'}}>
            <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'44px',fontWeight:300,color:'#F0EDE8',lineHeight:1}}>R950</span>
            <span style={{fontSize:'13px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>/month</span>
          </div>
          <p className="section-body">New situations come up that weren&apos;t on the cheat sheet. Habits fade without reinforcement. Jarvis Maintenance keeps it sharp: a short monthly check-in, plus a direct line to ask &ldquo;how would I get AI to do this?&rdquo; whenever it comes up, answered within a day, not a ticket queue.</p>
        </section>

        <div className="divider"></div>

        {/* FAQ */}
        <section aria-labelledby="faq-heading">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title" id="faq-heading">Questions about the session, answered straight.</h2>
          <div style={{marginTop:'48px'}}>
            {faqItems.map((item, i) => (
              <details
                key={item.question}
                style={{borderTop:'1px solid var(--border)',padding:'24px 0',...(i === faqItems.length - 1 ? {borderBottom:'1px solid var(--border)'} : {})}}
              >
                <summary style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',cursor:'pointer',listStyle:'none',color:'var(--text-light, #F0EDE8)'}}>
                  {item.question}
                </summary>
                <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:1.8,marginTop:'16px'}}>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        {/* FINAL CTA */}
        <section aria-labelledby="final-cta-heading" style={{padding:'80px 0',textAlign:'center'}}>
          <h2 id="final-cta-heading" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,4.5vw,56px)',fontWeight:300,lineHeight:1.1,marginBottom:'20px'}}>Give your busiest person their assistant.</h2>
          <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:1.9,maxWidth:'480px',margin:'0 auto 36px'}}>One session. Real work. A habit that sticks past Monday.</p>
          <Link className="btn-primary" href="/contact">Book the Session &mdash; R1,950</Link>
        </section>

        {/* FOOTER */}
        <footer style={{borderTop:'1px solid var(--border)',padding:'40px 60px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'24px'}}>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'18px',fontWeight:300}}>ADA &mdash; Asset Development Automation, a division of Avalon Capital Group</div>
          </div>
          <div style={{display:'flex',gap:'28px',flexWrap:'wrap'}}>
            <Link href="/ada" style={{fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.05em',textDecoration:'none'}}>ADA</Link>
            <Link href="/contact" style={{fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.05em',textDecoration:'none'}}>Contact</Link>
            <a href="/privacy-policy" style={{fontSize:'11px',color:'var(--gold)',textDecoration:'none',letterSpacing:'0.05em'}}>Privacy Policy</a>
            <a href="/terms-of-service" style={{fontSize:'11px',color:'var(--gold)',textDecoration:'none',letterSpacing:'0.05em'}}>Terms of Service</a>
          </div>
          <div style={{width:'100%',paddingTop:'20px',borderTop:'1px solid var(--border)',marginTop:'4px'}}>
            <p style={{fontSize:'11px',color:'var(--text-dim)',marginBottom:'8px'}}>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa</p>
            <p style={{fontSize:'12px',color:'var(--text-dim)',lineHeight:1.7}}>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
