# annotator.kr 개선 로드맵

> 작성: 2026-07-17 · SEO/AEO 1차 개선(카테고리 허브·스키마·메타) 커밋 `eaab0e9` 이후 수립
> 진행 방식: 위에서부터 순서대로, 한 항목씩 완료 후 커밋·배포

## 현황 요약

- Next 15 / React 19, 전 페이지 SSG, Vercel 배포, GA + Vercel Analytics + Speed Insights
- 블로그 KO/EN 48쌍, 포트폴리오 37쌍, hreflang·sitemap·robots·RSS(KO)·llms.txt·OG 이미지·JSON-LD 구비
- 카테고리 허브 12종(한/영) 운영 중

## P0 — 버그성 (즉시)

### 1. 네이버 호트링크 이미지 깨짐 수정
- **문제**: `postfiles.pstatic.net` 이미지가 외부 referer에 403 → 6개 포스트에서 이미지 깨짐
  (philomena, print-magazine-era, blackhole-review, jeju-dajayo, power-law-era, concrete-utopia)
- **단기 조치**: 마크다운 `img` 컴포넌트(ko/en 글 페이지)에 `referrerPolicy="no-referrer"` + `loading="lazy"` 추가
- 확인: 라이브에서 6개 포스트 이미지 렌더 확인

## P1 — SEO/AEO 마무리 (1차 개선 연장선)

### 2. 관련 글 내부 링크 ("함께 읽기")
- 글 하단에 같은 카테고리 최신 3개 링크 섹션 (ko/en) — 기존 relatedPortfolioSlugs 박스와 별도
- 내부 링크 밀도 강화 → 크롤링·체류시간 개선

### 3. BreadcrumbList JSON-LD
- 글 페이지: Home > Blog > {카테고리} > {글} / 카테고리 페이지: Home > Blog > {카테고리}
- 시각적 브레드크럼은 선택, 스키마 우선

### 4. EN RSS 피드
- `/en/feed.xml` 신설 (KO 피드 구조 재사용), `app/en/layout.tsx` 또는 head에 alternates 등록

### 5. html lang 근본 해결 (route group 분리)
- `(ko)`/`(en)` route group + 루트 레이아웃 분리 → 서버 HTML부터 `lang="en"` 정확히
- 완료 시 DocumentLang 컴포넌트 제거 가능. 리팩토링 규모 있음 — 빌드·전 URL 유지 확인 필수

## P2 — 콘텐츠·발견성

### 6. About 페이지 개편
- `docs/about-draft.md` 초안(2026-06-30, "경계인" 방향) 반영 → ko/en 동시 개편
- Person 스키마의 knowsAbout·jobTitle 등 보강 겸사

### 7. 이미지 자체 호스팅 마이그레이션
- 외부 CDN(pstatic·daumcdn) 이미지 다운로드 → `public/images/blog/<slug>/` → md 링크 교체
- 링크 사망 리스크 제거 + `next/image` 적용 가능해짐 (width/height → CLS 개선)
- 포스트 10개 대상, 스크립트로 일괄 처리 권장

### 8. 클라이언트 검색
- 블로그+포트폴리오 85건 대상 제목·발췌·카테고리 간단 검색 (빌드타임 인덱스 JSON + 클라이언트 필터)
- 외부 라이브러리 없이 가능한 규모

### 9. 주요 글 seoDescription 수작업 보강
- 유입 상위 글부터(GSC 참고) 자동 클램프 대신 정제된 `seoDescription` 프론트매터 작성
- 인프라는 이미 구축됨 (getPostDescription이 우선 사용)

## P3 — 성장 (선택)

### 10. 구독 동선
- RSS 구독 버튼 노출 or 뉴스레터(예: Buttondown) 연결 — 방향 결정 필요

### 11. 댓글 (giscus)
- GitHub Discussions 기반, 무료·광고 없음. 개인 블로그 톤과 맞는지 판단 후

### 12. 실제 개정 글에 updatedAt 활용
- 오래된 글 내용을 실질 업데이트할 때만 `updatedAt` 부여 (일괄 스탬프 금지 — 2026-07-17 제거 이력 참조)

## 진행 기록

- [x] P0-1 이미지 403 수정 (2026-07-17, `36402a6`)
- [x] P1-2 함께 읽기 (2026-07-17)
- [ ] P1-3 브레드크럼 스키마
- [ ] P1-4 EN RSS
- [ ] P1-5 lang route group
- [ ] P2-6 About 개편
- [ ] P2-7 이미지 자체 호스팅
- [ ] P2-8 검색
- [ ] P2-9 seoDescription 보강
- [ ] P3 검토
