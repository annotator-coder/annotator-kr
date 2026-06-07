import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Annotator — 언론에서 스타트업, 에너지기업으로. 변화를 향해 일하는 사람.',
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
    desc: '필요한 것이 없으면 만든다. 위기대응 AI, 에너지 통계 대시보드, PR KPI 도구. 만드는 사람이 더 깊이 이해한다.',
  },
  {
    title: '기자의 관점을 잃지 않는다',
    desc: '"이 보도자료가 기사가 될 것인가" — 기자 출신 PR의 가장 큰 자산은 양쪽의 언어를 동시에 이해한다는 것이다.',
  },
]

const skills = [
  '전략 PR 기획', '위기 커뮤니케이션', 'CEO 메시지 관리',
  '미디어 관계', 'AI in Communications', '데이터 저널리즘',
  'HTML / CSS', 'JavaScript', 'Next.js', 'Node.js',
]

export default function About() {
  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <div className="page-header-inner">
          <p className="page-header-label">About</p>
          <h1 className="page-header-title">Annotator</h1>
          <p className="page-header-desc">
            과학을 좋아하던 아이는 국제정치와 협상을 전공하고 언론사에서 일했습니다.
            언론에서 수많은 사람들을 만나고 경험하며 관찰자에서 실행하고 싶어졌고,
            유니콘 스타트업에서 일하다 지금은 새로운 시대를 준비하는 에너지기업에서 일하고 있습니다.
            호기심 많은 아들의 아빠로 늘 재미있는 모험을 찾고 있습니다.
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
                언론사에서 사회, 정치, 기술을 취재하며 복잡한 현실을 독자가 이해할 수 있는 언어로 전달하는 일을 했다.
                개발자, 디자이너와 함께 협업하며 데이터 저널리즘과 인터랙티브 미디어를 연구했고,
                새로운 미디어 매체를 만들고 유튜브에도 출연했다.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)' }}>
                언론이 바뀌는 것을 기다리기 보다 콘텐츠와 커머스, 커뮤니티가 연결된 곳에서 역할을 하고 싶어
                유니콘 스타트업으로 옮겼고 브랜드의 언어를 배우며 위기관리와 대내외 커뮤니케이션의 기술을 익혔다.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)' }}>
                새로운 도전을 위해 대기업에서 팀리드를 맡아 전략적 커뮤니케이션에 대한 고민을 이어가고 있다.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <p className="section-label">수상·학력</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { title: '서울대학교 외교학과', sub: '우등 졸업 · GPA 3.77/4.3' },
                    { title: '한국온라인저널리즘어워드 2연속 수상', sub: '2017–2018 · 한국 최초' },
                    { title: 'Google News Lab Fellowship', sub: '심사위원 · 2018' },
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
