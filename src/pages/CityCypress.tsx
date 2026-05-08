import { Link } from 'react-router-dom'

const GOLD = 'oklch(78% .14 85)'
const CARD = 'oklch(13% .006 260)'
const CARD_ALT = 'oklch(11% .005 260)'
const MUTED = 'oklch(55% .01 260)'

function GoldCTA({ heading }: { heading: string }) {
  return (
    <section style={{ padding: '5rem 0', background: GOLD }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#000', textTransform: 'uppercase', marginBottom: '2rem' }}>{heading}</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:7132014005" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: GOLD, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', textDecoration: 'none' }}>CALL (713) 201-4005</a>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#000', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', border: '2px solid #000', textDecoration: 'none' }}>FREE ESTIMATE</Link>
        </div>
      </div>
    </section>
  )
}

export default function CityCypress() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3.5rem', borderBottom: '1px solid oklch(100% 0 0 / 0.08)' }}>
        <div className="container">
          <span className="label-text">77429 &amp; 77433 · OUR HOME BASE</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', maxWidth: 700, marginBottom: '1.25rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
            EPOXY FLOOR COATINGS IN CYPRESS, TX
          </h1>
          <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '1.05rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Apex Epoxy is based right here in Cypress. When you hire us, you're hiring your neighbors — and we protect our home reputation on every job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">📞 CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-ghost">FREE ESTIMATE →</Link>
          </div>
        </div>
      </section>

      {/* Why Cypress Chooses Apex */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="label-text">YOUR LOCAL EPOXY CONTRACTOR</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            WHY CYPRESS HOMEOWNERS CHOOSE APEX
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Cypress is our home — we live here, our families are here, and our reputation is built on the driveways and garages of our neighbors. When we finish a job in Cypress, we know we'll see those floors again, and we install knowing that.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The Cypress area (77429 and 77433) experiences some of the most demanding conditions for garage floors in the country — extreme summer heat, high humidity, and temperature swings that stress concrete and coatings. Our systems are spec'd specifically for Houston-area climate conditions.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8 }}>
            We serve all Cypress neighborhoods including Towne Lake, Bridgeland, Coles Crossing, Fairfield, Cypress Creek Lakes, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '5rem 0', background: CARD_ALT }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="label-text">SERVICES IN CYPRESS</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            WHAT WE INSTALL IN 77429 &amp; 77433
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
            {[
              'Flake epoxy garage floors',
              'Metallic epoxy floors',
              'Commercial epoxy systems',
              'Patio & pool deck coatings',
              'Driveway coatings',
            ].map(s => (
              <li key={s} style={{ display: 'flex', gap: '0.75rem', color: MUTED, fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ color: GOLD, fontWeight: 700, flexShrink: 0 }}>✓</span>
                {s}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '2rem', padding: '1.25rem', background: CARD, border: '1px solid oklch(100% 0 0 / 0.07)' }}>
            <p style={{ color: MUTED, fontSize: '0.875rem', marginBottom: '0.4rem', fontFamily: "'Source Sans 3', sans-serif" }}>Typical pricing for Cypress garages:</p>
            <p style={{ color: GOLD, fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.1rem' }}>2-Car Garage: $1,800 – $3,000 · 1-Car: $1,200 – $1,800</p>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="label-text">LOCAL QUESTIONS</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            CYPRESS, TX FAQ
          </h2>
          {[
            { q: 'How quickly can you start a project in Cypress?', a: 'We typically schedule Cypress jobs within 1–2 weeks. Call (713) 201-4005 and we\'ll check the calendar with you.' },
            { q: 'Do you work in all Cypress zip codes?', a: 'Yes — we serve 77429, 77433, and all surrounding Cypress communities including Towne Lake, Bridgeland, and Fairfield.' },
            { q: 'Are you insured and licensed in Texas?', a: 'Yes. Apex Epoxy is fully insured and carries the appropriate Texas contractor coverage on every job.' },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid oklch(100% 0 0 / 0.07)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'white', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{faq.q}</h3>
              <p style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.7, fontFamily: "'Source Sans 3', sans-serif" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <GoldCTA heading="GET YOUR CYPRESS ESTIMATE TODAY" />
    </main>
  )
}
