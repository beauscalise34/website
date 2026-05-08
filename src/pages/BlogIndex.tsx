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

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogIndex() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--bg-card)', padding: '5rem 0 3rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <span className="eyebrow">Epoxy Flooring Resources</span>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', color: 'var(--text)', maxWidth: 700 }}>
            EPOXY FLOORING GUIDES &amp; TIPS
          </h1>
          <p style={{ color: 'var(--muted)', marginTop: '1rem', maxWidth: 600, fontSize: '1.1rem' }}>
            Honest advice on epoxy flooring from a team that installs it every day in Cypress, TX and Greater Houston.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '4rem 0' }}>
              New guides added weekly — check back soon.
            </p>
          ) : (
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))' }}>
              {posts.map(p => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  style={{ display: 'block', background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '2rem', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <span style={{ color: 'var(--muted)', fontSize: '0.85rem', fontFamily: "'Barlow Condensed',sans-serif", letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {formatDate(p.publishedDate)} · {Math.ceil(p.wordCount / 200)} MIN READ
                  </span>
                  <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '1.4rem', marginTop: '0.75rem', lineHeight: 1.2, textTransform: 'uppercase' }}>{p.title}</h2>
                  <p style={{ color: 'var(--muted)', marginTop: '0.75rem', fontSize: '0.95rem', lineHeight: 1.6 }}>{p.excerpt}</p>
                  <span style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--gold)', fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
                    READ ARTICLE →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--gold)', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#000', fontFamily: "'Oswald',sans-serif", fontSize: '2rem', textTransform: 'uppercase' }}>READY FOR A FREE ESTIMATE?</h2>
          <p style={{ color: '#000', marginTop: '0.75rem', marginBottom: '2rem' }}>Serving Cypress, Katy, The Woodlands, Spring &amp; Greater Houston.</p>
          <a href="tel:7132014005" className="btn-outline" style={{ borderColor: '#000', color: '#000' }}>CALL (713) 201-4005</a>
        </div>
      </section>
    </main>
  )
}
