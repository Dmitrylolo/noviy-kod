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

// Official playlists, verified on the channels. Season 1 English dubbing lives on the English channel;
// Season 2 (Ukrainian audio) and sign language versions live on the Ukrainian channel.
export const playlists = {
  season1EnglishDubbed: 'https://www.youtube.com/playlist?list=PLHq-8QSbc64U',
  // "Усі епізоди — Сезони 1 і 2": positions 1-4 are Season 2 episodes, 5-8 Season 1 (checked 2026-11-11).
  // It is NOT a Season 2-only playlist, so never label it as such.
  season2Ukrainian: 'https://www.youtube.com/playlist?list=PLGPbamYdlGDJhy4mh9dXMr2kDg9n3RGjc',
  season2SignLanguage: 'https://www.youtube.com/playlist?list=PLfAUMQLVJSP0',
}
