import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'AI, PR 전략, 데이터 저널리즘, 커리어에 관한 글.',
}

export default function Blog() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="page-header-label">Blog</p>
          <h1 className="page-header-title">글과 인사이트</h1>
          <p className="page-header-desc">
            AI, PR 전략, 데이터 저널리즘, 커리어에 관한 생각을 씁니다.
            각 글에는 관련 프로젝트 링크가 있습니다.
          </p>
        </div>
      </div>

      {/* POST LIST */}
      <section style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="section-wrap">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {sorted.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-separator)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px 28px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '24px',
                  alignItems: 'center',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                }}
                className="blog-list-row"
              >
                <div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span className="pill">{post.category}</span>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--color-label-subtle)', fontVariantNumeric: 'tabular-nums' }}>
                      {new Date(post.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--color-label-subtle)' }}>
                      · 읽기 {post.readingTime}분
                    </span>
                  </div>
                  <h2 style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-label-muted)', lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>
                </div>
                <span style={{ fontSize: '1.25rem', color: 'var(--color-primary)', flexShrink: 0 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
