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
      <section className="section-pad">
        <div className="space-y-10">
          <div>
            <p className="pill">Services</p>
            <h1 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
              Gentle care for every smile.
            </h1>
            <p className="mt-4 text-base text-ink/70">
              From preventive check-ups to smile makeovers, our services are designed
              to keep your smile healthy, confident, and pain-free.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book" className="btn-primary">
                Make an Appointment
              </Link>
              <Link href="/location" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="card-shell p-6">
            <h3 className="font-display text-xl text-ink">Showcase</h3>
            <p className="mt-2 text-base text-ink/70">Click an image to jump to that service.</p>
            <div className="mt-4 mx-auto max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {showcaseItems.map((it) => (
                  <a key={it.src} href={`#${it.slug}`} className="group block active:opacity-95 cursor-pointer">
                      <div className="relative overflow-hidden rounded-3xl bg-transparent mx-auto max-w-[300px] h-48 sm:h-56 md:h-60 transition-shadow duration-300 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-olive/30 focus-within:ring-2 focus-within:ring-olive/30">
                        <Image
                          src={it.src}
                          alt={it.alt}
                          fill
                          className="object-cover w-full h-full rounded-3xl"
                        />
                      </div>
                    </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Core Services"
          title="Focused care across every main treatment area."
          subtitle="Each category is handled with gentle care and clear guidance."
        />
        <div className="mt-10 space-y-6">
          {coreServices.map((service) => (
            <div key={service.title} className="card-shell p-6">
              <h3 id={service.slug} className="font-display text-2xl text-ink">{service.title}</h3>
              <p className="mt-3 text-base text-ink/70">{service.description}</p>
              <ul className="mt-4 space-y-2 text-base text-ink/70">
                {service.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="card-shell p-8 lg:p-10">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                Not sure what you need?
              </h2>
              <p className="mt-2 text-base text-ink/70">
                Book a consultation and we will guide you to the right care plan.
              </p>
            </div>
            <Link href="/book" className="btn-primary">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
