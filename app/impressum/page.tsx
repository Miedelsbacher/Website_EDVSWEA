import { LegalDocumentPage } from "@/components/legal-document-page"
import { createPageMetadata } from "@/lib/seo-metadata"

export const metadata = createPageMetadata({
  title: "Impressum – Uwe Christian",
  description: "Anbieterkennzeichnung und rechtliche Angaben zum Internetauftritt von Uwe Christian.",
  path: "/impressum",
})

export default function ImpressumPage() {
  return <LegalDocumentPage document="imprint" />
}
