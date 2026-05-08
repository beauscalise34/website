import { Link } from 'react-router-dom'

export default function CityKaty() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #020203 0%, #06070a 100%)', padding: '6rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#ecbd3a' }} />
        <div className="container">
          <span className="eyebrow">KATY, TX · GREATER HOUSTON</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: 700, marginBottom: '1.25rem' }}>
            EPOXY FLOORING IN KATY, TX
          </h1>
          <p style={{ color: '#858481', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Professional epoxy floor coatings for Katy homeowners and businesses. 100% solids systems, 10-year warranty, and founders on every job.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-outline">FREE ESTIMATE</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">SERVING KATY, TX</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '1.5rem' }}>EPOXY FLOORS FOR KATY HOMES &amp; BUSINESSES</h2>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Katy's newer communities feature large homes with expansive garages — and those garages deserve floors that match the quality of the rest of the home. We install full-broadcast flake and metallic epoxy systems throughout Katy, including communities like Cinco Ranch, Seven Meadows, Grand Lakes, and Firethorne.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8 }}>
            We're just minutes from Katy, and we provide free on-site estimates typically within 24 hours of your call. Most installs complete in 1–2 days with minimal disruption to your household.
          </p>
        </div>
      </section>

      <section style={{ background: '#ecbd3a', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontSize: '2rem', marginBottom: '1rem' }}>GET YOUR KATY ESTIMATE</h2>
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
