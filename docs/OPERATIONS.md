# annotator.kr 운영 설명서

> 개인 홈페이지(포트폴리오+블로그) 운영 매뉴얼. 2026-07 개편 기준.

## 한눈에 보기

- **스택**: Next.js 15 (App Router) · 마크다운 파일 기반 · Vercel
- **배포**: `git push origin main` → Vercel 자동 배포 (별도 배포 명령 없음, 약 90초 소요)
- **콘텐츠**: `content/blog/`(KO) · `content/en/blog/`(EN) · `content/portfolio/` · `content/en/portfolio/`
- **원칙**: KO가 원본. 블로그는 반드시 한/영 쌍으로 발행, slug·date 동일

## 글 발행 — 3가지 경로

### 1. 로컬 (Mac) — `/publish` 스킬
Claude Code에서 글 작성 후 `/publish` 한 마디면 끝:
검증 → EN 번역 생성 → 빌드 → 커밋 → 푸시 → 라이브 확인까지 자동.

### 2. 모바일·외부 — Claude Code 웹
claude.ai/code 에서 `annotator-coder/annotator-kr` 리포를 열면
폰·아이패드에서도 로컬과 동일하게 작성→커밋 가능. 푸시하면 자동 배포.

### 3. 간단 수정 — GitHub 웹
github.com에서 `content/` 아래 md 직접 편집 → 커밋. 오타 수정 수준에 적합.
단, EN 쌍·frontmatter는 수동 관리해야 하므로 새 글 발행에는 비추천.

## 콘텐츠 규칙

**블로그 frontmatter** (필수): `title` `date`(YYYY-MM-DD) `category` `excerpt` `readingTime` / 선택: `relatedPortfolioSlugs` `sourceUrl`

**포트폴리오 frontmatter** (필수): `order` `title` `category` `tags` `year` `tagline` / 본문 필드: `description` `problem` `approach[]` `outcome[]` — 리스트 필드에 백틱 금지(plain text 렌더)

**카테고리**: KO→EN 표준 매핑은 `scripts/validate-content.mjs`의 `CATEGORY_MAP`이 유일한 기준.
새 카테고리는 거기에 먼저 추가할 것. 임의 번역 시 EN 블로그 필터가 갈라진다.

**검증기**: `node scripts/validate-content.mjs`
필수 필드·날짜 형식·한영 쌍·카테고리 매핑을 검사. 에러 있으면 exit 1.

## SEO 체계

| 항목 | 위치 | 비고 |
|---|---|---|
| sitemap | `app/sitemap.ts` → `/sitemap.xml` | lastModified는 실제 글 날짜 기반 |
| RSS | `app/feed.xml/route.ts` → `/feed.xml` | KO 전체 글, 빌드 시 정적 생성 |
| robots | `app/robots.ts` | 전체 허용 + sitemap 지정 |
| Google | GSC 등록 완료 | 인증 메타: `app/layout.tsx` |
| Naver | 서치어드바이저 등록 완료 (2026-07) | 사이트맵·RSS 제출됨 |
| JSON-LD | `components/JsonLd.tsx` | 홈 WebSite, 글 Article 스키마 |
| OG 이미지 | `app/**/opengraph-image.tsx` | `public/fonts/*.otf` 사용 (삭제 금지) |
| hreflang | `lib/hreflang.ts` | ko/en/x-default |

새 글은 별도 작업 없이 sitemap·RSS에 자동 포함된다. 색인 확인은 GSC·서치어드바이저에서.

## 폰트

- **웹폰트**: `public/fonts/pretendard/` 셀프호스팅 (variable dynamic subset, 92청크).
  CDN 아님 — 외부 의존 없음. 업그레이드는 `pretendard` npm 패키지 갱신 후 `dist/web/variable/` 재복사
- **OG 이미지용**: `public/fonts/Pretendard-{Regular,Bold}.otf` — 코드에서 readFileSync로 사용, 삭제 금지

## 트러블슈팅

| 증상 | 확인 |
|---|---|
| 푸시했는데 반영 안 됨 | Vercel 대시보드 빌드 로그. 로컬 `npm run build`로 재현 |
| 글이 EN 페이지에 없음 | `content/en/`에 쌍 파일 존재 여부 → 검증기 실행 |
| EN 블로그 필터에 카테고리 중복 | CATEGORY_MAP과 실제 파일 category 대조 |
| GSC 리디렉션 오류 | `next.config.js`의 www→non-www 리디렉션, trailingSlash 설정 참조 |
| OG 이미지 깨짐 | `public/fonts/*.otf` 존재 확인 |

## 정기 점검 (월 1회 권장)

1. GSC·네이버 서치어드바이저에서 색인·노출 현황 확인
2. `node scripts/validate-content.mjs` 실행
3. Vercel Analytics에서 유입 상위 글 확인 → 다음 소재 참고
