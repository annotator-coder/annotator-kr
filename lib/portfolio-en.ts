import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Project } from './portfolio'

const portfolioEnDir = path.join(process.cwd(), 'content/en/portfolio')

function loadProjectsEn(): Project[] {
  const files = fs.readdirSync(portfolioEnDir).filter(f => f.endsWith('.md'))
  const items = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(portfolioEnDir, filename), 'utf-8')
    const { data } = matter(raw)
    const { order, ...rest } = data as { order?: number; [key: string]: unknown }
    return { slug, _order: order ?? 999, ...rest } as Project & { _order: number }
  })
  items.sort((a, b) => a._order - b._order)
  return items.map(({ _order: _, ...p }) => p as Project)
}

export const projectsEn: Project[] = loadProjectsEn()

export function getProjectEnBySlug(slug: string): Project | undefined {
  return projectsEn.find(p => p.slug === slug)
}

export function getFeaturedProjectsEn(): Project[] {
  return projectsEn.filter(p => p.featured)
}
