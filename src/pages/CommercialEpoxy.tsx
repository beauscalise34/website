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
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#000', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', border: '2px solid #000', textDecoration: 'none' }}>REQUEST BID</Link>
        </div>
      </div>
    </section>
  )
}

export default function CommercialEpoxy() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3.5rem', borderBottom: '1px solid oklch(100% 0 0 / 0.08)' }}>
        <div className="container">
          <span className="label-text">WAREHOUSE, AUTO SHOP &amp; COMMERCIAL FACILITIES</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', maxWidth: 700, marginBottom: '1.25rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
            COMMERCIAL EPOXY FLOORING IN HOUSTON
          </h1>
          <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '1.05rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Industrial-grade epoxy floor systems engineered for heavy foot traffic, forklifts, chemical spills, and the demands of commercial operations across Greater Houston.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">📞 CALL FOR COMMERCIAL QUOTE</a>
            <Link to="/contact" className="btn-ghost">REQUEST BID →</Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <span className="label-text">WHO WE SERVE</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            INDUSTRIES &amp; FACILITY TYPES
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🏭', title: 'Warehouses & Distribution', desc: 'Seamless, joint-free floors that stand up to forklift traffic and pallet jacks.' },
              { icon: '🔧', title: 'Auto Shops & Dealerships', desc: 'Oil-resistant, chemical-proof systems that are easy to hose clean at end of day.' },
              { icon: '🍽️', title: 'Restaurants & Kitchens', desc: 'Food-safe, non-slip coatings that meet health code and withstand daily deep cleaning.' },
              { icon: '🏥', title: 'Medical & Clean Rooms', desc: 'Seamless hygienic surfaces that eliminate grout lines and bacterial harborage.' },
              { icon: '🏋️', title: 'Gyms & Fitness Centers', desc: 'Scuff-resistant finishes designed for heavy equipment and high traffic.' },
              { icon: '🛒', title: 'Retail & Grocery', desc: 'Decorative commercial systems that look great and handle shopping cart traffic.' },
            ].map(i => (
              <div key={i.title} style={{ background: CARD, border: '1px solid oklch(100% 0 0 / 0.07)', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{i.icon}</div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'white', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{i.title}</h3>
                <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.6 }}>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '5rem 0', background: CARD_ALT }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="label-text">WHAT WE INSTALL</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            COMMERCIAL SYSTEM SPECIFICATIONS
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
            {[
              'Moisture mitigation primer for problematic slabs',
              '100% solids epoxy body coat at commercial mil thickness',
              'Forklift-rated, chemical-resistant floor systems',
              'OSHA-compliant safety striping and line marking',
              'Rapid-cure systems to minimize operational downtime',
              'Anti-fatigue and anti-static options available',
              'Seamless, grout-free surfaces for easy sanitation',
              'ADA-compliant slip resistance ratings',
            ].map(spec => (
              <li key={spec} style={{ display: 'flex', gap: '0.75rem', color: MUTED, fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ color: GOLD, fontWeight: 700, flexShrink: 0 }}>✓</span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GoldCTA
        heading="GET A COMMERCIAL BID"
        sub="We provide detailed commercial bids with specs, timeline, and material data sheets. Call today or submit the form."
      />
    </main>
  )
}
