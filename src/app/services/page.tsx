import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const coreServices = [
  {
    title: "General Dentistry",
    slug: "general-dentistry",
    description: "Preventive and restorative care that keeps every smile healthy.",
    items: ["Check-ups", "Cleanings (Prophylaxis)", "Tooth-Colored Fillings", "Extractions"]
  },
  {
    title: "Orthodontics (Braces)",
    slug: "orthodontics-braces",
    description: "Straighten and align teeth with flexible payment options.",
    items: ["Metal Braces", "Ceramic Braces", "Retainers", "Flexible Payment Plans"]
  },
  {
    title: "Oral Surgery",
    slug: "oral-surgery",
    description: "Comfort-focused procedures with careful aftercare guidance.",
    items: ["Wisdom Tooth Removal", "Minor Oral Surgeries", "Post-Op Instructions"]
  },
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    description: "Enhance your smile with natural-looking aesthetic treatments.",
    items: ["Teeth Whitening", "Dental Veneers", "Dental Bonding", "Smile Makeovers"]
  }
];

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
              align="center"
              title="Our Services"
              subtitle="A clean, straightforward view of the care we provide, organized to help you find the right treatment quickly."
              size="xl"
            />

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Workflow"
            title="A Simple Care Process"
            subtitle="A calm, structured flow that makes every visit easier to understand and follow."
            align="center"
          />

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {careWorkflow.map((step, index) => (
              <div key={step.title} className="card-shell p-6">
                <div className="pill w-fit">0{index + 1}</div>
                <h3 className="mt-4 font-display text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 text-ink/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream/20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Core Services"
            title="Focused Care Across Every Treatment Area"
            subtitle="Each service is presented with the same clean structure so the page feels organized and easy to scan."
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {coreServices.map((service) => (
              <div key={service.title} id={service.slug} className="card-shell p-6 sm:p-7 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="pill">Core Service</p>
                    <h3 className="mt-4 font-display text-2xl text-ink">{service.title}</h3>
                  </div>
                  <span className="rounded-full border border-sand/60 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                    Available
                  </span>
                </div>

                <p className="mt-4 text-base text-ink/70 leading-relaxed flex-grow">{service.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-sand/60 bg-sand/15 px-3 py-1 text-sm text-ink/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-secondary w-full sm:w-auto px-5 py-3 text-sm sm:text-base tracking-[0.08em]"
                  >
                    Learn more
                    <i className="fa-solid fa-arrow-right text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
