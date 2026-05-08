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

export default function CityKaty() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3.5rem', borderBottom: '1px solid oklch(100% 0 0 / 0.08)' }}>
        <div className="container">
          <span className="label-text">KATY, TX · 77449 &amp; 77450</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', maxWidth: 700, marginBottom: '1.25rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
            EPOXY FLOOR COATINGS IN KATY, TX
          </h1>
          <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '1.05rem', maxWidth: 600, lineHeight: 1.7, marginBottom: '2rem' }}>
            Professional epoxy floor coatings for Katy homeowners and businesses. 100% solids systems, 10-year warranty, and founders on every job.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" className="btn-gold">📞 CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-ghost">FREE ESTIMATE →</Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="label-text">SERVING KATY, TX</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            EPOXY FLOORS FOR KATY HOMES &amp; BUSINESSES
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Katy's newer communities feature large homes with expansive garages — and those garages deserve floors that match the quality of the rest of the home. We install full-broadcast flake and metallic epoxy systems throughout Katy, including communities like Cinco Ranch, Seven Meadows, Grand Lakes, and Firethorne.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            We're just minutes from Katy and provide free on-site estimates typically within 24 hours of your call. Most installs complete in 1–2 days with minimal disruption to your household.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8 }}>
            Every Katy job uses the same 100% solids industrial epoxy and polyaspartic systems we use in Cypress — with the same 10-year written warranty.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '5rem 0', background: CARD_ALT }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="label-text">WHAT WE OFFER IN KATY</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            SERVICES IN 77449 &amp; 77450
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
            {['Flake epoxy garage floors', 'Metallic epoxy floors', 'Commercial epoxy systems', 'Patio & outdoor coatings'].map(s => (
              <li key={s} style={{ display: 'flex', gap: '0.75rem', color: MUTED, fontSize: '0.95rem' }}>
                <span style={{ color: GOLD, fontWeight: 700, flexShrink: 0 }}>✓</span>{s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local FAQ */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="label-text">KATY FAQ</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            COMMON QUESTIONS FROM KATY HOMEOWNERS
          </h2>
          {[
            { q: 'How far is Apex Epoxy from Katy?', a: 'We\'re based in Cypress — just east of Katy on the 290 corridor. We\'re typically on-site in Katy within 24 hours for free estimates.' },
            { q: 'Do you serve all Katy zip codes?', a: 'Yes. We serve 77449, 77450, and surrounding Katy communities including Cinco Ranch, Firethorne, and Grand Lakes.' },
            { q: 'Is the pricing the same in Katy as in Cypress?', a: 'Yes. We use the same pricing structure regardless of city — Katy homeowners get the exact same quality and rates as our Cypress customers.' },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid oklch(100% 0 0 / 0.07)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1rem', color: 'white', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{faq.q}</h3>
              <p style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.7, fontFamily: "'Source Sans 3', sans-serif" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <GoldCTA heading="GET YOUR KATY ESTIMATE TODAY" />
    </main>
  )
}
