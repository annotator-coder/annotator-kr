---
name: publish
description: Use when new or edited posts/portfolio items in content/ need to go live on annotator.kr — including "발행해줘", "올려줘", "배포해줘", uncommitted md files in content/, or a missing EN translation. Handles the full local publish flow for this repo.
---

# Publish — annotator.kr 콘텐츠 발행

## Overview

`content/` 변경분을 검증→번역→빌드→커밋→푸시까지 한 번에 처리한다.
푸시하면 Vercel이 자동 배포하므로 별도 배포 명령은 없다.

## 절차

1. **변경 감지**: `git status --short content/` 로 신규·수정 md 파악
2. **EN 번역 생성**: KO 파일에 대응하는 `content/en/...` 파일이 없으면 작성
   - 블로그: `content/blog/<slug>.md` → `content/en/blog/<slug>.md` (같은 slug, 같은 date)
   - 포트폴리오: `content/portfolio/<slug>.md` → `content/en/portfolio/<slug>.md` (frontmatter 구조·order 동일)
   - 번역 톤: 직역 금지. 에세이 어조 유지, 관용구는 영어 자연 표현으로. 제목의 `—` 스타일 유지
   - 카테고리는 반드시 `scripts/validate-content.mjs`의 `CATEGORY_MAP` 표준값 사용
3. **검증**: `node scripts/validate-content.mjs` — 에러 0이 될 때까지 수정. 새 카테고리라면 CATEGORY_MAP에 먼저 추가
4. **빌드**: `npm run build` 통과 확인
5. **커밋·푸시**: `content: <제목 요약> 추가 (한/영)` 형식, 70자 이내. `git push origin main`
6. **라이브 확인**: 약 90초 후 `curl -sI https://annotator.kr/blog/<slug>` (또는 `/portfolio/<slug>`) 가 HTTP 200인지 확인

## 규칙

- KO 없이 EN만 발행하지 않는다 (KO가 원본)
- 블로그는 EN 누락 시 **에러**(발행 불가), 포트폴리오는 경고(가급적 함께 발행)
- frontmatter의 `approach` 등 리스트 필드에 백틱(`) 넣지 않는다 — plain text로 렌더됨
- 검증·빌드 실패 상태로 커밋하지 않는다

## Common Mistakes

| 실수 | 결과 |
|---|---|
| EN 카테고리를 임의 번역 | 블로그 필터 버킷이 갈라짐 → 반드시 CATEGORY_MAP 사용 |
| KO/EN 날짜 다르게 입력 | sitemap·RSS 날짜 불일치 (검증기가 경고) |
| 빌드 생략하고 푸시 | 프로덕션 배포 실패 |
