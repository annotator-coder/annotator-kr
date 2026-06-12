import type { Metadata } from 'next'
import { postsEn } from '@/lib/blog-en'
import BlogFilterEn from '@/components/BlogFilterEn'
import { getEnAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on PR, journalism, film, books, and life.',
  alternates: getEnAlternates('/en/blog'),
  openGraph: {
    title: 'Blog | Annotator',
    description: 'Writing on PR, journalism, film, books, and life.',
    url: 'https://annotator.kr/en/blog',
    locale: 'en_US',
  },
}

export default function EnBlog() {
  const sorted = [...postsEn].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="page-header-label">Blog</p>
          <h1 className="page-header-title">Thought</h1>
          <p className="page-header-desc">
            Writing on work, reading, watching, and the occasional travel.
            Posts connected to projects are linked.
          </p>
        </div>
      </div>

      <BlogFilterEn posts={sorted} />
    </>
  )
}
