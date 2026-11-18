import { LegalDocumentPage } from "@/components/legal-document-page"
import { createPageMetadata } from "@/lib/seo-metadata"

export const metadata = createPageMetadata({
  title: "Datenschutzerklärung – Uwe Christian",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf der Website von Uwe Christian.",
  path: "/datenschutz",
})

export default function DatenschutzPage() {
  return <LegalDocumentPage document="privacy" />
}
