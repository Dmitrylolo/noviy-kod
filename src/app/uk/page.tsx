import HomePage from '../page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Новий коd_ — Документальний проєкт',
  description:
    'Документальний проєкт про українських військових з творчим минулим, які під час війни продовжують творити і змінюють культурний код країни.',
  openGraph: {
    locale: 'uk_UA',
    url: 'https://newcode.com.ua/uk',
  },
  alternates: {
    canonical: 'https://newcode.com.ua/uk',
    languages: {
      'uk-UA': 'https://newcode.com.ua/uk',
      en: 'https://newcode.com.ua/en',
      'x-default': 'https://newcode.com.ua',
    },
  },
}

export default HomePage
