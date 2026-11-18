import { LegalDocumentPage } from "@/components/legal-document-page"
import { createPageMetadata } from "@/lib/seo-metadata"

export const metadata = createPageMetadata({
  title: "Allgemeine Geschäftsbedingungen (AGB) – Uwe Christian",
  description: "Allgemeine Geschäftsbedingungen für die Dienstleistungen von Uwe Christian.",
  path: "/agb",
})

export default function AGBPage() {
  return <LegalDocumentPage document="terms" />
}
