import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://annotator.kr/en',
    languages: {
      ko: 'https://annotator.kr',
      en: 'https://annotator.kr/en',
      'x-default': 'https://annotator.kr',
    },
    types: {
      'application/rss+xml': 'https://annotator.kr/en/feed.xml',
    },
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
