import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  readingTime: number
  relatedPortfolioSlugs: string[]
  sourceUrl?: string
}

const blogDir = path.join(process.cwd(), 'content/blog')

function loadPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'))
  return files
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(blogDir, filename), 'utf-8')
      const { data, content } = matter(raw)
      return { slug, ...data, content: content.trim() } as BlogPost
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const posts: BlogPost[] = loadPosts()

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug)
}

export function getRecentPosts(count = 3): BlogPost[] {
  return posts.slice(0, count)
}
