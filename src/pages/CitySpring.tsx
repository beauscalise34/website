import { Link } from 'react-router-dom'

export default function CitySpring() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #020203 0%, #06070a 100%)', padding: '6rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#ecbd3a' }} />
        <div className="container">
          <span className="eyebrow">SPRING, TX · NORTH HOUSTON</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: 700, marginBottom: '1.25rem' }}>
            EPOXY FLOORING IN SPRING, TX
          </h1>
          <p style={{ color: '#858481', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Industrial-grade epoxy floor systems for Spring homes and businesses. 100% solids, diamond grind prep, 10-year warranty.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-outline">FREE ESTIMATE</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">SERVING SPRING, TX</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '1.5rem' }}>PROFESSIONAL EPOXY FLOORS FOR SPRING HOMEOWNERS</h2>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            We serve the Spring area including communities near I-45, Spring Cypress Road, and Kuykendahl. Whether you're looking to upgrade a residential garage or coat a commercial space, we bring the same 100% solids systems and founder-level attention to every Spring job.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8 }}>
            Call (713) 201-4005 for a free estimate — we typically schedule on-site visits within 24 hours.
          </p>
        </div>
      </section>

      <section style={{ background: '#ecbd3a', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontSize: '2rem', marginBottom: '1rem' }}>GET YOUR SPRING ESTIMATE</h2>
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
