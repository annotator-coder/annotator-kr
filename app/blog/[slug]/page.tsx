import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
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

const mdComponents = {
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'var(--color-label-muted)', margin: '0.75em 0' }} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 style={{ fontSize: '1.375rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-label)', margin: '2.5em 0 0.75em' }} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-label)', margin: '2em 0 0.5em' }} {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote style={{ borderLeft: '3px solid var(--color-separator)', paddingLeft: '1em', margin: '1.5em 0', color: 'var(--color-label-subtle)', fontStyle: 'italic' }} {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ color: 'var(--color-label)', fontWeight: 700 }} {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt ?? ''} style={{ maxWidth: '100%', borderRadius: '8px', margin: '1em 0', display: 'block' }} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul style={{ paddingLeft: '1.5em', margin: '0.75em 0', color: 'var(--color-label-muted)' }} {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol style={{ paddingLeft: '1.5em', margin: '0.75em 0', color: 'var(--color-label-muted)' }} {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li style={{ fontSize: '1.0625rem', lineHeight: 1.8, margin: '0.25em 0' }} {...props} />
  ),
  hr: () => (
    <hr style={{ border: 'none', borderTop: '1px solid var(--color-separator)', margin: '2em 0' }} />
  ),
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
            {post.sourceUrl && (
              <div style={{ marginBottom: '32px', padding: '16px 20px', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-label-subtle)' }}>
                  원문: {post.sourceUrl.includes('brunch.co.kr') ? 'Brunch' : 'Naver Blog'}
                </span>
                <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
                  원문 보기 →
                </a>
              </div>
            )}
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
              {post.content}
            </ReactMarkdown>
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
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <Link href="/blog" className="btn-secondary">← 전체 글 보기</Link>
        </div>
      </div>
    </>
  )
}
