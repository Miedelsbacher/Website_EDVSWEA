import { SeoJsonLd } from "@/components/seo-json-ld"
import { ITServicePageContent } from "@/components/swea-site"
import { createPageJsonLd, createPageMetadata } from "@/lib/seo-metadata"

const pageTitle = "IT-Service in Schorndorf und Umgebung"
const pageDescription =
  "Persönliche Computerhilfe, Hardware-Support und WLAN für Zuhause in Schorndorf. Heimnetz über geeignete Telefon- oder Sat-Leitungen, Datenrettung mit Partnerangebot und verständliche Beratung."

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/it-service",
})

const pageJsonLd = createPageJsonLd({
  title: pageTitle,
  description: pageDescription,
  path: "/it-service",
  serviceName: "IT-Service und persönliche Computerhilfe",
})

export default function ITServicePage() {
  return <><SeoJsonLd data={pageJsonLd} /><ITServicePageContent /></>
}
