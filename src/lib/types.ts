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
  uaFallbackUrl?: string
  /** Separate YouTube video with Ukrainian Sign Language interpretation (season 2 only). */
  signLanguageUrl?: string
  hasEnglish: boolean
  hasSubtitles: boolean
  /** Episode is available with English subtitles (Ukrainian audio). Not English dubbing. */
  hasEnglishSubtitles?: boolean
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
  /** CSS object-position for the portrait, used to keep head size/height consistent across cards. */
  photoPosition?: string
  season?: 1 | 2
  comingSoon?: boolean
}

export interface LiveTrailer {
  id: string
  youtubeId: string
  title: string
  /** Short caption for the selector button, e.g. "Trailer". Falls back to "Trailer N". */
  label?: string
  /** Caption of the play/watch buttons for this video, e.g. "Watch Trailer". Falls back to the section default. */
  watchLabel?: string
  /** Small label over the preview, e.g. "English dubbed". */
  badge?: string
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
