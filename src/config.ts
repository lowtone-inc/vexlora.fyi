export const SITE = {
  title: 'VEXLORA',
  tagline: 'Play hard. Write harder.',
  description: '경기, 코드, 그리고 일상의 기록.',
  author: 'vexlora',
  locale: 'ko-KR',
  postsPerPage: 6,
  // 글별 이미지가 없을 때 쓰는 공유 이미지 (public/ 기준 경로)
  ogImage: '/og-default.png',
} as const;

// 서치콘솔 소유 확인 코드. 값이 있을 때만 meta 태그를 출력한다.
export const SITE_VERIFICATION = {
  google: '',
  naver: '',
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
