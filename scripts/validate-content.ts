import { heroes, liveContent, partners, press, screenings, seasons, ui, youtubeChannels } from '../src/lib/content'
import type { Episode, Lang } from '../src/lib/types'

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

function validateEpisodes(lang: Lang, episodes: Episode[], errors: string[]) {
  for (const ep of episodes) {
    const base = `seasons.${lang}.${ep.id}`

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
    for (const season of seasons[lang]) {
      validateEpisodes(lang, season.episodes, errors)
    }

    for (const hero of heroes[lang]) {
      const base = `heroes.${lang}.${hero.id}`
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

    if (!liveContent[lang].watchUrl || !isHttpUrl(liveContent[lang].watchUrl)) {
      errors.push(`liveContent.${lang}.watchUrl is invalid`)
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
