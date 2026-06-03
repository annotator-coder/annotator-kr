'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="site-nav">
      <Link href="/" className="nav-logo">
        정원엽
      </Link>
      <div className="nav-links">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link ${pathname.startsWith(href) ? 'nav-link-active' : ''}`}
          >
            {label}
          </Link>
        ))}
        <Link href="/contact" className="nav-cta">
          구독 · 연락
        </Link>
      </div>
    </nav>
  )
}
