# 블로그 소재 스카우트 — 설계 문서

> 작성일: 2026-07-23
> 목적: Obsidian Clippings를 3일 주기로 스캔해 annotator.kr 블로그 소재를 자동 제안한다.

## 배경

Louis는 평소 annotator.kr(개인 블로그)에 쓸 소재가 바로 떠오르지 않는 경우가 많다. Obsidian vault의 `Clippings` 폴더에는 평소 스크랩한 아티클·트윗·영상이 쌓이는데, 이를 정기적으로 훑어 소재를 뽑아내는 시간이 따로 없다. 이 작업을 클라우드 라우틴으로 자동화한다.

## 핵심 제약: 실행 환경

`schedule` 스킬로 만드는 라우틴은 **Anthropic 클라우드의 완전 격리된 세션**에서 실행되며 로컬 파일시스템에 접근하지 못한다. Obsidian vault는 로컬 Google Drive 마운트 경로(`~/Library/CloudStorage/GoogleDrive-.../obsidian/2026_louis`)에 있어 직접 접근이 불가능하다.

**해결**: vault 자체가 Google Drive 안에 있으므로, 연결된 **Google Drive MCP 커넥터**로 우회한다. `search_files`(parentId 필터)가 폴더 내 마크다운 파일의 콘텐츠 스니펫까지 함께 반환하는 것을 확인했다(테스트 완료, 2~6KB 파일 기준 본문 손실 없음). `create_file`로 텍스트 콘텐츠를 새 파일로 업로드할 수 있다(`disableConversionToGoogleType: true`로 Google Docs 변환 방지).

**확인된 Drive 폴더 ID** (재사용):
| 폴더 | ID |
|---|---|
| Clippings | `1WinFOeNJi3jg-fC_LCiNUQ9-X3s7yE-F` |
| 20-Projects (vault 루트 하위) | `1xdQg74j5vyFndx_5lSKc6IbV9V7L-P10` |
| 블로그-소재제안 (출력 폴더) | 구현 단계에서 20-Projects 하위에 신규 생성, ID를 라우틴 프롬프트에 고정 |

**알려진 제약**: Gmail MCP 커넥터는 `create_draft`만 제공하고 실제 발송(`send`) 기능이 없다. "완료 알림"은 실제로는 **Gmail 임시보관함(draft) 생성**이며, 받은편지함 알림처럼 능동적으로 뜨지 않는다. Louis가 임시보관함을 열어봐야 확인 가능 — 이 한계를 인지하고 진행.

## 아키텍처

```
[schedule 스킬 / RemoteTrigger로 등록한 클라우드 라우틴]
  cron: "0 0 1,4,7,10,13,16,19,22,25,28 * *" (UTC) = 매월 1·4·7...일 09:00 KST
  git_repository: https://github.com/annotator-coder/annotator-kr (읽기 전용, dedupe용)
  mcp_connections: Google Drive, Gmail
  allowed_tools: Read, Grep, Glob, WebSearch

① Drive search_files(parentId=Clippings 폴더) → 전체 클리핑 스캔
② Drive search_files(parentId=출력 폴더) → 기존 제안 노트들의
   "## 근거 클리핑" 섹션 파싱 → 이미 검토한 클리핑 제목 집합 확보
③ 안전장치: 가장 최근 제안 노트가 24시간 이내 생성됐으면 즉시 종료 (중복 트리거 방지)
④ repo의 content/blog/*.md, content/en/blog/*.md 제목·카테고리 스캔 → 이미 다룬 주제 배제
⑤ (① - ②) 중 annotator.kr 소재로 쓸 만한 후보 2~3개 추출
   — 여러 클리핑을 하나의 주제/앵글로 묶는 것도 허용
   — 클리핑이 전부 이미 검토됐거나 소재감이 없으면: 강제로 만들지 않고
     "이번 사이클 신규 소재 없음" 노트만 남기고 종료
⑥ 가장 유력한 후보 1개에 한해 WebSearch로 보강 리서치
   (통계·최신 사례·반박 시각 등 3~5개, 출처 링크 필수)
⑦ 제안 노트 마크다운 작성 (형식은 아래) → Drive create_file로 출력 폴더에 저장
⑧ Gmail create_draft로 요약 메일(제목/후보 3줄 요약 + vault 노트 링크) 초안 생성
```

## 제안 노트 형식

파일명: `YYYY-MM-DD-제안.md`, 출력 폴더에 저장

```markdown
# 블로그 소재 제안 — YYYY-MM-DD

## 후보 1: [제목안]
- 카테고리: [annotator.kr 카테고리 체계 중 하나]
- 왜 지금: [근거 클리핑 기반 한 줄 설명]
- 앵글: [한 줄]

## 후보 2 / 후보 3: (동일 형식, 간단히)

## 구조 뼈대 — 후보 1 (가장 유력)
### 도입
- ...
### 관찰 (현상·데이터)
- ...
### 분석 (표면 원인 vs 구조적 원인)
- ...
### 인문학적 프레임
- ...
### 개인 경험 (Louis가 채울 자리)
- [자리표시]
### 전망 / 마무리 질문
- ...

## 리서치 출처
- [링크 + 한 줄 요약] × 3~5

## 근거 클리핑 (dedupe용)
- [클리핑 제목 1]
- [클리핑 제목 2]
```

`## 근거 클리핑` 섹션은 다음 사이클의 dedupe 파싱 대상이므로 형식을 반드시 유지한다.

## 소재 추출 · 집필 가이드

- annotator.kr 기존 카테고리 체계(에세이·칼럼 / AI in Communications / 서평 / 영화·드라마 / 전략 커뮤니케이션 / 여행·공간 / 커리어 / 저널리즘 / 위기 커뮤니케이션 / 데이터 저널리즘 / 국제 PR·캠페인 / 플랫폼 전략) 중 하나로 매핑
- 톤: 두괄식, 절제된 수식어, 개인 경험과 인문학적 프레임 결합 (`.claude/skills/blog/SKILL.md`의 Louis 문체 가이드 참고 — "생각" 카테고리 구조 공식을 기본 틀로 사용)
- "50% 초안" = 문장을 완성하지 않는다. 섹션별 개요 + 핵심 인용/데이터/링크만 채우고, 개인 경험 파트는 Louis가 채울 자리로 명시적으로 비워둔다.

## 에러·엣지 케이스

| 상황 | 처리 |
|---|---|
| 신규 클리핑 없음 (전부 이미 검토됨) | 노트에 "신규 소재 없음" 명시, 소재 억지로 안 만듦 |
| 클리핑은 있으나 블로그감이 아님 (단편적·광고성) | 후보에서 제외, 노트에 판단 근거 한 줄 남김 |
| WebSearch 결과 부족 | 클리핑 자체 정보만으로 뼈대 작성 + "추가 리서치 필요" 표시 |
| 24시간 내 이미 실행됨 | 즉시 종료 (중복 방지 안전장치) |
| Drive/repo 접근 실패 | 별도 재시도 로직 없음 — 다음 주기에 정상 실행되면 그걸로 충분 |

## 구현 단계 (writing-plans에서 다룰 것)

1. Drive에 `블로그-소재제안` 폴더 생성 (20-Projects 하위) → ID 확정
2. 라우틴 프롬프트 작성 — 위 아키텍처를 자기완결적 지시문으로 변환 (클라우드 세션은 이 대화 맥락을 모름)
3. `RemoteTrigger`로 라우틴 생성 (`run_once_at`으로 먼저 1회 테스트)
4. 테스트 실행 결과 확인: Drive에 노트 정상 생성 / Gmail draft 생성 / dedupe 로직 정상 동작
5. 문제 없으면 `cron_expression`으로 반복 전환
