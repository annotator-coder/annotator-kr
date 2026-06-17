import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://annotator.kr'),
  title: {
    default: 'Annotator',
    template: '%s | Annotator',
  },
  description: '11년 기자 출신 PR 리드. AI 도구를 직접 만들며 커뮤니케이션과 엔지니어링의 경계에서 일합니다.',
  authors: [{ name: 'Annotator', url: 'https://annotator.kr/about' }],
  creator: 'Annotator',
  openGraph: {
    title: 'Annotator',
    description: '11년 기자 출신 PR 리드. AI 도구를 직접 만들며 커뮤니케이션과 엔지니어링의 경계에서 일합니다.',
    url: 'https://annotator.kr',
    siteName: 'Annotator',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Annotator',
    description: '11년 기자 출신 PR 리드. AI 도구를 직접 만들며 커뮤니케이션과 엔지니어링의 경계에서 일합니다.',
  },
  alternates: {
    canonical: 'https://annotator.kr',
    languages: {
      ko: 'https://annotator.kr',
      en: 'https://annotator.kr/en',
      'x-default': 'https://annotator.kr',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'yRPBN7XlSpfWE5nK7AEP7pe2T-I8ArPVQAn1KJ2o4Ig',
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
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-0SFJ41859N" />
    </html>
  )
}
