---
order: 1
title: 언론 위기대응 AI 시스템
category: AI · 위기관리
tags:
  - AI
  - 자동화
  - Node.js
  - 위기관리
  - PM2
year: '2026'
tagline: '이슈 탐지부터 대응 초안까지, 팀 대응 시간을 1/3로 단축'
description: >-
  언론 이슈 발생 시 모니터링 → 심각도 분류 → 대응 메시지 초안 생성까지 자동화한 AI 기반 위기대응 파이프라인. 에너지기업 PR팀 내부
  운영 시스템.
problem: >-
  언론 위기는 속도가 생명이다. 이슈 탐지부터 대응 메시지 승인까지 걸리는 시간이 팀 역량의 병목이었다. 새벽 이슈 발생 시 담당자가 수동으로
  기사를 수집하고, 심각도를 판단하고, 초안을 작성하는 데 평균 90분이 소요됐다.
approach:
  - 뉴스 API + RSS 피드를 통한 실시간 키워드 모니터링 설계
  - 'GPT 기반 심각도 분류기 구현 (1~5단계, 이슈 유형 자동 태깅)'
  - 기존 대응 사례 DB 기반 RAG 파이프라인으로 초안 생성
  - 'PM2 기반 서버 운영, Slack 알림 연동'
outcome:
  - '이슈 탐지→초안 생성 시간: 90분 → 15분 이하'
  - 야간/주말 대응 공백 해소
  - 팀 내 위기대응 프로세스 표준화 (SOP 자동 연동)
images:
  - src: /portfolio/crisis-ai-type-select.png
    caption: 01 위기 유형 선택 — 7개 위기 유형별 기본 심각도 자동 분류 (BLACK/RED)
  - src: /portfolio/crisis-ai-input-form.png
    caption: 03 사실 확인 수준 / 04 외부 확산 현황 입력 단계 — 확인된 사실과 미확인 사항을 분리해 AI 초안 정확도를 높임
featured: true
relatedBlogSlugs:
  - ai-pr-crisis
---

