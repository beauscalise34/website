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

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find(p => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!post) {
    return (
      <main style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1>Article Not Found</h1>
          <p style={{ color: 'var(--muted)', margin: '1rem 0 2rem' }}>This article doesn't exist or has been moved.</p>
          <Link to="/blog" className="btn-gold">← Back to Blog</Link>
        </div>
      </main>
    )
  }

  const readTime = Math.ceil(post.wordCount / 200)
  const content = post.htmlContent || post.html || ''

  return (
    <main>
      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--muted)' }}>
          <Link to="/" style={{ color: 'var(--muted)' }}>Home</Link>
          <span>›</span>
          <Link to="/blog" style={{ color: 'var(--muted)' }}>Blog</Link>
          <span>›</span>
          <span style={{ color: 'var(--text)' }}>{post.title}</span>
        </div>
      </div>

      {/* Article */}
      <article style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', fontFamily: "'Barlow Condensed',sans-serif", textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            {new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {readTime} MIN READ
          </p>

          <div className="blog-content" dangerouslySetInnerHTML={{ __html: content }} />

          {/* CTA box */}
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '4px solid var(--gold)' }}>
            <h3 style={{ fontFamily: "'Oswald',sans-serif", fontSize: '1.3rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              READY TO TRANSFORM YOUR FLOOR?
            </h3>
            <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Apex Epoxy serves Cypress, Katy, The Woodlands, Spring, and Greater Houston. Free estimates within 24 hours.
            </p>
            <a href="tel:7132014005" className="btn-gold" style={{ marginRight: '1rem' }}>CALL (713) 201-4005</a>
            <Link to="/contact" className="btn-outline">FREE ESTIMATE</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
