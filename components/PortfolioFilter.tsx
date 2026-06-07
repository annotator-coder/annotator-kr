'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Project } from '@/lib/portfolio'

type FilterKey = '전체' | 'AI' | '데이터·시각화' | '저널리즘' | 'PR·브랜드' | '미디어·콘텐츠'

const FILTERS: FilterKey[] = ['전체', 'AI', '데이터·시각화', '저널리즘', 'PR·브랜드', '미디어·콘텐츠']

function matchFilter(p: Project, filter: FilterKey): boolean {
  if (filter === '전체') return true
  const c = p.category
  if (filter === 'AI') return c.includes('AI')
  if (filter === '데이터·시각화') return /데이터|시각화|대시보드|인터랙티브/.test(c)
  if (filter === '저널리즘') return /저널리즘|탐사|공익|심층|취재|인터뷰/.test(c)
  if (filter === 'PR·브랜드') return /PR|브랜드|캠페인|CSR|이벤트|커뮤니케이션|국제 행사/.test(c)
  if (filter === '미디어·콘텐츠') return /미디어|콘텐츠|영상|버티컬|오운드|사이드|팀 운영|스포츠/.test(c)
  return false
}

export default function PortfolioFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterKey>('전체')

  const visible = projects.filter((p) => matchFilter(p, active))

  return (
    <>
      {/* FILTER BUTTONS */}
      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        padding: '32px var(--section-px, 24px) 0',
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
      }}>
        {FILTERS.map((f) => {
          const isActive = active === f
          const count = projects.filter((p) => matchFilter(p, f)).length
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 14px',
                borderRadius: '9999px',
                border: isActive
                  ? '1.5px solid var(--color-primary)'
                  : '1.5px solid var(--color-separator)',
                background: isActive ? 'var(--color-primary)' : 'var(--color-bg)',
                color: isActive ? '#fff' : 'var(--color-label-muted)',
                fontSize: '0.8125rem',
                fontWeight: isActive ? 600 : 400,
                fontFamily: 'var(--font)',
                cursor: 'pointer',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}
            >
              {f}
              <span style={{ fontSize: '0.6875rem', opacity: 0.7 }}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* PROJECT GRID */}
      <section style={{ background: 'var(--color-bg-secondary)', marginTop: '20px' }}>
        <div className="section-wrap">
          <div className="cards-grid">
            {visible.map((p) => (
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
