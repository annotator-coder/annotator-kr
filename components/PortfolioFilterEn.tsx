'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Project } from '@/lib/portfolio'

type FilterKey = 'All' | 'AI' | 'Data & Viz' | 'Journalism' | 'PR & Brand' | 'Media & Content'

const FILTERS: FilterKey[] = ['All', 'AI', 'Data & Viz', 'Journalism', 'PR & Brand', 'Media & Content']

function matchFilter(p: Project, filter: FilterKey): boolean {
  if (filter === 'All') return true
  const c = p.category
  if (filter === 'AI') return c.includes('AI')
  if (filter === 'Data & Viz') return /Data|Visualization|Dashboard|Interactive/.test(c)
  if (filter === 'Journalism') return /Journalism|Investigative|Public Interest|In-Depth|Field Reporting|Interview/.test(c)
  if (filter === 'PR & Brand') return /PR|Brand|Campaign|CSR|Events|Communication|International Events/.test(c)
  if (filter === 'Media & Content') return /Media|Content|Video|Vertical|Owned|Side Project|Sports|Team Operations/.test(c)
  return false
}

export default function PortfolioFilterEn({ projects, basePath = '/en/portfolio' }: { projects: Project[]; basePath?: string }) {
  const [active, setActive] = useState<FilterKey>('All')

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
              <Link key={p.slug} href={`${basePath}/${p.slug}`} className="project-card">
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
                  <span className="project-card-arrow">Case Study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
