import { Link } from 'react-router-dom'
import postsData from '../data/posts.json'

interface Post {
  slug: string
  title: string
  excerpt: string
  publishedDate: string
  wordCount: number
}

const posts = postsData as Post[]

const GOLD = 'oklch(78% .14 85)'
const CARD = 'oklch(13% .006 260)'
const CARD_ALT = 'oklch(11% .005 260)'
const MUTED = 'oklch(55% .01 260)'

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return d
  }
}

export default function BlogIndex() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3.5rem', background: CARD_ALT, borderBottom: '1px solid oklch(100% 0 0 / 0.08)' }}>
        <div className="container">
          <span className="label-text">EPOXY FLOORING RESOURCES</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', maxWidth: 700, lineHeight: 1.1, textTransform: 'uppercase' }}>
            EPOXY FLOORING GUIDES &amp; TIPS
          </h1>
          <p style={{ color: 'oklch(95% .005 65 / 0.55)', marginTop: '1rem', maxWidth: 560, fontSize: '1.05rem', lineHeight: 1.7 }}>
            Honest advice on epoxy flooring from a team that installs it every day in Cypress, TX and Greater Houston.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 0' }}>
              <p style={{ color: MUTED, fontSize: '1.05rem', fontFamily: "'Source Sans 3', sans-serif" }}>
                No posts yet — check back soon.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
              {posts.map(p => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  style={{
                    display: 'block',
                    background: CARD,
                    border: '1px solid oklch(100% 0 0 / 0.07)',
                    padding: '1.75rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = GOLD)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'oklch(100% 0 0 / 0.07)')}
                >
                  <p style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: MUTED,
                  }}>
                    {formatDate(p.publishedDate)} · {Math.ceil((p.wordCount || 0) / 200)} MIN READ
                  </p>
                  <h2 style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    color: 'white',
                    textTransform: 'uppercase',
                    marginTop: '0.75rem',
                    lineHeight: 1.2,
                  }}>{p.title}</h2>
                  <p style={{
                    color: MUTED,
                    marginTop: '0.75rem',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}>{p.excerpt}</p>
                  <span style={{
                    display: 'inline-block',
                    marginTop: '1.25rem',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: GOLD,
                  }}>READ MORE →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: GOLD }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#000', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            READY FOR A FREE ESTIMATE?
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.65)', marginBottom: '2rem', maxWidth: 440, margin: '0 auto 2rem' }}>
            Serving Cypress, Katy, The Woodlands, Spring &amp; Greater Houston.
          </p>
          <a href="tel:7132014005" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: GOLD, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', textDecoration: 'none' }}>
            CALL (713) 201-4005
          </a>
        </div>
      </section>
    </main>
  )
}
