export interface Project {
  slug: string
  title: string
  category: string
  tags: string[]
  year: string
  tagline: string
  description: string
  problem: string
  approach: string[]
  outcome: string[]
  href?: string
  featured: boolean
  relatedBlogSlugs: string[]
}

export const projects: Project[] = [
  {
    slug: 'crisis-ai-system',
    title: '언론 위기대응 AI 시스템',
    category: 'AI · 위기관리',
    tags: ['AI', '자동화', 'Node.js', '위기관리'],
    year: '2026',
    tagline: '이슈 탐지부터 대응 초안까지, 팀 대응 시간을 1/3로 단축',
    description:
      '언론 이슈 발생 시 모니터링 → 심각도 분류 → 대응 메시지 초안 생성까지 자동화한 AI 기반 위기대응 파이프라인. GS칼텍스 PR2팀 내부 운영 시스템.',
    problem:
      '언론 위기는 속도가 생명이다. 이슈 탐지부터 대응 메시지 승인까지 걸리는 시간이 팀 역량의 병목이었다. 새벽 이슈 발생 시 담당자가 수동으로 기사를 수집하고, 심각도를 판단하고, 초안을 작성하는 데 평균 90분이 소요됐다.',
    approach: [
      '뉴스 API + RSS 피드를 통한 실시간 키워드 모니터링 설계',
      'GPT 기반 심각도 분류기 구현 (1~5단계, 이슈 유형 자동 태깅)',
      '기존 대응 사례 DB 기반 RAG 파이프라인으로 초안 생성',
      'PM2 기반 서버 운영, Slack 알림 연동',
    ],
    outcome: [
      '이슈 탐지→초안 생성 시간: 90분 → 15분 이하',
      '야간/주말 대응 공백 해소',
      '팀 내 위기대응 프로세스 표준화 (SOP 자동 연동)',
    ],
    href: 'https://github.com/annotator-coder/crisis-response-system',
    featured: true,
    relatedBlogSlugs: ['ai-pr-crisis'],
  },
  {
    slug: 'oil-map',
    title: '원유 수입 다변화 인터랙티브 지도',
    category: '데이터 시각화',
    tags: ['데이터 시각화', 'D3.js', 'Vercel', 'PR 콘텐츠'],
    year: '2026',
    tagline: '복잡한 에너지 안보 현황을 누구나 읽을 수 있는 지도로',
    description:
      'GS칼텍스 원유 수입선 다변화 현황을 인터랙티브 세계 지도로 시각화. 정책 브리핑과 언론 배포용으로 동시 활용.',
    problem:
      '에너지 안보 관련 수치는 방대하지만, 기자나 정책 담당자가 한눈에 파악하기 어려운 형태로 존재했다. PR 관점에서 "GS칼텍스가 어떻게 에너지 안보에 기여하는가"를 직관적으로 전달할 수 있는 도구가 필요했다.',
    approach: [
      '공개 통계(에너지경제연구원, 한국석유공사) 데이터 수집 및 정제',
      'D3.js 기반 인터랙티브 세계 지도 구현 (국가별 수입 비중 시각화)',
      '모바일 대응 반응형 설계, 미디어 배포용 스크린샷 자동화',
      'Vercel 배포, 보도자료 배포 시 링크 첨부',
    ],
    outcome: [
      '기자 배포 시 "자료 잘 봤다" 피드백 다수',
      '사내 정책 브리핑 자료로 활용',
      '후속 에너지 통계 대시보드 프로젝트로 확장',
    ],
    href: 'https://oil-map-korea.vercel.app',
    featured: true,
    relatedBlogSlugs: ['data-viz-pr'],
  },
  {
    slug: 'energy-stats',
    title: '에너지 통계 대시보드',
    category: '데이터 저널리즘',
    tags: ['대시보드', 'Chart.js', 'Vercel', '통계'],
    year: '2026',
    tagline: '37개 에너지 지표, 한 화면에서 인터랙티브하게',
    description:
      '국내 석유·원유 주요 통계 37개 지표를 인터랙티브 차트로 구성한 전문가용 대시보드. 기자 브리핑 및 내부 보고용.',
    problem:
      '에너지 통계는 여러 기관에 분산되어 있어, 브리핑 자료를 만들 때마다 수작업으로 취합해야 했다. 최신 데이터로 자동 업데이트되는 단일 참조 대시보드가 필요했다.',
    approach: [
      '주요 에너지 통계 기관 API 및 공개 데이터 통합',
      '37개 지표 분류 체계 설계 (수급, 가격, 환경, 무역)',
      'Chart.js 기반 반응형 차트 구현',
      'Vercel 배포, 매주 데이터 갱신 프로세스 구축',
    ],
    outcome: [
      '브리핑 자료 제작 시간 40% 단축',
      '기자 문의 시 링크 하나로 데이터 제공',
      '사내 주간 보고서 데이터 출처로 정착',
    ],
    href: 'https://energy-stats-korea.vercel.app',
    featured: true,
    relatedBlogSlugs: ['data-viz-pr'],
  },
  {
    slug: 'pr-dashboard',
    title: 'PR팀 성과 대시보드',
    category: '팀 운영 · 데이터',
    tags: ['대시보드', 'KPI', 'Google Sheets', '팀 운영'],
    year: '2026',
    tagline: 'PR 성과를 숫자로: 주간 보고 자동화',
    description:
      'PR2팀 9가지 핵심 과업의 진행 현황과 분기별 성과를 실시간 시각화하는 내부용 대시보드. Google Apps Script와 연동.',
    problem:
      '매주 팀장 보고를 위해 여러 채널에 흩어진 KPI를 수동 취합하는 데 2-3시간이 소요됐다. PR 성과는 정성적 판단에 의존해 팀 내 방향 정렬이 어려웠다.',
    approach: [
      'PR 성과 지표 체계 정의 (언론 노출, 콘텐츠 성과, 스테이크홀더 반응)',
      'Google Sheets 기반 데이터 입력 → Apps Script 자동 집계',
      'KPI 시각화 대시보드 구현 및 Weekly 자동 업데이트',
    ],
    outcome: [
      '주간 보고 준비 시간 2시간 → 20분',
      '팀 목표 대비 진행률 실시간 공유로 팀 정렬 개선',
    ],
    href: 'https://annotator-coder.github.io/2026pr-dashboard/',
    featured: false,
    relatedBlogSlugs: ['ceo-message'],
  },
  {
    slug: 'dream-energy-day',
    title: '드림에너지데이 행사 페이지',
    category: 'CSR · 이벤트',
    tags: ['CSR', 'HTML', 'Vercel', '이벤트'],
    year: '2026',
    tagline: '다문화 아동과 함께하는 CSR 스포츠 행사, 디지털로 기록',
    description:
      'JSFC와 협업한 다문화 아동 대상 CSR 행사 드림에너지데이 전용 페이지. 행사 안내부터 사후 아카이브까지.',
    problem:
      'CSR 행사의 브랜드 가치를 외부에 전달하는 채널이 보도자료에 한정돼 있었다. 행사의 스토리와 임팩트를 지속적으로 보여줄 수 있는 디지털 거점이 필요했다.',
    approach: [
      '행사 브랜딩 컨셉 수립 (에너지 + 꿈)',
      '인터랙티브 HTML 페이지 제작 (행사 소개, 타임라인, 참가 신청)',
      'Vercel 배포, SNS 공유용 OG 이미지 최적화',
    ],
    outcome: [
      '행사 당일 SNS 공유 200회+',
      'GS칼텍스 미디어허브 연계 기사 4편',
    ],
    href: 'https://dream-energy-day.vercel.app',
    featured: false,
    relatedBlogSlugs: [],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
