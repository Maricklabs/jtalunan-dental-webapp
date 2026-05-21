import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { serviceMenu } from "@/data/services";

const serviceReferenceImages: Record<string, { src: string; alt: string }> = {
  "general-dentistry": {
    src: "/images/generalDentistry.jpg",
    alt: "General dentistry checkup reference image"
  },
  "orthodontics-braces": {
    src: "/images/orthodontics.jpg",
    alt: "Orthodontic braces reference image"
  },
  "oral-surgery": {
    src: "/images/oralSurgery.jpg",
    alt: "Oral surgery reference image"
  },
  "cosmetic-dentistry": {
    src: "/images/Cosmetic_Dentistry_Supporting-Image.jpg",
    alt: "Cosmetic dentistry supporting reference image"
  }
};

const careWorkflow = [
  {
    title: "Consult",
    description: "We listen, assess, and explain what your smile needs in plain language."
  },
  {
    title: "Plan",
    description: "We prepare a treatment path that fits your goals, comfort, and schedule."
  },
  {
    title: "Treat",
    description: "Care is delivered gently with clear guidance before, during, and after."
  }
];

export default function ServicesPage() {
  return (
    <div>
      <section className="section-pad bg-cream/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title="Services"
              align="center"
              size="xl"
            />

            <p className="mt-8 text-lg sm:text-xl text-ink/80 leading-relaxed">
              A clear overview of the clinic’s open services, organized to help you quickly see what each treatment covers and which concern it addresses.
            </p>

            <p className="mt-4 text-base sm:text-lg text-ink/70 leading-relaxed">
              Choose the service that fits your concern, then book an assessment so the clinic can confirm the right treatment plan.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/book" className="btn-primary w-full sm:w-auto">
                Make an Appointment
              </Link>
              <Link href="/location" className="btn-secondary w-full sm:w-auto">
                Visit Our Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream/20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Core services"
            title="Simple, clear treatment categories"
            subtitle="Each card shows the main service, the common treatments included, and the kind of concern it usually addresses."
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-2">
            {serviceMenu.map((service, index) => (
              <Link
                key={service.title}
                id={service.slug}
                href={`/services/${service.slug}`}
                className="group card-shell flex h-full flex-col overflow-hidden border border-sand/25 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                aria-label={`Open ${service.title} details`}
              >
                <div className="flex items-start justify-between gap-3 border-b border-sand/20 bg-gradient-to-r from-cream/60 to-white px-5 py-4 sm:px-6 sm:py-5">
                  <div>
                    <p className="pill w-fit">0{index + 1}</p>
                    <h3 className="mt-3 font-display text-2xl text-ink">{service.title}</h3>
                    <p className="mt-1.5 text-sm uppercase tracking-[0.18em] text-ink/45">Open service</p>
                  </div>
                  <span className="rounded-full border border-sand/60 bg-white/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink/60 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                    {service.slug.replace(/-/g, " ")}
                  </span>
                </div>

                <div className="grid h-full gap-5 px-6 py-6 sm:px-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-stretch">
                  <div className="flex h-full flex-col">
                    <p className="text-base text-ink/75 leading-relaxed">{service.summary}</p>

                    <div className="mt-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/55">Common treatments</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.treatments.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-sand/60 bg-sand/15 px-3 py-1 text-sm text-ink/75"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex h-full flex-col rounded-2xl border border-sand/40 bg-cream/30 p-3 sm:p-5">
                    <Image
                      src={serviceReferenceImages[service.slug].src}
                      alt={serviceReferenceImages[service.slug].alt}
                      width={640}
                      height={360}
                      className="mb-3 h-44 w-full rounded-xl object-cover object-center shadow-sm sm:mb-4 lg:h-48"
                    />
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink/55 sm:text-xs sm:tracking-[0.2em]">Best for</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/72 sm:text-sm">{service.visitNote}</p>
                    <div className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-olive/40 bg-transparent px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-olive transition group-hover:border-olive group-hover:bg-olive/10 sm:text-base">
                      Learn more
                      <i className="fa-solid fa-arrow-right text-xs" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
