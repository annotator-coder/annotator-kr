'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function getAlternatePath(pathname: string, targetLang: 'ko' | 'en'): string {
  const isEn = pathname === '/en' || pathname.startsWith('/en/')
  if (targetLang === 'en') {
    if (isEn) return pathname
    if (pathname === '/') return '/en'
    return `/en${pathname}`
  } else {
    if (!isEn) return pathname
    if (pathname === '/en') return '/'
    return pathname.slice(3)
  }
}

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const isEn = pathname === '/en' || pathname.startsWith('/en/')

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      <Link
        href={getAlternatePath(pathname, 'ko')}
        style={{
          fontSize: '0.75rem', fontWeight: 600, padding: '4px 8px',
          borderRadius: '6px',
          color: !isEn ? 'var(--color-label)' : 'var(--color-label-subtle)',
          background: !isEn ? 'var(--color-fill-tertiary)' : 'transparent',
          transition: 'all 0.15s',
        }}
      >
        KO
      </Link>
      <span style={{ fontSize: '0.75rem', color: 'var(--color-separator)' }}>/</span>
      <Link
        href={getAlternatePath(pathname, 'en')}
        style={{
          fontSize: '0.75rem', fontWeight: 600, padding: '4px 8px',
          borderRadius: '6px',
          color: isEn ? 'var(--color-label)' : 'var(--color-label-subtle)',
          background: isEn ? 'var(--color-fill-tertiary)' : 'transparent',
          transition: 'all 0.15s',
        }}
      >
        EN
      </Link>
    </div>
  )
}
