import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = 'https://swea.de'
const routes = [
  '/',
  '/agb',
  '/datenschutz',
  '/impressum',
  '/datenrettung',
  '/it-service',
  '/ki-studio',
  '/kontakt',
  '/waldbaden',
  '/webdesign',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }))
}
