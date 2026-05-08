import { Link } from 'react-router-dom'

const GOLD = 'oklch(78% .14 85)'
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

export default function CitySpring() {
  return (
    <main>
      <section style={{ padding: '5rem 0 3.5rem', borderBottom: '1px solid oklch(100% 0 0 / 0.08)' }}>
        <div className="container">
          <span className="label-text">SPRING, TX · 77373 &amp; 77379</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', maxWidth: 700, marginBottom: '1.25rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
            EPOXY FLOOR COATINGS IN SPRING, TX
          </h1>
          <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '1.05rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Industrial-grade epoxy floor systems for Spring homes and businesses. 100% solids, diamond grind prep, 10-year warranty.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">📞 CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-ghost">FREE ESTIMATE →</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="label-text">SERVING SPRING, TX</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            PROFESSIONAL EPOXY FLOORS FOR SPRING HOMEOWNERS
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            We serve the Spring area including communities near I-45, Spring Cypress Road, and Kuykendahl. Whether you're looking to upgrade a residential garage or coat a commercial space, we bring the same 100% solids systems and founder-level attention to every Spring job.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8 }}>
            Call (713) 201-4005 for a free estimate — we typically schedule on-site visits within 24 hours.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: CARD_ALT }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="label-text">SPRING FAQ</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            COMMON QUESTIONS FROM SPRING HOMEOWNERS
          </h2>
          {[
            { q: 'How far is Apex Epoxy from Spring, TX?', a: 'We\'re based in Cypress — about 20 minutes from Spring via TX-249 and Spring Cypress Road. We respond fast and serve Spring regularly.' },
            { q: 'What services do you offer in Spring?', a: 'All of our services — flake epoxy garage floors, metallic epoxy, patio coatings, and commercial systems — are available throughout Spring.' },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid oklch(100% 0 0 / 0.07)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'white', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{faq.q}</h3>
              <p style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.7, fontFamily: "'Source Sans 3', sans-serif" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <GoldCTA heading="GET YOUR SPRING ESTIMATE TODAY" />
    </main>
  )
}
