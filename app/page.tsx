import type { Metadata } from 'next'
import Link from 'next/link'
import { getFeaturedProjects } from '@/lib/portfolio'
import { getRecentPosts } from '@/lib/blog'
import JsonLd from '@/components/JsonLd'
import { getKoAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Annotator',
  description: '11년 기자 출신 PR 리드. AI 도구를 직접 만들며 커뮤니케이션과 엔지니어링의 경계에서 일합니다.',
  alternates: getKoAlternates('/'),
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Annotator',
  url: 'https://annotator.kr',
  description: '11년 기자 출신 PR 리드의 포트폴리오·블로그. AI 시스템, 데이터 시각화, PR 콘텐츠 케이스 스터디.',
  author: {
    '@type': 'Person',
    name: 'Annotator',
    url: 'https://annotator.kr/about',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://annotator.kr/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function Home() {
  const featuredProjects = getFeaturedProjects()
  const recentPosts = getRecentPosts(3)

  return (
    <>
      <JsonLd data={websiteSchema} />
      {/* ── HERO ── */}
      <section style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-separator)', padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto 0 max(24px, calc((100vw - 960px) / 2))' }}>

          <h1 className="fade-in" style={{
            fontSize: 'clamp(2.75rem, 8vw, 5.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.0,
            color: 'var(--color-label)',
            marginBottom: '36px',
          }}>
            Annotator
          </h1>

          <div className="fade-in delay-1" style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)', marginBottom: '20px' }}>
              불완전함에 대해 고민하고, 변화에 촉각을 곤두세워 일한다.<br />
              현상유지(status quo)의 안정성 보다 변화(Change)에서 진보(Progress)가 일어난다고 믿는다.
            </p>
            <div style={{
              borderLeft: '2px solid var(--color-separator)',
              paddingLeft: '20px',
              marginBottom: '20px',
            }}>
              <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-label-subtle)', marginBottom: '10px' }}>
                요즘 생각하는 것들
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  'AI가 만드는 변화',
                  '변화에 따라 진화할 수 있는 시스템',
                  '일과 삶의 톱니바퀴',
                ].map((t) => (
                  <span key={t} style={{ fontSize: '1rem', color: 'var(--color-label-muted)', lineHeight: 1.6 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="fade-in delay-2" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="mailto:no1.annotator@gmail.com" style={{ fontSize: '0.875rem', color: 'var(--color-label)', fontWeight: 600, borderBottom: '1px solid var(--color-separator)', paddingBottom: '2px' }}>
              no1.annotator@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/wonyeob-jung-4583754b" target="_blank" rel="noopener" style={{ fontSize: '0.875rem', color: 'var(--color-label-subtle)' }}>
              LinkedIn ↗
            </a>
            <a href="https://github.com/annotator-coder" target="_blank" rel="noopener" style={{ fontSize: '0.875rem', color: 'var(--color-label-subtle)' }}>
              GitHub ↗
            </a>
          </div>

        </div>
      </section>

      {/* ── RECENT WRITING ── */}
      <section style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-separator)' }}>
        <div className="section-wrap" style={{ paddingTop: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
            <p className="section-label" style={{ marginBottom: 0 }}>최근에 쓴 글</p>
            <Link href="/blog" className="btn-ghost" style={{ fontSize: '0.8125rem' }}>
              전체 보기 →
            </Link>
          </div>
          <div className="cards-grid-3">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-meta">
                  <span className="pill">{post.category}</span>
                  <span className="blog-card-date">
                    {new Date(post.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short' })}
                  </span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span>읽기 {post.readingTime}분</span>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>읽기 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT WORK ── */}
      <section style={{ background: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-separator)' }}>
        <div className="section-wrap" style={{ paddingTop: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
            <p className="section-label" style={{ marginBottom: 0 }}>최근 작업</p>
            <Link href="/portfolio" className="btn-ghost" style={{ fontSize: '0.8125rem' }}>
              전체 보기 →
            </Link>
          </div>
          <div className="cards-grid">
            {featuredProjects.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="project-card">
                <span className="pill">{p.category}</span>
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-desc">{p.tagline}</p>
                <div className="project-card-footer">
                  <span className="project-card-year">{p.year}</span>
                  <span className="project-card-arrow">자세히 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
