import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: '기자에서 PR전략가, AI빌더로. 정원엽의 커리어 스토리와 가치관.',
}

const career = [
  {
    period: '2024.11 —',
    company: 'GS칼텍스',
    role: 'PR2팀 팀장',
    note: '기업 커뮤니케이션 전략 수립 · CEO 메시지 관리 · 미디어 관계 · 9인 팀 리드. AI 기반 위기대응 시스템, 에너지 통계 대시보드 등 데이터·AI 도구 직접 구축.',
  },
  {
    period: '2022.06 — 2024.11',
    company: '오늘의집',
    role: '커뮤니케이션 팀장',
    note: '브랜드 커뮤니케이션 · 위기관리 PR · 스타트업 스케일업 시기 PR 전략. 유니콘 성장 과정에서의 언론 대응 및 브랜드 저널리즘 기획.',
  },
  {
    period: '2010 — 2022.06',
    company: '중앙일보',
    role: '기자 · 12년',
    note: '정치부, 테크부, 국제부. 데이터 저널리즘, 탐사보도. 복잡한 현실을 독자가 이해할 수 있는 언어로 번역하는 훈련.',
  },
]

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
          <h1 className="page-header-title">정원엽</h1>
          <p className="page-header-desc">
            기자, PR전략가, AI 빌더. 언어와 코드로 조직의 소통을 설계합니다.
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
                16년간 언어로 세상을 기록했다. 중앙일보에서 정치, 기술, 국제 이슈를 취재하며
                복잡한 현실을 독자가 이해할 수 있는 언어로 번역하는 일을 했다.
                데이터 저널리즘을 익히고, 탐사보도를 하면서 "어떻게 하면 중요한 것을 명확하게 전달할 수 있는가"를
                끊임없이 고민했다.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)' }}>
                오늘의집에서 커뮤니케이션 팀장을 맡으면서 방향이 바뀌었다. 스타트업이 유니콘으로 성장하는 과정에서
                브랜드의 언어를 설계하고, 위기를 관리하고, 미디어와 관계를 구축하는 일을 했다.
                기자 출신의 강점은 "저쪽에서 어떻게 보이는가"를 알고 있다는 것이었다.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-label-muted)' }}>
                GS칼텍스 PR2팀장을 맡으면서 새로운 실험을 시작했다. 팀이 필요한 도구가 없으면 직접 만든다.
                AI 위기대응 시스템, 에너지 통계 대시보드, 인터랙티브 데이터 시각화.
                커뮤니케이션 전략가가 개발 도구를 직접 쓸 때 어떤 것들이 가능해지는지 탐구하고 있다.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
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

      {/* CAREER */}
      <section style={{ background: 'var(--color-bg)' }}>
        <div className="section-wrap">
          <p className="section-label">Career</p>
          <div>
            {career.map((item, i) => (
              <div key={i} className="timeline-item">
                <div>
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-role">{item.role}</div>
                </div>
                <div>
                  <div className="timeline-company">{item.company}</div>
                  <div className="timeline-note">{item.note}</div>
                </div>
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
