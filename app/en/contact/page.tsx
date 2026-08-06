import type { Metadata } from 'next'
import { getEnAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Open to collaboration proposals, speaking requests, interviews, or just a friendly hello.',
  alternates: getEnAlternates('/en/contact'),
  openGraph: {
    title: 'Contact | Annotator',
    description: 'Open to collaboration proposals, speaking requests, interviews, or just a friendly hello.',
    url: 'https://annotator.kr/en/contact',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Annotator',
    description: 'Open to collaboration proposals, speaking requests, interviews, or just a friendly hello.',
  },
}

export default function EnContact() {
  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="page-header-label">Contact</p>
          <h1 className="page-header-title">Get in Touch</h1>
          <p className="page-header-desc">
            Feel free to reach out with collaboration proposals or questions.
          </p>
        </div>
      </div>

      {/* CONTACT */}
      <section style={{ background: 'var(--color-bg)' }}>
        <div className="section-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div>
              <p className="section-label">Direct</p>
              <a href="mailto:no1.annotator@gmail.com" className="contact-email">
                no1.annotator@gmail.com
              </a>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-label-muted)', lineHeight: 1.65, marginTop: '16px' }}>
                Open to collaboration proposals, speaking requests, interviews, or just a friendly hello.
                Usually replies within 48 hours.
              </p>
            </div>
            <div>
              <p className="section-label">Social</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href="https://www.linkedin.com/in/wonyeobjung"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 20px',
                    border: '1px solid var(--color-separator)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'border-color 0.2s',
                  }}
                  className="social-row"
                >
                  <span style={{ fontWeight: 700, fontSize: '0.9375rem' }}>LinkedIn</span>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>↗</span>
                </a>
                <a
                  href="https://github.com/annotator-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 20px',
                    border: '1px solid var(--color-separator)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: '0.9375rem' }}>GitHub</span>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
