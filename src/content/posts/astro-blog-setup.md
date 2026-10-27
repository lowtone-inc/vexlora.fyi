---
title: 'Astro + GitHub Actions로 블로그 자동 배포하기'
description: 'main 브랜치에 푸시하면 GitHub Pages에 자동으로 올라가는 블로그 세팅기.'
pubDate: 2026-03-11
category: Dev
tags: [astro, github-actions, dev]
---

이 블로그는 [Astro](https://astro.build)로 만들고 GitHub Actions로 배포한다. 세팅은 생각보다 간단했다.

## 1. 콘텐츠 컬렉션

글은 `src/content/posts`에 마크다운으로 두고, 스키마는 zod로 검증한다.

```ts
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});
```

## 2. 배포 워크플로

`actions/configure-pages`가 알려주는 `base_path`를 빌드 환경변수로 넘겨서, 커스텀 도메인이든 `user.github.io/repo` 형태든 경로가 깨지지 않게 했다.

```yaml
- name: Build
  run: npm run build
  env:
    SITE_URL: ${{ steps.pages.outputs.origin }}
    BASE_PATH: ${{ steps.pages.outputs.base_path }}
```

## 3. 링크는 항상 헬퍼로

내부 링크를 하드코딩하면 base 경로가 바뀔 때 다 깨진다. 그래서 `withBase()` 하나로 통일했다.

```ts
export const postUrl = (id: string) => withBase(`/posts/${id}/`);
```

이제 글만 쓰고 푸시하면 끝.
