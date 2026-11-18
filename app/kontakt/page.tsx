import { SeoJsonLd } from "@/components/seo-json-ld"
import { ContactPageContent } from "@/components/swea-site"
import { createPageJsonLd, createPageMetadata } from "@/lib/seo-metadata"

const pageTitle = "Kontakt zu Uwe Christian in Schorndorf"
const pageDescription =
  "Kontaktieren Sie Uwe Christian in Schorndorf telefonisch, per E-Mail an info@swea.de oder über das Anfrageformular zu IT-Service, KI-Studio und Waldbaden."

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/kontakt",
})

const pageJsonLd = createPageJsonLd({
  title: pageTitle,
  description: pageDescription,
  path: "/kontakt",
})

export default function KontaktPage() {
  return <><SeoJsonLd data={pageJsonLd} /><ContactPageContent /></>
}
