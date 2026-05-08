import { Link } from 'react-router-dom'

export default function CityCypress() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #020203 0%, #06070a 100%)', padding: '6rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#ecbd3a' }} />
        <div className="container">
          <span className="eyebrow">77429 &amp; 77433 · OUR HOME BASE</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: 700, marginBottom: '1.25rem' }}>
            EPOXY FLOORING IN CYPRESS, TX
          </h1>
          <p style={{ color: '#858481', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Apex Epoxy is based right here in Cypress. When you hire us, you're hiring your neighbors — and we protect our home reputation on every job.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-outline">FREE ESTIMATE</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">YOUR LOCAL EPOXY CONTRACTOR</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '1.5rem' }}>WHY CYPRESS HOMEOWNERS CHOOSE APEX</h2>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Cypress is our home — we live here, our families are here, and our reputation is built on the driveways and garages of our neighbors. When we finish a job in Cypress, we know we'll see those floors again, and we install knowing that.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The Cypress area (77429 and 77433) experiences some of the most demanding conditions for garage floors in the country — extreme summer heat, high humidity, and temperature swings that stress concrete and coatings. Our systems are spec'd specifically for Houston-area climate conditions, not a generic national formula.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8 }}>
            We serve all Cypress neighborhoods including Towne Lake, Bridgeland, Coles Crossing, Fairfield, and surrounding areas.
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">SERVICES IN CYPRESS</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '2rem' }}>WHAT WE INSTALL IN 77429 &amp; 77433</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
            {['Flake epoxy garage floors', 'Metallic epoxy floors', 'Commercial epoxy systems', 'Patio & pool deck coatings', 'Driveway coatings'].map(s => (
              <li key={s} style={{ display: 'flex', gap: '0.75rem', color: '#858481', fontSize: '0.95rem' }}>
                <span style={{ color: '#ecbd3a', fontWeight: 700 }}>✓</span>{s}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '2rem' }}>
            <p style={{ color: '#858481', fontSize: '0.95rem', marginBottom: '0.5rem' }}>Typical pricing for Cypress garages:</p>
            <p style={{ color: '#ecbd3a', fontFamily: "'Oswald', sans-serif", fontSize: '1.2rem' }}>2-Car Garage: $2,800 – $5,000 · 1-Car: $1,800 – $3,500</p>
          </div>
        </div>
      </section>

      <section style={{ background: '#ecbd3a', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontSize: '2rem', marginBottom: '1rem' }}>GET YOUR CYPRESS ESTIMATE TODAY</h2>
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
