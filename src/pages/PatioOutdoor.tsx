import { Link } from 'react-router-dom'

export default function PatioOutdoor() {
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
          <span className="eyebrow">OUTDOOR SURFACE SYSTEMS FOR HOUSTON'S CLIMATE</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: 700, marginBottom: '1.25rem' }}>
            PATIO &amp; OUTDOOR COATINGS
          </h1>
          <p style={{ color: '#858481', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            UV-stable, waterproof coatings engineered for Houston's heat, humidity, and freeze-thaw cycles. Transform your patio, pool deck, or driveway with a finish that lasts.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-outline">FREE ESTIMATE</Link>
          </div>
        </div>
      </section>

      {/* Why outdoor is different */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">OUTDOOR VS. INDOOR SYSTEMS</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '1.5rem' }}>
            WHY OUTDOOR COATINGS ARE DIFFERENT
          </h2>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Houston's climate is brutal on outdoor surfaces — intense UV radiation, prolonged heat above 100°F, heavy rainfall, and high humidity create conditions that destroy standard epoxy within months. An outdoor coating that's not designed for these conditions will yellow, peel, and delaminate quickly.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            We use aliphatic polyaspartic and polyurea systems — not standard epoxy — for all exterior applications. These materials are UV-stable by chemistry (not just additive), remain flexible enough to handle thermal expansion, and dry fast enough to resist rain infiltration during application.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8 }}>
            Proper anti-slip aggregate is standard on all outdoor projects — patios, pool decks, and steps need to be safe even when wet.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">SURFACES WE COAT</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '2rem' }}>
            OUTDOOR APPLICATIONS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🏡', title: 'Patios & Entertaining Areas', desc: 'Color chip or solid-color polyaspartic systems that look great and hold up to outdoor furniture.' },
              { icon: '🏊', title: 'Pool Decks', desc: 'Non-slip, waterproof coatings designed to stay cool underfoot and resist pool chemical splash.' },
              { icon: '🚗', title: 'Driveways', desc: 'Heavy-duty systems that handle vehicle traffic, oil drips, and the constant Texas heat.' },
              { icon: '🏗️', title: 'Walkways & Steps', desc: 'Safety-focused coatings with aggressive anti-slip ratings for pedestrian surfaces.' },
            ].map(a => (
              <div key={a.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{a.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{a.title}</h3>
                <p style={{ color: '#858481', fontSize: '0.9rem', lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ecbd3a', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>
            PROTECT YOUR OUTDOOR SURFACES
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.7)', marginBottom: '2rem' }}>
            Free estimates within 24 hours. Serving Cypress, Katy, The Woodlands, Spring &amp; Greater Houston.
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
