import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://newcode.com.ua/uk',
      lastModified: new Date(),
      alternates: {
        languages: {
          'uk-UA': 'https://newcode.com.ua/uk',
          en: 'https://newcode.com.ua/en',
          'x-default': 'https://newcode.com.ua',
        },
      },
    },
    {
      url: 'https://newcode.com.ua/en',
      lastModified: new Date(),
      alternates: {
        languages: {
          'uk-UA': 'https://newcode.com.ua/uk',
          en: 'https://newcode.com.ua/en',
          'x-default': 'https://newcode.com.ua',
        },
      },
    },
  ]
}
