import { Link } from 'react-router-dom'

export default function MetallicEpoxy() {
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
          <span className="eyebrow">SHOWROOM-QUALITY FINISHES FOR CYPRESS &amp; HOUSTON</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: 700, marginBottom: '1.25rem' }}>
            METALLIC EPOXY FLOORS
          </h1>
          <p style={{ color: '#858481', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Each metallic epoxy floor is completely unique — swirling pigments create a one-of-a-kind appearance that mimics marble, lava, or liquid metal. No two floors look the same.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-outline">FREE ESTIMATE</Link>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">UNDERSTANDING METALLIC EPOXY</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '1.5rem' }}>
            WHAT IS METALLIC EPOXY?
          </h2>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Metallic epoxy is a 100% solids epoxy system infused with ultra-fine metallic pigment powders. During installation, the pigments are manipulated using solvents and tools to create swirling, three-dimensional patterns that appear to move as light changes throughout the day.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Like our flake system, metallic epoxy is finished with a UV-stable polyaspartic top coat to prevent yellowing and protect the finish from traffic, chemicals, and Houston's harsh sun. The result is both a functional floor and a genuine design feature.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8 }}>
            Popular color palettes include pearl gray, ocean blue, bronze, charcoal swirl, and warm gold — and we work with you to customize the look to your space.
          </p>
        </div>
      </section>

      {/* Best For */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">WHERE IT SHINES</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '2rem' }}>
            BEST APPLICATIONS
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🏠', title: 'Living Spaces', desc: 'Basements, sunrooms, and open-plan living areas that need a striking floor without the cost of stone.' },
              { icon: '🚗', title: 'Custom Garages', desc: 'Man caves, car collections, and show garages where appearance matters as much as durability.' },
              { icon: '🏪', title: 'Retail & Showrooms', desc: 'Boutiques, auto showrooms, and service counters that need a premium finish with commercial durability.' },
              { icon: '🏢', title: 'Office Lobbies', desc: 'Reception areas and lobbies where a designer look at a fraction of polished concrete cost.' },
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

      {/* Pricing */}
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">PRICING GUIDE</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '1.5rem' }}>
            METALLIC EPOXY INVESTMENT
          </h2>
          <p style={{ color: '#858481', marginBottom: '2rem', lineHeight: 1.7 }}>
            Metallic epoxy requires more labor and skill than standard flake systems. Pricing reflects the custom, artistic nature of each install.
          </p>
          <div style={{ display: 'grid', gap: '1px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)' }}>
            {[
              { size: 'Garage (~400–500 sq ft)', range: '$3,500 – $6,500' },
              { size: 'Living space / basement', range: '$4,000 – $8,000' },
              { size: 'Commercial space', range: 'Custom quote' },
              { size: 'Per sq ft (approx.)', range: '$8 – $15 / sq ft' },
            ].map(r => (
              <div key={r.size} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', background: '#1a1a19' }}>
                <span style={{ color: '#858481', fontSize: '0.95rem' }}>{r.size}</span>
                <span style={{ fontFamily: "'Oswald', sans-serif", color: '#ecbd3a', fontSize: '1.1rem' }}>{r.range}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ecbd3a', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>
            SEE WHAT'S POSSIBLE
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.7)', marginBottom: '2rem' }}>
            Call us to discuss color options and get a free on-site estimate. We serve all of Greater Houston.
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
