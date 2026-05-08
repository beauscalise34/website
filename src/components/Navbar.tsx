import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const services = [
  { label: 'Flake Epoxy Garage Floors', path: '/services/flake-epoxy' },
  { label: 'Metallic Epoxy Floors', path: '/services/metallic-epoxy' },
  { label: 'Commercial Epoxy', path: '/services/commercial-epoxy' },
  { label: 'Patio & Outdoor Coatings', path: '/services/patio-outdoor' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinkStyle: React.CSSProperties = {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 600,
    fontSize: '0.95rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#f8f8f7',
    padding: '0.5rem 0',
    transition: 'color 0.15s',
    cursor: 'pointer',
  }

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: '#0a0b0e',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 68 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, textDecoration: 'none' }}>
          <span style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: '1.35rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: '#f8f8f7',
          }}>
            APEX <span style={{ color: '#ecbd3a' }}>EPOXY</span>
          </span>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#858481',
            fontWeight: 600,
          }}>
            SURFACE SYSTEMS
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginLeft: 'auto', marginRight: '2rem' }}
          className="desktop-nav">
          {/* Services dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setServicesOpen(v => !v)}
              style={{ ...navLinkStyle, background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              SERVICES
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'none' }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            {servicesOpen && (
              <div className="nav-dropdown">
                {services.map(s => (
                  <Link key={s.path} to={s.path}>{s.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" style={navLinkStyle}>ABOUT</Link>
          <Link to="/blog" style={navLinkStyle}>BLOG</Link>
          <Link to="/contact" style={navLinkStyle}>CONTACT</Link>
        </div>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-nav">
          <a href="tel:7132014005" style={{
            ...navLinkStyle,
            color: '#ecbd3a',
            fontSize: '0.9rem',
          }}>
            (713) 201-4005
          </a>
          <Link to="/contact" className="btn-gold" style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}>
            FREE ESTIMATE
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(v => !v)}
          className="mobile-hamburger"
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none',
            flexDirection: 'column',
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: 24, height: 2, background: '#f8f8f7', transition: 'transform 0.2s', transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#f8f8f7', opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#f8f8f7', transition: 'transform 0.2s', transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div style={{
          background: '#0a0b0e',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '1.5rem',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', color: '#858481', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Services</p>
            {services.map(s => (
              <Link key={s.path} to={s.path} style={{ ...navLinkStyle, padding: '0.6rem 0', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {s.label}
              </Link>
            ))}
            <div style={{ height: '0.75rem' }} />
            <Link to="/about" style={{ ...navLinkStyle, padding: '0.6rem 0', fontSize: '1rem' }}>ABOUT</Link>
            <Link to="/blog" style={{ ...navLinkStyle, padding: '0.6rem 0', fontSize: '1rem' }}>BLOG</Link>
            <Link to="/contact" style={{ ...navLinkStyle, padding: '0.6rem 0', fontSize: '1rem' }}>CONTACT</Link>
            <div style={{ height: '1rem' }} />
            <a href="tel:7132014005" className="btn-gold" style={{ textAlign: 'center', justifyContent: 'center' }}>
              CALL (713) 201-4005
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
