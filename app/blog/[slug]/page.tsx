import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, posts } from '@/lib/blog'
import { getProjectBySlug } from '@/lib/portfolio'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('**') && line.endsWith('**') && !line.startsWith('**') === false) {
      const inner = line.slice(2, -2)
      elements.push(
        <h3 key={i} style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-label)', margin: '2em 0 0.5em' }}>
          {inner}
        </h3>
      )
    } else if (line.trim() === '') {
      // skip empty
    } else {
      const parts = line.split(/\*\*(.+?)\*\*/g)
      elements.push(
        <p key={i} style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'var(--color-label-muted)', margin: '0.75em 0' }}>
          {parts.map((part, j) =>
            j % 2 === 1
              ? <strong key={j} style={{ color: 'var(--color-label)', fontWeight: 700 }}>{part}</strong>
              : part
          )}
        </p>
      )
    }
    i++
  }
  return elements
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const relatedProjects = post.relatedPortfolioSlugs
    .map((s) => getProjectBySlug(s))
    .filter(Boolean)

  return (
    <>
      {/* HEADER */}
      <div className="page-header" style={{ borderBottom: '1px solid var(--color-separator)' }}>
        <div className="page-header-inner">
          <Link
            href="/blog"
            style={{ fontSize: '0.8125rem', color: 'var(--color-label-subtle)', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            ← Blog
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
            <span className="pill">{post.category}</span>
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-label-subtle)' }}>
              {new Date(post.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-label-subtle)' }}>
              · 읽기 {post.readingTime}분
            </span>
          </div>
          <h1 className="page-header-title">{post.title}</h1>
          <p className="page-header-desc">{post.excerpt}</p>
        </div>
      </div>

      {/* CONTENT */}
      <section style={{ background: 'var(--color-bg)' }}>
        <div className="section-wrap" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <div style={{ maxWidth: '660px' }}>
            {renderContent(post.content)}
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-separator)' }}>
          <div className="section-wrap" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <p className="section-label">관련 프로젝트 보기</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '660px' }}>
              {relatedProjects.map((project) => project && (
                <Link key={project.slug} href={`/portfolio/${project.slug}`} className="related-box">
                  <div>
                    <p className="related-box-label">Case Study</p>
                    <p className="related-box-title">{project.title}</p>
                  </div>
                  <span className="related-box-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NAV */}
      <div style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-separator)', padding: '32px 24px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/blog" className="btn-secondary">← 전체 글 보기</Link>
          <Link href="/contact" className="btn-ghost">뉴스레터 구독 →</Link>
        </div>
      </div>
    </>
  )
}
