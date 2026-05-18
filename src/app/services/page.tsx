import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { serviceMenu } from "@/data/services";

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
              <div
                key={service.title}
                id={service.slug}
                className="group card-shell overflow-hidden p-0 flex flex-col border border-sand/25 bg-white shadow-sm"
              >
                <div className="flex items-start justify-between gap-4 border-b border-sand/20 bg-gradient-to-r from-cream/60 to-white px-6 py-5 sm:px-7">
                  <div>
                    <p className="pill w-fit">0{index + 1}</p>
                    <h3 className="mt-4 font-display text-2xl text-ink">{service.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-ink/45">Open service</p>
                  </div>
                  <span className="rounded-full border border-sand/60 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                    {service.slug.replace(/-/g, " ")}
                  </span>
                </div>

                <div className="grid gap-5 px-6 py-6 sm:px-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                  <div>
                    <p className="text-base text-ink/75 leading-relaxed">{service.summary}</p>

                    <div className="mt-5">
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

                  <div className="rounded-2xl border border-sand/40 bg-cream/30 p-4 sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">Best for</p>
                    <p className="mt-2 text-sm text-ink/70 leading-relaxed">{service.visitNote}</p>
                    <div className="mt-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="btn-secondary w-full justify-center px-5 py-3 text-sm sm:text-base tracking-[0.08em]"
                      >
                        Learn more
                        <i className="fa-solid fa-arrow-right text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
