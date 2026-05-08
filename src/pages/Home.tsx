import { Link } from 'react-router-dom'

const stats = [
  { number: '25+', label: 'Jobs Completed' },
  { number: '10-YR', label: 'Written Warranty' },
  { number: '100%', label: 'Solids Epoxy' },
  { number: '5★', label: 'Google Rated' },
]

const services = [
  {
    num: '01',
    title: 'Flake Epoxy',
    badge: '★ MOST POPULAR',
    desc: 'Full-broadcast vinyl flake system with 100% solids base coat, polyaspartic top coat, and anti-slip aggregate. The most durable and popular choice for Houston-area garages.',
    path: '/services/flake-epoxy',
  },
  {
    num: '02',
    title: 'Metallic Epoxy',
    badge: null,
    desc: 'Swirling metallic pigments suspended in a clear 100% solids epoxy for a one-of-a-kind showroom finish. Perfect for living spaces, showrooms, and custom garages.',
    path: '/services/metallic-epoxy',
  },
  {
    num: '03',
    title: 'Commercial Epoxy',
    badge: null,
    desc: 'Industrial-grade systems for warehouses, auto shops, restaurants, and commercial facilities. Seamless, chemical-resistant, and compliant with commercial traffic loads.',
    path: '/services/commercial-epoxy',
  },
]

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #020203 0%, #06070a 50%, #0d0e12 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle texture overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '8px 8px',
          pointerEvents: 'none',
        }} />
        {/* Gold accent line */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'linear-gradient(180deg, transparent, #ecbd3a 30%, #ecbd3a 70%, transparent)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '5rem 1.5rem' }}>
          {/* Location badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(236,189,58,0.1)', border: '1px solid rgba(236,189,58,0.3)',
            padding: '0.4rem 1rem', marginBottom: '1.5rem',
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
            fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ecbd3a',
          }}>
            📍 CYPRESS, TX · 77429 &amp; 77433
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, maxWidth: 800, marginBottom: '1.5rem' }}>
            EPOXY FLOOR COATINGS IN<br />
            <span style={{ color: '#ecbd3a' }}>CYPRESS, TX</span>
          </h1>

          <p style={{ color: '#858481', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: 600, marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Apex Epoxy installs 100% solids industrial-grade epoxy floors backed by a 10-year written warranty. Founders Beau Scalise and Haden McDade are on every single job — no subcontractors, ever.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="tel:7132014005" className="btn-gold">CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-outline">FREE ESTIMATE</Link>
          </div>

          {/* Trust row */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { icon: '🏆', text: 'Founders on every job' },
              { icon: '✅', text: '10-year written warranty' },
              { icon: '⚡', text: 'Free estimates in 24 hrs' },
            ].map(t => (
              <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1rem' }}>{t.icon}</span>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#858481' }}>
                  {t.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: '#1a1a19', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: '#ecbd3a', lineHeight: 1 }}>
                  {s.number}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#858481', marginTop: '0.4rem' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">WHAT WE DO</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '3rem', maxWidth: 500 }}>
            EPOXY FLOORING SERVICES
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {services.map(s => (
              <div key={s.num} style={{
                background: '#1a1a19', border: '1px solid rgba(255,255,255,0.07)',
                padding: '2rem', position: 'relative',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(236,189,58,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
              >
                {s.badge && (
                  <div style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    background: '#ecbd3a', color: '#000',
                    fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                    fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '0.2rem 0.6rem',
                  }}>
                    {s.badge}
                  </div>
                )}
                <div style={{
                  fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                  fontSize: '2.5rem', color: 'rgba(236,189,58,0.15)', lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ color: '#858481', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {s.desc}
                </p>
                <Link to={s.path} style={{
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
                  fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#ecbd3a',
                }}>
                  LEARN MORE →
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services/patio-outdoor" style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600,
              fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#858481', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2px',
            }}>
              ALSO: PATIO &amp; OUTDOOR COATINGS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY APEX ── */}
      <section className="section section-dark">
        <div className="container">
          <span className="eyebrow">NOT ALL EPOXY IS EQUAL</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '0.75rem' }}>
            APEX VS. THE COMPETITION
          </h2>
          <p style={{ color: '#858481', marginBottom: '2.5rem', maxWidth: 560, fontSize: '1rem' }}>
            Most floor coating failures come down to wrong products and shortcuts on prep. Here's where we stand.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>Feature</th>
                  <th style={{ color: '#ecbd3a' }}>Apex Epoxy</th>
                  <th>Big-Box DIY</th>
                  <th>Franchise Co.</th>
                </tr>
              </thead>
              <tbody>
                {[
                  '100% solids epoxy system',
                  'Diamond grind surface prep',
                  'Founders on every job',
                  '10-yr written warranty',
                  'No subcontractors',
                ].map((row, i) => (
                  <tr key={i}>
                    <td>{row}</td>
                    <td style={{ color: '#ecbd3a', fontWeight: 700, fontSize: '1.1rem' }}>✓</td>
                    <td style={{ color: '#858481' }}>✗</td>
                    <td style={{ color: '#858481' }}>✗</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: '#ecbd3a', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1rem' }}>
            GET STARTED TODAY
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.7)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: 520, margin: '0 auto 2rem' }}>
            Free estimates within 24 hours. We serve Cypress, Katy, The Woodlands, Spring, Sugar Land, Tomball, and all of Greater Houston.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#000', color: '#ecbd3a',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em',
              padding: '0.9rem 2rem', textDecoration: 'none', transition: 'background 0.2s',
            }}>
              CALL (713) 201-4005
            </a>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'transparent', color: '#000',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em',
              padding: '0.9rem 2rem', border: '2px solid #000', textDecoration: 'none',
            }}>
              FREE ESTIMATE
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
