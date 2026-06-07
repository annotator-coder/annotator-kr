import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'
import { getPostBySlug, posts } from '@/lib/blog'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const boldFont = readFileSync(join(process.cwd(), 'public/fonts/Pretendard-Bold.otf'))
  const regularFont = readFileSync(join(process.cwd(), 'public/fonts/Pretendard-Regular.otf'))

  const title = post?.title ?? 'Blog'
  const excerpt = post?.excerpt ?? ''
  const category = post?.category ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 72px',
          fontFamily: 'Pretendard',
        }}
      >
        {/* Top accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: '#007AFF' }} />

        {/* Category */}
        <div style={{ display: 'flex', marginBottom: '28px' }}>
          <span style={{
            fontSize: '15px', fontWeight: 600, color: '#007AFF',
            background: '#F2F2F7', padding: '6px 16px',
            borderRadius: '9999px', display: 'flex',
          }}>
            {category}
          </span>
        </div>

        {/* Title */}
        <div style={{
          fontSize: title.length > 20 ? '52px' : '60px',
          fontWeight: 700,
          color: '#000000',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          display: 'flex',
          maxWidth: '960px',
          marginBottom: '28px',
        }}>
          {title}
        </div>

        {/* Excerpt */}
        <div style={{
          fontSize: '22px',
          fontWeight: 400,
          color: '#3C3C43',
          lineHeight: 1.6,
          display: 'flex',
          maxWidth: '840px',
          flex: 1,
        }}>
          {excerpt.length > 80 ? excerpt.slice(0, 80) + '…' : excerpt}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #C6C6C8', paddingTop: '24px' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#000000', display: 'flex' }}>
            Annotator
          </div>
          <div style={{ fontSize: '16px', color: '#AEAEB2', display: 'flex' }}>
            annotator.kr/blog
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Pretendard', data: regularFont, weight: 400 },
        { name: 'Pretendard', data: boldFont, weight: 700 },
      ],
    }
  )
}
