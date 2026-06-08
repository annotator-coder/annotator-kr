import { posts } from '../lib/blog'
import { postsEn } from '../lib/blog-en'
import { projects } from '../lib/portfolio'
import { projectsEn } from '../lib/portfolio-en'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

function stripUndefined(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined)
  )
}

function writeBlogPost(dir: string, post: (typeof posts)[0]) {
  const { content, slug, ...rest } = post
  const frontmatter = stripUndefined(rest as Record<string, unknown>)
  const file = matter.stringify(content, frontmatter)
  fs.writeFileSync(path.join(root, dir, `${slug}.md`), file, 'utf-8')
}

function writePortfolioProject(dir: string, project: (typeof projects)[0], order: number) {
  const { slug, ...rest } = project
  const frontmatter = stripUndefined({ order, ...rest } as Record<string, unknown>)
  const file = matter.stringify('', frontmatter)
  fs.writeFileSync(path.join(root, dir, `${slug}.md`), file, 'utf-8')
}

// Blog — Korean
posts.forEach(post => writeBlogPost('content/blog', post))
console.log(`✓ blog (ko): ${posts.length}편`)

// Blog — English
postsEn.forEach(post => writeBlogPost('content/en/blog', post))
console.log(`✓ blog (en): ${postsEn.length}편`)

// Portfolio — Korean
projects.forEach((project, i) => writePortfolioProject('content/portfolio', project, i + 1))
console.log(`✓ portfolio (ko): ${projects.length}건`)

// Portfolio — English
projectsEn.forEach((project, i) => writePortfolioProject('content/en/portfolio', project, i + 1))
console.log(`✓ portfolio (en): ${projectsEn.length}건`)

console.log('\n마이그레이션 완료!')
