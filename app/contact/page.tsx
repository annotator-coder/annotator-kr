import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description: '뉴스레터 구독 및 연락처.',
}

export default function Contact() {
  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="page-header-label">Contact & Newsletter</p>
          <h1 className="page-header-title">구독 · 연락</h1>
          <p className="page-header-desc">
            커뮤니케이션, AI, 전략에 관한 인사이트를 격주로 보냅니다.
            협업 제안이나 질문도 편하게 연락주세요.
          </p>
        </div>
      </div>

      {/* NEWSLETTER */}
      <section style={{ background: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-separator)' }}>
        <div className="section-wrap">
          <div style={{
            background: 'var(--color-bg)',
            border: '1px solid var(--color-separator)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            maxWidth: '560px',
          }}>
            <p className="section-label">Newsletter</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '12px', lineHeight: 1.25 }}>
              격주 뉴스레터
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-label-muted)', lineHeight: 1.65, marginBottom: '28px' }}>
              AI가 커뮤니케이션을 어떻게 바꾸는가, 데이터로 PR 스토리를 만드는 법,
              기자 출신 PR의 관점. 격주로 보냅니다.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span className="pill">AI in Communications</span>
              <span className="pill">데이터 저널리즘</span>
              <span className="pill">전략 PR</span>
              <span className="pill">커리어</span>
            </div>
            <a
              href="mailto:no1.annotator@gmail.com?subject=뉴스레터 구독 신청"
              className="btn-primary"
              style={{ marginTop: '8px' }}
            >
              구독 신청 →
            </a>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-label-subtle)', marginTop: '12px' }}>
              이메일로 구독 신청을 보내주시면 다음 발행부터 받으실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ background: 'var(--color-bg)' }}>
        <div className="section-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div>
              <p className="section-label">직접 연락</p>
              <a href="mailto:no1.annotator@gmail.com" className="contact-email">
                no1.annotator@gmail.com
              </a>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-label-muted)', lineHeight: 1.65, marginTop: '16px' }}>
                협업 제안, 강연 요청, 인터뷰, 혹은 그냥 안부 인사도 환영합니다.
                보통 48시간 이내 답장합니다.
              </p>
            </div>
            <div>
              <p className="section-label">소셜</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href="https://www.linkedin.com/in/wonyeob-jung-4583754b"
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
