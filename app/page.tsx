import { SeoJsonLd } from "@/components/seo-json-ld"
import { HomePageContent } from "@/components/swea-site"
import { createPageJsonLd, createPageMetadata } from "@/lib/seo-metadata"

const pageTitle = "IT-Service, KI-Studio & Waldbaden in Schorndorf"
const pageDescription =
  "Persönlicher IT- und EDV-Service, Webdesign, KI-Studio und Waldbaden von Uwe Christian in Schorndorf, Miedelsbach und Umgebung."

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/",
})

const pageJsonLd = createPageJsonLd({
  title: pageTitle,
  description: pageDescription,
  path: "/",
})

export default function HomePage() {
  return (
    <>
      <SeoJsonLd data={pageJsonLd} />
      <div className="brand-area brand-area-base">
        <HomePageContent />
      </div>
    </>
  )
}
