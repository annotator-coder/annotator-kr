import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Links */}
        <div className="footer-links">
          <div className="footer-col">
            <p className="footer-col-label">Navigate</p>
            <Link href="/" className="footer-link">Home</Link>
            <Link href="/portfolio" className="footer-link">Portfolio</Link>
            <Link href="/blog" className="footer-link">Blog</Link>
            <Link href="/about" className="footer-link">About</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-label">Connect</p>
            <a href="https://www.linkedin.com/in/wonyeob-jung-4583754b" target="_blank" rel="noopener" className="footer-link">LinkedIn ↗</a>
            <a href="https://github.com/annotator-coder" target="_blank" rel="noopener" className="footer-link">GitHub ↗</a>
            <a href="mailto:no1.annotator@gmail.com" className="footer-link">Email</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>Annotator © {new Date().getFullYear()}</span>
          <span>Seoul, Korea</span>
        </div>
      </div>
    </footer>
  )
}
