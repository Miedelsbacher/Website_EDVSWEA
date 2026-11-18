import { SeoJsonLd } from "@/components/seo-json-ld"
import { DataRecoveryPageContent } from "@/components/swea-site"
import { createPageJsonLd, createPageMetadata } from "@/lib/seo-metadata"

const pageTitle = "Datenrettung mit Partner DataPhoenix"
const pageDescription =
  "Uwe Christian koordiniert die Datenrettung von Festplatte, USB-Stick oder Handy mit DataPhoenix. Untersuchung und kostenpflichtige Beauftragung erfolgen nur nach ausdrücklicher Zustimmung."

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/datenrettung",
})

const pageJsonLd = createPageJsonLd({
  title: pageTitle,
  description: pageDescription,
  path: "/datenrettung",
  serviceName: "Koordination von Datenrettung mit DataPhoenix",
})

export default function DatenrettungPage() {
  return <><SeoJsonLd data={pageJsonLd} /><DataRecoveryPageContent /></>
}
