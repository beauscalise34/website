import { Link } from 'react-router-dom'

export default function CommercialEpoxy() {
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
          <span className="eyebrow">WAREHOUSE, AUTO SHOP &amp; COMMERCIAL FACILITIES</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: 700, marginBottom: '1.25rem' }}>
            COMMERCIAL EPOXY FLOORING
          </h1>
          <p style={{ color: '#858481', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Industrial-grade epoxy floor systems engineered for heavy foot traffic, forklifts, chemical spills, and the demands of commercial operations across Greater Houston.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">CALL FOR COMMERCIAL QUOTE</a>
            <Link to="/contact" className="btn-outline">REQUEST BID</Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <span className="eyebrow">WHO WE SERVE</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '2rem' }}>
            INDUSTRIES &amp; FACILITY TYPES
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🏭', title: 'Warehouses & Distribution', desc: 'Seamless, joint-free floors that stand up to forklift traffic and pallet jacks.' },
              { icon: '🔧', title: 'Auto Shops & Dealerships', desc: 'Oil-resistant, chemical-proof systems that are easy to hose clean at end of day.' },
              { icon: '🍽️', title: 'Restaurants & Kitchens', desc: 'Food-safe, non-slip coatings that meet health code and withstand daily deep cleaning.' },
              { icon: '🏥', title: 'Medical & Clean Rooms', desc: 'Seamless hygienic surfaces that eliminate grout lines and bacterial harborage.' },
              { icon: '🏋️', title: 'Gyms & Fitness Centers', desc: 'Shock-absorbing, scuff-resistant finishes designed for heavy equipment and high traffic.' },
              { icon: '🛒', title: 'Retail & Grocery', desc: 'Decorative commercial systems that look great and handle shopping cart traffic.' },
            ].map(i => (
              <div key={i.title} style={{ background: '#1a1a19', border: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{i.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{i.title}</h3>
                <p style={{ color: '#858481', fontSize: '0.9rem', lineHeight: 1.6 }}>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System specs */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">WHAT WE INSTALL</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '2rem' }}>
            COMMERCIAL SYSTEM SPECIFICATIONS
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
            {[
              'Moisture mitigation primer for problematic slabs',
              '100% solids epoxy body coat at commercial mil thickness',
              'Broadcast or trowel-applied finish options',
              'Chemical-resistant top coat (polyurea or polyaspartic)',
              'Line striping and safety markings available',
              'Anti-fatigue and anti-static options',
              'Rapid-cure systems to minimize downtime',
              'ADA-compliant slip resistance ratings',
            ].map(spec => (
              <li key={spec} style={{ display: 'flex', gap: '0.75rem', color: '#858481', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ color: '#ecbd3a', fontWeight: 700, flexShrink: 0 }}>✓</span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ecbd3a', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>
            GET A COMMERCIAL BID
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.7)', marginBottom: '2rem' }}>
            We provide detailed commercial bids with specs, timeline, and material data sheets. Call today or submit the form.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: '#ecbd3a', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.9rem 2rem', textDecoration: 'none' }}>
              CALL (713) 201-4005
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#000', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.9rem 2rem', border: '2px solid #000', textDecoration: 'none' }}>
              REQUEST BID
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
