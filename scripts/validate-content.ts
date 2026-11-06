import { existsSync } from 'node:fs'
import path from 'node:path'
import { heroes, liveContent, partners, press, screenings, seasons, ui, youtubeChannels } from '../src/lib/content'
import type { Episode, Lang } from '../src/lib/types'

const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/
const FORBIDDEN_CLAIMS = /тифло|audio[\s-]?desc/i

function isHttpUrl(value: string): boolean {
  return /^https?:\/\//.test(value)
}

function fail(message: string): never {
  throw new Error(message)
}

function compareShape(path: string, a: unknown, b: unknown, errors: string[]) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length > 0 && b.length > 0) {
      compareShape(path + '[0]', a[0], b[0], errors)
    }
    return
  }

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const aObj = a as Record<string, unknown>
    const bObj = b as Record<string, unknown>
    const aKeys = Object.keys(aObj).sort()
    const bKeys = Object.keys(bObj).sort()

    for (const key of aKeys) {
      if (!(key in bObj)) {
        errors.push(`${path}.${key} is missing in EN`)
      }
    }
    for (const key of bKeys) {
      if (!(key in aObj)) {
        errors.push(`${path}.${key} is missing in UA`)
      }
    }

    for (const key of aKeys) {
      if (key in bObj) {
        compareShape(`${path}.${key}`, aObj[key], bObj[key], errors)
      }
    }
  }
}

function validateEpisodes(lang: Lang, seasonId: string, episodes: Episode[], errors: string[]) {
  for (const ep of episodes) {
    const base = `seasons.${lang}.${ep.id}`

    if (ep.signLanguageUrl !== undefined) {
      if (seasonId !== 'season2') {
        errors.push(`${base}.signLanguageUrl is only allowed for season 2`)
      }
      if (!isHttpUrl(ep.signLanguageUrl)) {
        errors.push(`${base}.signLanguageUrl is not a valid URL`)
      }
    }

    if (ep.hasEnglishSubtitles && seasonId !== 'season2') {
      errors.push(`${base}.hasEnglishSubtitles is only expected for season 2`)
    }

    if (ep.thumbnail && typeof ep.thumbnail === 'object') {
      const hasAnyThumbnail = Boolean(ep.thumbnail.ua || ep.thumbnail.en || ep.thumbnail.default)
      if (!hasAnyThumbnail) {
        errors.push(`${base}.thumbnail object has no usable values`)
      }
    }

    if (!ep.comingSoon) {
      if (!ep.youtubeId) {
        errors.push(`${base}.youtubeId is empty but episode is released`)
      }
      if (!ep.youtubeUrl || !isHttpUrl(ep.youtubeUrl)) {
        errors.push(`${base}.youtubeUrl is invalid but episode is released`)
      }
    }
  }
}

function run() {
  const errors: string[] = []
  const warnings: string[] = []

  for (const lang of ['ua', 'en'] as const) {
    if (!youtubeChannels[lang] || !isHttpUrl(youtubeChannels[lang])) {
      errors.push(`youtubeChannels.${lang} is missing or invalid`)
    }
  }

  const uiShapeErrors: string[] = []
  compareShape('ui', ui.ua, ui.en, uiShapeErrors)
  errors.push(...uiShapeErrors)

  for (const lang of ['ua', 'en'] as const) {
    if (FORBIDDEN_CLAIMS.test(JSON.stringify(ui[lang]))) {
      errors.push(`ui.${lang} mentions audio description, which is not available`)
    }

    const trailers = liveContent[lang].trailers
    const expectedCount = lang === 'en' ? 2 : 1
    if (trailers.length !== expectedCount) {
      errors.push(`liveContent.${lang}.trailers must contain exactly ${expectedCount} item(s)`)
    }
    const trailerIds = trailers.map((trailer) => trailer.youtubeId)
    for (const id of trailerIds) {
      if (!YOUTUBE_ID_PATTERN.test(id)) errors.push(`liveContent.${lang}.trailers has an invalid YouTube ID: "${id}"`)
    }
    if (new Set(trailerIds).size !== trailerIds.length) {
      errors.push(`liveContent.${lang}.trailers contains duplicate YouTube IDs`)
    }
  }

  for (const lang of ['ua', 'en'] as const) {
    for (const season of seasons[lang]) {
      validateEpisodes(lang, season.id, season.episodes, errors)
    }

    for (const hero of heroes[lang]) {
      const base = `heroes.${lang}.${hero.id}`
      if (hero.photo && !existsSync(path.join(process.cwd(), 'public', hero.photo))) {
        errors.push(`${base}.photo file is missing in public/: ${hero.photo}`)
      }
      if (hero.season === 2 && !hero.photo) {
        errors.push(`${base} (season 2) has no photo`)
      }
      if (!hero.comingSoon) {
        if (!hero.youtubeUrl || !isHttpUrl(hero.youtubeUrl)) {
          errors.push(`${base}.youtubeUrl is invalid but hero is released`)
        }
        if (!hero.episodeUrl || !isHttpUrl(hero.episodeUrl)) {
          errors.push(`${base}.episodeUrl is invalid but hero is released`)
        }
      }
    }

    for (const item of press[lang]) {
      if (item.url === '#') {
        warnings.push(`press.${lang}.${item.outlet} still uses placeholder URL '#'`)
      } else if (!isHttpUrl(item.url)) {
        errors.push(`press.${lang}.${item.outlet} has invalid URL`)
      }
    }

    for (const item of screenings[lang]) {
      if (item.url && !isHttpUrl(item.url)) {
        errors.push(`screenings.${lang}.${item.title} has invalid URL`)
      }
    }


    if (!partners[lang] || partners[lang].length === 0) {
      errors.push(`partners.${lang} is empty`)
    }
  }

  if (warnings.length > 0) {
    console.log('Warnings:')
    for (const warning of warnings) {
      console.log(`- ${warning}`)
    }
  }

  if (errors.length > 0) {
    console.error('Validation errors:')
    for (const error of errors) {
      console.error(`- ${error}`)
    }
    fail(`Content validation failed with ${errors.length} errors.`)
  }

  console.log('Content validation passed.')
}

run()
