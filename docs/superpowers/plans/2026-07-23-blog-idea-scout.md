# 블로그 소재 스카우트 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Obsidian Clippings를 3일(월 1·4·7...일) 주기로 스캔해 annotator.kr 블로그 소재 2~3개 + 유력 후보 1개의 구조 뼈대 초안을 자동 생성하는 클라우드 라우틴을 만든다.

**Architecture:** `schedule` 스킬(`RemoteTrigger`)로 등록하는 클라우드 라우틴 하나. 로컬 파일시스템에 접근할 수 없으므로 Google Drive MCP 커넥터로 Obsidian vault(Clippings 폴더)를 읽고 제안 노트를 쓴다. annotator-kr GitHub repo는 git_repository 소스로 붙여 기존 블로그 글과의 중복 체크에만 쓴다. 완료 후 Gmail MCP 커넥터로 요약 draft를 만든다.

**Tech Stack:** Claude Code 클라우드 라우틴 (CCR), Google Drive MCP connector, Gmail MCP connector, WebSearch

**참조 문서:** `docs/superpowers/specs/2026-07-23-blog-idea-scout-design.md`

**이미 확정된 값 (브레인스토밍 중 실측):**
| 항목 | 값 |
|---|---|
| Clippings 폴더 ID | `1WinFOeNJi3jg-fC_LCiNUQ9-X3s7yE-F` |
| 블로그-소재제안 출력 폴더 ID | `1OQ1MRX273wEe-dbqnz0aluBd539OetGH` (20-Projects 하위에 이미 생성 완료) |
| Google Drive 커넥터 | `connector_uuid: 1dea8d8f-5109-400b-8e23-a6a502b3cdac`, `name: Google-Drive`, `url: https://drivemcp.googleapis.com/mcp/v1` |
| Gmail 커넥터 | `connector_uuid: a997eee0-b981-4dd4-ad8e-3347b3a5f0ad`, `name: Gmail`, `url: https://gmailmcp.googleapis.com/mcp/v1` |
| 대상 repo | `https://github.com/annotator-coder/annotator-kr` |
| 알림 수신 메일 | `no1.annotator@gmail.com` |

---

### Task 1: 라우틴 프롬프트 파일 작성

**Files:**
- Create: `docs/blog-idea-scout-routine-prompt.md`

- [ ] **Step 1: 아래 내용 그대로 파일 생성**

```markdown
# 블로그 소재 스카우트 — 라우틴 실행 지시

너는 Louis(annotator.kr 개인 블로그 운영자)를 위해 3일 주기로 실행되는 블로그 소재 발굴 에이전트다.
이 실행은 이전 실행과 대화 맥락을 공유하지 않는다. 아래 지시만으로 완결적으로 작업하라.

## 사용 가능한 도구

- Google Drive MCP 커넥터: `search_files`, `create_file`, `read_file_content`, `get_file_metadata`
- Gmail MCP 커넥터: `create_draft`, `list_drafts`
- `WebSearch`
- `Bash` (오늘 날짜 확인 용도로만 — `date -u +%Y-%m-%d`)
- `Read`, `Grep`, `Glob` (체크아웃된 annotator-kr repo 파일 확인용)

## 고정 ID (검색으로 다시 찾지 말고 그대로 사용)

- Clippings 폴더 ID: `1WinFOeNJi3jg-fC_LCiNUQ9-X3s7yE-F`
- 출력 폴더(블로그-소재제안) ID: `1OQ1MRX273wEe-dbqnz0aluBd539OetGH`

## 절차

### 0단계 — 오늘 날짜 확인
`Bash`로 `date -u +%Y-%m-%d` 실행해 오늘 날짜(D)를 구한다. 이후 모든 파일명·본문에 사용.

### 1단계 — 안전장치: 중복 실행 방지
Google Drive `search_files`로 `parentId = '1OQ1MRX273wEe-dbqnz0aluBd539OetGH'` 조회.
결과 중 `createdTime`이 가장 최근인 파일을 확인한다. 그 시각이 현재로부터 24시간 이내이면
**즉시 작업을 종료**한다 (추가 행동 없음, draft도 만들지 않음).

### 2단계 — 클리핑 전체 스캔
Google Drive `search_files`로 `parentId = '1WinFOeNJi3jg-fC_LCiNUQ9-X3s7yE-F'` 조회.
`nextPageToken`이 있으면 끝까지 페이지네이션해서 전체 클리핑 목록(제목·본문 스니펫·생성일)을 확보한다.

### 3단계 — 이미 검토한 클리핑 제외 (dedupe)
1단계에서 이미 가져온 출력 폴더의 기존 제안 노트 파일들을 각각 `read_file_content`로 읽는다.
각 노트의 `## 근거 클리핑 (dedupe용)` 섹션 아래 나열된 클리핑 제목들을 모두 모아 "이미 검토한 집합"으로 만든다.
2단계 목록에서 이 집합에 속한 클리핑을 제외한다.

### 4단계 — 기존 블로그 글과 중복 배제
`Glob`으로 `content/blog/*.md`와 `content/en/blog/*.md`를 찾고, 각 파일 상단 frontmatter의
`title:`, `category:` 값을 `Read` 또는 `Grep`으로 확인한다. 이미 다룬 주제와 겹치는 소재는
3단계 결과에서 제외한다.

### 5단계 — 소재 없으면 종료
3~4단계를 거치고도 소재로 쓸 만한 클리핑이 없으면 (전부 제외됐거나, 남은 것이 전부
단편적/광고성이라 블로그 소재가 안 됨) 아래 "소재 없음 노트"만 만들고 8단계(Gmail)로 건너뛴다.
억지로 소재를 만들어내지 않는다.

**소재 없음 노트** (제목: `D-제안.md`, 출력 폴더에 생성):
```
# 블로그 소재 제안 — D

이번 사이클에는 신규로 제안할 소재가 없습니다.
(검토한 클리핑: 전부 이전 사이클에서 이미 다룸 / 또는 소재감 있는 클리핑 없음)

## 근거 클리핑 (dedupe용)
- (이번 사이클에서 새로 검토한 클리핑이 있다면 여기 나열, 없으면 빈 채로 둠)
```

### 6단계 — 소재 후보 2~3개 추출
남은 클리핑에서 annotator.kr에 쓸 만한 소재 후보 2~3개를 뽑는다. 여러 클리핑을 하나의
주제/앵글로 묶어도 된다. 각 후보에 아래 카테고리 중 하나를 매핑한다:

에세이·칼럼 / AI in Communications / 서평 / 영화·드라마 / 전략 커뮤니케이션 /
여행·공간 / 커리어 / 저널리즘 / 위기 커뮤니케이션 / 데이터 저널리즘 / 국제 PR·캠페인 / 플랫폼 전략

### 7단계 — 유력 후보 리서치 + 구조 뼈대 작성
6단계 후보 중 가장 유력한 1개를 골라 `WebSearch`로 보강 자료(통계·최신 사례·반박 시각 등)
3~5개를 찾는다. 반드시 출처 링크를 남긴다.

검색해도 관련성 있는 자료가 2개 미만이면, 억지로 채우지 말고 클리핑 자체 정보만으로
구조 뼈대를 작성하고 "리서치 출처" 섹션 마지막 줄에 `(추가 리서치 필요 — 검색 결과 부족)`을
남긴다.

**Louis 문체 가이드** (구조 뼈대 작성 시 반영):
- 두괄식, 핵심 문장 먼저. "정말/너무/완전히" 같은 수식어 남발 금지
- 체험·시사·책·현상을 철학·역사·경제학 키워드로 연결하는 게 Louis의 특기
- 개인 경험 기반 서술을 선호하지만, 너는 Louis의 실제 경험을 모르므로 그 자리는
  반드시 "[Louis가 채울 자리]"로 비워둔다 — 지어내지 않는다
- "생각(에세이)" 구조 공식을 기본 틀로 사용: 도입(발견/질문) → 관찰(현상·데이터) →
  분석(표면 원인 vs 구조적 원인) → 인문학적 프레임 → 개인 경험 → 전망/마무리 질문

**"50% 초안"의 의미**: 문장을 완성하지 않는다. 섹션별로 다룰 내용의 개요와 핵심
인용·데이터·링크만 채운다. 실제 산문은 쓰지 않는다.

### 8단계 — 제안 노트 작성 (Drive에 저장)
아래 형식으로 마크다운을 작성하고, `create_file`로
`parentId: '1OQ1MRX273wEe-dbqnz0aluBd539OetGH'`, `title: 'D-제안.md'`,
`contentMimeType: 'text/markdown'`, `disableConversionToGoogleType: true`,
`textContent: <아래 형식으로 작성한 전체 내용>` 로 업로드한다.

```
# 블로그 소재 제안 — D

## 후보 1: [제목안]
- 카테고리: [위 카테고리 목록 중 하나]
- 왜 지금: [근거 클리핑 제목 인용 + 한 줄 설명]
- 앵글: [한 줄]

## 후보 2: [동일 형식]

## 후보 3: [동일 형식, 있는 경우만]

## 구조 뼈대 — 후보 1 (가장 유력)
### 도입
- [개요]
### 관찰 (현상·데이터)
- [개요 + 리서치 데이터]
### 분석 (표면 원인 vs 구조적 원인)
- [개요]
### 인문학적 프레임
- [연결할 개념/이론]
### 개인 경험
- [Louis가 채울 자리]
### 전망 / 마무리 질문
- [개요]

## 리서치 출처
- [링크] — [한 줄 요약]
(3~5개)

## 근거 클리핑 (dedupe용)
- [이번 사이클에서 검토한 클리핑 제목 전부 나열 — 후보로 채택 안 된 것도 포함]
```

`## 근거 클리핑 (dedupe용)` 섹션은 다음 실행의 3단계가 파싱하는 부분이므로 형식을 반드시 지킨다.
이번 사이클에서 실제로 열어본(검토한) 클리핑은 채택 여부와 무관하게 전부 여기 나열한다.

### 8-1단계 — 소재 없음인 경우
5단계에서 이미 노트를 만들었다면 8단계는 건너뛴다.

### 9단계 — Gmail 알림 draft 생성
Gmail `create_draft`로:
- `to`: `["no1.annotator@gmail.com"]`
- `subject`: `[블로그 소재 제안] D`
- `body`: 후보 제목 2~3개 목록 + 유력 후보 1개 앵글 한 줄 + "전체 내용은 Obsidian vault > 20-Projects > 블로그-소재제안 > D-제안.md 참고" 안내
  (소재 없음인 경우 body에 "이번 사이클 신규 소재 없음"만 명시)
```

- [ ] **Step 2: git에 커밋**

```bash
git add docs/blog-idea-scout-routine-prompt.md
git commit -m "docs: 블로그 소재 스카우트 라우틴 프롬프트 추가"
```

---

### Task 2: 테스트용 1회성 라우틴 생성

**Files:** 없음 (API 호출만)

- [ ] **Step 1: 필요한 도구 로드**

`ToolSearch`로 `select:RemoteTrigger` 호출해 스키마를 로드한다 (이미 이번 대화에서 로드했다면 생략).

- [ ] **Step 2: 현재 UTC 시각 확인**

```bash
date -u +%Y-%m-%dT%H:%M:%SZ
```

이 값에서 10분을 더한 시각을 `run_once_at`에 쓴다 (예: 현재가 `2026-07-23T08:00:00Z`이면
`2026-07-23T08:10:00Z`).

- [ ] **Step 3: `docs/blog-idea-scout-routine-prompt.md`의 전체 내용을 복사**해 아래 body의
`events[0].data.message.content`에 그대로 붙여넣는다. `<UUID>`는 새로 생성한 lowercase v4
UUID로, `<RUN_ONCE_AT>`는 Step 2에서 계산한 값으로 치환한다.

```json
{
  "name": "블로그-소재-스카우트-TEST",
  "run_once_at": "<RUN_ONCE_AT>",
  "enabled": true,
  "job_config": {
    "ccr": {
      "environment_id": "env_01Q92Lk7LEgkHtfiRuGASqwG",
      "session_context": {
        "model": "claude-sonnet-5",
        "sources": [
          {"git_repository": {"url": "https://github.com/annotator-coder/annotator-kr"}}
        ],
        "allowed_tools": ["Bash", "Read", "Grep", "Glob", "WebSearch"]
      },
      "events": [
        {"data": {
          "uuid": "<UUID>",
          "session_id": "",
          "type": "user",
          "parent_tool_use_id": null,
          "message": {"content": "<PROMPT 파일 전체 내용>", "role": "user"}
        }}
      ]
    }
  },
  "mcp_connections": [
    {"connector_uuid": "1dea8d8f-5109-400b-8e23-a6a502b3cdac", "name": "Google-Drive", "url": "https://drivemcp.googleapis.com/mcp/v1"},
    {"connector_uuid": "a997eee0-b981-4dd4-ad8e-3347b3a5f0ad", "name": "Gmail", "url": "https://gmailmcp.googleapis.com/mcp/v1"}
  ]
}
```

`RemoteTrigger`를 `action: "create"`, 위 JSON을 `body`로 호출한다.

- [ ] **Step 4: 응답에서 `trigger_id`(routine ID)를 기록**해두고,
`https://claude.ai/code/routines/{ROUTINE_ID}` 링크를 확인용으로 남긴다.

---

### Task 3: 테스트 실행 결과 검증

**Files:** 없음 (검증만)

- [ ] **Step 1: 실행 대기**

`run_once_at` 시각 + 5분 정도 기다린다 (클라우드 세션이 리서치까지 하므로 수 분 소요될 수 있음).

- [ ] **Step 2: 라우틴 상태 확인**

`RemoteTrigger`를 `action: "get"`, `trigger_id: <Task 2에서 기록한 ID>`로 호출해
`ended_reason`이 `run_once_fired`인지 확인한다. 아직이면 다시 몇 분 대기 후 재확인.

- [ ] **Step 3: Drive에 노트가 생성됐는지 확인**

```
mcp__claude_ai_Google_Drive__search_files
query: "parentId = '1OQ1MRX273wEe-dbqnz0aluBd539OetGH'"
```

`D-제안.md` (D = 테스트 실행일) 파일이 있는지, `read_file_content`로 열어 형식이
Task 1의 템플릿(후보 2~3개 + 구조 뼈대 + 근거 클리핑 섹션)을 따르는지 확인한다.

- [ ] **Step 4: Gmail draft 확인**

```
mcp__claude_ai_Gmail__list_drafts
query: "subject:블로그 소재 제안"
```

draft가 생성됐는지, subject/body가 지시대로 채워졌는지 확인한다.

- [ ] **Step 5: 문제 발견 시 프롬프트 수정 후 재테스트**

`docs/blog-idea-scout-routine-prompt.md`를 수정하고 커밋한 뒤, `RemoteTrigger`
`action: "update"`로 해당 라우틴의 `job_config`를 새 프롬프트로 갱신하고,
새 `run_once_at`(현재 시각 + 10분)으로 다시 Step 1부터 반복한다.
문제가 없을 때까지 이 사이클을 반복한다.

---

### Task 4: 반복 스케줄로 전환

**Files:**
- Modify: `docs/blog-idea-scout-routine-prompt.md` (이름 변경 불필요, 내용은 Task 3에서 검증 완료된 버전 유지)
- Create: `docs/blog-idea-scout-config.md`

- [ ] **Step 1: 라우틴을 반복 스케줄로 갱신**

`RemoteTrigger`를 `action: "update"`, `trigger_id: <테스트 라우틴 ID>`,
아래 `body`로 호출한다 (테스트용 `run_once_at` 제거, `cron_expression`으로 교체,
이름을 운영용으로 변경):

```json
{
  "name": "블로그-소재-스카우트",
  "cron_expression": "0 0 1,4,7,10,13,16,19,22,25,28 * *"
}
```

(UTC 매월 1·4·7·10·13·16·19·22·25·28일 00:00 = KST 09:00 — 3일 간격의 근사)

- [ ] **Step 2: 갱신 확인**

`RemoteTrigger`를 `action: "get"`, `trigger_id: <ID>`로 호출해 `cron_expression`과
`enabled: true`를 확인한다.

- [ ] **Step 3: 최종 설정을 문서로 기록**

`docs/blog-idea-scout-config.md`를 아래 내용으로 생성:

```markdown
# 블로그 소재 스카우트 — 운영 설정

- 라우틴 ID: <Task 4 Step 1에서 확인한 trigger_id>
- 라우틴 링크: https://claude.ai/code/routines/<trigger_id>
- 스케줄: 매월 1·4·7·10·13·16·19·22·25·28일 09:00 KST (cron: `0 0 1,4,7,10,13,16,19,22,25,28 * *` UTC)
- 출력 위치: Obsidian vault > 20-Projects > 블로그-소재제안 (Drive 폴더 ID `1OQ1MRX273wEe-dbqnz0aluBd539OetGH`)
- 알림: no1.annotator@gmail.com Gmail 임시보관함 (draft만 생성 — 실제 발송 아님, 직접 확인 필요)
- 프롬프트 원본: `docs/blog-idea-scout-routine-prompt.md`
- 프롬프트 수정 시: 이 파일 수정 → 커밋 → `RemoteTrigger action:"update"`로 라우틴 `job_config` 갱신 필요 (자동 반영 안 됨)
- 라우틴 삭제: https://claude.ai/code/routines (API로 삭제 불가)
```

- [ ] **Step 4: 커밋**

```bash
git add docs/blog-idea-scout-config.md
git commit -m "docs: 블로그 소재 스카우트 운영 설정 기록"
```

---

## Self-Review 체크리스트 (계획 작성자용, 참고)

- [x] 설계 문서의 모든 섹션(아키텍처/노트 형식/dedupe/에러 케이스/알림)이 Task 1의 프롬프트 파일에 반영됨
- [x] "TBD"/"나중에 처리" 없음 — 소재 없음 케이스도 구체적 템플릿 포함
- [x] Drive 폴더 ID, 커넥터 UUID 등 모든 값이 실측 완료된 실제 값 (재확인 불필요)
- [x] Task 간 이름/필드 일관성: `create_file`/`search_files`/`create_draft` 파라미터명이 실제 로드된 스키마와 일치
