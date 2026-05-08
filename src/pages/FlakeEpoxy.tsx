import { Link } from 'react-router-dom'

const GOLD = 'oklch(78% .14 85)'
const CARD = 'oklch(13% .006 260)'
const CARD_ALT = 'oklch(11% .005 260)'
const MUTED = 'oklch(55% .01 260)'

function PageHero({ label, h1, desc }: { label: string; h1: React.ReactNode; desc: string }) {
  return (
    <section style={{ padding: '5rem 0 3.5rem', borderBottom: '1px solid oklch(100% 0 0 / 0.08)' }}>
      <div className="container">
        <span className="label-text">{label}</span>
        <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', maxWidth: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
          {h1}
        </h1>
        <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '1.05rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
          {desc}
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href="tel:7132014005" className="btn-gold">📞 CALL (713) 201-4005</a>
          <Link to="/contact" className="btn-ghost">FREE ESTIMATE →</Link>
        </div>
      </div>
    </section>
  )
}

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
          <a href="tel:7132014005" style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#000', color: GOLD,
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em',
            padding: '0.85rem 2rem', textDecoration: 'none',
          }}>CALL (713) 201-4005</a>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'transparent', color: '#000',
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
            fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em',
            padding: '0.85rem 2rem', border: '2px solid #000', textDecoration: 'none',
          }}>FREE ESTIMATE</Link>
        </div>
      </div>
    </section>
  )
}

export default function FlakeEpoxy() {
  return (
    <main>
      <PageHero
        label="MOST POPULAR SERVICE IN CYPRESS & HOUSTON TX"
        h1="FLAKE EPOXY GARAGE FLOORS"
        desc="Full-broadcast vinyl flake epoxy system with 100% solids base coat, UV-stable polyaspartic top coat, and a 10-year written warranty. The gold standard for residential garages in Cypress and Greater Houston."
      />

      {/* What Is It */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="label-text">UNDERSTANDING THE SYSTEM</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            WHAT IS A FLAKE EPOXY FLOOR SYSTEM?
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            A flake epoxy floor system — also called a chip or broadcast floor — is a multi-layer coating that transforms bare concrete into a durable, decorative, easy-to-clean surface. Unlike single-coat roll-on products from big-box stores, a true flake system involves multiple layers of different materials, each serving a specific purpose.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The base coat is a 100% solids epoxy — meaning no solvents or water diluting the material — applied at full thickness for maximum adhesion and chemical resistance. While the base coat is still wet, decorative vinyl flake chips are broadcast across the entire surface until it's fully saturated. Once cured, excess flakes are scraped off and the floor is sealed with a UV-stable polyaspartic top coat that resists yellowing, hot tire lift, and daily wear.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8 }}>
            The result is a floor that looks like a professional showroom, resists oil, chemicals, and moisture, and carries a genuine 10-year warranty.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '5rem 0', background: CARD_ALT }}>
        <div className="container">
          <span className="label-text">WHAT'S INCLUDED</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            FLAKE EPOXY SYSTEM FEATURES
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🎨', title: 'Full-broadcast vinyl flake (your choice of blend)', desc: 'Flakes broadcast wall-to-wall to completely hide the base coat.' },
              { icon: '💎', title: '100% solids industrial-grade base coat', desc: 'No water, no solvents — full-thickness film build for maximum bond strength.' },
              { icon: '🛡', title: 'Anti-slip aggregate for safety', desc: 'Fine aluminum oxide grit added to the top coat for safety without sacrificing appearance.' },
              { icon: '☀️', title: 'UV-stable polyaspartic top coat', desc: 'Resists UV yellowing and hot tire lift — critical in the Texas sun.' },
              { icon: '🔩', title: 'Diamond grind or chemical bonding surface prep', desc: 'Proper surface prep is the #1 factor in epoxy longevity. No exceptions.' },
              { icon: '📋', title: 'Backed by our 10-year written warranty', desc: 'The strongest warranty in the Houston market, backed by founders.' },
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
          <span className="label-text">TRANSPARENT PRICING</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            PRICING FOR CYPRESS &amp; HOUSTON
          </h2>
          <p style={{ color: MUTED, marginBottom: '2rem', lineHeight: 1.7 }}>
            Pricing depends on garage size, concrete condition, and any crack or spall repairs needed.
          </p>
          <div style={{ border: '1px solid oklch(100% 0 0 / 0.08)' }}>
            {[
              { size: '1-Car Garage (250–350 sq ft)', range: '$1,200 – $1,800' },
              { size: '2-Car Garage (400–550 sq ft)', range: '$1,800 – $3,000' },
              { size: '3-Car Garage (600–800 sq ft)', range: '$2,500 – $4,200' },
              { size: 'Oversized / Tandem (800+ sq ft)', range: 'Call for Quote' },
            ].map((r, i) => (
              <div key={r.size} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.25rem',
                background: i % 2 === 0 ? CARD : CARD_ALT,
                borderBottom: '1px solid oklch(100% 0 0 / 0.06)',
              }}>
                <span style={{ fontFamily: "'Source Sans 3', sans-serif", color: MUTED, fontSize: '0.95rem' }}>{r.size}</span>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: GOLD, fontSize: '1.1rem' }}>{r.range}</span>
              </div>
            ))}
          </div>
          <p style={{ color: MUTED, fontSize: '0.8rem', marginTop: '1rem' }}>
            * All estimates are free and provided within 24 hours after on-site assessment.
          </p>
        </div>
      </section>

      <GoldCTA
        heading="READY FOR YOUR FREE ESTIMATE?"
        sub="We'll assess your slab, walk you through options, and give you an honest price — all within 24 hours."
      />
    </main>
  )
}
