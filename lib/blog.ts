import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  seoDescription?: string
  content: string
  readingTime: number
  relatedPortfolioSlugs: string[]
  sourceUrl?: string
  updatedAt?: string
  image?: string
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

function stripMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/`{1,3}[^`]*`{1,3}/g, ' ')
    .replace(/[#>*_~|]/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function hasWeakDescriptionSignal(description: string): boolean {
  return (
    description.length < 45 ||
    description.length > 170 ||
    /…$|\.{3}$/.test(description) ||
    description.includes('...') ||
    /^#/.test(description) ||
    /<[^>]+>/.test(description)
  )
}

function clampDescription(description: string): string {
  const clean = stripMarkdown(description)
  if (clean.length <= 155) return clean

  const sliced = clean.slice(0, 155)
  const lastSpace = sliced.lastIndexOf(' ')
  const candidate = lastSpace > 90 ? sliced.slice(0, lastSpace) : sliced
  return `${candidate.replace(/[,.!?;:，。！？;:]$/, '')}...`
}

export function getPostDescription(post: BlogPost): string {
  if (post.seoDescription) return clampDescription(post.seoDescription)

  const excerpt = post.excerpt?.trim() ?? ''
  if (excerpt && !hasWeakDescriptionSignal(excerpt)) return clampDescription(excerpt)

  const body = stripMarkdown(post.content)
  if (body) return clampDescription(body)

  return clampDescription(excerpt)
}

export function getPostModifiedDate(post: BlogPost): string {
  return post.updatedAt || post.date
}
