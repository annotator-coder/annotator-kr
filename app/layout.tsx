import type { Metadata } from 'next'
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
