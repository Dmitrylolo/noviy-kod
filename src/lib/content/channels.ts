import type { Lang } from '../types'

export const youtubeChannels: Record<Lang, string> = {
  ua: 'https://www.youtube.com/@novyikod',
  en: 'https://www.youtube.com/@thenewcodedocumentary',
}

export const youtubeShortsChannels: Record<Lang, string> = {
  ua: 'https://www.youtube.com/@novyikod/shorts',
  en: 'https://www.youtube.com/@TheNewCodeDocumentary/shorts',
}

export function getYoutubeChannelUrl(lang: Lang): string {
  return youtubeChannels[lang]
}

export function getYoutubeShortsUrl(lang: Lang): string {
  return youtubeShortsChannels[lang]
}
