const BASE = 'https://annotator.kr'

// Use on Korean pages: pass the Ko path (e.g. '/', '/about', '/portfolio/slug')
export function getKoAlternates(koPath: string) {
  const enPath = koPath === '/' ? '/en' : `/en${koPath}`
  return {
    canonical: `${BASE}${koPath}`,
    languages: {
      ko: `${BASE}${koPath}`,
      en: `${BASE}${enPath}`,
      'x-default': `${BASE}${koPath}`,
    },
    types: {
      'application/rss+xml': `${BASE}/feed.xml`,
    },
  }
}

// Use on English pages: pass the En path (e.g. '/en', '/en/about', '/en/portfolio/slug')
export function getEnAlternates(enPath: string) {
  const koPath = enPath === '/en' ? '/' : enPath.slice(3)
  return {
    canonical: `${BASE}${enPath}`,
    languages: {
      ko: `${BASE}${koPath}`,
      en: `${BASE}${enPath}`,
      'x-default': `${BASE}${koPath}`,
    },
    types: {
      'application/rss+xml': `${BASE}/en/feed.xml`,
    },
  }
}
