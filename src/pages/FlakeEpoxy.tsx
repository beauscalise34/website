import { Link } from 'react-router-dom'

export default function FlakeEpoxy() {
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
          <span className="eyebrow">THE #1 CHOICE FOR CYPRESS &amp; HOUSTON GARAGES</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: 700, marginBottom: '1.25rem' }}>
            FLAKE EPOXY GARAGE FLOOR
          </h1>
          <p style={{ color: '#858481', fontSize: '1.1rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Our full-broadcast vinyl flake system combines industrial-grade 100% solids epoxy with a UV-stable polyaspartic top coat — built to handle Houston's heat, humidity, and heavy vehicles.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-outline">FREE ESTIMATE</Link>
          </div>
        </div>
      </section>

      {/* What Is a Flake Epoxy Floor */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">UNDERSTANDING THE SYSTEM</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '1.5rem' }}>
            WHAT IS A FLAKE EPOXY FLOOR SYSTEM?
          </h2>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            A flake epoxy floor system — also called a chip or broadcast floor — is a multi-layer coating that transforms bare concrete into a durable, decorative, easy-to-clean surface. Unlike single-coat roll-on products from big-box stores, a true flake system involves multiple layers of different materials, each serving a specific purpose.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The base coat is a 100% solids epoxy — meaning no solvents or water diluting the material — applied at full thickness for maximum adhesion and chemical resistance. While the base coat is still wet, decorative vinyl flake chips are broadcast across the entire surface until it's fully saturated. Once cured, excess flakes are scraped off and the floor is sealed with a UV-stable polyaspartic top coat that resists yellowing, hot tire lift, and daily wear.
          </p>
          <p style={{ color: '#858481', lineHeight: 1.8 }}>
            The result is a floor that looks like a professional showroom, resists oil, chemicals, and moisture, and carries a genuine 10-year warranty.
          </p>
        </div>
      </section>

      {/* System Features */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">WHAT'S INCLUDED</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '2rem' }}>
            APEX FLAKE SYSTEM FEATURES
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '💎', title: '100% Solids Epoxy Base', desc: 'No water, no solvents — full-thickness film build for maximum bond strength and chemical resistance.' },
              { icon: '🎨', title: 'Full-Broadcast Vinyl Flake', desc: 'Flakes broadcast wall-to-wall to completely hide the base coat, eliminating inconsistency and hot spots.' },
              { icon: '☀️', title: 'UV-Stable Polyaspartic Top', desc: 'Aliphatic polyaspartic top coat resists UV yellowing and hot tire lift — critical in the Texas sun.' },
              { icon: '🔩', title: 'Diamond Grind / Chem Bond Prep', desc: 'Proper surface prep is the #1 factor in epoxy longevity. We diamond grind or chemically etch every slab before coating.' },
              { icon: '📋', title: '10-Year Written Warranty', desc: 'The strongest warranty in the Houston market, backed by founders who stand behind every install.' },
              { icon: '🛡️', title: 'Anti-Slip Aggregate', desc: 'Fine aluminum oxide anti-slip grit added to the top coat for safety without sacrificing the finish.' },
            ].map(f => (
              <div key={f.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#f8f8f7' }}>{f.title}</h3>
                <p style={{ color: '#858481', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">TRANSPARENT PRICING</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '0.75rem' }}>
            WHAT DOES IT COST?
          </h2>
          <p style={{ color: '#858481', marginBottom: '2rem', lineHeight: 1.7 }}>
            Pricing depends on garage size, condition, and any necessary crack or spall repairs. These ranges reflect typical installed costs in the Cypress / Houston area.
          </p>
          <div style={{ display: 'grid', gap: '1px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.07)' }}>
            {[
              { size: '1-Car Garage (~250 sq ft)', range: '$1,800 – $3,500' },
              { size: '2-Car Garage (~450 sq ft)', range: '$2,800 – $5,000' },
              { size: '3-Car Garage (~650 sq ft)', range: '$4,000 – $7,000' },
              { size: 'Per sq ft (approx.)', range: '$6 – $12 / sq ft' },
            ].map(r => (
              <div key={r.size} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', background: '#1a1a19' }}>
                <span style={{ color: '#858481', fontSize: '0.95rem' }}>{r.size}</span>
                <span style={{ fontFamily: "'Oswald', sans-serif", color: '#ecbd3a', fontSize: '1.1rem' }}>{r.range}</span>
              </div>
            ))}
          </div>
          <p style={{ color: '#858481', fontSize: '0.85rem', marginTop: '1rem' }}>
            * Final price determined after on-site assessment. All estimates are free and provided within 24 hours.
          </p>
        </div>
      </section>

      {/* Is It Right For You */}
      <section className="section section-dark">
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">IS IT RIGHT FOR YOU?</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', marginBottom: '1.5rem' }}>
            FLAKE EPOXY IS IDEAL IF YOU...
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
            {[
              'Want a durable, easy-to-clean garage floor that lasts 10+ years',
              'Park vehicles with hot tires on your floor regularly',
              'Work on cars, do home DIY, or need chemical resistance',
              'Want to hide existing staining, etching, or minor imperfections',
              'Prefer a non-slip surface that still looks professional',
              'Need a fast install — most jobs complete in 1–2 days',
            ].map(item => (
              <li key={item} style={{ display: 'flex', gap: '0.75rem', color: '#858481', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ color: '#ecbd3a', fontWeight: 700, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ecbd3a', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>
            READY FOR YOUR FREE ESTIMATE?
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.7)', marginBottom: '2rem' }}>
            We'll assess your slab, walk you through options, and give you an honest price — all within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: '#ecbd3a', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.9rem 2rem', textDecoration: 'none' }}>
              CALL (713) 201-4005
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#000', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.9rem 2rem', border: '2px solid #000', textDecoration: 'none' }}>
              FREE ESTIMATE FORM
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
