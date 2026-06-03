import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'AI 시스템, 데이터 시각화, PR 콘텐츠 — 직접 만든 작업물 케이스 스터디.',
}

export default function Portfolio() {
  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="page-header-label">Portfolio</p>
          <h1 className="page-header-title">만든 것들</h1>
          <p className="page-header-desc">
            AI 시스템, 데이터 시각화, PR 콘텐츠. 각 프로젝트의 문제, 접근 방식, 결과를 케이스 스터디로 정리했습니다.
          </p>
        </div>
      </div>

      {/* PROJECT LIST */}
      <section style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="section-wrap">
          <div className="cards-grid">
            {projects.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="project-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="pill">{p.category}</span>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--color-label-subtle)', fontVariantNumeric: 'tabular-nums' }}>
                    {p.year}
                  </span>
                </div>
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-desc">{p.tagline}</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {p.tags.slice(0, 3).map((tag) => (
                    <span key={tag} style={{
                      fontSize: '0.625rem', fontWeight: 600,
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--color-fill-tertiary)',
                      color: 'var(--color-label-subtle)',
                    }}>{tag}</span>
                  ))}
                </div>
                <div className="project-card-footer">
                  <span className="project-card-year">{p.featured ? '★ Featured' : ''}</span>
                  <span className="project-card-arrow">케이스 스터디 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
