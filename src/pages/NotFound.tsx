import { Link } from 'react-router-dom'

const GOLD = 'oklch(78% .14 85)'

export default function NotFound() {
  return (
    <main style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
    }}>
      <div>
        <div style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: '8rem',
          fontWeight: 700,
          color: 'oklch(78% .14 85 / 0.15)',
          lineHeight: 1,
          marginBottom: '1rem',
        }}>404</div>
        <h1 style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: 'white',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>PAGE NOT FOUND</h1>
        <p style={{
          fontFamily: "'Source Sans 3', sans-serif",
          color: 'oklch(55% .01 260)',
          marginBottom: '2rem',
          maxWidth: 420,
          margin: '0 auto 2rem',
          lineHeight: 1.6,
        }}>
          Sorry, the page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-gold">BACK TO HOME</Link>
          <Link to="/contact" className="btn-ghost">GET AN ESTIMATE</Link>
        </div>
      </div>
    </main>
  )
}
