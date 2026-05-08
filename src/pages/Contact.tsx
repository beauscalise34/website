import { useState } from 'react'

const GOLD = 'oklch(78% .14 85)'
const CARD = 'oklch(13% .006 260)'
const CARD_ALT = 'oklch(11% .005 260)'
const MUTED = 'oklch(55% .01 260)'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: '1px solid oklch(100% 0 0 / 0.12)',
    color: 'oklch(95% .005 65)',
    padding: '0.625rem 0.875rem',
    fontSize: '0.875rem',
    fontFamily: "'Source Sans 3', sans-serif",
    outline: 'none',
    transition: 'border-color 0.15s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 600,
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: MUTED,
    marginBottom: '0.35rem',
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3.5rem', borderBottom: '1px solid oklch(100% 0 0 / 0.08)' }}>
        <div className="container">
          <span className="label-text">FREE ESTIMATE — NO OBLIGATION</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', maxWidth: 700, marginBottom: '1rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
            GET YOUR FREE ESTIMATE
          </h1>
          <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '1.05rem', maxWidth: 540 }}>
            Fill out the form below or call us. Beau or Haden will get back to you within 24 hours with a straight-forward, written quote.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Left: contact info */}
            <div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
                CONTACT INFO
              </h2>

              {[
                { heading: 'Phone', content: <a href="tel:7132014005" style={{ color: GOLD, fontSize: '1.5rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600, textDecoration: 'none' }}>(713) 201-4005</a> },
                { heading: 'Email', content: <a href="mailto:hadenmcdade@apexepoxytx.com" style={{ color: 'oklch(88% .005 65)', fontSize: '0.9rem', textDecoration: 'none', fontFamily: "'Source Sans 3', sans-serif" }}>hadenmcdade@apexepoxytx.com</a> },
                { heading: 'Based In', content: <p style={{ color: 'oklch(88% .005 65)', fontSize: '0.9rem', fontFamily: "'Source Sans 3', sans-serif" }}>Cypress, TX 77429 &amp; 77433</p> },
                { heading: 'Hours', content: <p style={{ color: 'oklch(88% .005 65)', fontSize: '0.9rem', fontFamily: "'Source Sans 3', sans-serif" }}>7 Days a Week · 6 AM – 6 PM</p> },
                { heading: 'Service Area', content: <p style={{ color: MUTED, fontSize: '0.9rem', lineHeight: 1.8, fontFamily: "'Source Sans 3', sans-serif" }}>Cypress · Katy · The Woodlands<br />Spring · Sugar Land · Tomball<br />&amp; All of Greater Houston</p> },
              ].map(item => (
                <div key={item.heading} style={{ marginBottom: '1.75rem' }}>
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: MUTED, marginBottom: '0.4rem' }}>
                    {item.heading}
                  </p>
                  {item.content}
                </div>
              ))}
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div style={{ background: CARD, border: '1px solid oklch(78% .14 85 / 0.3)', padding: '3rem 2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                  <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.5rem', color: GOLD, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    MESSAGE SENT!
                  </h2>
                  <p style={{ color: MUTED, fontFamily: "'Source Sans 3', sans-serif", lineHeight: 1.6 }}>
                    We'll be in touch within 24 hours. For faster response, call us directly at{' '}
                    <a href="tel:7132014005" style={{ color: GOLD }}>
                      (713) 201-4005
                    </a>.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  style={{ display: 'grid', gap: '1rem' }}
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = GOLD)}
                      onBlur={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.12)')}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={labelStyle}>Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(713) 000-0000"
                        style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = GOLD)}
                        onBlur={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.12)')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = GOLD)}
                        onBlur={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.12)')}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Service Interested In</label>
                    <select
                      name="service"
                      style={{ ...inputStyle, cursor: 'pointer', background: CARD_ALT }}
                      onFocus={e => (e.currentTarget.style.borderColor = GOLD)}
                      onBlur={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.12)')}
                    >
                      <option value="">Select a service...</option>
                      <option value="flake">Flake Epoxy Garage Floor</option>
                      <option value="metallic">Metallic Epoxy</option>
                      <option value="commercial">Commercial / Warehouse</option>
                      <option value="patio">Patio / Outdoor Coating</option>
                      <option value="other">Not Sure / Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Tell Us About Your Project</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Garage size, current floor condition, desired colors, timeline..."
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={e => (e.currentTarget.style.borderColor = GOLD)}
                      onBlur={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.12)')}
                    />
                  </div>

                  <button type="submit" className="btn-gold" style={{ justifyContent: 'center', width: '100%' }}>
                    SEND MY REQUEST →
                  </button>

                  <p style={{ color: MUTED, fontSize: '0.7rem', textAlign: 'center', fontFamily: "'Source Sans 3', sans-serif" }}>
                    No spam. We respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
