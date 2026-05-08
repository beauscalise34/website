import { Link } from 'react-router-dom'

const GOLD = 'oklch(78% .14 85)'
const CARD = 'oklch(13% .006 260)'
const CARD_ALT = 'oklch(11% .005 260)'
const MUTED = 'oklch(55% .01 260)'

function GoldCTA({ heading, sub }: { heading: string; sub: string }) {
  return (
    <section style={{ padding: '5rem 0', background: GOLD }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#000', marginBottom: '0.75rem', textTransform: 'uppercase' }}>{heading}</h2>
        <p style={{ color: 'rgba(0,0,0,0.65)', marginBottom: '2rem', fontSize: '1rem', maxWidth: 480, margin: '0 auto 2rem' }}>{sub}</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:7132014005" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: GOLD, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', textDecoration: 'none' }}>CALL (713) 201-4005</a>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#000', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', border: '2px solid #000', textDecoration: 'none' }}>FREE ESTIMATE</Link>
        </div>
      </div>
    </section>
  )
}

export default function PatioOutdoor() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3.5rem', borderBottom: '1px solid oklch(100% 0 0 / 0.08)' }}>
        <div className="container">
          <span className="label-text">PATIOS · POOL DECKS · WALKWAYS</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', maxWidth: 700, marginBottom: '1.25rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
            PATIO &amp; OUTDOOR COATINGS
          </h1>
          <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '1.05rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            UV-stable, waterproof coatings engineered for Houston's heat, humidity, and temperature extremes. Transform your patio, pool deck, or driveway with a finish that lasts.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">📞 CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-ghost">FREE ESTIMATE →</Link>
          </div>
        </div>
      </section>

      {/* Why Outdoor Is Different */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="label-text">OUTDOOR VS. INDOOR SYSTEMS</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            WHY OUTDOOR COATINGS ARE DIFFERENT
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Houston's climate is brutal on outdoor surfaces — intense UV radiation, prolonged heat above 100°F, heavy rainfall, and high humidity create conditions that destroy standard epoxy within months. An outdoor coating that's not designed for these conditions will yellow, peel, and delaminate quickly.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            We use aliphatic polyaspartic and polyurea systems — not standard epoxy — for all exterior applications. These materials are UV-stable by chemistry (not just additive), remain flexible enough to handle thermal expansion, and dry fast enough to resist rain infiltration during application.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8 }}>
            Proper anti-slip aggregate is standard on all outdoor projects — patios, pool decks, and steps need to be safe even when wet.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '5rem 0', background: CARD_ALT }}>
        <div className="container">
          <span className="label-text">WHAT WE INCLUDE</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            OUTDOOR SYSTEM FEATURES
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '☀️', title: 'UV-Stable', desc: 'Aliphatic polyaspartic resists UV yellowing indefinitely — built for the Texas sun.' },
              { icon: '🛡', title: 'Slip-Resistant', desc: 'Anti-slip aggregate broadcast is standard on all outdoor surfaces.' },
              { icon: '🎨', title: 'Custom Colors', desc: 'Dozens of color options to complement your home\'s exterior and landscaping.' },
              { icon: '🌡️', title: 'Handles Texas Heat', desc: 'Flexible chemistry tolerates extreme temperature swings without cracking.' },
              { icon: '🏊', title: 'Pool Deck Safe', desc: 'Chemical-resistant and stays cool underfoot — ideal around pools.' },
              { icon: '📋', title: '10-Year Warranty', desc: 'Every outdoor installation backed by our written warranty.' },
            ].map(f => (
              <div key={f.title} style={{ background: CARD, border: '1px solid oklch(100% 0 0 / 0.07)', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'white', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{f.title}</h3>
                <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <span className="label-text">SURFACES WE COAT</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            OUTDOOR APPLICATIONS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🏡', title: 'Patios & Entertaining Areas', desc: 'Color chip or solid-color polyaspartic systems that look great and hold up to outdoor furniture.' },
              { icon: '🏊', title: 'Pool Decks', desc: 'Non-slip, waterproof coatings designed to stay cool underfoot and resist pool chemical splash.' },
              { icon: '🚗', title: 'Driveways', desc: 'Heavy-duty systems that handle vehicle traffic, oil drips, and constant Texas heat.' },
              { icon: '🏗️', title: 'Walkways & Steps', desc: 'Safety-focused coatings with aggressive anti-slip ratings for pedestrian surfaces.' },
            ].map(a => (
              <div key={a.title} style={{ background: CARD, border: '1px solid oklch(100% 0 0 / 0.07)', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{a.icon}</div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'white', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{a.title}</h3>
                <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldCTA
        heading="PROTECT YOUR OUTDOOR SURFACES"
        sub="Free estimates within 24 hours. Serving Cypress, Katy, The Woodlands, Spring & Greater Houston."
      />
    </main>
  )
}
