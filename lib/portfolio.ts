import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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
  links?: { label: string; url: string }[]
  images?: { src: string; caption?: string }[]
  featured: boolean
  relatedBlogSlugs: string[]
}

const portfolioDir = path.join(process.cwd(), 'content/portfolio')

function loadProjects(): Project[] {
  const files = fs.readdirSync(portfolioDir).filter(f => f.endsWith('.md'))
  const items = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(portfolioDir, filename), 'utf-8')
    const { data } = matter(raw)
    const { order, ...rest } = data as { order?: number; [key: string]: unknown }
    return { slug, _order: order ?? 999, ...rest } as Project & { _order: number }
  })
  items.sort((a, b) => {
    const yearDiff = parseInt(b.year) - parseInt(a.year)
    return yearDiff !== 0 ? yearDiff : a._order - b._order
  })
  return items.map(({ _order: _, ...p }) => p as Project)
}

export const projects: Project[] = loadProjects()

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}
