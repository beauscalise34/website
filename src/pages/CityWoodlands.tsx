import { Link } from 'react-router-dom'

export default function CityWoodlands() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg, #020203 0%, #06070a 100%)', padding: '6rem 0 4rem', borderBottom: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: '#ecbd3a' }} />
        <div className="container">
          <span className="eyebrow">THE WOODLANDS, TX · MONTGOMERY COUNTY</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: 700, marginBottom: '1.25rem' }}>
            EPOXY FLOORING IN THE WOODLANDS, TX
          </h1>
          <p style={{ color: '#858481', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Premium epoxy floor coatings for The Woodlands' discerning homeowners. Flake, metallic, and outdoor systems installed to the same standard as the homes we work in.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-outline">FREE ESTIMATE</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">THE WOODLANDS SERVICE AREA</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '1.5rem' }}>FLOORS THAT FIT THE WOODLANDS STANDARD</h2>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The Woodlands is home to some of the most beautiful residential properties in the greater Houston area, and those properties deserve floors that match. We install premium flake and metallic epoxy systems throughout The Woodlands, serving villages including Sterling Ridge, Carlton Woods, Creekside Park, and others.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8 }}>
            Free on-site estimates within 24 hours. Call (713) 201-4005 to get on the schedule.
          </p>
        </div>
      </section>

      <section style={{ background: '#ecbd3a', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontSize: '2rem', marginBottom: '1rem' }}>GET YOUR WOODLANDS ESTIMATE</h2>
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
