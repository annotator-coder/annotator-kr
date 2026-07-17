// content/ 마크다운 frontmatter 검증기 — /publish 스킬과 수동 점검에서 사용
// 사용: node scripts/validate-content.mjs  (에러 있으면 exit 1)
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const ROOT = process.cwd()
const errors = []
const warnings = []

// KO→EN 카테고리 표준 매핑 (새 카테고리 추가 시 여기 갱신)
const CATEGORY_MAP = {
  '에세이·칼럼': 'Essays & Columns',
  '영화·드라마': 'Film & Drama',
  '서평': 'Book Review',
  '전략 커뮤니케이션': 'Strategy & Communications',
  '여행·공간': 'Travel & Space',
  'AI in Communications': 'AI in Communications',
  '플랫폼 전략': 'Platform Strategy',
  '커리어': 'Career',
  '저널리즘': 'Journalism',
  '위기 커뮤니케이션': 'Crisis Communications',
  '데이터 저널리즘': 'Data Journalism',
  '국제 PR · 캠페인': 'International PR & Campaign',
}

const BLOG_REQUIRED = ['title', 'date', 'category', 'excerpt', 'readingTime']
const PORTFOLIO_REQUIRED = ['order', 'title', 'category', 'tags', 'year', 'tagline']

function mdFiles(dir) {
  const abs = path.join(ROOT, dir)
  if (!fs.existsSync(abs)) return []
  return fs.readdirSync(abs).filter((f) => f.endsWith('.md'))
}

function fm(dir, file) {
  return matter(fs.readFileSync(path.join(ROOT, dir, file), 'utf-8')).data
}

function parsedMd(dir, file) {
  return matter(fs.readFileSync(path.join(ROOT, dir, file), 'utf-8'))
}

function checkRequired(dir, file, data, required) {
  for (const key of required) {
    if (data[key] === undefined || data[key] === null || data[key] === '') {
      errors.push(`${dir}/${file}: 필수 필드 누락 — ${key}`)
    }
  }
  if (data.date && !/^\d{4}-\d{2}-\d{2}$/.test(String(data.date).slice(0, 10))) {
    errors.push(`${dir}/${file}: date 형식 오류 (YYYY-MM-DD 필요) — ${data.date}`)
  }
  if (data.updatedAt && !/^\d{4}-\d{2}-\d{2}$/.test(String(data.updatedAt).slice(0, 10))) {
    errors.push(`${dir}/${file}: updatedAt 형식 오류 (YYYY-MM-DD 필요) — ${data.updatedAt}`)
  }
}

function checkSeoDescription(dir, file, data) {
  const description = String(data.seoDescription || data.excerpt || '').trim()
  if (!description) return

  if (description.length < 45) {
    warnings.push(`${dir}/${file}: SEO 설명이 짧음 (${description.length}자) — seoDescription 또는 excerpt 보강 권장`)
  }
  if (description.length > 170) {
    warnings.push(`${dir}/${file}: SEO 설명이 김 (${description.length}자) — 80~160자 권장`)
  }
  if (/…$|\.{3}$/.test(description) || description.includes('...')) {
    warnings.push(`${dir}/${file}: SEO 설명이 잘린 문장처럼 보임 — 검색 결과용 완결 문장 권장`)
  }
  if (/^#/.test(description) || /<[^>]+>/.test(description)) {
    warnings.push(`${dir}/${file}: SEO 설명에 마크다운/HTML 흔적 있음 — 순수 문장 권장`)
  }
}

function checkMarkdownImages(dir, file, content) {
  const imageMatches = content.matchAll(/!\[([^\]]*)\]\([^)]+\)/g)
  for (const match of imageMatches) {
    if (!match[1].trim()) {
      warnings.push(`${dir}/${file}: alt 없는 마크다운 이미지 있음`)
    }
  }
}

// ── 블로그: ko/en 쌍 + 카테고리 매핑 검증 ──
const koBlog = mdFiles('content/blog')
const enBlog = mdFiles('content/en/blog')

for (const file of koBlog) {
  const { data, content } = parsedMd('content/blog', file)
  checkRequired('content/blog', file, data, BLOG_REQUIRED)
  checkSeoDescription('content/blog', file, data)
  checkMarkdownImages('content/blog', file, content)
  if (data.category && !(data.category in CATEGORY_MAP)) {
    warnings.push(`content/blog/${file}: 미등록 카테고리 "${data.category}" — 새 카테고리면 CATEGORY_MAP에 추가`)
  }
  if (!enBlog.includes(file)) {
    errors.push(`content/blog/${file}: EN 번역본 없음 (content/en/blog/${file})`)
  } else {
    const { data: enData, content: enContent } = parsedMd('content/en/blog', file)
    checkRequired('content/en/blog', file, enData, BLOG_REQUIRED)
    checkSeoDescription('content/en/blog', file, enData)
    checkMarkdownImages('content/en/blog', file, enContent)
    const expected = CATEGORY_MAP[data.category]
    if (expected && enData.category !== expected) {
      errors.push(`content/en/blog/${file}: 카테고리 불일치 — "${enData.category}" (표준: "${expected}")`)
    }
    if (String(enData.date) !== String(data.date)) {
      warnings.push(`content/en/blog/${file}: 날짜가 KO와 다름 (ko ${data.date} / en ${enData.date})`)
    }
  }
}
for (const file of enBlog) {
  if (!koBlog.includes(file)) errors.push(`content/en/blog/${file}: KO 원본 없음`)
}

// ── 포트폴리오: 필수 필드 + EN 쌍(경고) ──
const koPf = mdFiles('content/portfolio')
const enPf = mdFiles('content/en/portfolio')

for (const file of koPf) {
  checkRequired('content/portfolio', file, fm('content/portfolio', file), PORTFOLIO_REQUIRED)
  if (!enPf.includes(file)) {
    warnings.push(`content/portfolio/${file}: EN 번역본 없음 — EN 페이지에 노출되지 않음`)
  }
}
for (const file of enPf) {
  checkRequired('content/en/portfolio', file, fm('content/en/portfolio', file), PORTFOLIO_REQUIRED)
  if (!koPf.includes(file)) errors.push(`content/en/portfolio/${file}: KO 원본 없음`)
}

// ── 결과 출력 ──
for (const w of warnings) console.log(`⚠️  ${w}`)
for (const e of errors) console.log(`❌ ${e}`)
console.log(`\n블로그 ko ${koBlog.length} / en ${enBlog.length} · 포트폴리오 ko ${koPf.length} / en ${enPf.length}`)
console.log(errors.length ? `검증 실패: 에러 ${errors.length}건, 경고 ${warnings.length}건` : `검증 통과 (경고 ${warnings.length}건)`)
process.exit(errors.length ? 1 : 0)
