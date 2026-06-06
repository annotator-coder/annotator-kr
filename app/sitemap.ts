import { MetadataRoute } from 'next'
import { projects } from '@/lib/portfolio'
import { posts } from '@/lib/blog'

const BASE_URL = 'https://annotator.kr'

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioUrls = projects.map((p) => ({
    url: `${BASE_URL}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogUrls = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...portfolioUrls,
    ...blogUrls,
  ]
}
