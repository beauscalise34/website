import { useState } from 'react'
import { Link } from 'react-router-dom'

interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: 'What is a flake epoxy floor system?',
    a: 'A flake epoxy system (also called a chip floor) is a multi-layer coating applied to concrete. It starts with a 100% solids epoxy base coat, followed by a full broadcast of decorative vinyl flake chips, then sealed with a UV-stable polyaspartic top coat. The result is a durable, attractive, easy-to-clean surface that\'s far more durable than big-box store roll-on products.',
  },
  {
    q: 'How much does epoxy flooring cost in Cypress / Houston?',
    a: 'In the Houston area, a professionally installed flake epoxy floor typically runs $6–$12 per square foot, all-in. A standard 2-car garage (~450 sq ft) usually falls between $2,800 and $5,000. Metallic epoxy runs higher — $8–$15 per sq ft — due to the additional labor involved. We provide free, no-obligation estimates within 24 hours.',
  },
  {
    q: 'How long will an epoxy floor last?',
    a: 'A properly installed 100% solids epoxy floor with a polyaspartic top coat should last 15–20+ years with normal use. We back our installs with a 10-year written warranty. Floors installed with watered-down box-store epoxy or without proper surface prep can fail in as little as 1–3 years.',
  },
  {
    q: 'What is polyaspartic and why does it matter?',
    a: 'Polyaspartic is an aliphatic (UV-stable) coating used as the top coat in our systems. Unlike standard epoxy top coats that yellow under UV exposure, polyaspartic maintains its clarity and color indefinitely. It also cures faster, is harder, and is more resistant to hot tire lift — making it ideal for Texas garage floors exposed to sun and hot vehicles.',
  },
  {
    q: 'Why does surface preparation matter so much?',
    a: 'Surface prep is responsible for approximately 80% of epoxy floor failures. If the concrete is not properly abraded (via diamond grinding or chemical etching), the epoxy doesn\'t form a true mechanical bond — it just sits on top of the concrete and eventually peels. We diamond grind or chemically treat every slab we coat. No shortcuts, no exceptions.',
  },
  {
    q: 'What makes epoxy fail in Texas heat?',
    a: 'Several factors: 1) Hot tire lift — a car\'s tires heat up during driving and can reach 150°F+, softening cheap epoxy on contact. Our polyaspartic top coat resists this. 2) UV degradation — standard aromatic epoxies yellow and degrade under UV. We use UV-stable aliphatic polyaspartic. 3) Moisture vapor emission — Houston\'s humidity means slabs hold moisture, which can push up under coatings. Proper primer and prep manage this.',
  },
  {
    q: 'Can I do it myself with a kit from Home Depot?',
    a: 'You can, but results typically disappoint. Big-box epoxy kits are water-based or solvent-cut — meaning they contain only 40–50% solids. When they cure, the water or solvent evaporates and you\'re left with a very thin film. Most fail within 1–3 years. Professional 100% solids systems install at the full thickness with no loss of material, and when combined with proper prep, the bond is dramatically stronger.',
  },
  {
    q: 'How do I maintain an epoxy floor?',
    a: 'Epoxy floors are extremely low maintenance. Sweep or dust-mop regularly to remove grit that could scratch the top coat. Mop with a neutral pH cleaner (avoid harsh acidic or bleach-based cleaners). Clean up oil or chemical spills promptly — the coating is resistant but not impervious to prolonged exposure. Most homeowners find their garage floor is now cleaner than it\'s ever been simply because it\'s so easy to hose off.',
  },
]

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            style={{ color: open === i ? '#ecbd3a' : '#f8f8f7' }}
          >
            {item.q}
            <span style={{ color: '#ecbd3a', fontSize: '1.2rem', flexShrink: 0 }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div className="faq-answer">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function FAQ() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        background: '#1a1a19',
        padding: '5rem 0 3rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div className="container">
          <span className="eyebrow">EPOXY FLOORING Q&amp;A</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: 700, marginBottom: '1rem' }}>
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p style={{ color: '#858481', fontSize: '1.05rem', maxWidth: 560 }}>
            Honest answers to the questions we hear most from Cypress and Houston homeowners.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ecbd3a', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem' }}>
            STILL HAVE QUESTIONS?
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.7)', marginBottom: '2rem' }}>
            Call us directly — you'll reach Beau or Haden, not a call center.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: '#ecbd3a', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.9rem 2rem', textDecoration: 'none' }}>
              CALL (713) 201-4005
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#000', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.9rem 2rem', border: '2px solid #000', textDecoration: 'none' }}>
              SEND A MESSAGE
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
