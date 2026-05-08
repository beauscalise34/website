import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  const linkStyle: React.CSSProperties = {
    color: '#858481',
    fontFamily: "'Source Sans 3', sans-serif",
    fontSize: '0.9rem',
    display: 'block',
    marginBottom: '0.5rem',
    transition: 'color 0.15s',
  }

  return (
    <footer style={{ background: '#0a0b0e', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '3.5rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>
          {/* Col 1: Logo + info */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1.1, marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.35rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#f8f8f7' }}>
                APEX <span style={{ color: '#ecbd3a' }}>EPOXY</span>
              </span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#858481', fontWeight: 600 }}>
                SURFACE SYSTEMS
              </span>
            </Link>
            <p style={{ color: '#858481', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Locally owned epoxy flooring contractor serving Cypress, TX and Greater Houston. Founders on every job.
            </p>
            <p style={{ color: '#858481', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
              📍 Cypress, TX 77429 &amp; 77433
            </p>
            <a href="tel:7132014005" style={{ color: '#ecbd3a', fontSize: '0.95rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
              (713) 201-4005
            </a>
            <a href="mailto:hadenmcdade@apexepoxytx.com" style={{ color: '#858481', fontSize: '0.85rem' }}>
              hadenmcdade@apexepoxytx.com
            </a>
          </div>

          {/* Col 2: Services + Company */}
          <div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f8f8f7', marginBottom: '1rem' }}>
              Services
            </p>
            <Link to="/services/flake-epoxy" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>Flake Epoxy Garage Floors</Link>
            <Link to="/services/metallic-epoxy" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>Metallic Epoxy Floors</Link>
            <Link to="/services/commercial-epoxy" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>Commercial Epoxy</Link>
            <Link to="/services/patio-outdoor" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>Patio &amp; Outdoor</Link>

            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f8f8f7', marginBottom: '1rem', marginTop: '1.5rem' }}>
              Company
            </p>
            <Link to="/about" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>About Us</Link>
            <Link to="/faq" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>FAQ</Link>
            <Link to="/blog" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>Blog</Link>
            <Link to="/contact" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>Contact / Free Estimate</Link>
          </div>

          {/* Col 3: Cities */}
          <div>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f8f8f7', marginBottom: '1rem' }}>
              Areas We Serve
            </p>
            <Link to="/cypress-tx" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>Cypress, TX</Link>
            <Link to="/katy-tx" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>Katy, TX</Link>
            <Link to="/the-woodlands-tx" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>The Woodlands, TX</Link>
            <Link to="/spring-tx" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>Spring, TX</Link>
            <Link to="/sugar-land-tx" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>Sugar Land, TX</Link>
            <Link to="/tomball-tx" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = '#ecbd3a')} onMouseLeave={e => (e.currentTarget.style.color = '#858481')}>Tomball, TX</Link>
            <p style={{ color: '#858481', fontSize: '0.85rem', marginTop: '1rem', lineHeight: 1.5 }}>
              + All of Greater Houston
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ color: '#858481', fontSize: '0.8rem' }}>
            © {year} Apex Epoxy &amp; Surface Systems · Cypress, TX · All Rights Reserved
          </p>
          <p style={{ color: '#858481', fontSize: '0.8rem' }}>
            License #: TX Contractor · Serving 77429 &amp; 77433
          </p>
        </div>
      </div>
    </footer>
  )
}
