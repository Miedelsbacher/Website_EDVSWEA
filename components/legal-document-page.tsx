import Link from "next/link"
import { LegalModals } from "@/components/legal-modals"

export type LegalDocument = "imprint" | "privacy" | "terms"

export function LegalDocumentPage({ document }: { document: LegalDocument }) {
  return (
    <div className="brand-area brand-area-base">
      <section className="page-wrap mx-auto max-w-4xl py-8 sm:py-12">
        <Link
          className="mb-6 inline-flex min-h-10 items-center rounded-md text-sm font-semibold text-brand-primary underline decoration-brand-border underline-offset-4 transition hover:text-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
          href="/"
        >
          <span aria-hidden="true" className="mr-2">←</span>Zurück zur Startseite
        </Link>
        <LegalModals staticDocument={document} />
      </section>
    </div>
  )
}
