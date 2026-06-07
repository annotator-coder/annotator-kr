'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'

const NAV_LINKS = [
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/blog', label: 'Blog' },
  { path: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()
  const isEn = pathname === '/en' || pathname.startsWith('/en/')
  const base = isEn ? '/en' : ''

  return (
    <nav className="site-nav">
      <Link href={`${base}/`} className="nav-logo">
        Annotator
      </Link>
      <div className="nav-links">
        {NAV_LINKS.map(({ path, label }) => {
          const href = `${base}${path}`
          return (
            <Link
              key={path}
              href={href}
              className={`nav-link ${pathname.startsWith(href) ? 'nav-link-active' : ''}`}
            >
              {label}
            </Link>
          )
        })}
        <Link href={`${base}/contact`} className="nav-cta">
          Contact
        </Link>
        <LanguageSwitcher />
      </div>
    </nav>
  )
}
