import type { Episode, Lang } from '../types'
import { SUPPORTED_LANGS } from '../types'
import { getYoutubeChannelUrl } from './channels'
import { liveContent } from './live'
import { seasons } from './seasons'

export const videoContent = SUPPORTED_LANGS.reduce((acc, lang) => {
  acc[lang] = {
    channelUrl: getYoutubeChannelUrl(lang),
    live: liveContent[lang],
    seasons: seasons[lang],
  }
  return acc
}, {} as Record<Lang, { channelUrl: string; live: (typeof liveContent)[Lang]; seasons: (typeof seasons)[Lang] }>)

export function resolveEpisodeThumbnail(ep: Episode, lang: Lang): string | undefined {
  const value = ep.thumbnail
  if (!value) return undefined

  if (typeof value === 'string') {
    return value
  }

  if (value[lang]) {
    return value[lang]
  }

  if (value.default) {
    return value.default
  }

  return Object.entries(value).find(
    ([key, media]) => key !== 'default' && typeof media === 'string' && media.length > 0,
  )?.[1]
}
