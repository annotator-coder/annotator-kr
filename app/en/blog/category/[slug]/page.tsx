import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostDescription } from '@/lib/blog'
import { postsEn } from '@/lib/blog-en'
import {
  BLOG_CATEGORY_TOPICS,
  getBlogCategoryTopic,
  getEnPostsByCategory,
} from '@/lib/blog-categories'
import { getEnAlternates } from '@/lib/hreflang'
import JsonLd from '@/components/JsonLd'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return BLOG_CATEGORY_TOPICS.map((topic) => ({ slug: topic.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const topic = getBlogCategoryTopic(slug)
  if (!topic) return {}

  return {
    title: `${topic.enTitle} Posts`,
    description: topic.enDescription,
    alternates: getEnAlternates(`/en/blog/category/${slug}`),
    openGraph: {
      title: `${topic.enTitle} Posts | Annotator`,
      description: topic.enDescription,
      url: `https://annotator.kr/en/blog/category/${slug}`,
      locale: 'en_US',
      type: 'website',
    },
  }
}

export default async function EnBlogCategoryPage({ params }: Props) {
  const { slug } = await params
  const topic = getBlogCategoryTopic(slug)
  if (!topic) notFound()

  const categoryPosts = getEnPostsByCategory(postsEn, slug)
  if (categoryPosts.length === 0) notFound()

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${topic.enTitle} Posts`,
    description: topic.enDescription,
    url: `https://annotator.kr/en/blog/category/${slug}`,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'Blog',
      name: 'Annotator Blog',
      url: 'https://annotator.kr/en/blog',
    },
    about: topic.enTitle,
  }

  return (
    <>
      <JsonLd data={collectionSchema} />
      <div className="page-header">
        <div className="page-header-inner">
          <p className="page-header-label">Blog Topic</p>
          <h1 className="page-header-title">{topic.enTitle}</h1>
          <p className="page-header-desc">{topic.enDescription}</p>
        </div>
      </div>

      <section style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="section-wrap">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {categoryPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/en/blog/${post.slug}`}
                className="blog-list-row"
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-separator)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px 28px',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '24px',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span className="pill">{post.category}</span>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--color-label-subtle)', fontVariantNumeric: 'tabular-nums' }}>
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--color-label-subtle)' }}>
                      · {post.readingTime} min read
                    </span>
                  </div>
                  <h2 style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '8px' }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-label-muted)', lineHeight: 1.6 }}>
                    {getPostDescription(post)}
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
