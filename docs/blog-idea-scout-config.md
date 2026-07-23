# 블로그 소재 스카우트 — 운영 설정

- 라우틴 ID: `trig_01A2WEpTTcyR7PRNt4Ksi9J8`
- 라우틴 링크: https://claude.ai/code/routines/trig_01A2WEpTTcyR7PRNt4Ksi9J8
- 스케줄: 매월 1·4·7·10·13·16·19·22·25·28일 09:00 KST (cron: `0 0 1,4,7,10,13,16,19,22,25,28 * *` UTC)
  - **월 경계 근사 주의**: day-of-month 방식이라 "정확히 3일 간격"이 아니다. 2월은 28일→3월 1일로 **1일 간격**이 되고, 31일짜리 달은 28일→31일이 아니라 28일→(다음달)1일로 이어져 최대 4일 간격이 발생할 수 있다. 둘 다 정상 동작이며 버그 아님.
  - 이 근사로 인해 1단계(24시간 내 중복 실행 방지) 안전장치가 월 경계(2월 28일→3월 1일)에서 정상 실행을 "중복"으로 오판해 스킵할 가능성이 있음 — 실제로 스킵 노트가 남으면 이 원인일 가능성이 높음.
- 출력 위치: Obsidian vault > 20-Projects > 블로그-소재제안 (Drive 폴더 ID `1OQ1MRX273wEe-dbqnz0aluBd539OetGH`)
- 알림: no1.annotator@gmail.com Gmail 임시보관함 (draft만 생성 — 실제 발송 아님, 직접 확인 필요)
- 프롬프트 원본: `docs/blog-idea-scout-routine-prompt.md`
- 프롬프트 수정 시: 이 파일 수정 → 커밋 → `RemoteTrigger action:"update"`로 라우틴 `job_config` 갱신 필요 (자동 반영 안 됨)
- 라우틴 삭제: https://claude.ai/code/routines (API로 삭제 불가)

## 테스트 실행 기록 (2026-07-23)

1회성 테스트로 정상 동작 확인 완료:
- Drive에 `2026-07-23-제안.md` 생성 — 소재 후보 3개 + 유력 후보 1개 구조 뼈대(실제 리서치 5개 출처 포함) + dedupe용 근거 클리핑 5개
- Gmail draft 생성 — 제목 `[블로그 소재 제안] 2026-07-23`, 후보 요약 + vault 경로 안내 포함
- 이후 `RemoteTrigger action:"update"`로 `run_once_at` 제거, `cron_expression` 적용, 이름을 `블로그-소재-스카우트`로 변경해 반복 스케줄로 전환
- 다음 실행: 2026-07-25 (UTC 00:00경 / KST 09:00경)
