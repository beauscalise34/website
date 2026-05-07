import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import posts from '../data/posts.json'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  useEffect(() => {
    if (!post) return
    document.title = `${post.metaTitle} | Apex Epoxy Houston`
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', post.metaDescription)
  }, [post])

  if (!post) {
    return (
      <div className="blog-post-wrap">
        <div className="blog-post-container">
          <h1>Post not found</h1>
          <Link to="/blog" className="blog-back">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  const formattedDate = new Date(post.publishedDate + 'T12:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="blog-post-wrap">
      <div className="blog-post-container">
        <nav className="blog-breadcrumb">
          <Link to="/">Home</Link>
          <span> › </span>
          <Link to="/blog">Blog</Link>
          <span> › </span>
          <span>{post.metaTitle}</span>
        </nav>

        <div className="blog-post-meta">
          <time dateTime={post.publishedDate}>{formattedDate}</time>
          {post.wordCount > 0 && (
            <span className="reading-time">
              · {Math.ceil(post.wordCount / 200)} min read
            </span>
          )}
        </div>

        <article
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="blog-cta-box">
          <h3>Ready to transform your floors?</h3>
          <p>
            Apex Epoxy &amp; Surface Systems serves Houston, Katy, Sugar Land, The Woodlands,
            Pearland, and surrounding areas. Get your free estimate today — no obligation.
          </p>
          <div className="blog-cta-actions">
            <a href="tel:2814334346" className="cta-btn cta-btn-primary">
              📞 Call 281-433-4346
            </a>
            <a
              href="https://apexepoxytx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn-secondary"
            >
              Get Free Estimate
            </a>
          </div>
        </div>

        <Link to="/blog" className="blog-back">← Back to Blog</Link>
      </div>
    </div>
  )
}
