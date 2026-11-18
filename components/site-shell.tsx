import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Menu, Phone, ShieldCheck, X } from "lucide-react"
import { LegalModalTrigger } from "@/components/legal-modals"

const navigation = [
  { href: "/", label: "Startseite" },
  { href: "/it-service", label: "IT-Service" },
  { href: "/waldbaden", label: "Waldbaden" },
  { href: "/ki-studio", label: "KI-Studio" },
  { href: "/kontakt", label: "Kontakt" },
]

const antonIconSrc = "/swea/anton.jpg"

const remoteSupportLinks = [
  {
    name: "RustDesk",
    href: "https://rustdesk.com/download",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_b910f971-C5gwCIXnuq1dWjyCsIAT5zNfIdCGKI.jpg",
  },
  {
    name: "TeamViewer",
    href: "https://teamviewer.com/de/download/portal/windows",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_9db226ab-Qmz6DtutlSXcL5sFjz1sLGQBHijLRp.jpg",
  },
  {
    name: "Google Remote Desktop",
    href: "https://remotedesktop.google.com",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_eab839ba-LnNtHJ9rCeFnl2rjP3ezwuPcZTV2q3.jpg",
  },
]

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link aria-label="Uwe Christian – zur Startseite" className="brand brand-button" data-nav-link href="/">
          <span className="brand-mark"><Image alt="" fill priority sizes="39px" src={antonIconSrc} /></span>
          <span className="brand-copy">
            <strong>Uwe Christian</strong>
            <small>Schorndorf-Miedelsbach</small>
          </span>
        </Link>
        <button aria-controls="primary-navigation" aria-expanded="false" aria-label="Menü öffnen" className="mobile-menu-toggle" data-menu-toggle type="button">
          <Menu aria-hidden="true" data-menu-icon="open" size={22} />
          <X aria-hidden="true" data-menu-icon="close" size={22} />
        </button>
        <nav aria-label="Hauptnavigation" className="main-nav" id="primary-navigation">
          {navigation.map((item) => (
            <Link className="nav-link inline-flex items-center rounded-md px-2 py-2 text-[13px] font-semibold text-area-deep transition hover:bg-area-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary" data-nav-link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <section aria-labelledby="remote-support-heading" className="remote-support">
          <h2 className="remote-support-heading" id="remote-support-heading">Fernwartung</h2>
          <nav aria-label="Fernwartungs-Tools" className="remote-support-links">
            {remoteSupportLinks.map((tool) => (
              <a
                aria-label={`${tool.name} öffnen`}
                className="remote-support-link"
                href={tool.href}
                key={tool.name}
                rel="noreferrer"
                target="_blank"
              >
                <Image alt="" aria-hidden="true" height={72} src={tool.image} unoptimized width={72} />
              </a>
            ))}
          </nav>
        </section>
      </div>
    </header>
  )
}

const footerContactItems = [
  { icon: Phone, label: "Telefon", value: "+49 7181 253147", href: "tel:+497181253147" },
  { icon: Mail, label: "E-Mail", value: "info@swea.de", href: "mailto:info@swea.de" },
  { icon: MapPin, label: "Anschrift", value: "Freiburgstr. 12, 73614 Schorndorf-Miedelsbach" },
] as const

const legalLinks = [
  { dialogId: "imprint-modal", label: "Impressum" },
  { dialogId: "privacy-modal", label: "Datenschutz" },
  { dialogId: "agb-modal", label: "AGB" },
  { dialogId: "withdrawal-modal", label: "Widerrufsbelehrung" },
] as const

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-brand-border bg-brand-soft">
      <div className="page-wrap flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-4 lg:shrink-0">
          <Link aria-label="Uwe Christian – zur Startseite" className="brand brand-button footer-brand" data-nav-link href="/">
            <span className="brand-mark"><Image alt="" fill sizes="34px" src={antonIconSrc} /></span>
            <span className="brand-copy"><strong>Uwe Christian</strong><small>Schorndorf-Miedelsbach</small></span>
          </Link>
          <p className="text-xs leading-5 text-brand-muted">IT-Service, KI-Studio und Waldbaden</p>
        </div>

        <address className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-1 not-italic">
          {footerContactItems.map((item) => {
            const Icon = item.icon
            return (
              <div className="flex min-w-0 items-center gap-2" key={item.label}>
                <Icon aria-hidden="true" className="shrink-0 text-brand-primary" size={15} />
                <div className="flex min-w-0 flex-col sm:flex-row sm:items-center sm:gap-1.5">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-brand-muted">{item.label}</span>
                  {"href" in item ? (
                    <a className="inline-flex min-h-9 max-w-full items-center break-all rounded text-sm font-semibold text-brand-deep underline decoration-brand-border underline-offset-4 transition hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2" href={item.href}>{item.value}</a>
                  ) : (
                    <span className="text-sm font-semibold leading-5 text-brand-deep">{item.value}</span>
                  )}
                </div>
              </div>
            )
          })}
        </address>
      </div>

      <div className="border-t border-brand-border/70">
        <div className="page-wrap flex flex-col gap-2 py-2.5 text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <span className="inline-flex items-center gap-1.5 leading-5">
              <ShieldCheck aria-hidden="true" className="shrink-0 text-brand-primary" size={14} />
              Fernwartung verschlüsselt und nur mit Ihrer aktiven Freigabe
            </span>
            <span className="text-brand-deep">© {new Date().getFullYear()} Uwe Christian. Alle Rechte vorbehalten.</span>
          </div>
          <div className="flex flex-col gap-1 sm:items-end">
            <nav aria-label="Rechtliche Informationen">
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {legalLinks.map((link) => (
                  <li key={link.dialogId}>
                    <LegalModalTrigger className="inline-flex min-h-8 items-center rounded text-xs font-semibold text-brand-primary underline decoration-brand-primary/40 underline-offset-4 transition hover:text-brand-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2" dialogId={link.dialogId}>{link.label}</LegalModalTrigger>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="leading-5">Kleinunternehmerregelung nach § 19 UStG: Es wird keine Umsatzsteuer ausgewiesen.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
