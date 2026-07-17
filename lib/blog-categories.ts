import type { BlogPost } from './blog'

export interface BlogCategoryTopic {
  slug: string
  koCategory: string
  enCategory: string
  koTitle: string
  enTitle: string
  koDescription: string
  enDescription: string
}

export const BLOG_CATEGORY_TOPICS: BlogCategoryTopic[] = [
  {
    slug: 'ai-communications',
    koCategory: 'AI in Communications',
    enCategory: 'AI in Communications',
    koTitle: 'AI in Communications',
    enTitle: 'AI in Communications',
    koDescription: 'AI를 커뮤니케이션, PR, 콘텐츠 업무에 실제로 적용한 기록과 실험을 모았습니다.',
    enDescription: 'Writing on applying AI to communications, PR, content work, and practical team workflows.',
  },
  {
    slug: 'data-journalism',
    koCategory: '데이터 저널리즘',
    enCategory: 'Data Journalism',
    koTitle: '데이터 저널리즘',
    enTitle: 'Data Journalism',
    koDescription: '데이터를 통해 사회 현상과 커뮤니케이션 이슈를 읽고 설명한 글입니다.',
    enDescription: 'Posts on using data to explain public issues, journalism, and communication problems.',
  },
  {
    slug: 'career',
    koCategory: '커리어',
    enCategory: 'Career',
    koTitle: '커리어',
    enTitle: 'Career',
    koDescription: '기자, PR, 조직 안에서의 일과 커리어 전환에 관한 생각을 정리했습니다.',
    enDescription: 'Reflections on journalism, PR, work, organizations, and career transitions.',
  },
  {
    slug: 'strategy-communications',
    koCategory: '전략 커뮤니케이션',
    enCategory: 'Strategy & Communications',
    koTitle: '전략 커뮤니케이션',
    enTitle: 'Strategy & Communications',
    koDescription: '메시지, 의사결정, 이해관계자 관점에서 커뮤니케이션 전략을 다룬 글입니다.',
    enDescription: 'Writing on messages, decisions, stakeholders, and communication strategy.',
  },
  {
    slug: 'international-pr-campaign',
    koCategory: '국제 PR · 캠페인',
    enCategory: 'International PR & Campaign',
    koTitle: '국제 PR · 캠페인',
    enTitle: 'International PR & Campaign',
    koDescription: '국제 행사, 캠페인, 글로벌 커뮤니케이션 현장에서 얻은 기록입니다.',
    enDescription: 'Notes from international events, campaigns, and global communication work.',
  },
  {
    slug: 'crisis-communications',
    koCategory: '위기 커뮤니케이션',
    enCategory: 'Crisis Communications',
    koTitle: '위기 커뮤니케이션',
    enTitle: 'Crisis Communications',
    koDescription: '위기를 예측하고 대응하는 PR 시스템, 시나리오, 판단 기준에 관한 글입니다.',
    enDescription: 'Posts on crisis PR systems, scenario planning, response logic, and judgment calls.',
  },
  {
    slug: 'journalism',
    koCategory: '저널리즘',
    enCategory: 'Journalism',
    koTitle: '저널리즘',
    enTitle: 'Journalism',
    koDescription: '기자 경험과 미디어 산업, 저널리즘의 변화에 대해 쓴 글입니다.',
    enDescription: 'Writing on newsroom experience, media change, and the future of journalism.',
  },
  {
    slug: 'platform-strategy',
    koCategory: '플랫폼 전략',
    enCategory: 'Platform Strategy',
    koTitle: '플랫폼 전략',
    enTitle: 'Platform Strategy',
    koDescription: '플랫폼, 미디어, 커뮤니티, 커머스가 만나는 지점을 분석한 글입니다.',
    enDescription: 'Analysis of platforms, media, communities, commerce, and content ecosystems.',
  },
  {
    slug: 'book-review',
    koCategory: '서평',
    enCategory: 'Book Review',
    koTitle: '서평',
    enTitle: 'Book Review',
    koDescription: '책을 읽고 남긴 생각과 일, 사회, 기술에 대한 연결점을 모았습니다.',
    enDescription: 'Book notes that connect reading with work, society, technology, and decision-making.',
  },
  {
    slug: 'film-drama',
    koCategory: '영화·드라마',
    enCategory: 'Film & Drama',
    koTitle: '영화·드라마',
    enTitle: 'Film & Drama',
    koDescription: '영화와 드라마를 통해 사회, 관계, 서사의 힘을 읽은 글입니다.',
    enDescription: 'Essays on films and dramas as ways to read society, relationships, and narrative.',
  },
  {
    slug: 'essays-columns',
    koCategory: '에세이·칼럼',
    enCategory: 'Essays & Columns',
    koTitle: '에세이·칼럼',
    enTitle: 'Essays & Columns',
    koDescription: '일과 삶, 변화, 조직, 개인적 경험을 바탕으로 쓴 에세이와 칼럼입니다.',
    enDescription: 'Essays and columns on work, life, change, organizations, and personal experience.',
  },
  {
    slug: 'travel-space',
    koCategory: '여행·공간',
    enCategory: 'Travel & Space',
    koTitle: '여행·공간',
    enTitle: 'Travel & Space',
    koDescription: '여행지와 공간에서 발견한 취향, 관계, 기억에 관한 글입니다.',
    enDescription: 'Writing on travel, places, taste, relationships, and memory.',
  },
]

export const PR_CAREER_KO_CATEGORIES = new Set([
  'AI in Communications',
  '데이터 저널리즘',
  '커리어',
  '전략 커뮤니케이션',
  '국제 PR · 캠페인',
  '위기 커뮤니케이션',
  '저널리즘',
  '플랫폼 전략',
])

export const PR_CAREER_EN_CATEGORIES = new Set([
  'AI in Communications',
  'Data Journalism',
  'Career',
  'Strategy & Communications',
  'International PR & Campaign',
  'Crisis Communications',
  'Journalism',
  'Platform Strategy',
])

export function getBlogCategoryTopic(slug: string): BlogCategoryTopic | undefined {
  return BLOG_CATEGORY_TOPICS.find((topic) => topic.slug === slug)
}

export function getKoPostsByCategory(posts: BlogPost[], slug: string): BlogPost[] {
  const topic = getBlogCategoryTopic(slug)
  if (!topic) return []
  return posts.filter((post) => post.category === topic.koCategory)
}

export function getEnPostsByCategory(posts: BlogPost[], slug: string): BlogPost[] {
  const topic = getBlogCategoryTopic(slug)
  if (!topic) return []
  return posts.filter((post) => post.category === topic.enCategory)
}

export function countKoCategory(posts: BlogPost[], topic: BlogCategoryTopic): number {
  return posts.filter((post) => post.category === topic.koCategory).length
}

export function countEnCategory(posts: BlogPost[], topic: BlogCategoryTopic): number {
  return posts.filter((post) => post.category === topic.enCategory).length
}
