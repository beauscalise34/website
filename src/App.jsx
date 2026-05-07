import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import './App.css'

function Nav() {
  return (
    <nav className="site-nav">
      <a href="https://apexepoxytx.com" className="nav-logo">
        Apex Epoxy &amp; Surface Systems
      </a>
      <div className="nav-links">
        <Link to="/blog">Blog</Link>
        <a href="tel:2814334346" className="nav-phone">281-433-4346</a>
        <a href="https://apexepoxytx.com" className="nav-cta" target="_blank" rel="noopener noreferrer">
          Free Estimate
        </a>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Apex Epoxy &amp; Surface Systems · Houston, TX ·{' '}
        <a href="tel:2814334346">281-433-4346</a> ·{' '}
        <a href="https://apexepoxytx.com" target="_blank" rel="noopener noreferrer">
          apexepoxytx.com
        </a>
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/" element={<BlogIndex />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
