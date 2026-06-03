import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: '정원엽 — 커뮤니케이션 전략가 · AI 빌더',
    template: '%s | 정원엽',
  },
  description: '기자 · PR전략가 · AI빌더. 언어와 코드로 조직의 소통을 설계합니다.',
  openGraph: {
    title: '정원엽 — 커뮤니케이션 전략가 · AI 빌더',
    description: '기자 · PR전략가 · AI빌더',
    url: 'https://annotator.kr',
    siteName: 'Annotator',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
