import Image from "next/image";
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

export default function ServicesPage() {
  const showcaseItems = [
    { src: "/images/cleaning.png", alt: "Cleaning", slug: "general-dentistry" },
    { src: "/images/braces.png", alt: "Braces", slug: "orthodontics-braces" },
    { src: "/images/dentures.png", alt: "Dentures", slug: "cosmetic-dentistry" }
  ];

  return (
    <div>
      {/* Hero / Intro */}
      <section className="section-pad bg-cream/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Our Services" align="center" size="xl" />

          {/* Subheader: Text & CTA */}
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-lg text-ink/80 leading-relaxed">
              From preventive check-ups to smile makeovers, our treatments are designed
              to keep your smile healthy, confident, and pain-free. Each service is
              delivered with gentle care, clear explanations, and your comfort in mind.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link href="/book" className="btn-primary">
                Make an Appointment
              </Link>
              <Link href="/location" className="btn-secondary">
                Visit Our Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Showcase"
            title="What to Expect"
            subtitle="A quick look at our common treatments and outcomes."
          />

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseItems.map((it) => (
              <a key={it.src} href={`#${it.slug}`} className="group">
                <div className="overflow-hidden rounded-xl bg-white border border-sand/40 shadow transition-all duration-300 hover:shadow-lg hover:border-sand/60">
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-sand/20">
                    <Image
                      src={it.src}
                      alt={it.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-lg text-ink">{it.alt}</h4>
                    <p className="mt-1 text-sm text-ink/70">Discover this service →</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section-pad bg-cream/20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Core Services"
            title="Focused Care Across Every Treatment Area"
            subtitle="Each service is handled with gentle care and clear guidance."
          />

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {coreServices.map((service) => (
              <div key={service.title} className="card-shell p-6 flex flex-col">
                <h3 id={service.slug} className="font-display text-xl text-ink">{service.title}</h3>
                <p className="mt-2 text-base text-ink/70 leading-relaxed flex-grow">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink/70 list-disc list-inside">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-olive hover:text-olive/80 transition">
                    Learn more <i className="fa-solid fa-arrow-right text-xs" />
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
