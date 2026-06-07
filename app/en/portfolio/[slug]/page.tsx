import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectEnBySlug, projectsEn } from '@/lib/portfolio-en'
import { getPostBySlug } from '@/lib/blog'
import JsonLd from '@/components/JsonLd'
import { getEnAlternates } from '@/lib/hreflang'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projectsEn.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectEnBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      ...getEnAlternates(`/en/portfolio/${slug}`),
    },
    openGraph: {
      title: project.title,
      description: project.tagline,
      url: `https://annotator.kr/en/portfolio/${slug}`,
      type: 'article',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.tagline,
    },
  }
}

export default async function EnCaseStudy({ params }: Props) {
  const { slug } = await params
  const project = getProjectEnBySlug(slug)
  if (!project) notFound()

  const relatedPosts = project.relatedBlogSlugs
    .map((s) => getPostBySlug(s))
    .filter(Boolean)

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `https://annotator.kr/en/portfolio/${slug}`,
    creator: {
      '@type': 'Person',
      name: 'Annotator',
      url: 'https://annotator.kr/en/about',
    },
    keywords: project.tags.join(', '),
    genre: project.category,
    dateCreated: project.year,
    inLanguage: 'en',
  }

  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      {/* HERO */}
      <div className="case-hero">
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 24px' }}>
          <Link
            href="/en/portfolio"
            style={{ fontSize: '0.8125rem', color: 'var(--color-label-subtle)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            ← Portfolio
          </Link>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
            <span className="pill">{project.category}</span>
            <span className="pill">{project.year}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '20px' }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-label-muted)', lineHeight: 1.65, maxWidth: '600px', marginBottom: '28px' }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {project.href && (
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.875rem', padding: '10px 20px' }}>
                View Project ↗
              </a>
            )}
            {project.links?.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '10px 20px' }}>
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <div className="case-section">
        <p className="case-section-title">Challenge</p>
        <p className="case-body">{project.problem}</p>
      </div>

      {/* APPROACH */}
      <div className="case-section">
        <p className="case-section-title">Approach</p>
        <div className="case-list">
          {project.approach.map((item, i) => (
            <div key={i} className="case-list-item">
              <div className="case-list-bullet">{i + 1}</div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGES */}
      {project.images && project.images.length > 0 && (
        <div className="case-section">
          <p className="case-section-title">Work</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '720px' }}>
            {project.images.map((img, i) => (
              <figure key={i} style={{ margin: 0 }}>
                <img
                  src={img.src}
                  alt={img.caption ?? ''}
                  style={{ width: '100%', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-separator)' }}
                />
                {img.caption && (
                  <figcaption style={{ fontSize: '0.75rem', color: 'var(--color-label-subtle)', marginTop: '8px', lineHeight: 1.5 }}>
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* OUTCOME */}
      <div className="case-section">
        <p className="case-section-title">Outcome</p>
        <div className="case-list">
          {project.outcome.map((item, i) => (
            <div key={i} className="case-list-item">
              <div className="case-list-bullet" style={{ background: 'rgba(0,122,255,0.1)', color: 'var(--color-primary)' }}>✓</div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RELATED BLOG POSTS */}
      {relatedPosts.length > 0 && (
        <div className="case-section">
          <p className="case-section-title">Insights</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '680px' }}>
            {relatedPosts.map((post) => post && (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="related-box">
                <div>
                  <p className="related-box-label">Blog Post</p>
                  <p className="related-box-title">{post.title}</p>
                </div>
                <span className="related-box-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* TAGS */}
      <div className="case-section" style={{ borderBottom: '1px solid var(--color-separator)' }}>
        <p className="case-section-title">Tags</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="pill">{tag}</span>
          ))}
        </div>
      </div>

      {/* NAV */}
      <div style={{ background: 'var(--color-bg-secondary)', padding: '32px 24px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <Link href="/en/portfolio" className="btn-secondary">← All Projects</Link>
          <Link href="/en/blog" className="btn-ghost">Related Writing →</Link>
        </div>
      </div>
    </>
  )
}
