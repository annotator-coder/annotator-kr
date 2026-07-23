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

- [x] **Step 1: 아래 내용 그대로 파일 생성**

이 파일이 생성 시점에 담아야 했던 정확한 프롬프트 내용은 실제 소스인
`docs/blog-idea-scout-routine-prompt.md` 참조 (완료 후 이 파일과 100% 동일해야 하며,
두 문서를 따로 유지하지 않는다 — 계획 문서에는 더 이상 프롬프트 전문을 복제하지 않는다).
실행 완료 시점 기준 최신 버전은 커밋 `efcf65f` ("fix: 라우틴 프롬프트 단계 번호 오류 수정 + 판단 기준 구체화").

- [x] **Step 2: git에 커밋**

```bash
git add docs/blog-idea-scout-routine-prompt.md
git commit -m "docs: 블로그 소재 스카우트 라우틴 프롬프트 추가"
```

---

### Task 2: 테스트용 1회성 라우틴 생성

**Files:** 없음 (API 호출만)

- [x] **Step 1: 필요한 도구 로드**

`ToolSearch`로 `select:RemoteTrigger` 호출해 스키마를 로드한다 (이미 이번 대화에서 로드했다면 생략).

- [x] **Step 2: 현재 UTC 시각 확인**

```bash
date -u +%Y-%m-%dT%H:%M:%SZ
```

이 값에서 10분을 더한 시각을 `run_once_at`에 쓴다 (예: 현재가 `2026-07-23T08:00:00Z`이면
`2026-07-23T08:10:00Z`).

- [x] **Step 3: `docs/blog-idea-scout-routine-prompt.md`의 전체 내용을 복사**해 아래 body의
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

- [x] **Step 4: 응답에서 `trigger_id`(routine ID)를 기록**해두고,
`https://claude.ai/code/routines/{ROUTINE_ID}` 링크를 확인용으로 남긴다.

---

### Task 3: 테스트 실행 결과 검증

**Files:** 없음 (검증만)

- [x] **Step 1: 실행 대기**

`run_once_at` 시각 + 5분 정도 기다린다 (클라우드 세션이 리서치까지 하므로 수 분 소요될 수 있음).

- [x] **Step 2: 라우틴 상태 확인**

`RemoteTrigger`를 `action: "get"`, `trigger_id: <Task 2에서 기록한 ID>`로 호출해
`ended_reason`이 `run_once_fired`인지 확인한다. 아직이면 다시 몇 분 대기 후 재확인.

- [x] **Step 3: Drive에 노트가 생성됐는지 확인**

```
mcp__claude_ai_Google_Drive__search_files
query: "parentId = '1OQ1MRX273wEe-dbqnz0aluBd539OetGH'"
```

`D-제안.md` (D = 테스트 실행일) 파일이 있는지, `read_file_content`로 열어 형식이
Task 1의 템플릿(후보 2~3개 + 구조 뼈대 + 근거 클리핑 섹션)을 따르는지 확인한다.

- [x] **Step 4: Gmail draft 확인**

```
mcp__claude_ai_Gmail__list_drafts
query: "subject:블로그 소재 제안"
```

draft가 생성됐는지, subject/body가 지시대로 채워졌는지 확인한다.

- [x] **Step 5: 문제 발견 시 프롬프트 수정 후 재테스트**

`docs/blog-idea-scout-routine-prompt.md`를 수정하고 커밋한 뒤, `RemoteTrigger`
`action: "update"`로 해당 라우틴의 `job_config`를 새 프롬프트로 갱신하고,
새 `run_once_at`(현재 시각 + 10분)으로 다시 Step 1부터 반복한다.
문제가 없을 때까지 이 사이클을 반복한다.

---

### Task 4: 반복 스케줄로 전환

**Files:**
- Modify: `docs/blog-idea-scout-routine-prompt.md` (이름 변경 불필요, 내용은 Task 3에서 검증 완료된 버전 유지)
- Create: `docs/blog-idea-scout-config.md`

- [x] **Step 1: 라우틴을 반복 스케줄로 갱신**

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

- [x] **Step 2: 갱신 확인**

`RemoteTrigger`를 `action: "get"`, `trigger_id: <ID>`로 호출해 `cron_expression`과
`enabled: true`를 확인한다.

- [x] **Step 3: 최종 설정을 문서로 기록**

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

- [x] **Step 4: 커밋**

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
