import { MetadataRoute } from 'next'
import { projects } from '@/lib/portfolio'
import { posts } from '@/lib/blog'
import { projectsEn } from '@/lib/portfolio-en'
import { postsEn } from '@/lib/blog-en'

const BASE_URL = 'https://annotator.kr'

export default function sitemap(): MetadataRoute.Sitemap {
  // 최신 글 날짜 = 홈·블로그 목록의 실제 갱신 시점
  const latestKo = new Date(posts[0]?.date ?? Date.now())
  const latestEn = new Date(postsEn[0]?.date ?? Date.now())

  // KR static pages
  const koStatic: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: latestKo, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: latestKo, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'yearly', priority: 0.5 },
  ]

  // EN static pages
  const enStatic: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/en`, lastModified: latestEn, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/en/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/en/portfolio`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/en/blog`, lastModified: latestEn, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/en/contact`, changeFrequency: 'yearly', priority: 0.4 },
  ]

  // KR portfolio + blog (포트폴리오는 연도만 있어 lastModified 생략)
  const koPortfolio: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/portfolio/${p.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const koBlog: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // EN portfolio + blog
  const enPortfolio: MetadataRoute.Sitemap = projectsEn.map((p) => ({
    url: `${BASE_URL}/en/portfolio/${p.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const enBlog: MetadataRoute.Sitemap = postsEn.map((p) => ({
    url: `${BASE_URL}/en/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [
    ...koStatic,
    ...enStatic,
    ...koPortfolio,
    ...koBlog,
    ...enPortfolio,
    ...enBlog,
  ]
}
