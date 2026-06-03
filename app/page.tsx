import Link from 'next/link'
import { getFeaturedProjects } from '@/lib/portfolio'
import { getRecentPosts } from '@/lib/blog'

export default function Home() {
  const featuredProjects = getFeaturedProjects()
  const recentPosts = getRecentPosts(3)

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-tags fade-in">
            <span className="role-pill">기자</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-label-subtle)' }}>→</span>
            <span className="role-pill">PR전략가</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-label-subtle)' }}>→</span>
            <span className="role-pill active">AI빌더</span>
          </div>

          <h1 className="hero-title fade-in delay-1">
            언어와 코드로<br />
            조직의 소통을 설계합니다.
          </h1>

          <p className="hero-desc fade-in delay-2">
            중앙일보 기자 12년 · 오늘의집 커뮤니케이션 팀장 · GS칼텍스 PR2팀장.<br />
            AI로 팀 프로세스를 바꾸고, 데이터로 PR 스토리를 만들고,
            필요한 도구는 직접 만든다.
          </p>

          <div className="hero-actions fade-in delay-2">
            <Link href="/portfolio" className="btn-primary">포트폴리오 보기</Link>
            <Link href="/blog" className="btn-secondary">글 읽기</Link>
          </div>

          <div className="stats-row fade-in delay-3">
            <div className="stat-item">
              <span className="stat-num">12년</span>
              <span className="stat-label">저널리즘 경력</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">2개사</span>
              <span className="stat-label">커뮤니케이션 팀장</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">5+</span>
              <span className="stat-label">AI 도구 구축</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">9인</span>
              <span className="stat-label">현재 팀 규모</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section style={{ background: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-separator)' }}>
        <div className="section-wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
            <p className="section-label" style={{ marginBottom: 0 }}>Featured Work</p>
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
                  <span className="project-card-arrow">케이스 스터디 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT WRITING ── */}
      <section style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-separator)' }}>
        <div className="section-wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
            <p className="section-label" style={{ marginBottom: 0 }}>Recent Writing</p>
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

      {/* ── ABOUT TEASER ── */}
      <section style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="section-wrap" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }}>
            <div>
              <p className="section-label">About</p>
              <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.4, maxWidth: '600px' }}>
                기자는 세상을 기록하고, PR은 조직의 언어를 설계한다.
                두 직업의 교차점에서 지금 하는 일들을 만들었다.
              </p>
            </div>
            <Link href="/about" className="btn-secondary" style={{ whiteSpace: 'nowrap' }}>
              더 읽기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
