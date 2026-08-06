'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isEn = pathname === '/en' || pathname.startsWith('/en/')
  const base = isEn ? '/en' : ''

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Links */}
        <div className="footer-links">
          <div className="footer-col">
            <p className="footer-col-label">Navigate</p>
            <Link href={`${base}/`} className="footer-link">Home</Link>
            <Link href={`${base}/portfolio`} className="footer-link">Portfolio</Link>
            <Link href={`${base}/blog`} className="footer-link">Blog</Link>
            <Link href={`${base}/about`} className="footer-link">About</Link>
            <Link href={`${base}/contact`} className="footer-link">Contact</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-label">Connect</p>
            <a href="https://www.linkedin.com/in/wonyeobjung" target="_blank" rel="noopener" className="footer-link">LinkedIn ↗</a>
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
