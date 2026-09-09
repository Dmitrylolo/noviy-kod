export const SUPPORTED_LANGS = ['ua', 'en'] as const
export type Lang = (typeof SUPPORTED_LANGS)[number]

export type LocalizedMedia = Partial<Record<Lang, string>> & {
  default?: string
}

export interface Episode {
  id: string
  number: number
  title: string
  synopsis: string
  description?: string
  thumbnail?: string | LocalizedMedia
  youtubeId: string
  youtubeUrl: string
  hasAudioDesc: boolean
  hasEnglish: boolean
  hasSubtitles: boolean
  featured?: boolean
  comingSoon?: boolean
}

export interface Season {
  id: string
  label: string
  episodes: Episode[]
}

export interface Hero {
  id: string
  name: string
  role: string
  description: string
  quote: string
  youtubeId: string
  youtubeUrl: string
  episodeUrl: string
  photo?: string
  season?: 1 | 2
  comingSoon?: boolean
}

export interface TeamMember {
  name: string
  role: string
}

export interface PressItem {
  outlet: string
  title: string
  date: string
  url: string
}

export interface Screening {
  title: string
  location: string
  date: string
  url?: string
}
