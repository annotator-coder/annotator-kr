import type { Metadata } from 'next'
import { projectsEn } from '@/lib/portfolio-en'
import PortfolioFilterEn from '@/components/PortfolioFilterEn'
import { getEnAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'AI systems, data visualization, PR content — case studies of work I built.',
  alternates: getEnAlternates('/en/portfolio'),
  openGraph: {
    title: 'Portfolio | Annotator',
    description: 'AI systems, data visualization, PR content — case studies of work I built.',
    url: 'https://annotator.kr/en/portfolio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Annotator',
    description: 'AI systems, data visualization, PR content — case studies of work I built.',
  },
}

export default function EnPortfolio() {
  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="page-header-label">Portfolio</p>
          <h1 className="page-header-title">Projects</h1>
          <p className="page-header-desc">
            AI systems, data visualization, PR content. Each project is documented as a case study covering the problem, approach, and outcome.
          </p>
        </div>
      </div>

      <PortfolioFilterEn projects={projectsEn} basePath="/en/portfolio" />
    </>
  )
}
