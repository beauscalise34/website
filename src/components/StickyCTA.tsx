import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function StickyCTA() {
  const [dismissed, setDismissed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: 'oklch(9% .005 260)',
      borderTop: '1px solid oklch(78% .14 85)',
    }}>
      <div className="container" style={{ padding: '0.75rem 1.25rem' }}>
        {/* Desktop layout */}
        <div className="hidden sm:flex items-center gap-3">
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'white',
              lineHeight: 1,
            }}>READY FOR A FREE ESTIMATE?</p>
            <p style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: '0.75rem',
              color: 'oklch(55% .01 260)',
              marginTop: '0.25rem',
            }}>Serving Cypress, Katy, The Woodlands &amp; Greater Houston</p>
          </div>
          <a href="tel:7132014005" className="btn-gold" style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem', flexShrink: 0 }}>
            CALL NOW
          </a>
          <Link to="/contact" className="btn-ghost" style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem', flexShrink: 0 }}>
            FREE ESTIMATE
          </Link>
          <button
            onClick={() => setDismissed(true)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'oklch(40% .005 260)',
              fontSize: '1.2rem',
              lineHeight: 1,
              flexShrink: 0,
              padding: '0.25rem',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'oklch(40% .005 260)')}
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>

        {/* Mobile layout */}
        <div className="sm:hidden flex flex-col gap-2">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'white',
                lineHeight: 1,
              }}>READY FOR A FREE ESTIMATE?</p>
              <p style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: '0.7rem',
                color: 'oklch(55% .01 260)',
                marginTop: '0.2rem',
              }}>Serving Cypress &amp; Greater Houston</p>
            </div>
            <button
              onClick={() => setDismissed(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'oklch(40% .005 260)', fontSize: '1.1rem', lineHeight: 1, padding: '0.1rem' }}
              aria-label="Dismiss"
            >×</button>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <a href="tel:7132014005" className="btn-gold" style={{ flex: 1, fontSize: '0.75rem', padding: '0.6rem 0.75rem', justifyContent: 'center' }}>
              CALL NOW
            </a>
            <Link to="/contact" className="btn-ghost" style={{ flex: 1, fontSize: '0.75rem', padding: '0.6rem 0.75rem', justifyContent: 'center' }}>
              FREE ESTIMATE
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
