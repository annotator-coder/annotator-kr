import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Annotator'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const boldFont = readFileSync(join(process.cwd(), 'public/fonts/Pretendard-Bold.otf'))
  const regularFont = readFileSync(join(process.cwd(), 'public/fonts/Pretendard-Regular.otf'))

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

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', gap: '24px' }}>
          <div style={{ fontSize: '18px', fontWeight: 400, color: '#AEAEB2', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex' }}>
            annotator.kr
          </div>
          <div style={{ fontSize: '72px', fontWeight: 700, color: '#000000', letterSpacing: '-0.03em', lineHeight: 1.05, display: 'flex', maxWidth: '900px' }}>
            Annotator
          </div>
          <div style={{ fontSize: '24px', fontWeight: 400, color: '#3C3C43', lineHeight: 1.6, display: 'flex', maxWidth: '760px' }}>
            11년 기자 출신 PR 리드. AI 도구를 직접 만들며 커뮤니케이션과 엔지니어링의 경계에서 일합니다.
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #C6C6C8', paddingTop: '24px' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Portfolio', 'Blog', 'About'].map((label) => (
              <span key={label} style={{ fontSize: '16px', color: '#AEAEB2', display: 'flex' }}>{label}</span>
            ))}
          </div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#007AFF', display: 'flex' }}>
            annotator.kr
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
