import { SITE } from '@/config';

const dateFormatter = new Intl.DateTimeFormat(SITE.locale, {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export const formatDate = (date: Date) => dateFormatter.format(date);
export const isoDate = (date: Date) => date.toISOString();

const WORDS_PER_MINUTE = 300;

export function readingTime(text = ''): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
}
