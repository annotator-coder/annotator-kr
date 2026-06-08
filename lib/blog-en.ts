import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost } from './blog'

const blogEnDir = path.join(process.cwd(), 'content/en/blog')

function loadPostsEn(): BlogPost[] {
  const files = fs.readdirSync(blogEnDir).filter(f => f.endsWith('.md'))
  return files
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(blogEnDir, filename), 'utf-8')
      const { data, content } = matter(raw)
      return { slug, ...data, content: content.trim() } as BlogPost
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const postsEn: BlogPost[] = loadPostsEn()

export function getPostEnBySlug(slug: string): BlogPost | undefined {
  return postsEn.find(p => p.slug === slug)
}

export function getRecentPostsEn(count = 3): BlogPost[] {
  return postsEn.slice(0, count)
}
