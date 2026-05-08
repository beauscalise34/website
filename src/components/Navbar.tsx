import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const services = [
  { label: 'Flake Epoxy Garage Floors', href: '/services/flake-epoxy-garage-floors' },
  { label: 'Metallic Epoxy Floors', href: '/services/metallic-epoxy-floors' },
  { label: 'Commercial & Warehouse', href: '/services/commercial-warehouse-flooring' },
  { label: 'Patio & Outdoor Coatings', href: '/services/patio-outdoor-coatings' },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        background: 'oklch(9% .005 260)',
        borderBottom: '1px solid oklch(100% 0 0 / 0.08)',
      }}
    >
      <div className="container" style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" className="no-underline flex flex-col leading-none" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.2rem' }}>
            <span style={{ color: 'oklch(95% .005 65)' }}>APEX </span>
            <span style={{ color: 'oklch(78% .14 85)' }}>EPOXY</span>
          </span>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'oklch(78% .14 85)',
            marginTop: 1,
          }}>
            SURFACE SYSTEMS
          </span>
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <div className="hidden lg:flex items-center gap-7" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          {/* Services dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: dropdownOpen ? 'oklch(78% .14 85)' : 'oklch(65% .005 65)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'color 0.15s',
                padding: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'oklch(78% .14 85)')}
              onMouseLeave={e => {
                if (!dropdownOpen) e.currentTarget.style.color = 'oklch(65% .005 65)'
              }}
            >
              Services
              <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>▾</span>
            </button>
            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 12px)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'oklch(13% .006 260)',
                border: '1px solid oklch(100% 0 0 / 0.12)',
                minWidth: 240,
                zIndex: 100,
                padding: '0.5rem 0',
              }}>
                {services.map(s => (
                  <Link
                    key={s.href}
                    to={s.href}
                    style={{
                      display: 'block',
                      padding: '0.6rem 1.25rem',
                      color: 'oklch(70% .005 65)',
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'color 0.12s, background 0.12s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'white'
                      e.currentTarget.style.background = 'oklch(100% 0 0 / 0.04)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'oklch(70% .005 65)'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map(l => (
            <Link
              key={l.href}
              to={l.href}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: location.pathname === l.href ? 'oklch(78% .14 85)' : 'oklch(65% .005 65)',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'oklch(78% .14 85)')}
              onMouseLeave={e => {
                if (location.pathname !== l.href) e.currentTarget.style.color = 'oklch(65% .005 65)'
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop right: phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:7132014005"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.06em',
              color: 'oklch(55% .01 260)',
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
            onMouseLeave={e => (e.currentTarget.style.color = 'oklch(55% .01 260)')}
          >
            (713) 201-4005
          </a>
          <Link to="/contact" className="btn-gold" style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}>
            FREE ESTIMATE
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          style={{ background: 'none', border: 'none' }}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: 'oklch(11% .005 260)',
            borderTop: '1px solid oklch(100% 0 0 / 0.07)',
            padding: '1.5rem 1.25rem',
          }}
        >
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'oklch(78% .14 85)',
            marginBottom: '0.75rem',
          }}>SERVICES</p>
          {services.map(s => (
            <Link
              key={s.href}
              to={s.href}
              style={{
                display: 'block',
                color: 'oklch(65% .005 65)',
                fontSize: '1rem',
                textDecoration: 'none',
                padding: '0.6rem 0',
                borderBottom: '1px solid oklch(100% 0 0 / 0.05)',
                fontFamily: "'Source Sans 3', sans-serif",
              }}
            >
              {s.label}
            </Link>
          ))}
          <div style={{ borderTop: '1px solid oklch(100% 0 0 / 0.07)', marginTop: '1rem', paddingTop: '1rem' }}>
            {navLinks.map(l => (
              <Link
                key={l.href}
                to={l.href}
                style={{
                  display: 'block',
                  color: 'oklch(65% .005 65)',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <a href="tel:7132014005" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
              📞 CALL (713) 201-4005
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
