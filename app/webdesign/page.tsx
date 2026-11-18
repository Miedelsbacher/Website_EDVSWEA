import { SeoJsonLd } from "@/components/seo-json-ld"
import { WebdesignPageContent } from "@/components/swea-site"
import { createPageJsonLd, createPageMetadata } from "@/lib/seo-metadata"

const pageTitle = "Webdesign, Website-Überarbeitung und Wartung in Schorndorf"
const pageDescription =
  "Persönlich geplante Websites: neue Websites mit Domain, E-Mail und Gestaltung, Überarbeitung bestehender Webseiten sowie Wartungsverträge für die langfristige Betreuung."

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/webdesign",
})

const pageJsonLd = createPageJsonLd({
  title: pageTitle,
  description: pageDescription,
  path: "/webdesign",
  serviceName: "Webdesign, Website-Überarbeitung und Wartung",
})

export default function WebdesignPage() {
  return <><SeoJsonLd data={pageJsonLd} /><WebdesignPageContent /></>
}
