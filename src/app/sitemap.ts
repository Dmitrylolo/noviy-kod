import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://newcode.com.ua',
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: 'https://newcode.com.ua',
          en: 'https://newcode.com.ua/en',
        },
      },
    },
    {
      url: 'https://newcode.com.ua/en',
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: 'https://newcode.com.ua',
          en: 'https://newcode.com.ua/en',
        },
      },
    },
  ]
}
