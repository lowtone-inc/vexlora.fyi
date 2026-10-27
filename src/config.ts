export const SITE = {
  title: 'VEXLORA',
  tagline: 'Play hard. Write harder.',
  description: '경기, 코드, 그리고 일상의 기록.',
  author: 'vexlora',
  locale: 'ko-KR',
  postsPerPage: 6,
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog/', label: 'Blog' },
  { href: '/tags/', label: 'Tags' },
  { href: '/about/', label: 'About' },
] as const;

export const SOCIAL_LINKS = [
  { href: 'https://github.com/lowtone-inc', label: 'GitHub' },
  { href: '/rss.xml', label: 'RSS' },
] as const;
