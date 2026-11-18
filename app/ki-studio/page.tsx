import { SeoJsonLd } from "@/components/seo-json-ld"
import { KIStudioPageContent } from "@/components/swea-site"
import { createPageJsonLd, createPageMetadata } from "@/lib/seo-metadata"

const pageTitle = "KI-Studio in Schorndorf – digitale Bilder, Videos und Songs"
const pageDescription =
  "Individuelle digitale Bilder, Grafiken, Videos, Songs und Jingles nach Ihren Vorstellungen – gestaltet von Uwe Christian in Schorndorf und als digitale Dateien übergeben."

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/ki-studio",
})

const pageJsonLd = createPageJsonLd({
  title: pageTitle,
  description: pageDescription,
  path: "/ki-studio",
  serviceName: "Individuelle digitale Bilder, Videos, Songs und Jingles",
})

export default function KIStudioPage() {
  return <><SeoJsonLd data={pageJsonLd} /><KIStudioPageContent /></>
}
