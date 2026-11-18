import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  Briefcase,
  Check,
  Clock3,
  Code2,
  ExternalLink,
  HardDrive,
  Heart,
  Image as ImageIcon,
  Music2,
  Video,
  MapPin,
  Mail,
  MonitorCog,
  Phone,
  Printer,
  ShieldCheck,
  Smartphone,
  Wifi,
} from "lucide-react"
import { AIExamplesCarousel } from "@/components/ai-examples-carousel"
import { aiExampleImages, aiExampleVideos } from "@/components/ai-examples-data"
import { ContactInquiryForm } from "@/components/contact-inquiry-form"
import { WaldbadenPage } from "@/components/waldbaden-page"

function Hero() {
  return (
    <section className="hero" id="start">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-inner page-wrap">
        <div className="hero-copy">
          <span className="eyebrow eyebrow-light"><span className="status-dot" /> IT-Service, KI-Studio &amp; Waldbaden · Schorndorf</span>
          <h1>Technik, die hilft.<br /><em>Ruhe, die bleibt.</em></h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80">Ich unterstütze Sie persönlich mit EDV-Service und KI-Kreationen – und begleite Sie beim Waldbaden in Schorndorf und Umgebung.</p>
          <div className="hero-actions">
            <Link className="button button-light" href="/kontakt">Kontakt aufnehmen <ArrowRight aria-hidden="true" size={17} /></Link>
            <a className="button button-outline-light" href="#bereiche">Angebote ansehen</a>
          </div>
        </div>
        <figure className="hero-visual">
          <div className="hero-portrait-frame">
            <Image
              alt="Uwe Christian an seinem Schreibtisch im Büro"
              className="object-cover object-center"
              fill
              priority
              sizes="(max-width: 700px) 100vw, 46vw"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-sn04qaKs56eEnWexMF6W53tmlZE3XX.webp"
              unoptimized
            />
          </div>
        </figure>
      </div>
      <a aria-label="Weiter zu den Angeboten" className="hero-scroll" href="#bereiche"><ArrowDown aria-hidden="true" size={18} /></a>
    </section>
  )
}

const uweSongLyrics = `Am Router blinkt kein Licht im Stillen,
Wo Uwe IT-Fehler hebt.
Mit Fachverstand und festem Willen
Wird hier der Kundendienst gelebt.
Von der Stirne heiß
Rinnen muss der Schweiß,
Soll PC und Netz perfekt gelingen –
Uwes Hände das Werk vollbringen!

Der Uwe kann’s, der Uwe macht’s,
Er schuftet gern, er packt’s und lacht!
Wird niemals krank, bleibt stets in Schwung,
Ein Mann von Tat und Begeisterung!

Ob Datenrettung, Webseiten-Bau,
Ob Waldbaden mit Achtsamkeit –
Der Uwe weiß es ganz genau
Und steht im Forst und Raum bereit.
Ob Motorsäge, Trimmer-Schall,
Ob Dübel, Wasserrohr und Wand –
Als Handwerker an jedem Fall
Nimmt er das Hausgut in die Hand.

Der Uwe kann’s, der Uwe macht’s,
Er schuftet gern, er packt’s und lacht!
Wird niemals krank, bleibt stets in Schwung,
Ein Mann von Tat und Begeisterung!

Als Schiedsrichter beim Boule am Platz
Achtet er streng auf Maß und Pflicht.
Doch wirft er selbst zum kleinen Schatz,
Trifft seine Kugel mit Gewicht.
Vom Schuppen bis zum Rasengrün,
Vom Rechner bis zur Natur im Hain,
Sieht man ihn voller Tatkraft blühn –
Der Uwe bringt sich überall ein!

Der Uwe kann’s, der Uwe macht’s,
Er schuftet gern, er packt’s und lacht!
Wird niemals krank, bleibt stets in Schwung,
Ein Mann von Tat und Begeisterung!`

const offerCards = [
  {
    area: "brand-area-technik",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_c04dd040-UAKiaMx0kVQLi0nkpgZBtntXCzriS2.jpg",
    imageAlt: "Uwe Christian EDV-Service: schnell, werthaltig, einfach und außergewöhnlich",
    title: "IT-Service",
    description: "Ich helfe Ihnen bei PC, WLAN, Smartphone und Smart Home sowie bei Datenrettung – vor Ort in Schorndorf und Umgebung oder per Fernzugriff.",
    href: "/it-service",
    linkLabel: "Zum IT-Service",
  },
  {
    area: "brand-area-ki",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_c04dd040-sHQbKNe3TVwn43wacBLaPP9Z8K0qrB.jpg",
    imageAlt: "Uwe Christian KI-Studio: Songs, Werbematerial, Exklusiv-Designs und Animationen",
    title: "KI-Studio",
    description: "Ich gestalte digitale Bilder, Videos, Songs und Jingles nach Ihrer Idee und übergebe Ihnen das Ergebnis als Datei. Physische Produkte biete ich nicht an.",
    href: "/ki-studio",
    linkLabel: "Zum KI-Studio",
  },
  {
    area: "brand-area-natur",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_74c0dbdc%20%281%29-VUcu0r9iI9ZuRu7dHnYACXH7ptS3tm.jpg",
    imageAlt: "Handgezeichnete Illustration von Uwe Christian mit den Angeboten Stressbewältigung, Waldbaden, Entschleunigung und Achtsamkeit",
    title: "Waldbaden",
    description: "Ich begleite Sie beim Waldbaden dabei, die Natur achtsam wahrzunehmen und zur Ruhe zu kommen.",
    href: "/waldbaden",
    linkLabel: "Zum Waldbaden",
  },
]

function OfferCards() {
  return (
    <section aria-labelledby="offers-title" className="section" id="bereiche">
      <div className="page-wrap">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl" id="offers-title">Drei Bereiche – ein Ansprechpartner</h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Ich biete Ihnen persönlichen IT-Service, kreative Arbeiten aus meinem KI-Studio und Waldbaden in Schorndorf. Wählen Sie den Bereich, der zu Ihrem Anliegen passt.
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-3 md:gap-5">
          {offerCards.map(({ area, image, imageAlt, title, description, href, linkLabel }) => (
            <li className={`${area} flex`} key={title}>
              <Link
                className="group flex w-full flex-col gap-4 rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-area-accent sm:p-6"
                data-nav-link
                href={href}
              >
                <Image
                  alt={imageAlt}
                  className="aspect-[16/9] w-full object-contain"
                  height={768}
                  src={image}
                  unoptimized
                  width={1360}
                />
                <h3 className="text-xl font-semibold text-area-deep">{title}</h3>
                <p className="text-sm leading-6 text-area-muted">{description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-1 text-sm font-semibold text-area-primary group-hover:underline">
                  {linkLabel} <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function HomePageContent() {
  return (
    <>
      <Hero />
      <OfferCards />
      <AboutSection />
      <HomeContactClosing />
    </>
  )
}

function KIStudioIntro() {
  const facts = [
    { icon: Check, title: "Digitale Ergebnisse", description: "Sie erhalten Ihr fertiges Ergebnis als digitale Datei." },
    { icon: Heart, title: "Individuell abgestimmt", description: "Umfang und Gestaltung bespreche ich mit Ihnen." },
    { icon: ShieldCheck, title: "Klar vereinbart", description: "Die konkrete Leistung wird im jeweiligen Angebot festgehalten." },
  ]

  return (
    <section aria-labelledby="ki-studio-title" className="bg-area-soft py-14 sm:py-20" id="einfuehrung">
      <div className="page-wrap">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">KI-Studio · Schorndorf</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="ki-studio-title">
            KI-Studio – digitale Medien nach Ihrer Idee.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-area-muted">
            Im KI-Studio gestalte ich digitale Bilder und Grafiken, Videos, Songs, Jingles und Audiomaterial nach Ihren Vorstellungen. Sie schildern mir Ihre Idee oder Ihren Anlass; ich entwickle mit Ihnen die Umsetzung und übergebe Ihnen das fertige Ergebnis als digitale Datei.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-area-muted">
            Ich erstelle ausschließlich digitale Medien und biete weder physische Produkte noch Druckaufträge an. Möchten Sie ein Ergebnis drucken oder anderweitig verarbeiten lassen, können Sie das bei einem Anbieter Ihrer Wahl veranlassen.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
          {facts.map(({ icon: Icon, title, description }) => (
            <li className="flex gap-3 rounded-2xl border border-area-border bg-area-surface p-4 shadow-sm" key={title}>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-area-soft text-area-primary">
                <Icon aria-hidden="true" size={20} />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-area-deep">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-area-muted">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function KIStudioServices() {
  const cardClass = "flex h-full flex-col overflow-hidden rounded-2xl border border-area-border bg-area-surface shadow-sm transition-shadow hover:shadow-lg"
  const inquiryClass = "ki-studio-inquiry mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-area-deep px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-area-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2"

  return (
    <section aria-labelledby="ki-leistungen-title" className="py-14 sm:py-20" id="leistungen">
      <div className="page-wrap">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="eyebrow">Leistungen</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="ki-leistungen-title">
            Welche digitalen Medien ich für Sie gestalte
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-area-muted">
            Bilder, Videos und Audio – jeweils nach Ihren Vorgaben gestaltet und als digitale Datei bereitgestellt.
          </p>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-3 md:gap-6">
          <article className={cardClass}>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-area-primary"><ImageIcon aria-hidden="true" size={18} /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Bilder &amp; Grafiken</span></div>
              <h3 className="text-xl font-semibold leading-7 text-area-deep">Digitale Bilder &amp; Grafiken</h3>
              <p className="mt-2 text-sm leading-6 text-area-muted">Personalisierte Porträts, Motive mit Familie oder Haustieren, Illustrationen und Logo-Entwürfe – nach Ihrer Idee gestaltet.</p>
              <p className="mb-6 mt-2 text-sm leading-6 text-area-muted">Die Übergabe erfolgt als digitale Bilddatei.</p>
              <Link className={inquiryClass} href="/kontakt" aria-label="Kreativprojekt anfragen: Digitale Bilder und Grafiken">
                Kreativprojekt anfragen <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </article>

          <article className={cardClass}>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-area-primary"><Video aria-hidden="true" size={18} /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Bewegtbild</span></div>
              <h3 className="text-xl font-semibold leading-7 text-area-deep">Videos</h3>
              <p className="mt-2 text-sm leading-6 text-area-muted">Persönliche Videogrüße und kurze Clips, die besondere Momente, Ideen oder Ihre Marke in Szene setzen.</p>
              <p className="mb-6 mt-2 text-sm leading-6 text-area-muted">Die Übergabe erfolgt als digitale Videodatei.</p>
              <Link className={inquiryClass} href="/kontakt" aria-label="Kreativprojekt anfragen: Videos">
                Kreativprojekt anfragen <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </article>

          <article className={cardClass}>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-area-primary"><Music2 aria-hidden="true" size={18} /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Audio &amp; Musik</span></div>
              <h3 className="text-xl font-semibold leading-7 text-area-deep">Songs, Jingles &amp; Audiomaterial</h3>
              <p className="mt-2 text-sm leading-6 text-area-muted">Persönliche Songs mit eigenem Liedtext, kurze Jingles und weiteres Audiomaterial nach Ihren Vorgaben.</p>
              <p className="mb-6 mt-2 text-sm leading-6 text-area-muted">Die Übergabe erfolgt als digitale Audiodatei.</p>
              <Link className={inquiryClass} href="/kontakt" aria-label="Kreativprojekt anfragen: Songs, Jingles und Audiomaterial">
                Kreativprojekt anfragen <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </article>
        </div>

      </div>
    </section>
  )
}

const kiGalleryImages = [
  {
    src: "/swea/medien/ki-beispiel-1.jpeg",
    alt: "Digitale Illustration eines lächelnden Mannes als weihnachtlicher Elf im verschneiten Wald",
    caption: "Ein persönliches Elfenporträt",
  },
  {
    src: "/swea/medien/ki-beispiel-2.jpeg",
    alt: "Digitale Illustration eines grünen, zotteligen Wesens mit Weihnachtsmütze neben einem festlich geschmückten Baum",
    caption: "Ein augenzwinkerndes Motiv",
  },
  {
    src: "/swea/medien/ki-beispiel-3.jpeg",
    alt: "Digitale Illustration eines Weihnachtsmanns, der Geschenke vor einem geschmückten Baum und Kamin ablegt",
    caption: "Ein festlicher Moment als Bildidee",
  },
]

const kiVideoExamples = [
  {
    src: "/swea/ai-examples/gemini_generated_video_dbe46628.mp4",
    poster: "",
    alt: "KI-generiertes Beispielvideo",
    caption: "KI-generiertes Video",
  },
  {
    src: "/swea/ai-examples/video-cf140fc6.mp4",
    poster: "/swea/ai-examples/ki-studio-video-poster-happy-59.png",
    alt: "Beispiel eines personalisierten Videoclips",
    caption: "Videoclip",
  },
  {
    src: "/swea/medien/ki-video.mp4",
    poster: "/swea/ai-examples/ki-studio-example-video-poster.webp",
    alt: "Beispielvideo mit weihnachtlichem Motiv",
    caption: "Beispielvideo aus dem KI-Studio",
  },
  ...aiExampleVideos,
]

function ExampleCategoryHeading({ icon: Icon, id, label, title }: { icon: typeof ImageIcon; id: string; label: string; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-area-subtle text-area-primary">
        <Icon aria-hidden="true" size={20} />
      </span>
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">{label}</span>
        <h3 className="text-xl font-semibold leading-7 text-area-deep sm:text-2xl" id={id}>{title}</h3>
      </div>
    </div>
  )
}

function KIStudioExamples() {
  return (
    <section aria-labelledby="ki-beispiele-title" className="bg-area-soft pt-14 sm:pt-20" id="beispiele">
      <div className="page-wrap">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow">Beispiele</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="ki-beispiele-title">
            Beispiele aus dem KI-Studio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-area-muted">
            Die gezeigten Beispiele habe ich gestaltet. Bitte laden Sie sie nicht herunter und verbreiten Sie sie nicht weiter.
          </p>
        </div>

        <section aria-labelledby="ki-beispiele-bilder" id="beispiele-bilder">
          <ExampleCategoryHeading icon={ImageIcon} id="ki-beispiele-bilder" label="Bilder &amp; Grafiken" title="Digitale Bilder &amp; Grafiken" />
          <ul aria-label="Beispiele für individuell gestaltete Motive" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kiGalleryImages.map((example) => (
              <li key={example.src}>
                <figure className="overflow-hidden rounded-2xl border border-area-border bg-area-surface shadow-sm">
                  <div className="relative aspect-[3/4] bg-area-subtle">
                    <Image alt={example.alt} className="object-cover" fill loading="lazy" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" src={example.src} />
                  </div>
                  <figcaption className="p-4 text-sm font-semibold leading-6 text-area-deep">{example.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <AIExamplesCarousel examples={aiExampleImages} title="Weitere digitale Bilder und Logo-Entwürfe" />

      <div className="page-wrap">
        <section aria-labelledby="ki-beispiele-videos" className="pt-4" id="beispiele-videos">
          <ExampleCategoryHeading icon={Video} id="ki-beispiele-videos" label="Bewegtbild" title="Videos" />
          <ul aria-label="Beispielvideos aus dem KI-Studio" className="grid gap-5 sm:grid-cols-2">
            {kiVideoExamples.map((example) => (
              <li key={example.src}>
                <figure className="overflow-hidden rounded-2xl border border-area-border bg-area-surface shadow-sm">
                  <video
                    aria-label={example.alt}
                    className="aspect-video w-full bg-area-deep object-contain"
                    controls
                    playsInline
                    poster={example.poster}
                    preload="none"
                  >
                    <source src={example.src} type="video/mp4" />
                    Ihr Browser unterstützt die Videowiedergabe nicht.
                  </video>
                  <figcaption className="flex items-center gap-2 p-4 text-sm font-semibold text-area-deep">
                    <Video aria-hidden="true" className="text-area-primary" size={17} /> {example.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="ki-beispiele-audio" className="pt-14 sm:pt-16" id="beispiele-audio">
          <ExampleCategoryHeading icon={Music2} id="ki-beispiele-audio" label="Audio &amp; Musik" title="Songs, Jingles &amp; Audiomaterial" />
          <figure className="max-w-xl overflow-hidden rounded-2xl border border-area-border bg-area-surface shadow-sm">
            <div className="flex flex-col gap-4 bg-area-deep p-5 text-white sm:p-6">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80"><Music2 aria-hidden="true" size={17} /> Audio-Studio</span>
              <div aria-hidden="true" className="flex h-12 items-center justify-center gap-1.5">
                {[18, 30, 22, 40, 27, 36, 16, 31, 44, 23, 34, 18, 39, 25, 15, 32, 21, 40, 27, 16, 34, 23, 38, 19].map((height, index) => (
                  <span className="w-1 rounded-full bg-area-accent-light/80" key={index} style={{ height }} />
                ))}
              </div>
              <audio aria-label="Beispiel-Jingle als Hörprobe" className="w-full accent-area-accent" controls preload="none">
                <source src="/swea/ai-examples/ki-studio-jingle.mp3" type="audio/mpeg" />
                Ihr Browser unterstützt die Audiowiedergabe nicht.
              </audio>
            </div>
            <figcaption className="flex items-center gap-2 p-4 text-sm font-semibold text-area-deep"><Music2 aria-hidden="true" className="text-area-primary" size={17} /> Jingle als Hörprobe</figcaption>
          </figure>
        </section>
      </div>

      <HolidaySongSection />
    </section>
  )
}

function KIStudioCustomWork() {
  return (
    <section aria-labelledby="ki-umsetzung-title" className="bg-area-soft py-14 sm:py-20" id="individuelle-umsetzung">
      <div className="page-wrap">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Individuelle Umsetzung</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="ki-umsetzung-title">
            Ihre Idee ist der Ausgangspunkt.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-area-muted">
            Jedes Projekt beginnt mit Ihrer Vorstellung: ein Anlass, eine Person, ein Haustier, ein Hobby, eine Geschichte oder eine Geschäftsidee. Daraus entwickle ich mit Ihnen ein Motiv, ein Video oder einen Song.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-area-muted">
            Je nach Projekt bringen Sie Fotos, Stichworte, Lebensstationen für einen Liedtext oder Hinweise zum gewünschten Stil mit. Welche Angaben nötig sind, kläre ich mit Ihnen im Gespräch. Umfang, Gestaltung und konkrete Leistung stimme ich individuell mit Ihnen ab und halte sie im Angebot fest. Das fertige Ergebnis erhalten Sie als digitale Datei.
          </p>
        </div>
      </div>
    </section>
  )
}

function KIStudioProcess() {
  const steps = [
    { title: "Anfrage", description: "Sie schildern Ihre Idee oder Ihren Anlass – über das Kontaktformular, per E-Mail oder telefonisch." },
    { title: "Abstimmung", description: "Ich bespreche mit Ihnen das Wunschergebnis, den Umfang und das benötigte Material. Die konkrete Leistung halte ich im Angebot fest." },
    { title: "Gestaltung", description: "Nach Ihrem schriftlichen Auftrag setze ich Ihre Idee um." },
    { title: "Korrektur bzw. Freigabe", description: "Sie sehen das Ergebnis und geben es frei oder nennen Änderungswünsche. Wie weit Anpassungen möglich sind, richtet sich nach dem vereinbarten Angebot." },
    { title: "Digitale Übergabe", description: "Das freigegebene Ergebnis erhalten Sie als digitale Datei." },
  ]

  return (
    <section aria-labelledby="ki-ablauf-title" className="py-14 sm:py-20" id="ablauf">
      <div className="page-wrap">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="eyebrow">Ablauf</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="ki-ablauf-title">
            Von der Anfrage zur digitalen Datei
          </h2>
        </div>

        <ol aria-label="Ablauf eines KI-Studio-Projekts in fünf Schritten" className="mx-auto grid max-w-4xl gap-3">
          {steps.map((step, index) => (
            <li className="flex gap-4 rounded-2xl border border-area-border bg-area-surface p-4 shadow-sm sm:p-5" key={step.title}>
              <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full bg-area-subtle text-sm font-bold text-area-deep">{index + 1}</span>
              <div>
                <h3 className="text-base font-semibold text-area-deep">{step.title}</h3>
                <p className="mt-1 text-sm leading-6 text-area-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function KIStudioUsage() {
  const usages = [
    {
      icon: Heart,
      title: "Privat & persönlich",
      description: "Als Geschenkidee, Videogruß oder Lied für eine liebe Person, als Erinnerung an einen besonderen Moment oder für Ihre eigenen Projekte und Feiern.",
    },
    {
      icon: Briefcase,
      title: "Geschäftlich",
      description: "Zum Beispiel Logo-Entwürfe, Grafiken, kurze Clips oder ein Jingle für Ihr Unternehmen oder Ihr Vorhaben.",
    },
    {
      icon: Printer,
      title: "Drucken & Weiterverarbeiten",
      description: "Wenn Sie ein Ergebnis drucken oder anderweitig verarbeiten lassen möchten, können Sie das bei einem externen Anbieter veranlassen. Ich drucke nicht und liefere keine Waren.",
    },
  ]

  return (
    <section aria-labelledby="ki-nutzung-title" className="bg-area-soft py-14 sm:py-20" id="nutzungsmoeglichkeiten">
      <div className="page-wrap">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="eyebrow">Nutzungsmöglichkeiten</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="ki-nutzung-title">
            Wofür Sie Ihre Ergebnisse einsetzen können
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-area-muted">
            Welche Nutzung im Einzelfall zulässig ist, hängt vom Auftrag ab. Nutzungsrechte werden nicht pauschal eingeräumt, sondern im vereinbarten Umfang festgelegt.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {usages.map(({ icon: Icon, title, description }) => (
            <article className="flex h-full gap-3 rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm" key={title}>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-area-soft text-area-primary">
                <Icon aria-hidden="true" size={20} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-area-deep">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-area-muted">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function KIStudioLegalNotes() {
  const notes = [
    { title: "Auftrag und Einwilligung", text: "Ich beginne erst, wenn Ihr schriftlicher Auftrag und die Einwilligung der abgebildeten Person vorliegen." },
    { title: "Ihr Material", text: "Fotos, Texte, Logos, Musik und sonstiges Material dürfen Sie mir nur übergeben, wenn Sie die erforderlichen Rechte daran besitzen." },
    { title: "Urheberrecht", text: "Ich respektiere Ihre eigenen kreativen Beiträge. Ein Urheberrechtsschutz besteht, soweit die gesetzlichen Voraussetzungen erfüllt sind – nicht jedes mit KI-Unterstützung erstellte Ergebnis ist automatisch geschützt." },
    { title: "Nutzungsrechte", text: "Ich räume Ihnen Nutzungsrechte nur im ausdrücklich vereinbarten Umfang ein." },
    { title: "Referenzen und Werbung", text: "Ich veröffentliche Aufträge und Ergebnisse nur dann als Referenz oder Werbung, wenn Sie gesondert zugestimmt haben." },
    { title: "Inhalte", text: "Sexualisierte oder gewaltbeinhaltende Inhalte erstelle ich nicht. Ich prüfe jeden Auftrag individuell und behalte mir vor, Aufträge abzulehnen." },
    { title: "Bezahlung und Rechnung", text: "Die Bezahlung erfolgt im Voraus. Sie erhalten eine Rechnung ohne ausgewiesene Mehrwertsteuer aufgrund der Kleinunternehmerregelung." },
    { title: "AGB und Widerrufsbelehrung", text: "Es gelten außerdem die AGB und die Widerrufsbelehrung, die Sie im Fußbereich der Seite finden." },
  ]

  return (
    <section aria-labelledby="ki-hinweise-title" className="py-14 sm:py-20" id="hinweise">
      <div className="page-wrap">
        <div className="mx-auto max-w-4xl rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-8">
          <div className="flex items-start gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-area-soft text-area-primary"><ShieldCheck aria-hidden="true" size={20} /></span>
            <h2 className="pt-1 text-xl font-semibold text-area-deep sm:text-2xl" id="ki-hinweise-title">Hinweise &amp; Voraussetzungen</h2>
          </div>
          <dl className="mt-6 grid gap-x-8 gap-y-5 md:grid-cols-2">
            {notes.map((note) => (
              <div key={note.title}>
                <dt className="text-sm font-semibold text-area-deep">{note.title}</dt>
                <dd className="mt-1 text-sm leading-6 text-area-muted">{note.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function KIStudioClosingCTA() {
  return (
    <section aria-labelledby="ki-closing-title" className="page-wrap ki-crosslink brand-area brand-area-ki" id="anfrage">
      <div>
        <span className="eyebrow">Anfrage</span>
        <h2 id="ki-closing-title">Sie haben eine Idee für ein digitales Kreativprojekt?</h2>
        <p>Schildern Sie mir kurz Ihren Anlass – ich bespreche mit Ihnen, was sich nach Ihren Vorstellungen gestalten lässt.</p>
        <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
          <a className="inline-flex items-center gap-2 font-semibold text-area-deep underline-offset-4 hover:underline" href="mailto:info@swea.de"><Mail aria-hidden="true" size={15} /> info@swea.de</a>
          <a className="inline-flex items-center gap-2 font-semibold text-area-deep underline-offset-4 hover:underline" href="tel:+497181253147"><Phone aria-hidden="true" size={15} /> +49 7181 253147</a>
        </p>
      </div>
      <Link className="button button-dark min-h-12" href="/kontakt">
        Kreativprojekt anfragen <ArrowRight aria-hidden="true" size={17} />
      </Link>
    </section>
  )
}

function HolidaySongSection() {
  return (
    <section aria-labelledby="holiday-song-title" className="holiday-song-section">
      <div className="page-wrap">
        <div className="holiday-song">
          <h3 id="holiday-song-title">Hörproben: Songs nach Maß</h3>
          <div className="holiday-song-grid">
            <div className="holiday-song-left-column">
              <div className="holiday-song-panel">
                <h4>Der Uwe machts - Folk-Version</h4>
                <audio aria-label="Song Der Uwe machts - Folk-Version abspielen" controls preload="none">
                  <source src="/swea/recording-03_13.mp3" type="audio/mpeg" />
                  Ihr Browser unterstützt die Audiowiedergabe nicht.
                </audio>
              </div>
              <div className="holiday-song-panel">
                <h4>Der Uwe machts - Schlagerversion</h4>
                <audio aria-label="Song Der Uwe machts - Schlagerversion abspielen" controls preload="none">
                  <source src="/swea/medien/song-schlager.mp3" type="audio/mpeg" />
                  Ihr Browser unterstützt die Audiowiedergabe nicht.
                </audio>
              </div>
              <div className="holiday-song-panel">
                <h4>Der Uwe machts - Hardrockversion</h4>
                <audio aria-label="Song Der Uwe machts - Hardrockversion abspielen" controls preload="none">
                  <source src="/swea/medien/song-hardrock.mp3" type="audio/mpeg" />
                  Ihr Browser unterstützt die Audiowiedergabe nicht.
                </audio>
              </div>
              <article aria-labelledby="holiday-custom-song-title" className="holiday-song-panel holiday-custom-song">
                <h4 id="holiday-custom-song-title">Ihr individueller Song</h4>
                <p>Sie nennen Lebensstationen, Anlass und gewünschten Musikstil – daraus entstehen Songtext und Lied für eine liebe Person oder zu jedem anderen Anlass. Das fertige Lied erhalten Sie als digitale Audiodatei.</p>
              </article>
            </div>
            <div className="holiday-song-panel holiday-lyrics-panel">
              <h4>Songtext</h4>
              <div className="holiday-lyrics-frame">
                <div aria-label="Songtext zu Der Uwe machts" className="holiday-song-lyrics" role="region" tabIndex={0}>
                  <pre>{uweSongLyrics}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
function ServicesSection() {
  const cardClass = "flex h-full scroll-mt-24 flex-col rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
  const iconClass = "grid size-12 shrink-0 place-items-center rounded-xl bg-area-soft text-area-primary"
  const actionClass = "mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-area-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2"

  return (
    <section aria-labelledby="edv-services-title" className="section section-services" id="dienstleistungen">
      <div className="page-wrap">
        <div className="mb-9 max-w-3xl">
          <span className="eyebrow">EDV-Hilfe für ALLE BELANGE · Schorndorf &amp; Umgebung</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="edv-services-title">Technikhilfe – persönlich und verständlich</h1>
          <p className="mt-4 text-base leading-7 text-area-muted">Für Kundinnen und Kunden in Schorndorf und Umgebung – im eigenen Zuhause ebenso wie im Homeoffice oder Business. Freundliche Unterstützung vor Ort oder per Fernzugriff – passend zu Ihrem Anliegen.</p>
        </div>

        <div className="grid items-stretch gap-4 sm:grid-cols-2">
          <article className={cardClass} id="computerhilfe">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><MonitorCog aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">PC &amp; Windows</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">Computerhilfe &amp; Windows-Probleme</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-area-muted">Ich helfe Ihnen geduldig bei PC-Störungen, Windows-Fehlern und Installationen – direkt bei Ihnen vor Ort oder, wenn es passt, per Fernzugriff.</p>
            <Link aria-label="Computerproblem schildern" className={actionClass} data-nav-link href="/kontakt">IT-Problem schildern <ArrowRight aria-hidden="true" size={16} /></Link>
          </article>

          <article className={cardClass} id="netzwerke">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><Wifi aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Netz im ganzen Haus</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">WLAN &amp; Heimnetzwerke</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-area-muted">Ich richte Ihren Router ein, helfe Ihnen Funklöcher zu schließen und verbinde Ihre Geräte zuverlässig. Je nach Verkabelung nutze ich auch vorhandene Telefon- oder Koaxialleitungen – etwa Sat-Leitungen – mit geeigneten Adaptern für Ihr Heimnetz.</p>
            <Link aria-label="WLAN- oder Netzwerkproblem schildern" className={actionClass} data-nav-link href="/kontakt">WLAN-Problem schildern <ArrowRight aria-hidden="true" size={16} /></Link>
          </article>

          <article className={cardClass} id="smartphones-smart-home">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><Smartphone aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Alltag &amp; Zuhause</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">Smartphones, Tablets &amp; Smart Home</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-area-muted">Ich unterstütze Sie geduldig beim Einrichten, Verbinden und Bedienen Ihrer Alltagsgeräte – vom Smartphone und Tablet bis zu Smart-Home-Geräten.</p>
            <Link aria-label="Hilfe zu Smartphone, Tablet oder Smart Home anfragen" className={actionClass} data-nav-link href="/kontakt">Hilfe anfragen <ArrowRight aria-hidden="true" size={16} /></Link>
          </article>

          <article className={cardClass} id="hardwarehilfe">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><HardDrive aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Geräte &amp; Komponenten</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">Hardware-Hilfe</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-area-muted">Ich berate Sie bei der Geräteauswahl, beim Anschluss und bei der Einrichtung. Außerdem schätze ich mit Ihnen ein, ob sich eine Reparatur lohnt.</p>
            <Link aria-label="Hilfe bei Hardware anfragen" className={actionClass} data-nav-link href="/kontakt">Hardware-Hilfe anfragen <ArrowRight aria-hidden="true" size={16} /></Link>
          </article>

          <article className={cardClass} id="allgemeine-it-unterstuetzung">
            <div className="mb-5 flex items-start gap-4">
              <span className={iconClass}><Heart aria-hidden="true" size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Rund um Ihre Technik</p>
                <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">Allgemeine IT-Unterstützung</h3>
              </div>
            </div>
            <p className="text-sm leading-6 text-area-muted">Ihr Anliegen passt in keine Kategorie? Schildern Sie es mir kurz – ich prüfe, wie ich Sie unterstützen kann.</p>
            <Link aria-label="Allgemeines IT-Anliegen schildern" className={actionClass} data-nav-link href="/kontakt">Anliegen schildern <ArrowRight aria-hidden="true" size={16} /></Link>
          </article>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight text-area-deep sm:text-2xl">Weitere Leistungen im IT-Service</h2>
          <div className="mt-4 grid items-stretch gap-4 md:grid-cols-2">
            <article className={cardClass} id="datenrettung-karte">
              <div className="mb-5 flex items-start gap-4">
                <span className={iconClass}><HardDrive aria-hidden="true" size={22} /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Mit Partner DataPhoenix</p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">Datenrettung</h3>
                </div>
              </div>
              <p className="mb-5 text-sm leading-6 text-area-muted">Bei verlorenen Daten von Festplatten, USB-Sticks und Handys koordiniere ich die Diagnose und Datenrettung mit meinem Partner DataPhoenix. Sie entscheiden in jedem Schritt selbst, wie es weitergeht.</p>
              <Link className={actionClass} data-nav-link href="/datenrettung">Datenrettung – Ablauf ansehen <ArrowRight aria-hidden="true" size={16} /></Link>
            </article>

            <article className={cardClass} id="webdesign-karte">
              <div className="mb-5 flex items-start gap-4">
                <span className={iconClass}><Code2 aria-hidden="true" size={22} /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">Webseiten &amp; Wartung</p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">Webdesign</h3>
                </div>
              </div>
              <p className="mb-5 text-sm leading-6 text-area-muted">Neue Website, Überarbeitung Ihrer bestehenden Webseite oder Wartung – persönlich geplant und betreut.</p>
              <Link className={actionClass} data-nav-link href="/webdesign">Zum Webdesign <ArrowRight aria-hidden="true" size={16} /></Link>
            </article>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-start justify-between gap-4 rounded-2xl bg-area-deep px-6 py-5 text-white sm:flex-row sm:items-center sm:px-8">
          <div>
            <h3 className="text-lg font-semibold">Sie brauchen Unterstützung bei Ihrer Technik?</h3>
            <p className="mt-1 text-sm leading-6 text-white/80">Schildern Sie mir kurz Ihr Problem – ich bespreche mit Ihnen den passenden nächsten Schritt.</p>
          </div>
          <Link className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-area-accent px-5 py-2.5 text-sm font-semibold text-area-accent-foreground transition-colors hover:bg-area-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-area-accent" data-nav-link href="/kontakt">Jetzt Hilfe anfordern <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </div>
    </section>
  )
}

function DataRecoverySection() {
  const steps = [
    {
      title: "Datenträger ausschalten und nicht weiter nutzen",
      description: "Bei einem defekten Gerät möglichst sofort die Stromzufuhr trennen, sofern das sicher möglich ist.",
    },
    {
      title: "Keine Reparaturversuche starten",
      description: "Vermeiden Sie weitere Startversuche, Rettungssoftware und das Öffnen des Geräts.",
    },
    {
      title: "Unverändert lassen und Kontakt aufnehmen",
      description: "Beschreiben Sie mir kurz, was passiert ist. Ich bespreche mit Ihnen den nächsten sinnvollen Schritt.",
    },
  ]

  const processSteps: { title: string; description: string; consent?: string }[] = [
    {
      title: "Aufwandspauschale von 40 Euro",
      description: "Unabhängig vom weiteren Verlauf berechne ich für die Beauftragung eine Aufwandspauschale von 40 Euro für Bearbeitung und Abwicklung. Details dazu finden Sie unten.",
    },
    {
      title: "Sie fragen die Datenrettung bei mir an",
      description: "Schildern Sie mir kurz, um welchen Datenträger es geht und was passiert ist. Je nach Situation versuche ich, Ihre Daten ohne externen Partner und mit eigenen Werkzeugen wiederherzustellen. Wenn ich selbst tätig werden kann, erhalten Sie dafür vorab ein Angebot; die Aufwandspauschale deckt diesen Arbeitsschritt nicht ab.",
    },
    {
      title: "Einbindung des Partners und Ihre Zustimmung zur Untersuchung",
      description: "Ich erkläre Ihnen, wann ich DataPhoenix einbinde. Bevor ich Ihr Speichermedium weitergebe, nenne ich Ihnen unverbindlich den Preis und hole Ihre ausdrückliche Zustimmung zur Untersuchung durch DataPhoenix ein.",
      consent: "Ihre Zustimmung · vor der Weitergabe",
    },
    {
      title: "Übergabe zur Diagnose",
      description: "Ich übergebe Ihr Speichermedium zur Diagnose an DataPhoenix. Abholung beziehungsweise Versand vereinbare ich mit Ihnen passend zum Ablauf und zur Dringlichkeit.",
    },
    {
      title: "Erste Diagnose durch DataPhoenix",
      description: "DataPhoenix führt eine erste Diagnose durch. Diese ist noch durch die Aufwandspauschale abgedeckt.",
    },
    {
      title: "Einschätzung der Chancen zur Datenwiederherstellung",
      description: "Ich teile Ihnen die Einschätzung zu den Erfolgsaussichten und das weitere Vorgehen mit.",
    },
    {
      title: "Ich nenne Ihnen den endgültigen Preis",
      description: "Sie erhalten von mir einen individuellen Kostenvoranschlag. Die Kalkulation richtet sich nach einer gerätespezifischen Preisliste.",
    },
    {
      title: "Ihre Zustimmung zur kostenpflichtigen Datenrettung",
      description: "Erst nach Ihrer ausdrücklichen Zustimmung beauftrage ich die eigentliche Datenrettung bei DataPhoenix. Ohne Ihre Zustimmung beauftrage ich keine kostenpflichtige Datenrettung.",
      consent: "Ihre gesonderte Zustimmung · vor der Beauftragung",
    },
    {
      title: "Rückgabe des Speichermediums",
      description: "Nach Abschluss der Arbeiten erhalte ich das Speichermedium gemäß der vereinbarten Rückgabe und übergebe es anschließend an Sie.",
    },
  ]

  const responsibilities = [
    {
      title: "Obhut über das Speichermedium",
      description: "Während der Diagnose und Bearbeitung befindet sich Ihr Speichermedium ausschließlich bei mir oder bei DataPhoenix.",
    },
    {
      title: "Diagnose und Bearbeitung",
      description: "Nach meiner ersten Einschätzung findet die vertiefte technische Diagnose und eine mögliche Datenrettung bei DataPhoenix statt.",
    },
    {
      title: "Organisation und Abwicklung",
      description: "Ich koordiniere den Ablauf, bin Ihr Ansprechpartner und teile Ihnen meine Einschätzung und den Preis mit.",
    },
    {
      title: "Transport und Rücktransport",
      description: "Abholung beziehungsweise Versand und die Rückführung erfolgen entsprechend der vereinbarten Abwicklung.",
    },
  ]

  return (
    <section aria-labelledby="datenrettung-title" className="section bg-area-soft" id="datenrettung">
      <div className="page-wrap">
      <SubpageBackLink current="Datenrettung" />
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start lg:gap-12">
        <div className="max-w-2xl">
          <span className="eyebrow">Datenrettung</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="datenrettung-title">
            Professionelle Datenrettung – Wenn es brenzlig wird.
          </h1>
          <p className="mt-4 text-base leading-7 text-area-muted">
            Bei der Datenrettung arbeite ich mit dem spezialisierten Partner DataPhoenix zusammen. Ich bin Ihr Ansprechpartner und koordiniere den Ablauf; die technische Diagnose und die eigentliche Datenrettung übernimmt im Wesentlichen DataPhoenix. Sie entscheiden in jedem Schritt selbst: zuerst über die Zustimmung zur Untersuchung durch meinen Partner und später über die kostenpflichtige Datenrettung.
          </p>
          <p className="mt-3 text-sm leading-6 text-area-muted">
            Ob Festplatte, USB-Stick oder Handy: Sie erhalten eine Einschätzung und den endgültigen Preis, bevor Sie über die Datenrettung entscheiden.
          </p>
          <a
            aria-label="DatenPhoenix – Partner für Datenrettung (öffnet in neuem Tab)"
            className="mt-6 inline-flex max-w-full rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2"
            href="https://datenphoenix.de"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="DatenPhoenix Logo"
              className="h-auto w-full max-w-[20rem]"
              height={89}
              loading="lazy"
              src="/swea/medien/bild-image.png"
              unoptimized
              width={625}
            />
          </a>
        </div>

        <aside aria-labelledby="datenrettung-warning-title" className="rounded-3xl border border-warning-border bg-warning-soft p-5 shadow-sm sm:p-7">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-warning-subtle text-warning-foreground">
              <HardDrive aria-hidden="true" size={21} />
            </span>
            <div>
              <h3 className="text-lg font-semibold leading-snug text-area-deep sm:text-xl" id="datenrettung-warning-title">
                Datenträger defekt? Erst einmal nichts weiter ausprobieren.
              </h3>
              <p className="mt-2 text-sm leading-6 text-area-muted">
                Weitere Startversuche, Reparaturprogramme oder das Öffnen des Geräts können den Schaden verschlimmern. Lassen Sie den Datenträger möglichst unverändert.
              </p>
            </div>
          </div>

          <h4 className="mt-6 text-sm font-semibold text-area-deep">Erste Hilfe bei Datenverlust</h4>
          <ol aria-label="Erste Hilfe bei Datenverlust in drei Schritten" className="mt-3 grid gap-3">
            {steps.map((step, index) => (
              <li className="flex gap-3 rounded-xl border border-warning-border bg-area-surface p-4" key={step.title}>
                <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-warning-subtle text-sm font-bold text-warning-deep">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-area-deep">{step.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-area-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

            <p className="mt-5 text-sm leading-6 text-area-muted">Vor einer kostenpflichtigen Datenrettung erhalten Sie meine Einschätzung und einen Preis. Ich beauftrage die Datenrettung erst nach Ihrer ausdrücklichen Zustimmung.</p>

          <Link className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-area-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2" data-nav-link href="/kontakt">
            Datenrettung anfragen <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </aside>
      </div>

      <div className="mt-12 lg:mt-16" id="datenrettung-ablauf">
        <div className="max-w-2xl">
          <span className="eyebrow">Ablauf</span>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-area-deep sm:text-3xl" id="datenrettung-ablauf-title">
            So läuft die Datenrettung mit DataPhoenix ab
          </h3>
          <p className="mt-3 text-base leading-7 text-area-muted">
            In neun Schritten von Ihrer Anfrage bis zur Rückgabe. Die beiden hervorgehobenen Schritte sind Ihre Entscheidungen.
          </p>
        </div>

        <ol aria-labelledby="datenrettung-ablauf-title" className="mt-8 grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <li
              className={
                step.consent
                  ? "flex gap-4 rounded-2xl border-2 border-area-primary bg-area-surface p-5 shadow-sm"
                  : "flex gap-4 rounded-2xl border border-area-border bg-area-surface p-5"
              }
              key={step.title}
            >
              <span
                aria-hidden="true"
                className={
                  step.consent
                    ? "grid size-9 shrink-0 place-items-center rounded-full bg-area-primary text-sm font-bold text-white"
                    : "grid size-9 shrink-0 place-items-center rounded-full bg-area-soft text-sm font-bold text-area-primary"
                }
              >
                {index + 1}
              </span>
              <div>
                {step.consent ? (
                  <p className="mb-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-area-primary">
                    <Check aria-hidden="true" size={14} /> {step.consent}
                  </p>
                ) : null}
                <h4 className="text-base font-semibold leading-snug text-area-deep">
                  <span className="sr-only">Schritt {index + 1}: </span>
                  {step.title}
                </h4>
                <p className="mt-1.5 text-sm leading-6 text-area-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <aside aria-labelledby="datenrettung-gebuehr-title" className="rounded-2xl border border-area-border bg-area-surface p-6">
            <h4 className="text-lg font-semibold leading-snug text-area-deep" id="datenrettung-gebuehr-title">
              Meine Aufwandspauschale: 40 Euro
            </h4>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-area-muted">
              <li className="flex gap-2"><Check aria-hidden="true" className="mt-1 shrink-0 text-area-primary" size={16} /> Die Pauschale vergütet meine Bearbeitung und Abwicklung.</li>
              <li className="flex gap-2"><Check aria-hidden="true" className="mt-1 shrink-0 text-area-primary" size={16} /> Sie wird Ihnen vor Ihrer Beauftragung mitgeteilt.</li>
            </ul>
                      <p className="mt-3 text-sm leading-6 text-area-muted">
              Die Pauschale wird in jedem Fall fällig. Sie deckt meinen Aufwand für die Erstanalyse, die gegebenenfalls nötige Rücksprache mit DataPhoenix, die erforderlichen Schritte und die Kommunikation mit Ihnen ab.
            </p>
            <p className="mt-3 text-sm leading-6 text-area-muted">
              Kann ich Ihre Daten zunächst selbst mit eigenen Werkzeugen wiederherstellen, ist diese technische Arbeit nicht in der Pauschale enthalten. Dafür erhalten Sie vorab ein separates Angebot; ich beginne erst, wenn Sie diesem Angebot zugestimmt haben.
            </p>
          </aside>

          <aside aria-labelledby="datenrettung-quote-title" className="rounded-2xl border border-area-border bg-area-surface p-6">
            <h4 className="text-lg font-semibold leading-snug text-area-deep" id="datenrettung-quote-title">
              Erfolgsaussichten
            </h4>
            <p className="mt-3 text-sm leading-6 text-area-muted">
              Mein spezialisierter Partner DataPhoenix nennt auf der eigenen Website eine Erfolgsquote von 92,5 %. Die tatsächlichen Wiederherstellungsmöglichkeiten hängen vom individuellen Schadensbild und dem jeweiligen Datenträger ab. Eine Erfolgsgarantie für Ihren Einzelfall besteht nicht.
            </p>
            <p className="mt-3 text-xs leading-5 text-area-muted">Quelle: DataPhoenix. Ich habe die Angaben nicht selbst ausgewertet.</p>
          </aside>
        </div>

        <div className="mt-4 rounded-2xl border border-area-border bg-area-surface p-6">
          <h4 className="text-lg font-semibold leading-snug text-area-deep">Wer macht was?</h4>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {responsibilities.map((item) => (
              <div key={item.title}>
                <dt className="text-sm font-semibold text-area-deep">{item.title}</dt>
                <dd className="mt-1 text-sm leading-6 text-area-muted">{item.description}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-6 text-area-muted">
            Über Haftung und geltende Bedingungen informiere ich Sie, bevor ich Ihr Speichermedium weitergebe.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-area-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2" data-nav-link href="/kontakt">
            Datenrettung anfragen <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
      </div>
    </section>
  )
}

function WebsiteDesignSection() {
  const benefits = [
    {
      icon: Check,
      title: "Alles aus einer Hand",
      description: "Von der Idee bis zum Start: Domain, E-Mail, Gestaltung und Umsetzung passend zu Ihrem Vorhaben.",
    },
    {
      icon: Smartphone,
      title: "Mobilfreundlich",
      description: "Ihre Website passt sich Smartphone, Tablet und Computer an – klar lesbar und einfach zu bedienen.",
    },
    {
      icon: ShieldCheck,
      title: "Zuverlässig & sicher",
      description: "Sorgfältige Einrichtung und verständliche Pflege helfen, Ihre Website zuverlässig und sicher zu halten.",
    },
    {
      icon: Heart,
      title: "Persönlich betreut",
      description: "Ich bin Ihr direkter Ansprechpartner – von der ersten Idee bis zu Ihren Fragen nach dem Start."
    },
  ]

  const services = [
    {
      icon: Code2,
      eyebrow: "Webdesign",
      title: "Neue Website",
      description: "Von der ersten Idee über Domain, E-Mail und Gestaltung bis zur fertigen Website – passend zu Ihrem Vorhaben.",
    },
    {
      icon: MonitorCog,
      eyebrow: "Überarbeitung",
      title: "Website-Überarbeitung",
      description: "Gern überarbeite ich Ihre bestehende Website von Grund auf und stimme das Redesign mit Ihnen ab.",
    },
    {
      icon: ShieldCheck,
      eyebrow: "Wartung",
      title: "Wartung & Betreuung",
      description: "Mit einem Wartungsvertrag übernehme ich die langfristige Betreuung und verständliche Pflege Ihrer Website.",
    },
  ]

  return (
    <section aria-labelledby="webseiten-webdesign-title" className="section bg-area-soft/60" id="webseiten-webdesign">
      <div className="page-wrap">
      <SubpageBackLink current="Webdesign" />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="max-w-2xl">
          <span className="eyebrow">Webseiten &amp; Webdesign</span>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="webseiten-webdesign-title">
            Ihre Website. Persönlich geplant und professionell umgesetzt.
          </h1>
          <p className="mt-4 text-base leading-7 text-area-muted">
            Von der ersten Idee über Domain, E-Mail und Gestaltung bis zur fertigen Website – und langfristige Betreuung.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-area-muted">
            Ich begleite Sie persönlich durch jeden Schritt und bleibe Ihr fester Ansprechpartner. Technische Details erkläre ich verständlich und kümmere mich um die Umsetzung.
          </p>
          <Link className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-area-primary px-5 text-sm font-semibold text-white transition hover:bg-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2" data-nav-link href="/kontakt">
            Website-Projekt besprechen <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className="flex h-full gap-3 rounded-2xl border border-area-border bg-area-surface p-4 shadow-sm sm:p-5" key={title}>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-area-soft text-area-primary">
                <Icon aria-hidden="true" size={20} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-area-deep">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-area-muted">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-area-deep sm:text-3xl">Meine Leistungen rund um Ihre Website</h2>
        <div className="mt-6 grid items-stretch gap-4 md:grid-cols-3">
          {services.map(({ icon: Icon, eyebrow, title, description }) => (
            <article className="flex h-full flex-col rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-6" key={title}>
              <div className="mb-4 flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-area-soft text-area-primary">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-area-primary">{eyebrow}</p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug text-area-deep">{title}</h3>
                </div>
              </div>
              <p className="text-sm leading-6 text-area-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t border-area-border pt-10" aria-labelledby="webdesign-references-title">
        <div className="max-w-2xl">
          <span className="eyebrow">Einblicke in meine Arbeit</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-area-deep sm:text-3xl" id="webdesign-references-title">Ausgewählte Webdesign-Referenzen</h2>
          <p className="mt-3 text-sm leading-6 text-area-muted">Ich habe diese Webseiten konzipiert und umgesetzt. Überzeugen Sie sich selbst von meiner Arbeit und den realisierten Projekten.</p>
        </div>
        <div className="mt-6 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Hotel Garni & Events Burg Waldenstein", description: "Historisches Ambiente, Hotel und Eventlocation im Schwäbischen Wald.", url: "https://www.burg-waldenstein.de" },
            { title: "MR Vermietung", description: "Zuverlässige Anhänger- und Kühltransport-Vermietung in Rudersberg.", url: "https://mrvermietung.com" },
            { title: "Pferdefahrpraxis Dr. Sonja Finsler", description: "Mobile Fahrpraxis für Pferde mit tiermedizinischer Kompetenz.", url: "https://pferdefahrpraxis.de" },
            { title: "Miedelsbach", description: "Die offizielle Stadtteil-Webseite für Schorndorf-Miedelsbach mit Infos aus dem Dorfleben.", url: "https://miedelsbach.de" },
            { title: "Meine Website", description: "Meine Website für EDV-Service, KI-Studio und Waldbaden.", url: "https://www.swea.de" },
          ].map(({ title, description, url }) => (
            <article className="flex h-full flex-col rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6" key={title}>
              <h3 className="text-base font-semibold leading-snug text-area-deep">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-area-muted">{description}</p>
              <a className="mt-5 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-lg bg-area-primary px-4 text-sm font-semibold text-white transition hover:bg-area-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary focus-visible:ring-offset-2" href={url} target="_blank" rel="noopener noreferrer">
                Zur Webseite <ArrowRight aria-hidden="true" size={16} />
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

function SubpageBackLink({ current }: { current: string }) {
  return (
    <nav aria-label="Brotkrümelnavigation" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-area-muted">
        <li>
          <Link className="font-semibold text-area-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary" data-nav-link href="/it-service">IT-Service</Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  )
}

export function DataRecoveryPageContent() {
  return (
    <div className="brand-area brand-area-technik">
      <DataRecoverySection />
    </div>
  )
}

export function WebdesignPageContent() {
  return (
    <div className="brand-area brand-area-technik">
      <WebsiteDesignSection />
    </div>
  )
}

function EdvView() {
  return (
    <>
      <ServicesSection />
      <RemoteSection />
      <section className="page-wrap ki-crosslink brand-area brand-area-ki" aria-labelledby="ki-crosslink-title">
        <div>
          <span className="eyebrow">KI-Studio</span>
          <h2 id="ki-crosslink-title">Digitale Medien nach Ihrer Idee.</h2>
          <p>Im KI-Studio gestalte ich digitale Bilder, Videos, Songs und Jingles nach Ihrer Idee oder zu Ihrem Anlass. Sie erhalten das Ergebnis als Datei; physische Geschenke, Druckprodukte oder Waren biete ich nicht an.</p>
        </div>
        <Link className="button button-dark" data-nav-link href="/ki-studio">Zum KI-Studio <ArrowRight aria-hidden="true" size={17} /></Link>
      </section>
    </>
  )
}

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <div className="section-lead">{children}</div> : null}
    </div>
  )
}

function RemoteSection() {
  const options = [
    { name: "RustDesk", description: "Fernzugriff für Windows, macOS, Linux und mobile Geräte.", url: "https://rustdesk.com/download", label: "rustdesk.com/download" },
    { name: "TeamViewer", description: "Fernwartung und Unterstützung mit TeamViewer.", url: "https://www.teamviewer.com/de/download/windows/", label: "teamviewer.com" },
    { name: "Google Remote Desktop", description: "Unterstützung über den Google Chrome Remote Desktop.", url: "https://remotedesktop.google.com/support", label: "remotedesktop.google.com" },
  ]
  const steps = [
    { title: "Vorher abstimmen", description: "Ich bespreche mit Ihnen, ob Fernzugriff für Ihr Anliegen sinnvoll ist und welches Programm Sie verwenden." },
    { title: "Sitzung selbst freigeben", description: "Sie öffnen das vereinbarte Programm und teilen den einmaligen Sitzungscode erst, wenn Sie bereit sind." },
    { title: "Alles im Blick behalten", description: "Sie bleiben am Computer, sehen alle Schritte und können die Verbindung jederzeit beenden." },
  ]

  return (
    <section aria-labelledby="remote-access-title" className="section section-remote" id="fernzugriff">
      <div className="page-wrap">
        <div className="mb-8 max-w-3xl">
          <span className="eyebrow">IT-Support · Ihre Sicherheit</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-area-deep sm:text-4xl" id="remote-access-title">Sicherheit &amp; Fernzugriff</h2>
          <p className="mt-4 text-base leading-7 text-area-muted">Wenn Fernhilfe für Ihr Anliegen sinnvoll ist, bespreche ich den Ablauf vorher mit Ihnen. Sie öffnen das vereinbarte Programm und entscheiden selbst, wann die Sitzung beginnt und endet.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-start">
          <aside aria-labelledby="remote-steps-title" className="rounded-2xl border border-area-border bg-area-surface p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-area-soft text-area-primary"><ShieldCheck aria-hidden="true" size={20} /></span>
              <h3 className="pt-1 text-lg font-semibold text-area-deep" id="remote-steps-title">So läuft eine Fernsitzung ab</h3>
            </div>
            <ol className="mt-5 grid gap-4">
              {steps.map((step, index) => (
                <li className="flex gap-3" key={step.title}>
                  <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-area-subtle text-sm font-bold text-area-deep">{index + 1}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-area-deep">{step.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-area-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-area-border bg-area-soft p-4 text-area-deep" role="note">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-area-subtle text-area-primary"><ShieldCheck aria-hidden="true" size={18} /></span>
              <div>
                <p className="text-sm font-semibold leading-6">Fernzugriffe (TeamViewer/RustDesk) erfolgen ausschließlich nach vorheriger telefonischer Absprache und Ihrer ausdrücklichen Zustimmung.</p>
                <p className="mt-1 text-xs leading-5 text-area-muted">Sie behalten während der gesamten Sitzung die Kontrolle und können die Verbindung jederzeit beenden.</p>
              </div>
            </div>
          </aside>

          <div>
            <h3 className="text-lg font-semibold text-area-deep">Mögliche Fernzugriff-Programme</h3>
            <p className="mt-2 text-sm leading-6 text-area-muted">Nutzen Sie nur das Programm, das ich vorher mit Ihnen vereinbart habe. Laden Sie es selbst über die jeweilige Originalseite herunter.</p>
            <div className="mt-4 grid gap-3">
              {options.map((option) => (
                <a className="group flex flex-col rounded-xl border border-area-border bg-area-surface p-4 transition hover:border-area-accent hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-primary" href={option.url} key={option.name} rel="noopener noreferrer" target="_blank">
                  <h4 className="text-sm font-semibold text-area-deep">{option.name}</h4>
                  <p className="mt-1 text-sm leading-6 text-area-muted">{option.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-area-primary">{option.label} <ExternalLink aria-hidden="true" size={14} /></span>
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-area-muted">Beenden Sie die Sitzung nach der Unterstützung. Dauerhafte Zugänge werden nicht ohne Ihre ausdrückliche Absprache eingerichtet.</p>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-start justify-between gap-4 rounded-2xl bg-area-deep px-5 py-5 text-white sm:flex-row sm:items-center sm:px-7">
          <div>
            <h3 className="text-lg font-semibold">Sie brauchen Hilfe mit Ihrem Computer oder Netzwerk?</h3>
            <p className="mt-1 text-sm leading-6 text-white/80">Schildern Sie mir Ihr IT-Problem – ich bespreche mit Ihnen den passenden nächsten Schritt.</p>
          </div>
          <Link className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-area-accent px-5 py-3 text-sm font-semibold text-area-accent-foreground transition-colors hover:bg-area-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-area-accent sm:w-auto" data-nav-link href="/kontakt">
            IT-Problem schildern <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="section section-contact" id="kontakt" aria-labelledby="contact-title">
      <div className="page-wrap grid items-start gap-8 md:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="flex flex-col gap-7">
          <div>
            <span className="inline-flex rounded-full border border-area-border/25 bg-area-subtle/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">Kontakt zu Uwe Christian</span>
            <h1 id="contact-title" className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">Nehmen Sie direkt Kontakt mit mir auf.</h1>
            <p className="mt-3 max-w-lg text-sm leading-7 text-white/75">Ob IT-Frage, Webprojekt oder Waldbaden – Sie erreichen mich direkt.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a href="tel:+497181253147" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-area-surface/[0.06] p-4 transition hover:bg-area-surface/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-accent">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-area-subtle/10 text-white/80"><Phone aria-hidden="true" size={18} /></span>
              <span className="min-w-0"><span className="block text-xs text-white/70">Telefon</span><span className="block break-words text-sm font-semibold text-white">+49 7181 253147</span></span>
            </a>
            <a href="mailto:info@swea.de" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-area-surface/[0.06] p-4 transition hover:bg-area-surface/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-area-accent">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-area-subtle/10 text-white/80"><Mail aria-hidden="true" size={18} /></span>
              <span className="min-w-0"><span className="block text-xs text-white/70">E-Mail</span><span className="block break-words text-sm font-semibold text-white">info@swea.de</span></span>
            </a>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-area-border/10 bg-area-deep/25 p-4 text-white/85">
            <Clock3 aria-hidden="true" className="mt-0.5 shrink-0 text-area-accent-light" size={18} />
            <div><p className="text-sm font-semibold text-white">Erreichbarkeit</p><p className="mt-1 text-sm leading-6">Ich bin nach Vereinbarung erreichbar. Falls ich Ihren Anruf nicht entgegennehmen kann, hinterlassen Sie mir gern eine Nachricht – ich rufe Sie zurück.</p></div>
          </div>

          <div className="flex items-start gap-3 border-l-2 border-area-border/65 pl-4 text-sm leading-6 text-white/80">
            <MapPin aria-hidden="true" className="mt-1 shrink-0 text-area-accent-light" size={18} />
            <p>Sie erreichen mich in Schorndorf direkt – ohne anonyme Hotline und unnötige Umwege.</p>
          </div>
        </div>

        <ContactInquiryForm />
      </div>
    </section>
  )
}

function AboutSection() {
  const qualifications = [
    "Diplom-Informatiker, Studium an der Universität Stuttgart",
    "Jahrzehntelange Erfahrung im professionellen EDV-Service",
    "Kursleiter für Waldbaden und Achtsamkeit – Ausbildung an der Deutschen Akademie für Waldbaden und Gesundheit, August 2023",
  ]

  return (
    <section aria-labelledby="about-title" className="section bg-area-soft" id="ueber-swea">
      <div className="page-wrap">
        <div className="mx-auto max-w-3xl rounded-2xl border border-area-border bg-area-surface p-6 shadow-sm sm:p-8">
          <span className="eyebrow">Über mich</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-area-deep sm:text-3xl" id="about-title">Ich bin Ihr persönlicher Ansprechpartner.</h2>
          <p className="mt-3 text-base leading-7 text-area-muted">Ich höre zu, erkläre verständlich und suche mit Ihnen den passenden nächsten Schritt.</p>
          <ul className="mt-5 grid gap-3">
            {qualifications.map((item) => (
              <li className="flex items-start gap-3 text-sm leading-6 text-area-deep" key={item}>
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-area-subtle text-area-primary"><Check aria-hidden="true" size={13} /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function HomeContactClosing() {
  return (
    <section aria-labelledby="home-contact-title" className="section">
      <div className="page-wrap">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-area-deep px-5 py-6 text-white sm:px-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl" id="home-contact-title">Wie kann ich Sie unterstützen?</h2>
            <p className="mt-2 text-sm leading-6 text-white/80">Beschreiben Sie kurz Ihr Anliegen – ich melde mich persönlich bei Ihnen.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-area-accent px-5 py-3 text-sm font-semibold text-area-accent-foreground transition-colors hover:bg-area-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-area-accent" data-nav-link href="/kontakt">
              Kontakt aufnehmen <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <a className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href="tel:+497181253147">
              <Phone aria-hidden="true" size={16} /> +49 7181 253147
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


export function ITServicePageContent() {
  return (
    <div className="brand-area brand-area-technik">
      <EdvView />
    </div>
  )
}

export function WaldbadenPageContent() {
  return (
    <div className="brand-area brand-area-natur">
      <WaldbadenPage />
    </div>
  )
}

export function KIStudioPageContent() {
  return (
    <div className="brand-area brand-area-ki">
      <KIStudioIntro />
      <KIStudioServices />
      <KIStudioExamples />
      <KIStudioCustomWork />
      <KIStudioProcess />
      <KIStudioUsage />
      <KIStudioLegalNotes />
      <KIStudioClosingCTA />
    </div>
  )
}

export function ContactPageContent() {
  return (
    <div className="brand-area brand-area-base">
      <ContactSection />
    </div>
  )
}
