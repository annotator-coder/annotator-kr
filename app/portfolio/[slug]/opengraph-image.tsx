import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'
import { getProjectBySlug, projects } from '@/lib/portfolio'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  const boldFont = readFileSync(join(process.cwd(), 'public/fonts/Pretendard-Bold.otf'))
  const regularFont = readFileSync(join(process.cwd(), 'public/fonts/Pretendard-Regular.otf'))

  const title = project?.title ?? 'Portfolio'
  const tagline = project?.tagline ?? ''
  const category = project?.category ?? ''
  const year = project?.year ?? ''
  const tags = project?.tags.slice(0, 3) ?? []

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

        {/* Category + Year */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <span style={{
            fontSize: '15px', fontWeight: 600, color: '#007AFF',
            background: '#F2F2F7', padding: '6px 16px',
            borderRadius: '9999px', display: 'flex',
          }}>
            {category}
          </span>
          <span style={{ fontSize: '15px', color: '#AEAEB2', display: 'flex' }}>{year}</span>
        </div>

        {/* Title */}
        <div style={{
          fontSize: title.length > 18 ? '50px' : '58px',
          fontWeight: 700,
          color: '#000000',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          display: 'flex',
          maxWidth: '960px',
          marginBottom: '24px',
        }}>
          {title}
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: '22px',
          fontWeight: 400,
          color: '#3C3C43',
          lineHeight: 1.6,
          display: 'flex',
          maxWidth: '840px',
          flex: 1,
        }}>
          {tagline}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
            {tags.map((tag) => (
              <span key={tag} style={{
                fontSize: '13px', fontWeight: 600,
                color: '#AEAEB2', background: '#F2F2F7',
                padding: '4px 12px', borderRadius: '9999px', display: 'flex',
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #C6C6C8', paddingTop: '24px' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#000000', display: 'flex' }}>
            Annotator
          </div>
          <div style={{ fontSize: '16px', color: '#AEAEB2', display: 'flex' }}>
            annotator.kr/portfolio
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
