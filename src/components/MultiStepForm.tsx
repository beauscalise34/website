import { useState } from 'react'

const PROJECT_TYPES = [
  { id: 'garage', emoji: '🏠', label: 'Garage Floor' },
  { id: 'patio', emoji: '☀️', label: 'Patio / Outdoor' },
  { id: 'commercial', emoji: '🏢', label: 'Commercial / Warehouse' },
  { id: 'metallic', emoji: '✨', label: 'Metallic / Showroom' },
  { id: 'other', emoji: '💬', label: 'Other / Not Sure' },
]

const SQ_FT_OPTIONS = [
  'Under 500 sq ft',
  '500–1,500 sq ft',
  '1,500–3,000 sq ft',
  'Over 3,000 sq ft',
]

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState('')
  const [sqft, setSqft] = useState('')
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '' })
  const [smsConsent, setSmsConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = 3

  function handleProjectSelect(id: string) {
    setProjectType(id)
    setStep(2)
  }

  function handleSqftSelect(s: string) {
    setSqft(s)
    setStep(3)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const data = new FormData()
    data.append('form-name', 'estimate')
    data.append('project-type', projectType)
    data.append('square-footage', sqft)
    data.append('first-name', form.firstName)
    data.append('last-name', form.lastName)
    data.append('phone', form.phone)
    data.append('email', form.email)
    data.append('sms-consent', smsConsent ? 'yes' : 'no')
    try {
      await fetch('/', { method: 'POST', body: data })
    } catch {
      // silently fail — still show success
    }
    setSubmitted(true)
  }

  const optionStyle: React.CSSProperties = {
    background: 'oklch(11% .005 260)',
    border: '1px solid oklch(100% 0 0 / 0.08)',
    cursor: 'pointer',
    transition: 'border-color 0.15s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 1rem',
    width: '100%',
  }

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

  if (submitted) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 0', textAlign: 'center', gap: '1rem' }}>
        <div style={{ fontSize: '2.5rem' }}>✅</div>
        <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: 'white', textTransform: 'uppercase' }}>
          REQUEST RECEIVED!
        </h3>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.875rem', color: 'oklch(55% .01 260)', lineHeight: 1.6, maxWidth: 260 }}>
          Our team will call you within 24 hours.
        </p>
        <a href="tel:7132014005" className="btn-gold" style={{ padding: '0.7rem 1.5rem' }}>
          📞 CALL (713) 201-4005
        </a>
      </div>
    )
  }

  return (
    <div>
      {/* Progress bar */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontSize: '0.65rem',
            color: 'oklch(78% .14 85)',
          }}>STEP {step} OF {totalSteps}</span>
          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.7rem', color: 'oklch(55% .01 260)' }}>
            {step === 1 ? 'Project Type' : step === 2 ? 'Square Footage' : 'Your Info'}
          </span>
        </div>
        <div style={{ height: 2, background: 'oklch(100% 0 0 / 0.06)' }}>
          <div style={{ height: 2, background: 'oklch(78% .14 85)', width: `${(step / totalSteps) * 100}%`, transition: 'width 0.3s' }} />
        </div>
      </div>

      {/* Step 1 — Project Type */}
      {step === 1 && (
        <div>
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'white',
            marginBottom: '0.75rem',
          }}>WHAT TYPE OF PROJECT?</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {PROJECT_TYPES.map(pt => (
              <button
                key={pt.id}
                onClick={() => handleProjectSelect(pt.id)}
                style={optionStyle}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'oklch(78% .14 85 / 0.5)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.08)')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{pt.emoji}</span>
                  <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.875rem', color: 'oklch(88% .005 65)' }}>{pt.label}</span>
                </div>
                <span style={{ color: 'oklch(45% .005 260)', fontSize: '0.875rem' }}>→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — Square Footage */}
      {step === 2 && (
        <div>
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'white',
            marginBottom: '0.75rem',
          }}>APPROXIMATE SQUARE FOOTAGE?</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {SQ_FT_OPTIONS.map(opt => (
              <button
                key={opt}
                onClick={() => handleSqftSelect(opt)}
                style={optionStyle}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'oklch(78% .14 85 / 0.5)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.08)')}
              >
                <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.875rem', color: 'oklch(88% .005 65)' }}>{opt}</span>
                <span style={{ color: 'oklch(45% .005 260)', fontSize: '0.875rem' }}>→</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(1)}
            style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.75rem', color: 'oklch(40% .005 260)', background: 'none', border: 'none', cursor: 'pointer', marginTop: '0.75rem', display: 'block', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'oklch(65% .005 65)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'oklch(40% .005 260)')}
          >← Back</button>
        </div>
      )}

      {/* Step 3 — Contact Info */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'white',
            marginBottom: '0.75rem',
          }}>GET YOUR FREE ESTIMATE</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <input
                style={inputStyle}
                placeholder="First Name"
                required
                value={form.firstName}
                onChange={e => setForm({ ...form, firstName: e.target.value })}
                onFocus={e => (e.currentTarget.style.borderColor = 'oklch(78% .14 85)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.12)')}
              />
              <input
                style={inputStyle}
                placeholder="Last Name"
                required
                value={form.lastName}
                onChange={e => setForm({ ...form, lastName: e.target.value })}
                onFocus={e => (e.currentTarget.style.borderColor = 'oklch(78% .14 85)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.12)')}
              />
            </div>
            <input
              style={inputStyle}
              type="tel"
              placeholder="Phone *"
              required
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              onFocus={e => (e.currentTarget.style.borderColor = 'oklch(78% .14 85)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.12)')}
            />
            <input
              style={inputStyle}
              type="email"
              placeholder="Email *"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              onFocus={e => (e.currentTarget.style.borderColor = 'oklch(78% .14 85)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.12)')}
            />
          </div>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.75rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={smsConsent}
              onChange={e => setSmsConsent(e.target.checked)}
              style={{ marginTop: '2px', flexShrink: 0, accentColor: 'oklch(78% .14 85)' }}
            />
            <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.7rem', color: 'oklch(45% .005 260)', lineHeight: 1.5 }}>
              I agree to receive text messages from Apex Epoxy. Reply STOP to opt-out.
            </span>
          </label>
          <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '0.75rem', fontSize: '0.8rem' }}>
            GET MY FREE ESTIMATE →
          </button>
          <button
            type="button"
            onClick={() => setStep(2)}
            style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: '0.75rem', color: 'oklch(40% .005 260)', background: 'none', border: 'none', cursor: 'pointer', marginTop: '0.5rem', display: 'block', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'oklch(65% .005 65)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'oklch(40% .005 260)')}
          >← Back</button>
        </form>
      )}
    </div>
  )
}
