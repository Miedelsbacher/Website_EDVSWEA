import { SeoJsonLd } from "@/components/seo-json-ld"
import { WaldbadenPageContent } from "@/components/swea-site"
import { createPageJsonLd, createPageMetadata } from "@/lib/seo-metadata"

const pageTitle = "After-Work-Waldbaden in Schorndorf – Achtsamkeit im Wald"
const pageDescription =
  "After-Work-Waldbaden mit Uwe Christian in Schorndorf und im Rems-Murr-Kreis: eine achtsame Auszeit in der Natur, in kleinen Gruppen und ohne Leistungsdruck."

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/waldbaden",
})

const pageJsonLd = createPageJsonLd({
  title: pageTitle,
  description: pageDescription,
  path: "/waldbaden",
  serviceName: "Geführtes Waldbaden und Achtsamkeit im Wald",
})

export default function WaldbadenPage() {
  return <><SeoJsonLd data={pageJsonLd} /><WaldbadenPageContent /></>
}
