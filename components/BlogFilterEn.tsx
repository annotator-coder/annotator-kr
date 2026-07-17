'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'
import {
  BLOG_CATEGORY_TOPICS,
  PR_CAREER_EN_CATEGORIES,
  countEnCategory,
} from '@/lib/blog-categories'

const FILTERS = ['All', 'PR & Career', 'Book Review', 'Film & Drama', 'Essays & Columns', 'Travel & Space'] as const
type Filter = typeof FILTERS[number]

function matchFilter(post: BlogPost, filter: Filter): boolean {
  if (filter === 'All') return true
  if (filter === 'PR & Career') return PR_CAREER_EN_CATEGORIES.has(post.category)
  return post.category === filter
}

function countFor(posts: BlogPost[], filter: Filter): number {
  return posts.filter((p) => matchFilter(p, filter)).length
}

export default function BlogFilterEn({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<Filter>('All')

  const visible = posts.filter((p) => matchFilter(p, active))

  return (
    <>
      {/* FILTER PILLS */}
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
          const count = countFor(posts, f)
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
              <span style={{ fontSize: '0.6875rem', opacity: 0.75 }}>{count}</span>
            </button>
          )
        })}
      </div>

      <nav
        aria-label="Browse posts by topic"
        style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          padding: '16px var(--section-px, 24px) 0',
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
        }}
      >
        {BLOG_CATEGORY_TOPICS.map((topic) => {
          const count = countEnCategory(posts, topic)
          if (count === 0) return null
          return (
            <Link
              key={topic.slug}
              href={`/en/blog/category/${topic.slug}`}
              className="pill"
              style={{ textDecoration: 'none' }}
            >
              {topic.enTitle} {count}
            </Link>
          )
        })}
      </nav>

      {/* POST LIST */}
      <section style={{ background: 'var(--color-bg-secondary)', marginTop: '20px' }}>
        <div className="section-wrap">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {visible.length === 0 && (
              <p style={{ color: 'var(--color-label-subtle)', fontSize: '0.9375rem', padding: '32px 0' }}>
                No posts in this category.
              </p>
            )}
            {visible.map((post) => (
              <Link key={post.slug} href={`/en/blog/${post.slug}`}
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
                  textDecoration: 'none',
                }}
                className="blog-list-row"
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
