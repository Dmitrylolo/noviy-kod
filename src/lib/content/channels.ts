import type { Lang } from '../types'

export const youtubeChannels: Record<Lang, string> = {
  ua: 'https://www.youtube.com/@novyikod',
  en: 'https://www.youtube.com/@thenewcodedocumentary',
}

export function getYoutubeChannelUrl(lang: Lang): string {
  return youtubeChannels[lang]
}
