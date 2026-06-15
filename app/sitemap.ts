import { MetadataRoute } from 'next'
import { projects } from '@/lib/portfolio'
import { posts } from '@/lib/blog'
import { projectsEn } from '@/lib/portfolio-en'
import { postsEn } from '@/lib/blog-en'

const BASE_URL = 'https://annotator.kr'

export default function sitemap(): MetadataRoute.Sitemap {
  // KR static pages
  const koStatic: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ]

  // EN static pages
  const enStatic: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/en`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/en/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/en/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/en/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/en/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  ]

  // KR portfolio + blog
  const koPortfolio: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/portfolio/${p.slug}`,
    lastModified: new Date(),
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
    lastModified: new Date(),
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
