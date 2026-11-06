import type { LiveTrailer } from '../types'

export function getYoutubeWatchUrl(youtubeId: string): string {
  return `https://www.youtube.com/watch?v=${youtubeId}`
}

const uaTitle = '«Новий коd_». Сезон 2 — вже у вересні 2026!'

// Single Ukrainian trailer: shown statically, no rotation.
const uaTrailers: LiveTrailer[] = [
  { id: 'ua-trailer', youtubeId: 'nSXbKjmJ2RY', title: uaTitle },
]

// Two English dubbed trailers (official playlist "THE NEW CODE | Official Trailers"):
// they rotate inside the preview of section#live.
const enTrailers: LiveTrailer[] = [
  {
    id: 'en-trailer',
    youtubeId: 'OFVa1DV8rOE',
    title: 'War isn’t what you think',
    badge: 'English dubbed',
  },
  {
    id: 'en-teaser',
    youtubeId: 'XusSQcncjZE',
    title: 'How does modern war shape culture?',
    badge: 'English dubbed',
  },
]

export const liveContent = {
  ua: {
    label: 'Актуальне',
    title: uaTitle,
    description:
      'Сергій Жадан, Олена Герасим\'юк, Тарас Козуб і Міша Правильний — герої другого сезону «Нового коdу_». Події розгортаються у Києві, Харкові, Львові та Івано-Франківську, а історії героїв сягають окупованого Донбасу. Це розповідь про пам\'ять і повернення додому, досвід військовослужбовців і ветеранів — та українську культуру, яка під час війни вистоює, змінюється й народжує нові форми та сенси.',
    trailers: uaTrailers,
    comingSoon: false,
    watchLabel: 'Дивитися трейлер',
    ytLabel: 'На YouTube',
    comingSoonLabel: 'Незабаром',
    playAriaPrefix: 'Дивитися',
    trailersGroupLabel: 'Трейлери',
    trailerLabel: 'Трейлер',
  },
  en: {
    label: 'Season 1',
    title: '“THE NEW CODE” — Season 1',
    description:
      'The first season of The New Code is now available in English.\n\nFour documentary episodes follow Ukrainian artists whose lives changed because of the war — a musician, a poet, a filmmaker and a writer-soldier.\n\nTogether, their stories reveal a new Ukrainian military culture and help explain what Ukraine is defending: freedom, memory, culture and the right to remain itself.\n\nSeason 2 is now being released in Ukrainian, with English subtitles available on YouTube.',
    trailers: enTrailers,
    comingSoon: false,
    watchLabel: 'Watch Trailer',
    ytLabel: 'On YouTube',
    comingSoonLabel: 'Season 1',
    playAriaPrefix: 'Watch',
    trailersGroupLabel: 'Trailers',
    trailerLabel: 'Trailer',
  },
}
