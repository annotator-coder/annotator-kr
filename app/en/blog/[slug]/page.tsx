import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostDescription, getPostModifiedDate } from '@/lib/blog'
import { getPostEnBySlug, postsEn } from '@/lib/blog-en'
import { getProjectEnBySlug } from '@/lib/portfolio-en'
import { getTopicByEnCategory } from '@/lib/blog-categories'
import JsonLd from '@/components/JsonLd'
import { getEnAlternates } from '@/lib/hreflang'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return postsEn.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostEnBySlug(slug)
  if (!post) return {}
  const description = getPostDescription(post)
  const imageUrl = post.image ?? `https://annotator.kr/en/blog/${slug}/opengraph-image`
  return {
    title: post.title,
    description,
    alternates: getEnAlternates(`/en/blog/${slug}`),
    openGraph: {
      title: post.title,
      description,
      url: `https://annotator.kr/en/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: getPostModifiedDate(post),
      authors: ['https://annotator.kr/en/about'],
      section: post.category,
      locale: 'en_US',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [imageUrl],
    },
  }
}

const mdComponents = {
  p: ({ node: _node, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { node?: unknown }) => (
    <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'var(--color-label-muted)', margin: '0.75em 0' }} {...props} />
  ),
  h2: ({ node: _node, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => (
    <h2 style={{ fontSize: '1.375rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-label)', margin: '2.5em 0 0.75em' }} {...props} />
  ),
  h3: ({ node: _node, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { node?: unknown }) => (
    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-label)', margin: '2em 0 0.5em' }} {...props} />
  ),
  blockquote: ({ node: _node, ...props }: React.HTMLAttributes<HTMLElement> & { node?: unknown }) => (
    <blockquote style={{ borderLeft: '3px solid var(--color-separator)', paddingLeft: '1em', margin: '1.5em 0', color: 'var(--color-label-subtle)', fontStyle: 'italic' }} {...props} />
  ),
  strong: ({ node: _node, ...props }: React.HTMLAttributes<HTMLElement> & { node?: unknown }) => (
    <strong style={{ color: 'var(--color-label)', fontWeight: 700 }} {...props} />
  ),
  img: ({ node: _node, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { node?: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt ?? ''} referrerPolicy="no-referrer" loading="lazy" style={{ maxWidth: '100%', borderRadius: '8px', margin: '1em 0', display: 'block' }} />
  ),
  a: ({ node: _node, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { node?: unknown }) => (
    <a {...props} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }} />
  ),
  ul: ({ node: _node, ...props }: React.HTMLAttributes<HTMLUListElement> & { node?: unknown }) => (
    <ul style={{ paddingLeft: '1.5em', margin: '0.75em 0', color: 'var(--color-label-muted)' }} {...props} />
  ),
  ol: ({ node: _node, ...props }: React.HTMLAttributes<HTMLOListElement> & { node?: unknown }) => (
    <ol style={{ paddingLeft: '1.5em', margin: '0.75em 0', color: 'var(--color-label-muted)' }} {...props} />
  ),
  li: ({ node: _node, ...props }: React.LiHTMLAttributes<HTMLLIElement> & { node?: unknown }) => (
    <li style={{ fontSize: '1.0625rem', lineHeight: 1.8, margin: '0.25em 0' }} {...props} />
  ),
  hr: () => (
    <hr style={{ border: 'none', borderTop: '1px solid var(--color-separator)', margin: '2em 0' }} />
  ),
  table: ({ node: _node, ...props }: React.TableHTMLAttributes<HTMLTableElement> & { node?: unknown }) => (
    <div className="md-table-wrap">
      <table className="md-table" {...props} />
    </div>
  ),
}

export default async function EnBlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostEnBySlug(slug)
  if (!post) notFound()

  const relatedProjects = post.relatedPortfolioSlugs
    .map((s) => getProjectEnBySlug(s))
    .filter(Boolean)

  const relatedPosts = postsEn
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 3)

  const description = getPostDescription(post)
  const modifiedDate = getPostModifiedDate(post)
  const imageUrl = post.image ?? `https://annotator.kr/en/blog/${slug}/opengraph-image`
  const isUpdated = post.updatedAt && post.updatedAt.slice(0, 10) !== post.date.slice(0, 10)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://annotator.kr/en/blog/${slug}`,
    },
    headline: post.title,
    description,
    url: `https://annotator.kr/en/blog/${slug}`,
    datePublished: post.date,
    dateModified: modifiedDate,
    image: [imageUrl],
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: 'Annotator',
      url: 'https://annotator.kr/en/about',
      sameAs: [
        'https://www.linkedin.com/in/wonyeob-jung-4583754b',
        'https://github.com/annotator-coder',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: 'Annotator',
      url: 'https://annotator.kr',
    },
    articleSection: post.category,
    timeRequired: `PT${post.readingTime}M`,
    ...(post.sourceUrl ? { isBasedOn: post.sourceUrl } : {}),
  }

  const categoryTopic = getTopicByEnCategory(post.category)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://annotator.kr/en' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://annotator.kr/en/blog' },
      ...(categoryTopic
        ? [{ '@type': 'ListItem', position: 3, name: post.category, item: `https://annotator.kr/en/blog/category/${categoryTopic.slug}` }]
        : []),
      { '@type': 'ListItem', position: categoryTopic ? 4 : 3, name: post.title },
    ],
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* HEADER */}
      <div className="page-header" style={{ borderBottom: '1px solid var(--color-separator)' }}>
        <div className="page-header-inner">
          <Link
            href="/en/blog"
            style={{ fontSize: '0.8125rem', color: 'var(--color-label-subtle)', marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            ← Blog
          </Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
            <span className="pill">{post.category}</span>
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-label-subtle)' }}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            {isUpdated && (
              <span style={{ fontSize: '0.6875rem', color: 'var(--color-label-subtle)' }}>
                · Updated {new Date(post.updatedAt as string).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            )}
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-label-subtle)' }}>
              · {post.readingTime} min read
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
                  Original: {post.sourceUrl.includes('brunch.co.kr') ? 'Brunch' : 'Naver Blog'}
                </span>
                <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
                  Read original (Korean) →
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
            <p className="section-label">Related Case Studies</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '660px' }}>
              {relatedProjects.map((project) => project && (
                <Link key={project.slug} href={`/en/portfolio/${project.slug}`} className="related-box">
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

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-separator)' }}>
          <div className="section-wrap" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <p className="section-label">Read Next — {post.category}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '660px' }}>
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/en/blog/${p.slug}`} className="related-box">
                  <div>
                    <p className="related-box-label">
                      {new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {p.readingTime} min read
                    </p>
                    <p className="related-box-title">{p.title}</p>
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
          <Link href="/en/blog" className="btn-secondary">← All Posts</Link>
        </div>
      </div>
    </>
  )
}
