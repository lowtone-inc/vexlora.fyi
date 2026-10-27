import { getCollection, type CollectionEntry } from 'astro:content';
import { slugify } from './url';

export type Post = CollectionEntry<'posts'>;

const byNewest = (a: Post, b: Post) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

/** 공개된 글을 최신순으로 반환 (draft는 dev 모드에서만 노출) */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort(byNewest);
}

export async function getFeaturedPosts(limit = 1): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((p) => p.data.featured).slice(0, limit);
}

export async function getRecentPosts(limit: number, exclude: Post[] = []): Promise<Post[]> {
  const excluded = new Set(exclude.map((p) => p.id));
  return (await getPosts()).filter((p) => !excluded.has(p.id)).slice(0, limit);
}

export interface TagGroup {
  name: string;
  slug: string;
  posts: Post[];
}

/** 태그별로 글을 묶어 글 수 내림차순으로 반환 */
export async function getTagGroups(): Promise<TagGroup[]> {
  const groups = new Map<string, TagGroup>();
  for (const post of await getPosts()) {
    for (const name of post.data.tags) {
      const slug = slugify(name);
      const group = groups.get(slug) ?? { name, slug, posts: [] };
      group.posts.push(post);
      groups.set(slug, group);
    }
  }
  return [...groups.values()].sort((a, b) => b.posts.length - a.posts.length);
}

/** 이전/다음 글 계산 (posts는 최신순) */
export function getAdjacent(posts: Post[], id: string) {
  const index = posts.findIndex((p) => p.id === id);
  return {
    newer: index > 0 ? posts[index - 1] : undefined,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined,
  };
}
