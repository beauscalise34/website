import { Link } from 'react-router-dom'

const GOLD = 'oklch(78% .14 85)'
const CARD = 'oklch(13% .006 260)'
const CARD_ALT = 'oklch(11% .005 260)'
const MUTED = 'oklch(55% .01 260)'

function GoldCTA({ heading, sub }: { heading: string; sub: string }) {
  return (
    <section style={{ padding: '5rem 0', background: GOLD }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#000', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
          {heading}
        </h2>
        <p style={{ color: 'rgba(0,0,0,0.65)', marginBottom: '2rem', fontSize: '1rem', maxWidth: 480, margin: '0 auto 2rem' }}>
          {sub}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:7132014005" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: GOLD, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', textDecoration: 'none' }}>
            CALL (713) 201-4005
          </a>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#000', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', border: '2px solid #000', textDecoration: 'none' }}>
            FREE ESTIMATE
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function MetallicEpoxy() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3.5rem', borderBottom: '1px solid oklch(100% 0 0 / 0.08)' }}>
        <div className="container">
          <span className="label-text">SHOWROOMS · MAN CAVES · INTERIORS</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', maxWidth: 700, marginBottom: '1.25rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
            METALLIC EPOXY FLOORS
          </h1>
          <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '1.05rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Each metallic epoxy floor is completely unique — swirling pigments create a one-of-a-kind appearance that mimics marble, lava, or liquid metal. No two floors look the same.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">📞 CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-ghost">FREE ESTIMATE →</Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '5rem 0', background: CARD_ALT }}>
        <div className="container">
          <span className="label-text">OUR WORK</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            METALLIC EPOXY GALLERY
          </h2>
          <div style={{ height: 400, position: 'relative', overflow: 'hidden' }}>
            <img src="/images/metallic-blue.png" alt="Metallic epoxy floor with black and blue swirl pattern" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <span style={{
              position: 'absolute', bottom: 12, left: 12,
              color: 'white', fontSize: '0.8rem',
              fontFamily: "'Source Sans 3', sans-serif",
              textShadow: '0 1px 4px rgba(0,0,0,0.7)',
            }}>Charcoal &amp; blue metallic epoxy — high-gloss mirror finish</span>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="label-text">UNDERSTANDING METALLIC EPOXY</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            WHAT IS METALLIC EPOXY?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Metallic epoxy is a 100% solids epoxy system infused with ultra-fine metallic pigment powders. During installation, the pigments are manipulated using solvents and tools to create swirling, three-dimensional patterns that appear to move as light changes throughout the day.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Like our flake system, metallic epoxy is finished with a UV-stable polyaspartic top coat to prevent yellowing and protect the finish from traffic, chemicals, and Houston's harsh sun. The result is both a functional floor and a genuine design feature.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8 }}>
            Popular color palettes include pearl gray, ocean blue, bronze, charcoal swirl, and warm gold — and we work with you to customize the look to your space.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '5rem 0', background: CARD_ALT }}>
        <div className="container">
          <span className="label-text">WHAT'S INCLUDED</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            METALLIC SYSTEM FEATURES
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '✨', title: 'High-Gloss Mirror Finish', desc: 'Reflective surface creates stunning 3D depth effects unlike any other flooring type.' },
              { icon: '🎨', title: 'Dozens of Metallic Colors', desc: 'Pearl, bronze, ocean blue, charcoal, gold — fully customizable to your vision.' },
              { icon: '🌊', title: 'Every Floor is Unique', desc: 'The manipulation process means no two metallic epoxy floors are ever identical.' },
              { icon: '☀️', title: 'UV-Stable Polyaspartic Top Coat', desc: 'Protects the metallic finish from yellowing and UV degradation over time.' },
              { icon: '📋', title: '10-Year Written Warranty', desc: 'Every installation backed by our written warranty — residential or commercial.' },
              { icon: '🔩', title: 'Full Diamond Grind Prep', desc: 'Mechanical surface preparation ensures maximum bond and eliminates delamination risk.' },
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

      {/* Pricing */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="label-text">PRICING GUIDE</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            METALLIC EPOXY INVESTMENT
          </h2>
          <p style={{ color: MUTED, marginBottom: '2rem', lineHeight: 1.7 }}>
            Metallic epoxy requires more labor and skill than standard flake systems. Pricing typically runs $3–$7/sq ft depending on design complexity.
          </p>
          <div style={{ border: '1px solid oklch(100% 0 0 / 0.08)' }}>
            {[
              { size: 'Garage (~400–500 sq ft)', range: '$3,500 – $6,500' },
              { size: 'Living space / basement', range: '$4,000 – $8,000' },
              { size: 'Commercial showroom space', range: 'Custom quote' },
              { size: 'Per sq ft (approx.)', range: '$8 – $15 / sq ft' },
            ].map((r, i) => (
              <div key={r.size} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1rem 1.25rem',
                background: i % 2 === 0 ? CARD : CARD_ALT,
                borderBottom: '1px solid oklch(100% 0 0 / 0.06)',
              }}>
                <span style={{ fontFamily: "'Source Sans 3', sans-serif", color: MUTED, fontSize: '0.95rem' }}>{r.size}</span>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: GOLD, fontSize: '1.1rem' }}>{r.range}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldCTA
        heading="SEE WHAT'S POSSIBLE"
        sub="Call us to discuss color options and get a free on-site estimate. We serve all of Greater Houston."
      />
    </main>
  )
}
