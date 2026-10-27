# vexlora.fyi

Astro 기반 정적 블로그. `main` 브랜치에 push하면 GitHub Actions로 GitHub Pages에 자동 배포됩니다.

## 개발

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 타입 체크 + 빌드 → dist/
```

## 글 작성

`src/content/posts/*.md` 에 파일 추가.

```md
---
title: '제목'
description: '요약'
pubDate: 2026-10-27
category: Esports
tags: [esports, log]
featured: false
draft: false
---
```

## 배포

1. 저장소 **Settings → Pages → Source** 를 `GitHub Actions` 로 설정
2. `main` 에 push (또는 Actions 탭에서 수동 실행)

`base` 경로는 `actions/configure-pages` 결과로 자동 주입되므로 커스텀 도메인 / `*.github.io/<repo>` 모두 동작합니다.

## 구조

```
src/
├─ config.ts            사이트 설정, 네비게이션
├─ content.config.ts    글 스키마
├─ lib/                 posts · url · format 헬퍼
├─ layouts/             Base / Page / Post 레이아웃
├─ components/          재사용 UI 컴포넌트
└─ pages/               라우트
```
