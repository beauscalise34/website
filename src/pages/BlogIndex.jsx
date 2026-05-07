import { Link } from 'react-router-dom'
import posts from '../data/posts.json'
import './BlogIndex.css'

export default function BlogIndex() {
  return (
    <div className="blog-index">
      <header className="blog-hero">
        <h1>Epoxy Flooring Tips &amp; Guides</h1>
        <p>Expert advice from Apex Epoxy &amp; Surface Systems — Houston's trusted flooring specialists.</p>
      </header>

      <main className="blog-grid">
        {posts.length === 0 ? (
          <div className="blog-empty">
            <p>New posts coming every week. Check back soon!</p>
            <a href="https://apexepoxytx.com" className="blog-cta-link">
              Get a Free Estimate →
            </a>
          </div>
        ) : (
          posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-meta">
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate + 'T12:00:00').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h2>
                <Link to={`/blog/${post.slug}`}>{post.metaTitle || post.keyword}</Link>
              </h2>
              <p className="blog-card-excerpt">{post.excerpt || post.metaDescription}</p>
              <Link to={`/blog/${post.slug}`} className="blog-read-more">
                Read Article →
              </Link>
            </article>
          ))
        )}
      </main>

      <aside className="blog-cta-banner">
        <div className="blog-cta-banner-inner">
          <h2>Ready for a flawless floor?</h2>
          <p>Apex Epoxy &amp; Surface Systems serves Houston, Katy, Sugar Land, The Woodlands, and surrounding areas.</p>
          <div className="blog-cta-buttons">
            <a href="tel:2814334346" className="btn btn-primary">Call 281-433-4346</a>
            <a href="https://apexepoxytx.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Free Estimate
            </a>
          </div>
        </div>
      </aside>
    </div>
  )
}
