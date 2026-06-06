import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Annotator',
    template: '%s | Annotator',
  },
  description: '불완전함에 대해 고민하고, 변화에 촉각을 곤두세워 일한다.',
  openGraph: {
    title: 'Annotator',
    description: '불완전함에 대해 고민하고, 변화에 촉각을 곤두세워 일한다.',
    url: 'https://annotator.kr',
    siteName: 'Annotator',
    type: 'website',
  },
  // Google Search Console 인증 — 콘솔에서 발급받은 코드로 교체
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  // },
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
