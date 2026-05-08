import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 1.5rem' }}>
      <div>
        <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: '6rem', fontWeight: 700, color: 'rgba(236,189,58,0.15)', lineHeight: 1, marginBottom: '1rem' }}>
          404
        </div>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>PAGE NOT FOUND</h1>
        <p style={{ color: '#858481', marginBottom: '2rem', maxWidth: 420, margin: '0 auto 2rem' }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-gold">BACK TO HOME</Link>
          <Link to="/contact" className="btn-outline">GET AN ESTIMATE</Link>
        </div>
      </div>
    </main>
  )
}
