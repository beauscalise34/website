import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form UI only — no backend
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#1a1a19',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#f8f8f7',
    padding: '0.85rem 1rem',
    fontSize: '1rem',
    fontFamily: "'Source Sans 3', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
    borderRadius: 0,
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 600,
    fontSize: '0.8rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#858481',
    marginBottom: '0.5rem',
  }

  return (
    <main>
      {/* Hero */}
      <section style={{
        background: '#1a1a19',
        padding: '5rem 0 3rem',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div className="container">
          <span className="eyebrow">FREE ESTIMATES · 24 HOUR RESPONSE</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: 700, marginBottom: '1rem' }}>
            GET A FREE ESTIMATE
          </h1>
          <p style={{ color: '#858481', fontSize: '1.05rem', maxWidth: 540 }}>
            Fill out the form below or give us a call. Beau or Haden will get back to you within 24 hours with a straight-forward quote.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Left: contact info */}
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>CONTACT INFO</h2>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: '#858481', fontSize: '0.85rem', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>Phone</p>
                <a href="tel:7132014005" style={{ color: '#ecbd3a', fontSize: '1.4rem', fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}>
                  (713) 201-4005
                </a>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: '#858481', fontSize: '0.85rem', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>Email</p>
                <a href="mailto:hadenmcdade@apexepoxytx.com" style={{ color: '#f8f8f7', fontSize: '0.95rem' }}>
                  hadenmcdade@apexepoxytx.com
                </a>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: '#858481', fontSize: '0.85rem', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>Based In</p>
                <p style={{ color: '#f8f8f7', fontSize: '0.95rem' }}>Cypress, TX 77429 &amp; 77433</p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: '#858481', fontSize: '0.85rem', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>Hours</p>
                <p style={{ color: '#f8f8f7', fontSize: '0.95rem' }}>7 Days a Week · 6 AM – 6 PM</p>
              </div>

              <div>
                <p style={{ color: '#858481', fontSize: '0.85rem', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>Service Area</p>
                <p style={{ color: '#858481', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  Cypress · Katy · The Woodlands<br />
                  Spring · Sugar Land · Tomball<br />
                  &amp; All of Greater Houston
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div style={{ background: '#1a1a19', border: '1px solid rgba(236,189,58,0.3)', padding: '3rem 2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#ecbd3a' }}>MESSAGE SENT!</h2>
                  <p style={{ color: '#858481' }}>We'll be in touch within 24 hours. If you need a faster response, call us directly at <a href="tel:7132014005" style={{ color: '#ecbd3a' }}>(713) 201-4005</a>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#ecbd3a')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(713) 000-0000"
                        style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = '#ecbd3a')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = '#ecbd3a')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Service Interested In</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#ecbd3a')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                    >
                      <option value="">Select a service...</option>
                      <option value="flake">Flake Epoxy Garage Floor</option>
                      <option value="metallic">Metallic Epoxy</option>
                      <option value="commercial">Commercial Epoxy</option>
                      <option value="patio">Patio / Outdoor Coating</option>
                      <option value="other">Not Sure / Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Tell Us About Your Project</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Garage size, current floor condition, desired colors, timeline..."
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#ecbd3a')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
                    />
                  </div>

                  <button type="submit" className="btn-gold" style={{ justifyContent: 'center', fontSize: '1rem' }}>
                    SEND MY REQUEST →
                  </button>

                  <p style={{ color: '#858481', fontSize: '0.8rem', textAlign: 'center' }}>
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
