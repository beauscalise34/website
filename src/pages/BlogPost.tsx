import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import postsData from '../data/posts.json'

interface Post {
  slug: string
  title: string
  htmlContent?: string
  html?: string
  publishedDate: string
  wordCount: number
  metaTitle?: string
  metaDescription?: string
}

const posts = postsData as Post[]

const GOLD = 'oklch(78% .14 85)'
const CARD = 'oklch(13% .006 260)'
const CARD_ALT = 'oklch(11% .005 260)'
const MUTED = 'oklch(55% .01 260)'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find(p => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!post) {
    return (
      <main style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '2rem', color: 'white', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Article Not Found
          </h1>
          <p style={{ color: MUTED, fontFamily: "'Source Sans 3', sans-serif", marginBottom: '2rem' }}>
            This article doesn't exist or has been moved.
          </p>
          <Link to="/blog" className="btn-gold">← Back to Blog</Link>
        </div>
      </main>
    )
  }

  const readTime = Math.ceil((post.wordCount || 0) / 200)
  const content = post.htmlContent || post.html || ''

  return (
    <main>
      {/* Breadcrumb */}
      <div style={{ background: CARD_ALT, borderBottom: '1px solid oklch(100% 0 0 / 0.07)', padding: '0.875rem 0' }}>
        <div className="container" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.8rem', fontFamily: "'Source Sans 3', sans-serif" }}>
          <Link to="/" style={{ color: MUTED, textDecoration: 'none' }}>Home</Link>
          <span style={{ color: MUTED }}>›</span>
          <Link to="/blog" style={{ color: MUTED, textDecoration: 'none' }}>Blog</Link>
          <span style={{ color: MUTED }}>›</span>
          <span style={{ color: 'oklch(75% .005 65)' }}>{post.title}</span>
        </div>
      </div>

      {/* Article */}
      <article style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: MUTED,
            marginBottom: '1.25rem',
          }}>
            {new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {readTime} MIN READ
          </p>

          <div className="article-body" dangerouslySetInnerHTML={{ __html: content }} />

          {/* CTA box */}
          <div style={{
            marginTop: '3rem',
            padding: '1.75rem',
            background: CARD,
            border: '1px solid oklch(100% 0 0 / 0.08)',
            borderLeft: `4px solid ${GOLD}`,
          }}>
            <h3 style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: '1.25rem',
              color: 'white',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>READY TO TRANSFORM YOUR FLOOR?</h3>
            <p style={{ color: MUTED, fontFamily: "'Source Sans 3', sans-serif", marginBottom: '1.25rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Apex Epoxy serves Cypress, Katy, The Woodlands, Spring, and Greater Houston. Free estimates within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="tel:7132014005" className="btn-gold">CALL (713) 201-4005</a>
              <Link to="/contact" className="btn-ghost">FREE ESTIMATE</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
