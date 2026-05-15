import { Link } from 'react-router-dom'
import MultiStepForm from '../components/MultiStepForm'

const BG = 'oklch(9% .005 260)'
const CARD = 'oklch(13% .006 260)'
const CARD_ALT = 'oklch(11% .005 260)'
const GOLD = 'oklch(78% .14 85)'
const MUTED = 'oklch(55% .01 260)'
const BORDER = 'oklch(100% 0 0 / 0.08)'

const stats = [
  { number: '25+', label: 'Jobs Completed' },
  { number: '10-YR', label: 'Written Warranty' },
  { number: '100%', label: 'Solids Epoxy' },
  { number: '5★', label: 'Rated in Houston & Surrounding Areas' },
]

const services = [
  {
    label: 'MOST POPULAR',
    title: 'Flake Epoxy Garage Floors',
    desc: 'Full-broadcast vinyl flake system with 100% solids base coat, anti-slip aggregate, and UV-stable polyaspartic top coat. The gold standard for residential garages.',
    href: '/services/flake-epoxy-garage-floors',
    gradient: 'linear-gradient(135deg, #1a1505 0%, #2d2208 100%)',
    image: '/images/garage-after.jpeg',
  },
  {
    label: 'SHOWROOM FINISH',
    title: 'Metallic Epoxy Floors',
    desc: 'One-of-a-kind 3D marble and liquid-metal effects. Every floor is completely unique — the ultimate showpiece for homeowners who demand the best.',
    href: '/services/metallic-epoxy-floors',
    gradient: 'linear-gradient(135deg, #0a0a14 0%, #1a1a2e 100%)',
    image: '/images/metallic-epoxy.jpeg',
  },
  {
    label: 'INDUSTRIAL GRADE',
    title: 'Commercial & Warehouse',
    desc: 'OSHA-compliant, chemical-resistant epoxy systems for warehouses, auto shops, retail, and industrial spaces. Built for heavy traffic and minimal downtime.',
    href: '/services/commercial-warehouse-flooring',
    gradient: 'linear-gradient(135deg, #0a0f0a 0%, #0f1a0f 100%)',
    image: '/images/commercial-after.jpeg',
  },
  {
    label: 'OUTDOOR SURFACES',
    title: 'Patio & Outdoor Coatings',
    desc: 'Slip-resistant, UV-stable coatings built to handle Texas heat, rain, and temperature extremes. Pool decks, patios, walkways, and more.',
    href: '/services/patio-outdoor-coatings',
    gradient: 'linear-gradient(135deg, #0f0a05 0%, #1a0f00 100%)',
    image: '/images/outdoor-patio.jpeg',
  },
]

const steps = [
  { num: '01', title: 'Free On-Site Estimate', desc: 'Beau or Haden visits your property, assesses the concrete, and gives you a written quote — same day in most cases.' },
  { num: '02', title: 'Surface Preparation', desc: 'Diamond grinding or chemical bonding treatment creates the mechanical profile needed for a true permanent bond.' },
  { num: '03', title: 'Base Coat & Broadcast', desc: '100% solids epoxy applied at full thickness. Vinyl flake or metallic pigment broadcast while wet for complete coverage.' },
  { num: '04', title: 'Polyaspartic Top Coat', desc: 'UV-stable, abrasion-resistant polyaspartic top coat seals the system. Walk-ready in 12 hrs, vehicle-ready in 72 hrs.' },
]

const features = [
  { title: 'Founder-Led Every Job', desc: 'Beau & Haden personally show up to every estimate and every installation. No subcontractors. Ever.' },
  { title: '10-Year Written Warranty', desc: 'Every job backed by our written warranty. If there\'s ever an issue, we come back and fix it — no charge.' },
  { title: '100% Solids Epoxy Only', desc: 'We never use watered-down big-box store products. Only industrial-grade 100% solids epoxy and polyaspartic.' },
  { title: '1–2 Day Installations', desc: 'Most residential garages are done in a single day. Back in your garage fast, with a floor that lasts decades.' },
]

const compTable = [
  { feature: '100% Solids Epoxy', apex: '✓', bigbox: '✗', franchise: 'varies' },
  { feature: 'UV-Stable Polyaspartic Top Coat', apex: '✓', bigbox: '✗', franchise: 'sometimes' },
  { feature: '10-Year Written Warranty', apex: '✓', bigbox: '✗', franchise: '✗' },
  { feature: 'Founder on Every Job', apex: '✓', bigbox: '✗', franchise: '✗' },
  { feature: 'Diamond Grind or Chemical Bonding Agent', apex: '✓', bigbox: '✗', franchise: 'sometimes' },
  { feature: 'No Subcontractors', apex: '✓', bigbox: 'N/A', franchise: '✗' },
  { feature: 'Free Estimate Within 24 Hours', apex: '✓', bigbox: 'N/A', franchise: '✓' },
]

const cities = [
  { name: 'Cypress', zips: '77429, 77433', href: '/locations/cypress-tx' },
  { name: 'Katy', zips: '77449, 77450', href: '/locations/katy-tx' },
  { name: 'The Woodlands', zips: '77380, 77381', href: '/locations/the-woodlands-tx' },
  { name: 'Spring', zips: '77373, 77379', href: '/locations/spring-tx' },
  { name: 'Sugar Land', zips: '77478, 77479', href: '/locations/sugar-land-tx' },
  { name: 'Houston', zips: 'Greater Houston', href: '/contact' },
]

export default function Home() {
  return (
    <main style={{ background: BG }}>
      {/* ── SECTION 1: HERO ── */}
      <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', padding: '4rem 0' }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
            className="lg:grid-cols-12"
          >
            {/* Left */}
            <div className="lg:col-span-7" style={{ paddingTop: '2rem' }}>
              {/* Location badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem' }}>📍</span>
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: GOLD,
                }}>CYPRESS, TX · 77429 &amp; 77433</span>
              </div>

              <h1 style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.05,
                margin: 0,
                marginBottom: '1.25rem',
              }}>
                <span style={{ color: 'white' }}>EPOXY FLOOR COATINGS IN</span><br />
                <span style={{ color: GOLD }}>CYPRESS, TX</span>
              </h1>

              <p style={{ color: 'oklch(95% .005 65 / 0.65)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '0.75rem', maxWidth: 560 }}>
                100% solids industrial-grade epoxy systems, UV-stable polyaspartic top coats, and a{' '}
                <strong style={{ color: 'white', fontWeight: 600 }}>10-year written warranty</strong> on every job.
              </p>
              <p style={{ color: 'oklch(95% .005 65 / 0.45)', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: 500 }}>
                Serving Cypress, Katy, The Woodlands, Spring &amp; Greater Houston.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <a href="tel:7132014005" className="btn-gold">📞 CALL (713) 201-4005</a>
                <Link to="/contact" className="btn-ghost">FREE ESTIMATE →</Link>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  { icon: '🛡', text: '10-Year Written Warranty' },
                  { icon: '👤', text: 'Founder-Led Every Job' },
                  { icon: '⭐', text: '5-Star Rated in Houston & Surrounding Areas' },
                ].map(b => (
                  <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.9rem' }}>{b.icon}</span>
                    <span style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      color: 'oklch(95% .005 65 / 0.55)',
                    }}>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form card */}
            <div className="lg:col-span-5">
              <div style={{ background: CARD, padding: '1.5rem' }}>
                <p style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: GOLD,
                  marginBottom: '1rem',
                }}>HOW MUCH WILL IT COST?</p>
                <MultiStepForm />
                <p style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: '0.7rem',
                  color: MUTED,
                  textAlign: 'center',
                  marginTop: '0.75rem',
                }}>Takes 60 seconds · No pressure · We respond within 24 hrs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: STATS STRIP ── */}
      <section style={{ background: CARD_ALT, borderTop: `1px solid oklch(100% 0 0 / 0.06)`, borderBottom: `1px solid oklch(100% 0 0 / 0.06)`, padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} className="md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} style={{
                textAlign: 'center',
                padding: '1rem 1.5rem',
                borderRight: i < stats.length - 1 ? `1px solid ${BORDER}` : 'none',
              }}>
                <span className="stat-number">{s.number}</span>
                <p style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontSize: '0.75rem',
                  color: 'oklch(95% .005 65 / 0.45)',
                  marginTop: '0.35rem',
                }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SERVICES ── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="gold-line" />
          <span className="label-text">WHAT WE DO</span>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'white',
            marginBottom: '0.5rem',
          }}>EPOXY FLOORING SERVICES</h2>
          <div style={{ width: '4rem', height: 1, background: GOLD, marginBottom: '3rem' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {services.map(s => (
              <div key={s.title} style={{
                display: 'flex',
                flexDirection: 'column',
                border: `1px solid oklch(100% 0 0 / 0.07)`,
                background: CARD,
              }}
                className="md:flex-row"
              >
                {/* Image area */}
                <div style={{
                  width: '100%',
                  height: 160,
                  background: s.gradient,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                }}
                  className="md:w-64 md:h-auto"
                >
                  {s.image && <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />}
                </div>
                {/* Content */}
                <div style={{ flex: 1, padding: '1.5rem' }} className="md:p-7">
                  <span className="label-text" style={{ marginBottom: '0.4rem' }}>{s.label}</span>
                  <h3 style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: 'white',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                  }}>{s.title}</h3>
                  <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    {s.desc}
                  </p>
                  <Link to={s.href} style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: GOLD,
                    textDecoration: 'none',
                    transition: 'text-decoration 0.15s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    LEARN MORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: BEFORE & AFTER ── */}
      <section style={{ padding: '6rem 0', background: CARD_ALT }}>
        <div className="container">
          <div className="gold-line" />
          <span className="label-text">REAL RESULTS</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '0.5rem' }}>
            BEFORE &amp; AFTER
          </h2>
          <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '0.95rem', marginBottom: '3rem', maxWidth: 620 }}>
            Real jobs completed in Houston &amp; Surrounding Areas. Every floor shown was installed using 100% solids epoxy with a polyaspartic top coat.
          </p>

          {/* Project 1 */}
          <span className="label-text" style={{ marginBottom: '1rem' }}>RESIDENTIAL GARAGE — CYPRESS, TX</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              {
                label: 'BEFORE',
                caption: 'Stained concrete — oil spots & surface damage',
                src: '/images/garage-before.jpeg',
              },
              {
                label: 'AFTER',
                caption: 'Multicolor flake epoxy with polyaspartic top coat',
                src: '/images/garage-after.jpeg',
              },
            ].map(p => (
              <div key={p.label} style={{ height: 256, position: 'relative', overflow: 'hidden' }}>
                <img src={p.src} alt={`${p.label} — ${p.caption}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{
                  position: 'absolute', top: 8, left: 8,
                  background: 'oklch(0% 0 0 / 0.55)',
                  border: '1px solid oklch(100% 0 0 / 0.2)',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: 'white',
                  padding: '0.2rem 0.5rem',
                }}>{p.label}</span>
                <span style={{
                  position: 'absolute', bottom: 10, left: 10,
                  color: 'white',
                  fontSize: '0.7rem',
                  fontFamily: "'Source Sans 3', sans-serif",
                  textShadow: '0 1px 4px rgba(0,0,0,0.7)',
                }}>{p.caption}</span>
              </div>
            ))}
          </div>

          {/* Project 2 — Before & After flake epoxy */}
          <span className="label-text" style={{ marginBottom: '1rem' }}>GARAGE FLOOR — FLAKE EPOXY</span>
          <div style={{ marginBottom: '2.5rem' }}>
            <img src="/images/before-after-flake-1.jpeg" alt="Before and after — bare concrete to flake epoxy finish" style={{ width: '100%', height: 256, objectFit: 'cover' }} />
          </div>

          {/* Project 3 — Before & After flake epoxy */}
          <span className="label-text" style={{ marginBottom: '1rem' }}>GARAGE FLOOR — STAINED CONCRETE TO FLAKE</span>
          <div style={{ marginBottom: '2.5rem' }}>
            <img src="/images/before-after-flake-2.jpeg" alt="Before and after — stained concrete to gray flake epoxy" style={{ width: '100%', height: 256, objectFit: 'cover' }} />
          </div>

          {/* Project 4 — Before & After flake epoxy */}
          <span className="label-text" style={{ marginBottom: '1rem' }}>GARAGE FLOOR — CRACKED CONCRETE TO FLAKE</span>
          <div style={{ marginBottom: '2.5rem' }}>
            <img src="/images/before-after-flake-3.png" alt="Before and after — cracked concrete to flake epoxy finish" style={{ width: '100%', height: 256, objectFit: 'cover' }} />
          </div>

          {/* Project 5 */}
          <span className="label-text" style={{ marginBottom: '1rem' }}>COMMERCIAL RETAIL FLOOR — CYPRESS, TX</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              {
                label: 'BEFORE',
                caption: 'Old tile floor — prepped for coating',
                src: '/images/commercial-before.jpeg',
              },
              {
                label: 'AFTER',
                caption: 'Glossy black commercial epoxy — seamless finish',
                src: '/images/commercial-after.jpeg',
              },
            ].map(p => (
              <div key={p.label} style={{ height: 256, position: 'relative', overflow: 'hidden' }}>
                <img src={p.src} alt={`${p.label} — ${p.caption}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{
                  position: 'absolute', top: 8, left: 8,
                  background: 'oklch(0% 0 0 / 0.55)',
                  border: '1px solid oklch(100% 0 0 / 0.2)',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: 'white',
                  padding: '0.2rem 0.5rem',
                }}>{p.label}</span>
                <span style={{
                  position: 'absolute', bottom: 10, left: 10,
                  color: 'white',
                  fontSize: '0.7rem',
                  fontFamily: "'Source Sans 3', sans-serif",
                  textShadow: '0 1px 4px rgba(0,0,0,0.7)',
                }}>{p.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW IT WORKS ── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="gold-line" />
          <span className="label-text">OUR PROCESS</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '0.25rem' }}>
            HOW IT WORKS
          </h2>
          <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: GOLD, marginBottom: '3rem', textTransform: 'uppercase' }}>
            OUR 4-STEP PROCESS
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.25rem' }}
            className="md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map(s => (
              <div key={s.num} style={{
                position: 'relative',
                padding: '1.5rem',
                border: `1px solid oklch(100% 0 0 / 0.07)`,
                background: CARD,
              }}>
                <div style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: '4rem',
                  color: 'oklch(78% .14 85 / 0.15)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>{s.num}</div>
                <h4 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'white',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>{s.title}</h4>
                <p style={{ color: 'oklch(95% .005 65 / 0.5)', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY APEX ── */}
      <section style={{ padding: '6rem 0', background: CARD_ALT }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="gold-line" />
              <span className="label-text">WHY APEX EPOXY</span>
              <h2 style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'white',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}>THE DIFFERENCE IS IN THE DETAILS</h2>
              <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Too many homeowners in Cypress have been burned by franchise companies that send subcontractors, or by handymen using watered-down big-box store epoxy. Apex Epoxy was built to be different — founder-led, warranty-backed, and obsessed with quality.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="tel:7132014005" className="btn-gold">📞 CALL US NOW</a>
                <Link to="/about" className="btn-ghost">MEET BEAU &amp; HADEN →</Link>
              </div>
            </div>
            {/* Right — 2x2 feature grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {features.map(f => (
                <div key={f.title} style={{
                  padding: '1.25rem',
                  border: `1px solid oklch(100% 0 0 / 0.07)`,
                  background: CARD,
                }}>
                  <h4 style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'white',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}>{f.title}</h4>
                  <p style={{ color: 'oklch(95% .005 65 / 0.5)', fontSize: '0.8rem', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: COMPARISON TABLE ── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <span className="label-text">APEX VS. THE COMPETITION</span>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'white',
            marginBottom: '3rem',
          }}>NOT ALL EPOXY IS EQUAL</h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
              <thead>
                <tr style={{ background: CARD_ALT }}>
                  <th style={{
                    textAlign: 'left',
                    padding: '0.75rem 1.25rem',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontSize: '0.65rem',
                    color: 'oklch(95% .005 65 / 0.4)',
                  }}>FEATURE</th>
                  <th style={{ textAlign: 'center', padding: '0.75rem 1rem', width: 120 }}>
                    <span style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontSize: '0.75rem',
                      color: GOLD,
                      display: 'block',
                      paddingBottom: '0.25rem',
                      borderBottom: `2px solid ${GOLD}`,
                    }}>APEX EPOXY</span>
                  </th>
                  <th style={{ textAlign: 'center', padding: '0.75rem 1rem', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.65rem', color: 'oklch(95% .005 65 / 0.4)', width: 120 }}>BIG-BOX DIY</th>
                  <th style={{ textAlign: 'center', padding: '0.75rem 1rem', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.65rem', color: 'oklch(95% .005 65 / 0.4)', width: 120 }}>FRANCHISE CO.</th>
                </tr>
              </thead>
              <tbody>
                {compTable.map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid oklch(100% 0 0 / 0.05)` }}>
                    <td style={{ padding: '1rem 1.25rem', fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.875rem', color: 'oklch(95% .005 65 / 0.7)' }}>
                      {row.feature}
                    </td>
                    <td style={{ textAlign: 'center', padding: '1rem' }}>
                      <span style={{ color: GOLD, fontSize: '1.2rem', fontWeight: 700 }}>{row.apex}</span>
                    </td>
                    <td style={{ textAlign: 'center', padding: '1rem' }}>
                      {row.bigbox === '✗' ? (
                        <span style={{ color: 'oklch(95% .005 65 / 0.25)', fontSize: '1rem' }}>✗</span>
                      ) : (
                        <span style={{ color: 'oklch(95% .005 65 / 0.3)', fontSize: '0.75rem', fontFamily: "'Barlow Condensed', sans-serif" }}>{row.bigbox}</span>
                      )}
                    </td>
                    <td style={{ textAlign: 'center', padding: '1rem' }}>
                      {row.franchise === '✗' ? (
                        <span style={{ color: 'oklch(95% .005 65 / 0.25)', fontSize: '1rem' }}>✗</span>
                      ) : row.franchise === '✓' ? (
                        <span style={{ color: 'oklch(95% .005 65 / 0.5)', fontSize: '1rem' }}>✓</span>
                      ) : (
                        <span style={{ color: 'oklch(95% .005 65 / 0.3)', fontSize: '0.75rem', fontFamily: "'Barlow Condensed', sans-serif" }}>{row.franchise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: SERVICE AREAS ── */}
      <section style={{ padding: '6rem 0', background: CARD_ALT }}>
        <div className="container">
          <span className="label-text">SERVING GREATER HOUSTON</span>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'white',
            marginBottom: '3rem',
          }}>CYPRESS &amp; HOUSTON TX</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}
            className="md:grid-cols-3 lg:grid-cols-6"
          >
            {cities.map(c => (
              <Link
                key={c.name}
                to={c.href}
                style={{
                  background: CARD,
                  border: `1px solid oklch(100% 0 0 / 0.07)`,
                  padding: '1rem',
                  textDecoration: 'none',
                  transition: 'border-color 0.15s',
                  display: 'block',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = GOLD)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.07)')}
              >
                <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.875rem', color: 'white', textTransform: 'uppercase' }}>{c.name}</p>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.7rem', color: 'oklch(95% .005 65 / 0.35)', marginTop: '0.25rem' }}>{c.zips}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: GET STARTED CTA ── */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="gold-line" />
              <span className="label-text">GET STARTED TODAY</span>
              <h2 style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'white',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}>READY FOR A FLOOR THAT LASTS DECADES?</h2>
              <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Get your free estimate within 24 hours. We'll walk you through your options and give you an exact written quote — no pressure, no obligation.
              </p>
              {[
                { icon: '⏰', text: 'We respond within 24 hours' },
                { icon: '🛡', text: '10-year written warranty on every job' },
                { icon: '👤', text: 'Founder personally on every project' },
              ].map(b => (
                <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.9rem' }}>{b.icon}</span>
                  <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.875rem', color: 'oklch(95% .005 65 / 0.55)' }}>{b.text}</span>
                </div>
              ))}
            </div>

            {/* Right — contact form */}
            <div style={{ background: CARD, padding: '1.5rem' }} className="lg:p-7">
              <p style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: '1rem',
              }}>REQUEST YOUR FREE ESTIMATE</p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
                onSubmit={e => e.preventDefault()}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <input className="form-input" placeholder="First Name" required />
                  <input className="form-input" placeholder="Last Name" required />
                </div>
                <input className="form-input" type="tel" placeholder="Phone *" required />
                <input className="form-input" type="email" placeholder="Email *" required />
                <select className="form-input" style={{ cursor: 'pointer', background: 'oklch(9% .005 260)' }}>
                  <option value="">Select Project Type</option>
                  <option>Garage Floor</option>
                  <option>Patio / Outdoor</option>
                  <option>Commercial / Warehouse</option>
                  <option>Metallic / Showroom</option>
                  <option>Other</option>
                </select>
                <textarea className="form-input" rows={3} placeholder="Message (optional)" style={{ resize: 'vertical' }} />
                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  REQUEST YOUR FREE ESTIMATE →
                </button>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.65rem', color: MUTED, textAlign: 'center', marginTop: '0.25rem' }}>
                  No spam. We respond within 24 hours. By submitting you agree to be contacted by Apex Epoxy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
