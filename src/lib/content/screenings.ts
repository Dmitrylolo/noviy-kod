import type { Lang, Screening } from '../types'

export const screenings: Record<Lang, Screening[]> = {
  ua: [
    {
      title: 'Фотовиставка та показ «Новий коd_»',
      location: 'Будинок Воїна, Львів',
      date: '5 листопада 2025',
    },
  ],
  en: [
    {
      title: 'Photo Exhibition and Screening of “New Code”',
      location: 'Budynok Voina, Lviv',
      date: '5 November 2025',
    },
  ],
}
