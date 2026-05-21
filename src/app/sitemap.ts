import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://novykod.com',
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: 'https://novykod.com',
          en: 'https://novykod.com/en',
        },
      },
    },
    {
      url: 'https://novykod.com/en',
      lastModified: new Date(),
      alternates: {
        languages: {
          uk: 'https://novykod.com',
          en: 'https://novykod.com/en',
        },
      },
    },
  ]
}
