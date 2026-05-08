import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #020203 0%, #06070a 100%)',
        padding: '6rem 0 4rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#ecbd3a' }} />
        <div className="container">
          <span className="eyebrow">LOCALLY OWNED · CYPRESS, TX</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: 700, marginBottom: '1.25rem' }}>
            ABOUT APEX EPOXY &amp; SURFACE SYSTEMS
          </h1>
          <p style={{ color: '#858481', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7 }}>
            Two Cypress guys who got tired of seeing homeowners ripped off by DIY kits and high-pressure franchise companies.
          </p>
        </div>
      </section>

      {/* Founders story */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">OUR STORY</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '1.5rem' }}>
            FOUNDED IN CYPRESS, BUILT FOR HOUSTON
          </h2>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Apex Epoxy was started by Beau Scalise and Haden McDade — two Cypress residents who saw firsthand how many homeowners were either paying premium prices to franchise companies (who then subcontracted the work) or getting burned by bargain-bin installers using watered-down epoxy that peeled within a year.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            We decided to do it right. That means using only 100% solids industrial epoxy — not the diluted box-store stuff. It means diamond grinding every slab before we coat it, because a coating is only as good as the bond to the concrete. And it means one of us is on every single job, from the initial assessment through final coat. No foremen, no subcontractors, no franchisees.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            We're based in Cypress and serve customers throughout the Greater Houston area — Katy, The Woodlands, Spring, Sugar Land, Tomball, and everywhere in between. When you call us, you reach one of the owners. When we show up, it's us doing the work.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8 }}>
            Our 10-year written warranty isn't a marketing gimmick — it's a reflection of how confident we are in the systems we install. We stand behind every job we do.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 900 }}>
          <span className="eyebrow">HOW WE OPERATE</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '2rem' }}>
            OUR CORE COMMITMENTS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: '👤',
                title: 'Founders on Every Job',
                desc: 'Beau or Haden — or both — are present on every installation. You never get handed off to a crew you\'ve never met.',
              },
              {
                icon: '🏆',
                title: '100% Solids Epoxy Only',
                desc: 'We refuse to use solvent-based or water-based products. 100% solids means every mil of material stays on your floor.',
              },
              {
                icon: '⚙️',
                title: 'Diamond Grind Prep Standard',
                desc: 'Proper surface prep is responsible for 80% of epoxy failures. We diamond grind or chemically etch every slab — no exceptions.',
              },
              {
                icon: '📋',
                title: '10-Year Written Warranty',
                desc: 'We put our warranty in writing and we mean it. If it fails due to our workmanship or materials, we come back and fix it.',
              },
              {
                icon: '🚫',
                title: 'No Subcontractors',
                desc: 'We never hand your job off to someone else. The people who gave you the estimate are the same people installing your floor.',
              },
              {
                icon: '💬',
                title: 'Transparent Pricing',
                desc: 'No bait-and-switch. No upselling on the day of install. The quote you get is the price you pay.',
              },
            ].map(v => (
              <div key={v.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ color: '#858481', fontSize: '0.9rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ecbd3a', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>
            LET'S TALK ABOUT YOUR PROJECT
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.7)', marginBottom: '2rem' }}>
            Reach out directly — you'll talk to Beau or Haden, not a call center.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: '#ecbd3a', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.9rem 2rem', textDecoration: 'none' }}>
              CALL (713) 201-4005
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#000', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.9rem 2rem', border: '2px solid #000', textDecoration: 'none' }}>
              FREE ESTIMATE
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
