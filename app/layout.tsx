import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { LegalModals } from '@/components/legal-modals'
import { SiteInteractions } from '@/components/site-interactions'
import { SiteFooter, SiteHeader } from '@/components/site-shell'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

const siteUrl = 'https://www.swea.de'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Technik, die hilft. Ruhe, die bleibt. – Uwe Christian',
    template: '%s | Uwe Christian in Schorndorf',
  },
  description:
    'Persönlicher IT- und EDV-Service, Webdesign, KI-Studio und Waldbaden in Schorndorf, im Wieslauftal und im Rems-Murr-Kreis.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Technik, die hilft. Ruhe, die bleibt. – Uwe Christian',
    description:
      'Persönlicher IT- und EDV-Service, Webdesign, KI-Studio und Waldbaden in Schorndorf, im Wieslauftal und im Rems-Murr-Kreis. Schnell. Werthaltig. Einfach. Außergewöhnlich.',
    url: siteUrl,
    siteName: 'Uwe Christian',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/swea/edv-large.png',
        width: 1024,
        height: 680,
        alt: 'Uwe Christian – EDV-Dienstleistungen. Schnell. Werthaltig. Einfach. Außergewöhnlich.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technik, die hilft. Ruhe, die bleibt. – Uwe Christian',
    description:
      'IT- und EDV-Service, Webdesign, KI-Studio und Waldbaden in Schorndorf und Umgebung. Schnell. Werthaltig. Einfach. Außergewöhnlich.',
    images: ['/swea/edv-large.png'],
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2f5ee',
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#uwe-christian`,
      name: 'Uwe Christian',
      url: siteUrl,
      image: `${siteUrl}/swea/edv-large.png`,
      telephone: '+49 7181 253147',
      email: 'info@swea.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Freiburgstr. 12',
        addressLocality: 'Schorndorf',
        addressRegion: 'Baden-Württemberg',
        postalCode: '73614',
        addressCountry: 'DE',
      },
      knowsAbout: ['IT-Service', 'Webdesign', 'digitale Mediengestaltung', 'Waldbaden'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Uwe Christian',
      url: siteUrl,
      inLanguage: 'de-DE',
      publisher: { '@id': `${siteUrl}/#uwe-christian` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <SiteInteractions>
          <SiteHeader />
          <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-area-surface focus:px-4 focus:py-2 focus:text-area-deep focus:shadow-lg" href="#main-content">Zum Inhalt springen</a>
          <main id="main-content">{children}</main>
          <SiteFooter />
          <LegalModals />
        </SiteInteractions>
      </body>
    </html>
  )
}
