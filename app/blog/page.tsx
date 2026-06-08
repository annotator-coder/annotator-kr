import type { Metadata } from 'next'
import { posts } from '@/lib/blog'
import BlogFilter from '@/components/BlogFilter'
import { getKoAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Blog',
  description: '살면서, 일하면서, 여행하면서, 놀면서 느낀 것들.',
  alternates: getKoAlternates('/blog'),
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
          <h1 className="page-header-title">Thought</h1>
          <p className="page-header-desc">
            살면서, 일하면서, 여행하면서, 놀면서 느낀 것들을 글로 풀어 냅니다.
            글에서 프로젝트로 연결된 것들은 링크로 연결해뒀습니다.
          </p>
        </div>
      </div>

      <BlogFilter posts={sorted} />
    </>
  )
}
