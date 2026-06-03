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
    tags: ['AI', '자동화', 'Node.js', '위기관리', 'PM2'],
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
      '에너지 안보 관련 수치는 방대하지만, 기자나 정책 담당자가 한눈에 파악하기 어려운 형태로 존재했다. "GS칼텍스가 에너지 안보에 기여한다"는 메시지를 직관적으로 전달할 수 있는 도구가 없었다.',
    approach: [
      '공개 통계(에너지경제연구원, 한국석유공사) 데이터 수집 및 정제',
      'D3.js 기반 인터랙티브 세계 지도 구현 (국가별 수입 비중 시각화)',
      '모바일 대응 반응형 설계, 미디어 배포용 스크린샷 자동화',
      'Vercel 배포, 보도자료 배포 시 링크 첨부',
    ],
    outcome: [
      '기자 배포 시 "자료 잘 봤다" 피드백 다수',
      '사내 정책 브리핑 자료로 정착',
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
      '에너지 통계는 여러 기관에 분산되어 있어 브리핑 자료를 만들 때마다 수작업으로 취합해야 했다. 최신 데이터로 자동 업데이트되는 단일 참조 대시보드가 필요했다.',
    approach: [
      '주요 에너지 통계 기관 공개 데이터 통합 (37개 지표)',
      '수급·가격·환경·무역 4개 카테고리 분류 체계 설계',
      'Chart.js 기반 반응형 인터랙티브 차트 구현',
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
      '매주 팀장 보고를 위해 여러 채널에 흩어진 KPI를 수동 취합하는 데 2~3시간이 소요됐다. PR 성과는 정성적 판단에 의존해 팀 내 방향 정렬이 어려웠다.',
    approach: [
      'PR 성과 지표 체계 정의 (언론 노출, 콘텐츠 성과, 스테이크홀더 반응)',
      'Google Sheets 기반 데이터 입력 → Apps Script 자동 집계',
      'KPI 시각화 대시보드 구현 및 Weekly 자동 업데이트',
    ],
    outcome: [
      '주간 보고 준비 시간 2시간 → 20분',
      '팀 목표 대비 진행률 실시간 공유로 정렬 개선',
    ],
    href: 'https://annotator-coder.github.io/2026pr-dashboard/',
    featured: false,
    relatedBlogSlugs: ['ceo-message'],
  },
  {
    slug: 'dream-energy-day',
    title: '드림에너지데이',
    category: 'CSR · 이벤트',
    tags: ['CSR', 'HTML', 'Vercel', 'JSFC', '스포츠'],
    year: '2026',
    tagline: 'FC서울과 함께하는 다문화 아동 CSR 행사 전용 페이지',
    description:
      'GS칼텍스 × FC서울 협업으로 진행한 다문화 아동 대상 드림에너지데이 행사 기획 및 디지털 채널 구축.',
    problem:
      'CSR 행사의 브랜드 가치를 외부에 전달하는 채널이 보도자료에 한정돼 있었다. 행사의 스토리와 임팩트를 지속적으로 보여줄 수 있는 디지털 거점이 필요했다.',
    approach: [
      '행사 브랜딩 컨셉 수립 (에너지 + 꿈)',
      '인터랙티브 HTML 행사 페이지 제작 (기획안 + 타임라인 + 참가 정보)',
      'Vercel 배포, SNS 공유용 OG 이미지 최적화',
      '임원 보고용 기획안 HTML 별도 제작',
    ],
    outcome: [
      '행사 당일 SNS 공유 200회+',
      'GS칼텍스 미디어허브 연계 기사 4편',
      '임원 보고 자료로 활용, 차년도 예산 확보',
    ],
    href: 'https://dream-energy-day.vercel.app',
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'brand-dashboard',
    title: '브랜드 마케팅 대시보드',
    category: '대시보드 · 브랜드',
    tags: ['대시보드', 'Vercel', 'API', '마케팅'],
    year: '2026',
    tagline: '2026 브랜드 KPI와 캠페인 성과 실시간 시각화',
    description:
      '브랜드 마케팅 KPI 및 캠페인 성과를 대외 공유 가능한 인터랙티브 대시보드로 구성. Instagram·LinkedIn API 연동.',
    problem:
      '브랜드 캠페인 성과를 주기적으로 정리해 경영진 및 외부 파트너와 공유해야 했다. 매번 PPT로 만드는 대신, 언제든 접근 가능한 라이브 대시보드가 필요했다.',
    approach: [
      'SNS 플랫폼별 지표 API 연동 (Instagram, LinkedIn)',
      '브랜드 KPI 시각화 인터페이스 설계',
      'Vercel 서버리스 API 함수로 데이터 프록시 구성',
    ],
    outcome: [
      '경영진 보고 시 실시간 데이터 접근 가능',
      '외부 파트너 공유용 링크 하나로 대응',
    ],
    href: 'https://dash-external.vercel.app',
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'digital-brochure',
    title: 'GS칼텍스 디지털 브로슈어',
    category: '브랜드 콘텐츠',
    tags: ['브랜드 저널리즘', 'HTML', 'Vercel', '에디토리얼'],
    year: '2026',
    tagline: 'Bloomberg/FT 스타일의 에너지 전환 스토리 브로슈어',
    description:
      'GS칼텍스 사업 현황과 신에너지 전환 스토리를 Bloomberg Annual Report 스타일의 인터랙티브 디지털 브로슈어로 제작.',
    problem:
      '기존 회사 소개 자료는 정적인 PDF였다. 에너지 전환 스토리를 담기 위한 인터랙티브하고 브랜드 저널리즘 감성의 디지털 채널이 필요했다.',
    approach: [
      'Bloomberg/FT Annual Report 레퍼런스 분석',
      '에디토리얼 타이포그래피 + 인터랙티브 차트 조합 설계',
      '섹션별 스토리텔링 구조 기획 및 HTML 구현',
      'Vercel 배포, 대외 공유용 URL 운영',
    ],
    outcome: [
      '주요 IR·미디어 배포 채널로 활용',
      '업계 관계자로부터 "이런 형태의 브로슈어 처음 봤다" 반응',
    ],
    href: 'https://gs-caltex-brochure-annotator-s-projects.vercel.app',
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'ai-reference',
    title: 'PR팀 AI 레퍼런스',
    category: 'AI · 팀 운영',
    tags: ['AI', 'SOP', 'Vercel', '프롬프트 라이브러리'],
    year: '2026',
    tagline: 'PR2팀 AI 활용 SOP·프롬프트 라이브러리 웹 레퍼런스',
    description:
      'PR2팀이 실제 업무에서 쓰는 AI 활용법을 정리한 웹 레퍼런스. 보도자료·위기대응·콘텐츠별 프롬프트 라이브러리 포함.',
    problem:
      'AI 도구 도입 초기, 팀원마다 다른 방식으로 사용해 품질 편차가 컸다. 팀 전체의 AI 활용 수준을 높이기 위한 표준화된 가이드가 필요했다.',
    approach: [
      '실제 업무 케이스별 프롬프트 수집·정제',
      '보도자료/위기대응/SNS/브리핑 등 유형별 SOP 문서화',
      '인터랙티브 웹 레퍼런스로 구현 (검색·복사 기능)',
      'Vercel 배포, 팀 내부 URL로 공유',
    ],
    outcome: [
      '팀 AI 활용 빈도 3배 증가',
      '신규 팀원 온보딩 시간 단축',
      '보도자료 초안 품질 균질화',
    ],
    href: 'https://ai-reference-ashy.vercel.app',
    featured: false,
    relatedBlogSlugs: ['ai-pr-crisis'],
  },
  {
    slug: 'baduk-project',
    title: 'GS칼텍스 바둑팀 분석 프로젝트',
    category: '스포츠 PR · 데이터',
    tags: ['스포츠', '데이터 분석', 'Vercel', '바둑'],
    year: '2026',
    tagline: '바둑팀 운영 개선을 위한 데이터 기반 분석 보고서',
    description:
      'GS칼텍스 바둑팀 운영 현황 분석, AI 훈련 도입 검토, 팀 홍보 전략 제언을 담은 인터랙티브 보고서.',
    problem:
      '바둑팀의 기업 홍보 기여도와 운영 효율화 방안을 데이터 기반으로 제시할 필요가 있었다. 임원 보고용으로 설득력 있는 분석 자료 형태가 필요했다.',
    approach: [
      '바둑팀 성과 데이터 수집 및 타 스포츠팀 벤치마킹',
      'AI 훈련 도입 사례(한국기원, 해외팀) 조사',
      '인터랙티브 HTML 보고서로 시각화',
      'Chairman 대상 별도 브리핑 자료 제작',
    ],
    outcome: [
      '바둑팀 운영 개선 방안 임원 보고',
      'AI 훈련 도입 타당성 검토 완료',
    ],
    href: 'https://2026-baduk.vercel.app',
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
