import { Link } from 'react-router-dom'

const services = [
  { label: 'Flake Epoxy Garage Floors', href: '/services/flake-epoxy-garage-floors' },
  { label: 'Metallic Epoxy Floors', href: '/services/metallic-epoxy-floors' },
  { label: 'Commercial & Warehouse', href: '/services/commercial-warehouse-flooring' },
  { label: 'Patio & Outdoor Coatings', href: '/services/patio-outdoor-coatings' },
]

const locations = [
  { label: 'Cypress TX', href: '/locations/cypress-tx' },
  { label: 'Katy TX', href: '/locations/katy-tx' },
  { label: 'The Woodlands TX', href: '/locations/the-woodlands-tx' },
  { label: 'Spring TX', href: '/locations/spring-tx' },
  { label: 'Sugar Land TX', href: '/locations/sugar-land-tx' },
  { label: 'Tomball TX', href: '/locations/tomball-tx' },
  { label: 'Pearland TX', href: '/contact' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Free Estimate', href: '/contact' },
]

const mutedLink: React.CSSProperties = {
  display: 'block',
  color: 'oklch(55% .01 260)',
  fontSize: '0.875rem',
  textDecoration: 'none',
  paddingTop: '0.3rem',
  paddingBottom: '0.3rem',
  transition: 'color 0.15s',
  fontFamily: "'Source Sans 3', sans-serif",
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      style={mutedLink}
      onMouseEnter={e => (e.currentTarget.style.color = 'white')}
      onMouseLeave={e => (e.currentTarget.style.color = 'oklch(55% .01 260)')}
    >
      {label}
    </Link>
  )
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 600,
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      fontSize: '0.65rem',
      color: 'oklch(78% .14 85)',
      marginBottom: '0.75rem',
    }}>{children}</p>
  )
}

export default function Footer() {
  return (
    <footer style={{
      background: 'oklch(9% .005 260)',
      borderTop: '1px solid oklch(100% 0 0 / 0.08)',
      paddingTop: '4rem',
      paddingBottom: '2rem',
    }}>
      <div className="container">
        {/* 4-col grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem 2rem',
        }}
          className="md:grid-cols-4"
        >
          {/* Col 1 - Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.1rem' }}>
                <span style={{ color: 'white' }}>APEX EPOXY</span>
              </span>
              <br />
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'oklch(78% .14 85)',
              }}>SURFACE SYSTEMS</span>
            </Link>
            <p style={{ color: 'oklch(55% .01 260)', fontSize: '0.875rem', marginTop: '0.75rem', fontFamily: "'Source Sans 3', sans-serif" }}>
              Cypress, TX 77429 &amp; 77433
            </p>
            <a href="tel:7132014005" style={{ color: 'white', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem', textDecoration: 'none', fontFamily: "'Source Sans 3', sans-serif" }}>
              (713) 201-4005
            </a>
            <a href="mailto:hadenmcdade@apexepoxytx.com" style={{ color: 'oklch(55% .01 260)', fontSize: '0.8rem', display: 'block', marginTop: '0.25rem', textDecoration: 'none', fontFamily: "'Source Sans 3', sans-serif" }}>
              hadenmcdade@apexepoxytx.com
            </a>
            <p style={{ color: 'oklch(78% .14 85)', fontSize: '0.875rem', marginTop: '1rem', fontStyle: 'italic', fontFamily: "'Source Sans 3', sans-serif" }}>
              Founder-led. Warranty-backed.
            </p>
          </div>

          {/* Col 2 - Services */}
          <div>
            <ColHeading>Services</ColHeading>
            {services.map(s => <FooterLink key={s.href} to={s.href} label={s.label} />)}
          </div>

          {/* Col 3 - Service Areas */}
          <div>
            <ColHeading>Service Areas</ColHeading>
            {locations.map(l => <FooterLink key={l.href + l.label} to={l.href} label={l.label} />)}
          </div>

          {/* Col 4 - Company */}
          <div>
            <ColHeading>Company</ColHeading>
            {company.map(c => <FooterLink key={c.href + c.label} to={c.href} label={c.label} />)}
          </div>
        </div>

        {/* Warranty box */}
        <div style={{
          marginTop: '2.5rem',
          border: '1px solid oklch(78% .14 85 / 0.3)',
          padding: '1rem',
          background: 'oklch(11% .005 260)',
        }}>
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontSize: '0.7rem',
            color: 'oklch(78% .14 85)',
            marginBottom: '0.25rem',
          }}>10-YEAR WARRANTY</p>
          <p style={{ color: 'white', fontSize: '0.875rem', fontFamily: "'Source Sans 3', sans-serif" }}>
            Every job backed by our written warranty.
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid oklch(100% 0 0 / 0.08)',
          marginTop: '2rem',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <p style={{ color: 'oklch(40% .005 260)', fontSize: '0.7rem', fontFamily: "'Source Sans 3', sans-serif" }}>
            &copy; {new Date().getFullYear()} Apex Epoxy &amp; Surface Systems. All rights reserved.
          </p>
          <p style={{ color: 'oklch(40% .005 260)', fontSize: '0.7rem', fontFamily: "'Source Sans 3', sans-serif" }}>
            apexepoxytx.com
          </p>
        </div>
      </div>
    </footer>
  )
}
