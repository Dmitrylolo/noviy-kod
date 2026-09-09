import type { Lang, LocalizedMedia } from '../types'

export interface ProductionGalleryItem {
  media: string | LocalizedMedia
  alt: Record<Lang, string>
}

export interface ProductionGallerySeason {
  id: string
  title?: Record<Lang, string>
  description?: Record<Lang, string>
  columns: 3 | 4 | 5
  items: ProductionGalleryItem[]
}

export const productionGalleries: ProductionGallerySeason[] = [
  {
    id: 'season1',
    columns: 3,
    items: [
      { media: '/production-s1-01.webp', alt: { ua: 'Ткач під час зйомок, сезон 1', en: 'Tkach during filming, season 1' } },
      { media: '/production-2.webp', alt: { ua: 'Зйомки, сезон 1', en: 'Production, season 1' } },
      { media: '/production-3.webp', alt: { ua: 'Зйомки, сезон 1', en: 'Production, season 1' } },
      { media: '/production-4.webp', alt: { ua: 'Зйомки, сезон 1', en: 'Production, season 1' } },
      { media: '/production-5.webp', alt: { ua: 'Зйомки, сезон 1', en: 'Production, season 1' } },
      { media: '/production-6.webp', alt: { ua: 'Зйомки, сезон 1', en: 'Production, season 1' } },
    ],
  },
  {
    id: 'season2',
    title: {
      ua: 'Сезон 2 — За лаштунками',
      en: 'Season 2 — Behind the Scenes',
    },
    description: {
      ua: 'Між сценою і фронтом. Між репетицією та бойовим виходом. Між камерою і реальним життям.',
      en: 'Between stage and frontline. Between rehearsal and combat. Between the camera and real life.',
    },
    columns: 5,
    items: [
      { media: '/production-s2-01.webp', alt: { ua: 'За лаштунками — між сценою і фронтом', en: 'Behind the scenes — between stage and frontline' } },
      { media: '/production-s2-02.webp', alt: { ua: 'За лаштунками — між репетицією та бойовим виходом', en: 'Behind the scenes — between rehearsal and combat' } },
      { media: '/production-s2-03.webp', alt: { ua: 'За лаштунками — між камерою і реальним життям', en: 'Behind the scenes — between camera and real life' } },
      { media: '/production-s2-04.webp', alt: { ua: 'Зйомки. Харків', en: 'Filming. Kharkiv' } },
      { media: '/production-s2-05.webp', alt: { ua: 'Зйомки. Київ', en: 'Filming. Kyiv' } },
      { media: '/production-s2-06.webp', alt: { ua: 'Зйомки. Львів', en: 'Filming. Lviv' } },
      { media: '/production-s2-07.webp', alt: { ua: 'Зйомки. Івано-Франківськ', en: 'Filming. Ivano-Frankivsk' } },
      { media: '/production-s2-08.webp', alt: { ua: 'Зйомки, сезон 2', en: 'Production, season 2' } },
      { media: '/production-s2-09.webp', alt: { ua: 'Зйомки, сезон 2', en: 'Production, season 2' } },
      { media: '/production-s2-10.webp', alt: { ua: 'Зйомки, сезон 2', en: 'Production, season 2' } },
    ],
  },
]

export function resolveLocalizedMedia(media: string | LocalizedMedia, lang: Lang): string {
  if (typeof media === 'string') {
    return media
  }

  if (media[lang]) {
    return media[lang] as string
  }

  if (media.default) {
    return media.default
  }

  const fallback = Object.entries(media).find(
    ([key, value]) => key !== 'default' && typeof value === 'string' && value.length > 0,
  )

  return fallback?.[1] ?? ''
}

export function getGalleryGridClass(columns: ProductionGallerySeason['columns']): string {
  if (columns === 3) {
    return 'grid grid-cols-2 sm:grid-cols-3 gap-2'
  }
  if (columns === 5) {
    return 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2'
  }
  return 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2'
}
