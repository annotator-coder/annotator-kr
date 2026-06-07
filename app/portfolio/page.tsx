import type { Metadata } from 'next'
import { projects } from '@/lib/portfolio'
import PortfolioFilter from '@/components/PortfolioFilter'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'AI 시스템, 데이터 시각화, PR 콘텐츠 — 직접 만든 작업물 케이스 스터디.',
}

export default function Portfolio() {
  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="page-header-label">Portfolio</p>
          <h1 className="page-header-title">Projects</h1>
          <p className="page-header-desc">
            AI 시스템, 데이터 시각화, PR 콘텐츠. 각 프로젝트의 문제, 접근 방식, 결과를 케이스 스터디로 정리했습니다.
          </p>
        </div>
      </div>

      <PortfolioFilter projects={projects} />
    </>
  )
}
