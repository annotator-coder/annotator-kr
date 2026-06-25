import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getKoAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'About',
  description: '11년 기자 출신 PR 리드. 중앙일보 기자, 오늘의집 PR, GS칼텍스 PR팀장. AI 도구를 직접 만들며 커뮤니케이션과 엔지니어링의 경계에서 일합니다.',
  alternates: { ...getKoAlternates('/about') },
  openGraph: {
    title: 'About | Annotator',
    description: '11년 기자 출신 PR 리드. AI 도구를 직접 만들며 커뮤니케이션과 엔지니어링의 경계에서 일합니다.',
    url: 'https://annotator.kr/about',
    type: 'profile',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Annotator',
  url: 'https://annotator.kr',
  description: '11년 기자 출신 PR 리드. 중앙일보 기자, 오늘의집 PR, GS칼텍스 PR팀장. AI 도구를 직접 만들며 커뮤니케이션과 엔지니어링의 경계에서 일한다.',
  jobTitle: 'PR Lead',
  email: 'no1.annotator@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/wonyeob-jung-4583754b',
    'https://github.com/annotator-coder',
  ],
  knowsAbout: [
    'AI in Communications', '위기 커뮤니케이션', 'CEO 메시지 관리',
    '데이터 저널리즘', '전략 PR 기획', 'Prompt Engineering',
    'JavaScript', 'TypeScript', 'Next.js',
  ],
  award: [
    '한국온라인저널리즘어워드 2017 수상',
    '한국온라인저널리즘어워드 2018 수상',
    'Google News Lab Fellowship 심사위원 2018',
  ],
}


const values = [
  {
    title: '밀도 > 분량',
    desc: '많은 말보다 정확한 말 하나가 낫다. 기사를 쓸 때도, PR 메시지를 만들 때도, 코드를 짤 때도 같은 원칙이 적용된다.',
  },
  {
    title: '타이밍이 콘텐츠다',
    desc: '아무리 좋은 메시지도 시점이 틀리면 소음이 된다. 언제 말하는가가 무엇을 말하는가만큼 중요하다.',
  },
  {
    title: '도구는 직접 만든다',
    desc: '필요한 것이 없으면 만든다. 위기대응 AI 프로토타입, PR KPI 대시보드, 인터랙티브 데이터 저널리즘. 만드는 사람이 더 깊이 이해한다. 지금 이 사이트도 직접 코딩했다.',
  },
  {
    title: '기자의 관점을 잃지 않는다',
    desc: '"이 보도자료가 기사가 될 것인가" — 기자 출신 PR의 가장 큰 자산은 양쪽의 언어를 동시에 이해한다는 것이다.',
  },
]

const skills = [
  'AI in Communications', '위기 커뮤니케이션', 'CEO 메시지 관리',
  '데이터 저널리즘', '전략 PR 기획', 'Prompt Engineering',
  'JavaScript / TypeScript', 'Next.js', 'HTML / CSS', 'Python',
]

export default function About() {
  return (
    <>
      <JsonLd data={personSchema} />
      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="page-header-label">About</p>
          <h1 className="page-header-title">Annotator</h1>
          <p className="page-header-desc">
            11년간 기자로 기술 정책과 글로벌 이슈를 취재했고, 유니콘 스타트업에서 위기커뮤니케이션과 PR을 이끌었습니다.
            지금은 AI 도구를 직접 만들며 커뮤니케이션과 엔지니어링의 경계에서 일합니다.
            코드를 짜는 스토리텔러, 기자의 시각을 가진 PR 리드.
          </p>
        </div>
      </div>

      {/* STORY */}
      <section style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-separator)' }}>
        <div className="section-wrap">
          <div className="about-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p className="section-label">나의 이야기</p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)' }}>
                중앙일보에서 11년간 기자로 일했다. 정치·사회·기술을 취재했다. 구글 인앱결제 정책 공론화 연재, 판문점 3D 재현 인터랙티브, 미중 기술패권 심층 기획을 맡았다. Google News Lab Fellowship 심사위원으로도 참여했다.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)' }}>
                기자처럼 판단하고 PM처럼 운영한다. 무엇이 진짜 이야기이고 누가 진짜 독자인지 먼저 묻고, 데이터와 시스템과 AI 도구로 푼다. 오늘의집에서는 뉴스룸을 만들고 위기대응 AI 프로토타입을 설계했다. 티메프 사태 때는 데이터로 상황을 읽고 시나리오를 미리 짜 4주 만에 대응을 정리했다.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)' }}>
                지금은 대기업 PR 팀을 이끈다. 데일리 스탠드업, A/B 테스트, 데이터 기반 업무 결정, 회고 시스템을 적용해 팀을 운영하고 있다. 최근 관심사는 기술과 가치, 커뮤니케이션이 만나는 지점이다.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <p className="section-label">수상·학력</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { title: '한국온라인저널리즘어워드 2연속 수상', sub: '2017–2018 · 한국 최초' },
                    { title: 'Google News Lab Fellowship 심사위원', sub: '2018 · Google 선정' },
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
          <p className="section-label">가치관</p>
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
            <Link href="/portfolio" className="btn-primary">포트폴리오 보기</Link>
            <Link href="/blog" className="btn-secondary">글 읽기</Link>
          </div>
        </div>
      </section>
    </>
  )
}
