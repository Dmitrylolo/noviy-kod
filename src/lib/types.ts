export type Lang = 'ua' | 'en'

export interface Episode {
  id: string
  number: number
  title: string
  synopsis: string
  description?: string
  youtubeId: string
  youtubeUrl: string
  hasAudioDesc: boolean
  hasEnglish: boolean
  hasSubtitles: boolean
  featured?: boolean
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
