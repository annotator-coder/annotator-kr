import type { Metadata } from 'next'
import Link from 'next/link'
import { getFeaturedProjectsEn } from '@/lib/portfolio-en'
import { getRecentPostsEn } from '@/lib/blog-en'
import JsonLd from '@/components/JsonLd'
import { getEnAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: { absolute: 'Annotator — AI & Communications by a Journalist-turned PR Lead' },
  description: 'PR Lead with 11 years as a journalist. Building AI tools at the intersection of communication and engineering.',
  alternates: getEnAlternates('/en'),
  openGraph: {
    title: 'Annotator — AI & Communications by a Journalist-turned PR Lead',
    description: 'PR Lead with 11 years as a journalist. Building AI tools at the intersection of communication and engineering.',
    url: 'https://annotator.kr/en',
    siteName: 'Annotator',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annotator — AI & Communications by a Journalist-turned PR Lead',
    description: 'PR Lead with 11 years as a journalist. Building AI tools at the intersection of communication and engineering.',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Annotator',
  url: 'https://annotator.kr/en',
  description: 'Portfolio and blog of a PR Lead with 11 years as a journalist. AI systems, data visualization, PR content case studies.',
  author: {
    '@type': 'Person',
    name: 'Annotator',
    url: 'https://annotator.kr/en/about',
  },
}

export default function EnHome() {
  const featuredProjects = getFeaturedProjectsEn()
  const recentPosts = getRecentPostsEn(3)

  return (
    <>
      <JsonLd data={websiteSchema} />

      {/* HERO */}
      <section style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-separator)', padding: '64px 24px 56px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto 0 max(24px, calc((100vw - 960px) / 2))' }}>
          <h1 className="fade-in" style={{
            fontSize: 'clamp(2.75rem, 8vw, 5.5rem)',
            fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.0,
            color: 'var(--color-label)', marginBottom: '36px',
          }}>
            Annotator
          </h1>

          <div className="fade-in delay-1" style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)', marginBottom: '20px' }}>
              I think about imperfection and stay alert to change.<br />
              Progress comes from change, not from preserving the status quo.
            </p>
            <div style={{ borderLeft: '2px solid var(--color-separator)', paddingLeft: '20px', marginBottom: '20px' }}>
              <p style={{ fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-label-subtle)', marginBottom: '10px' }}>
                Currently thinking about
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  'How AI reshapes communication',
                  'Systems that evolve with change',
                  'The gear between work and life',
                ].map((t) => (
                  <span key={t} style={{ fontSize: '1rem', color: 'var(--color-label-muted)', lineHeight: 1.6 }}>{t}</span>
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

      {/* RECENT WRITING */}
      <section style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-separator)' }}>
        <div className="section-wrap" style={{ paddingTop: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
            <p className="section-label" style={{ marginBottom: 0 }}>Recent Writing</p>
            <Link href="/en/blog" className="btn-ghost" style={{ fontSize: '0.8125rem' }}>View all →</Link>
          </div>
          <div className="cards-grid-3">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/en/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-meta">
                  <span className="pill">{post.category}</span>
                  <span className="blog-card-date">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span>{post.readingTime} min read</span>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section style={{ background: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-separator)' }}>
        <div className="section-wrap" style={{ paddingTop: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
            <p className="section-label" style={{ marginBottom: 0 }}>Recent Work</p>
            <Link href="/en/portfolio" className="btn-ghost" style={{ fontSize: '0.8125rem' }}>View all →</Link>
          </div>
          <div className="cards-grid">
            {featuredProjects.map((p) => (
              <Link key={p.slug} href={`/en/portfolio/${p.slug}`} className="project-card">
                <span className="pill">{p.category}</span>
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-desc">{p.tagline}</p>
                <div className="project-card-footer">
                  <span className="project-card-year">{p.year}</span>
                  <span className="project-card-arrow">Case study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
