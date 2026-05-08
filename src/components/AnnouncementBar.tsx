export default function AnnouncementBar() {
  return (
    <div style={{
      background: '#ecbd3a',
      color: '#000',
      textAlign: 'center',
      padding: '0.6rem 1rem',
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 700,
      fontSize: '0.9rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    }}>
      SERVING CYPRESS &amp; GREATER HOUSTON · 7 DAYS A WEEK ·{' '}
      <a href="tel:7132014005" style={{ color: '#000', textDecoration: 'underline' }}>
        (713) 201-4005
      </a>
    </div>
  )
}
