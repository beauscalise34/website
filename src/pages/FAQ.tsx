import { useState } from 'react'
import { Link } from 'react-router-dom'

const GOLD = 'oklch(78% .14 85)'
const CARD = 'oklch(13% .006 260)'
const CARD_ALT = 'oklch(11% .005 260)'
const MUTED = 'oklch(55% .01 260)'

interface FAQItem {
  q: string
  a: string
}

interface FAQCategory {
  heading: string
  items: FAQItem[]
}

const categories: FAQCategory[] = [
  {
    heading: 'General / Getting Started',
    items: [
      {
        q: 'How do I get a free estimate?',
        a: 'Call or text (713) 201-4005 or fill out our online form. We respond within 24 hours with an exact written quote. No pressure, no obligation.',
      },
      {
        q: 'Do you charge for estimates?',
        a: 'No. All estimates are completely free and come with no obligation.',
      },
      {
        q: 'Are you based in Cypress, TX?',
        a: 'Yes. Beau Scalise and Haden McDade are both Cypress, TX residents. We\'re based in 77429 and 77433.',
      },
      {
        q: 'Do you serve commercial clients outside of Cypress?',
        a: 'Yes. We serve the entire Greater Houston area including Katy, The Woodlands, Spring, Sugar Land, Tomball, Pearland, and more.',
      },
    ],
  },
  {
    heading: 'Process & Installation',
    items: [
      {
        q: 'How long does an epoxy garage floor installation take?',
        a: 'Most residential garage floors are completed in 1–2 days. Day 1 is surface prep and base coat. Day 2 is the polyaspartic top coat. You can park on it within 72 hours.',
      },
      {
        q: 'How long do I need to stay off the floor after installation?',
        a: 'Foot traffic is safe after 12–16 hours. Vehicle traffic after 72 hours.',
      },
      {
        q: 'Do you use subcontractors?',
        a: 'Never. Beau and Haden personally perform every installation. This is how we maintain consistent quality.',
      },
      {
        q: 'What is surface preparation and why does it matter?',
        a: 'Surface prep (diamond grinding or chemical bonding) is the most critical step. Without it, epoxy won\'t bond properly and will peel. This is responsible for approximately 80% of all epoxy floor failures.',
      },
      {
        q: 'Can you coat a cracked or stained concrete floor?',
        a: 'Yes. We fill cracks and address staining during prep. Most concrete in good structural condition can be coated.',
      },
      {
        q: 'Can you coat over an existing epoxy floor?',
        a: 'Sometimes, depending on the condition of the existing coating. We\'ll assess during our estimate.',
      },
    ],
  },
  {
    heading: 'Pricing & Costs',
    items: [
      {
        q: 'How much does epoxy flooring cost in Cypress, TX?',
        a: 'A typical 2-car garage ranges from $1,800 to $3,000 for a full flake epoxy system. Metallic systems run slightly higher. We provide free estimates within 24 hours.',
      },
      {
        q: "What's included in the price?",
        a: 'Full diamond grinding or chemical bonding prep, 100% solids base coat, vinyl flake broadcast, UV-stable polyaspartic top coat, and our 10-year written warranty.',
      },
    ],
  },
  {
    heading: 'Warranty & Durability',
    items: [
      {
        q: "Does epoxy flooring last? What's the warranty?",
        a: 'Every installation comes with a 10-year written warranty covering peeling, delamination, and hot tire pickup. The floor itself typically lasts 20+ years with proper care.',
      },
      {
        q: 'How do I maintain my epoxy floor?',
        a: 'Sweep regularly, mop with pH-neutral cleaner, avoid bleach/ammonia. Clean oil spills promptly. Most homeowners find their floor is the easiest surface in the house to keep clean.',
      },
      {
        q: 'Is epoxy flooring slippery?',
        a: 'We add anti-slip aggregate to all polyaspartic top coats as standard practice. This meets OSHA slip resistance requirements.',
      },
    ],
  },
]

function Accordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: '1px solid oklch(100% 0 0 / 0.07)' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.1rem 0',
              gap: '1rem',
              textAlign: 'left',
            }}
          >
            <span style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              color: open === i ? GOLD : 'oklch(88% .005 65)',
              textTransform: 'uppercase',
              transition: 'color 0.15s',
            }}>{item.q}</span>
            <span style={{ color: GOLD, fontSize: '1.25rem', flexShrink: 0, lineHeight: 1 }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: MUTED,
              fontSize: '0.95rem',
              lineHeight: 1.7,
              paddingBottom: '1.1rem',
            }}>{item.a}</p>
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
      <section style={{ padding: '5rem 0 3.5rem', background: CARD_ALT, borderBottom: '1px solid oklch(100% 0 0 / 0.08)' }}>
        <div className="container">
          <span className="label-text">COMMON QUESTIONS FROM CYPRESS, TX · 77429 &amp; 77433</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', maxWidth: 700, marginBottom: '1rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '1.05rem', maxWidth: 540 }}>
            Honest answers to the questions we hear most from Cypress and Houston homeowners.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          {categories.map((cat, ci) => (
            <div key={ci} style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid oklch(100% 0 0 / 0.08)',
              }}>{cat.heading}</h2>
              <Accordion items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: GOLD }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#000', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            STILL HAVE QUESTIONS?
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.65)', marginBottom: '2rem', maxWidth: 420, margin: '0 auto 2rem' }}>
            Call us directly — you'll reach Beau or Haden, not a call center.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: GOLD, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', textDecoration: 'none' }}>
              CALL (713) 201-4005
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#000', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', border: '2px solid #000', textDecoration: 'none' }}>
              SEND A MESSAGE
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
