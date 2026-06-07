import type { Metadata } from 'next'
import Link from 'next/link'
import { getEnAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Annotator — English',
  description: 'PR Lead with 11 years as a journalist. Building AI tools at the intersection of communication and engineering.',
  alternates: getEnAlternates('/en'),
  openGraph: {
    title: 'Annotator',
    description: 'PR Lead with 11 years as a journalist. Building AI tools at the intersection of communication and engineering.',
    url: 'https://annotator.kr/en',
    type: 'website',
    locale: 'en_US',
  },
}

export default function EnHome() {
  return (
    <section style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-separator)', padding: '64px 24px 56px' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto 0 max(24px, calc((100vw - 960px) / 2))' }}>
        <h1 style={{
          fontSize: 'clamp(2.75rem, 8vw, 5.5rem)',
          fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.0,
          color: 'var(--color-label)', marginBottom: '36px',
        }}>
          Annotator
        </h1>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)', marginBottom: '32px' }}>
          PR Lead with 11 years as a journalist. Building AI tools at the intersection of communication and engineering.<br />
          Change is where progress happens.
        </p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link href="/en/portfolio" style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-primary)', borderBottom: '1.5px solid var(--color-primary)', paddingBottom: '2px' }}>
            View Portfolio →
          </Link>
          <Link href="/en/about" style={{ fontSize: '0.875rem', color: 'var(--color-label-subtle)' }}>
            About
          </Link>
          <a href="mailto:no1.annotator@gmail.com" style={{ fontSize: '0.875rem', color: 'var(--color-label-subtle)' }}>
            Contact
          </a>
        </div>
        <p style={{ marginTop: '48px', fontSize: '0.8125rem', color: 'var(--color-label-subtle)', borderTop: '1px solid var(--color-separator)', paddingTop: '24px' }}>
          Full English content is being prepared. Some pages are still in Korean.
        </p>
      </div>
    </section>
  )
}
