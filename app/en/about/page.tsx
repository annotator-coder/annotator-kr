import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getEnAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'About',
  description: 'PR Lead with 11 years as a journalist. Former JoongAng Ilbo reporter, Ohouse PR, now at GS Caltex. Building AI tools at the intersection of storytelling and engineering.',
  alternates: getEnAlternates('/en/about'),
  openGraph: {
    title: 'About | Annotator',
    description: 'PR Lead with 11 years as a journalist. Building AI tools at the intersection of communication and engineering.',
    url: 'https://annotator.kr/en/about',
    type: 'profile',
    locale: 'en_US',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Annotator',
  url: 'https://annotator.kr/en',
  description: 'PR Lead with 11 years as a journalist. Former JoongAng Ilbo reporter, Ohouse PR, now PR team lead at a major energy company. Building AI tools at the intersection of communication and engineering.',
  jobTitle: 'PR Lead',
  email: 'no1.annotator@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/wonyeob-jung-4583754b',
    'https://github.com/annotator-coder',
  ],
  knowsAbout: [
    'AI in Communications', 'Crisis Communication', 'CEO Messaging',
    'Data Journalism', 'Strategic PR', 'Prompt Engineering',
    'JavaScript', 'TypeScript', 'Next.js',
  ],
  award: [
    'Korean Online Journalism Award 2017',
    'Korean Online Journalism Award 2018',
    'Google News Lab Fellowship Judge 2018',
  ],
}

const values = [
  {
    title: 'Density over volume',
    desc: 'One precise word beats ten vague ones. The same principle applies whether writing an article, crafting a PR message, or writing code.',
  },
  {
    title: 'Timing is content',
    desc: 'Even the best message becomes noise if the timing is wrong. When you speak matters as much as what you say.',
  },
  {
    title: 'Build the tools yourself',
    desc: "If the tool doesn't exist, build it. Crisis AI prototype, PR KPI dashboard, interactive data journalism. Builders understand more deeply. This site, too, is hand-coded.",
  },
  {
    title: "Keep the journalist's eye",
    desc: '"Will this press release become a story?" — The biggest asset of a journalist-turned-PR is understanding both sides of the conversation simultaneously.',
  },
]

const skills = [
  'AI in Communications', 'Crisis Communication', 'CEO Messaging',
  'Data Journalism', 'Strategic PR Planning', 'Prompt Engineering',
  'JavaScript / TypeScript', 'Next.js', 'HTML / CSS', 'Python',
]

export default function EnAbout() {
  return (
    <>
      <JsonLd data={personSchema} />

      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="page-header-label">About</p>
          <h1 className="page-header-title">Annotator</h1>
          <p className="page-header-desc">
            Spent 11 years as a journalist covering technology policy and global issues, then led crisis communication and PR at a unicorn startup.
            Now building AI tools at the intersection of communication and engineering.
            A storyteller who codes. A PR lead with a journalist's eye.
          </p>
        </div>
      </div>

      {/* STORY */}
      <section style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-separator)' }}>
        <div className="section-wrap">
          <div className="about-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p className="section-label">My Story</p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)' }}>
                I spent 11 years at JoongAng Ilbo covering society, politics, and technology. From leading public discourse on Google's in-app billing policy to recreating Panmunjeom in 3D, to deep analyses of the US-China tech rivalry — the journalist's job was to translate complex reality into language readers could understand. I also served as a judge for the Google News Lab Fellowship.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)' }}>
                Working alongside engineers, I naturally started building my own tools. At Ohouse (a unicorn startup), I launched a newsroom and designed a crisis response AI prototype. When external shocks like the TMON/WeMakePrice crisis hit, it was a data-driven, scenario-based approach that brought things under control within four weeks.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)' }}>
                Now I work as a PR team lead, building communication tools directly with AI, HTML, and JavaScript. I keep experimenting with what someone who holds both the language of journalism and the mindset of engineering can uniquely do.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <p className="section-label">Awards & Recognition</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { title: 'Korean Online Journalism Award — 2 consecutive years', sub: '2017–2018 · First in Korea' },
                    { title: 'Google News Lab Fellowship Judge', sub: '2018 · Selected by Google' },
                  ].map((item) => (
                    <div key={item.title} style={{ fontSize: '0.9375rem' }}>
                      <span style={{ fontWeight: 600 }}>{item.title}</span>
                      <span style={{ color: 'var(--color-label-muted)', marginLeft: '8px' }}>{item.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="section-label">Skills</p>
                <div className="skill-chips">
                  {skills.map((s) => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="section-label">Contact</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="mailto:no1.annotator@gmail.com" className="btn-ghost">
                    no1.annotator@gmail.com ↗
                  </a>
                  <a href="https://www.linkedin.com/in/wonyeob-jung-4583754b" target="_blank" rel="noopener" className="btn-ghost">
                    LinkedIn ↗
                  </a>
                  <a href="https://github.com/annotator-coder" target="_blank" rel="noopener" className="btn-ghost">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: 'var(--color-bg-secondary)', borderBottom: '1px solid var(--color-separator)' }}>
        <div className="section-wrap">
          <p className="section-label">Values</p>
          <div className="cards-grid">
            {values.map((v) => (
              <div key={v.title} style={{
                background: 'var(--color-bg)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                border: '1px solid var(--color-separator)',
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '10px' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-label-muted)', lineHeight: 1.65 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-separator)' }}>
        <div className="section-wrap" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/en/portfolio" className="btn-primary">View Portfolio</Link>
            <Link href="/en/blog" className="btn-secondary">Read Blog</Link>
          </div>
        </div>
      </section>
    </>
  )
}
