import { getPostDescription } from '@/lib/blog'
import { postsEn } from '@/lib/blog-en'

export const dynamic = 'force-static'

const BASE_URL = 'https://annotator.kr'
const SITE_TITLE = 'Annotator'
const SITE_DESCRIPTION =
  'PR lead with 11 years as a journalist. Building AI tools while working at the intersection of communications and engineering.'

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const items = postsEn
    .map((post) => {
      const url = `${BASE_URL}/en/blog/${post.slug}`
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(getPostDescription(post))}</description>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${BASE_URL}/en</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${new Date(postsEn[0]?.date ?? Date.now()).toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/en/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
