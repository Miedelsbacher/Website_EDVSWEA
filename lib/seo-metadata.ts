import type { Metadata } from 'next'

const siteUrl = 'https://www.swea.de'
const socialImage = {
  url: '/swea/edv-large.png',
  width: 1024,
  height: 680,
  alt: 'Uwe Christian – IT-Service, KI-Studio und Waldbaden',
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
}

export function createPageJsonLd({
  title,
  description,
  path,
  serviceName,
}: PageMetadataInput & { serviceName?: string }) {
  const url = new URL(path, siteUrl).toString()
  const page = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name: title,
    description,
    url,
    inLanguage: 'de-DE',
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#uwe-christian` },
    ...(serviceName ? { mainEntity: { '@id': `${url}#service` } } : {}),
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      page,
      ...(serviceName
        ? [{
            '@type': 'Service',
            '@id': `${url}#service`,
            name: serviceName,
            provider: { '@id': `${siteUrl}/#uwe-christian` },
            areaServed: [
              { '@type': 'City', name: 'Schorndorf' },
              { '@type': 'Place', name: 'Miedelsbach' },
              { '@type': 'Place', name: 'Wieslauftal' },
              { '@type': 'AdministrativeArea', name: 'Rems-Murr-Kreis' },
            ],
          }]
        : []),
    ],
  }
}

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString()

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Uwe Christian',
      locale: 'de_DE',
      type: 'website',
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage.url],
    },
  }
}
