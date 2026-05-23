const career = [
  {
    period: '2024.11 —',
    company: 'GS칼텍스',
    role: 'PR2팀 팀장',
    note: '기업 커뮤니케이션 전략 수립 · CEO 메시지 관리 · 미디어 관계 · 9인 팀 리드',
    achievement: 'APEC 2025 경주 홍보 부스 기획·운영',
  },
  {
    period: '2022.06 — 2024.11',
    company: '오늘의집',
    role: '커뮤니케이션 팀장',
    note: '브랜드 커뮤니케이션 · 위기관리 PR · 스타트업 스케일업 시기 PR 전략',
    achievement: undefined,
  },
  {
    period: '2010 — 2022.06',
    company: '중앙일보',
    role: '기자 · 12년',
    note: '정치 · 기술 · 국제 이슈 취재 · 데이터 기반 저널리즘 · 탐사보도',
    achievement: undefined,
  },
]

const selectedWork = [
  {
    index: '01',
    title: '언론 위기대응 AI 시스템',
    category: 'AI · Crisis Communications',
    description:
      '언론 모니터링부터 대응 초안 생성까지 자동화한 AI 기반 위기대응 시스템. 이슈 탐지 → 심각도 분류 → 대응 메시지 생성 파이프라인을 구축해 팀 대응 속도를 단축.',
    href: 'https://github.com/annotator-coder/crisis-response-system',
    year: '2026',
  },
  {
    index: '02',
    title: 'PR팀 성과 대시보드',
    category: 'Data · Team Operations',
    description:
      'PR2팀 KPI를 실시간으로 시각화하는 팀 운영 도구. 언론 노출, 콘텐츠 성과, 스테이크홀더 반응 데이터를 통합해 주간 보고 자동화 및 의사결정 속도 개선.',
    href: 'https://annotator-coder.github.io/2026pr-dashboard/',
    year: '2026',
  },
  {
    index: '03',
    title: '에너지 갤러리 × Art Festa 콘텐츠 시리즈',
    category: 'Brand Journalism · Content Strategy',
    description:
      '아동 미술 공모전과 연계한 브랜드 저널리즘 기획. 75점의 수상작을 기사·인터뷰·에너지칼럼 3편 시리즈로 재구성해 ESG 스토리를 에디토리얼 포맷으로 전달.',
    href: 'https://gscaltexmediahub.com/artfesta/',
    year: '2026',
  },
]

const capabilities = [
  '전략 PR 기획',
  '위기 커뮤니케이션',
  'CEO 메시지 관리',
  '미디어 관계',
  'AI in Communications',
  '데이터 저널리즘',
]

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wonyeob-jung-4583754b' },
  { label: 'GitHub', href: 'https://github.com/annotator-coder' },
]

export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 3rem',
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{
          paddingTop: '5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--line)',
          position: 'relative',
        }}
      >
        {/* Running year — top right */}
        <div
          className="hero-year fade-up fade-up-1"
          style={{
            position: 'absolute',
            top: '5rem',
            right: 0,
            fontFamily: 'var(--font-dm-mono), monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            color: 'var(--muted)',
          }}
        >
          2010 ——
        </div>

        {/* Masthead name */}
        <h1
          className="fade-up fade-up-1"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(5.5rem, 17vw, 16rem)',
            fontWeight: 300,
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            marginBottom: '2.5rem',
            color: 'var(--fg)',
          }}
        >
          Anno
          <br />
          <em
            style={{
              fontStyle: 'italic',
              color: 'var(--accent)',
            }}
          >
            tator
          </em>
        </h1>

        {/* Rule */}
        <div style={{ height: '1px', background: 'var(--fg)', marginBottom: '1.75rem' }} />

        {/* Dateline row */}
        <div
          className="fade-up fade-up-2"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--muted)',
              lineHeight: 1.3,
            }}
          >
            전략을 짜고, 콘텐츠를 만들고, 필요한 도구는 직접 짠다.
          </p>
          <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            <a
              href="mailto:no1.annotator@gmail.com"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--fg)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--fg)',
                paddingBottom: '2px',
              }}
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/wonyeob-jung-4583754b"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--fg)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--fg)',
                paddingBottom: '2px',
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        className="fade-up fade-up-2"
        style={{
          padding: '4.5rem 0',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="section-grid">
          <span className="section-label">About</span>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(1.35rem, 2.4vw, 2rem)',
                fontWeight: 400,
                lineHeight: 1.5,
                color: 'var(--fg)',
                marginBottom: '1.5rem',
              }}
            >
              16년간 언어로 세상을 기록했다. 정치, 기술, 국제 이슈를
              취재하며 복잡한 현실을 독자가 이해할 수 있는 언어로 번역하는 일을 했다.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(1.35rem, 2.4vw, 2rem)',
                fontWeight: 400,
                lineHeight: 1.5,
                color: 'var(--fg)',
              }}
            >
              지금은 조직이 세상과 전략적으로 소통하도록 돕는다.
              브랜드 저널리즘의 관점으로 콘텐츠를 설계하고, AI로 팀의 프로세스를
              바꾸며, 필요한 도구는 직접 만든다.
            </p>
          </div>
        </div>
      </section>

      {/* ── CAREER ── */}
      <section
        className="fade-up fade-up-3"
        style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--line)' }}
      >
        {/* Header row */}
        <div className="section-grid" style={{ marginBottom: '0' }}>
          <span className="section-label">Career</span>
          <div />
        </div>

        {career.map((item, i) => (
          <div key={i} className="career-item">
            <div
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '0.72rem',
                color: 'var(--muted)',
                lineHeight: 1.6,
                letterSpacing: '0.04em',
                paddingTop: '0.25rem',
              }}
            >
              {item.period}
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.6rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                    fontWeight: 400,
                    color: 'var(--fg)',
                  }}
                >
                  {item.company}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.8rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {item.role}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.88rem',
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                }}
              >
                {item.note}
              </p>
              {item.achievement && (
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.78rem',
                    color: 'var(--accent)',
                    marginTop: '0.6rem',
                    letterSpacing: '0.03em',
                  }}
                >
                  ↳ {item.achievement}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* ── SELECTED WORK ── */}
      <section
        className="fade-up fade-up-3"
        style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--line)' }}
      >
        <div className="section-grid" style={{ marginBottom: '0' }}>
          <span className="section-label">Selected Work</span>
          <div />
        </div>

        {selectedWork.map((item) => (
          <a
            key={item.index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <div className="work-item">
              {/* Index + Year */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '0.65rem',
                    letterSpacing: '0.18em',
                    color: 'var(--line)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.index}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '0.7rem',
                    color: 'var(--muted)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {item.year}
                </div>
              </div>

              {/* Title + Description */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '1rem',
                    marginBottom: '0.7rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                      fontWeight: 400,
                      color: 'var(--fg)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.88rem',
                    color: 'var(--muted)',
                    lineHeight: 1.75,
                    maxWidth: '640px',
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="work-arrow">↗</div>
            </div>
          </a>
        ))}
      </section>

      {/* ── CAPABILITIES ── */}
      <section
        className="fade-up fade-up-4"
        style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--line)' }}
      >
        <div className="section-grid">
          <span className="section-label">Capabilities</span>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            }}
          >
            {capabilities.map((cap, i) => (
              <div
                key={i}
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(1.15rem, 1.8vw, 1.5rem)',
                  fontWeight: 400,
                  padding: '1.1rem 0',
                  borderBottom: '1px solid var(--line)',
                  color: 'var(--fg)',
                  letterSpacing: '0.01em',
                }}
              >
                {cap}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        className="fade-up fade-up-4"
        style={{ padding: '4.5rem 0 6rem' }}
      >
        <div className="section-grid">
          <span className="section-label">Contact</span>
          <div>
            <a
              href="mailto:no1.annotator@gmail.com"
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(1.4rem, 3vw, 2.4rem)',
                fontWeight: 400,
                color: 'var(--fg)',
                textDecoration: 'none',
                display: 'inline-block',
                borderBottom: '1px solid var(--fg)',
                paddingBottom: '4px',
                marginBottom: '2.5rem',
                transition: 'color 0.2s',
              }}
            >
              no1.annotator@gmail.com
            </a>
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              {socials.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: '1px solid var(--line)',
          padding: '1.5rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-mono), monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: 'var(--muted)',
            textTransform: 'uppercase',
          }}
        >
          Annotator © {new Date().getFullYear()}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-dm-mono), monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            color: 'var(--muted)',
          }}
        >
          Seoul, Korea
        </span>
      </footer>
    </main>
  )
}
