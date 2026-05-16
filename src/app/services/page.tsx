import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const coreServices = [
  {
    title: "General Dentistry",
    description: "Preventive and restorative care that keeps every smile healthy.",
    items: ["Check-ups", "Cleanings (Prophylaxis)", "Tooth-Colored Fillings", "Extractions"]
  },
  {
    title: "Orthodontics (Braces)",
    description: "Straighten and align teeth with flexible payment options.",
    items: ["Metal Braces", "Ceramic Braces", "Retainers", "Flexible Payment Plans"]
  },
  {
    title: "Oral Surgery",
    description: "Comfort-focused procedures with careful aftercare guidance.",
    items: ["Wisdom Tooth Removal", "Minor Oral Surgeries", "Post-Op Instructions"]
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with natural-looking aesthetic treatments.",
    items: ["Teeth Whitening", "Dental Veneers", "Dental Bonding", "Smile Makeovers"]
  }
];

export default function ServicesPage() {
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
          <div className="card-shell flex min-h-[240px] items-center justify-center text-base text-ink/60">
            Image placeholder: service showcase photo
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
              <h3 className="font-display text-2xl text-ink">{service.title}</h3>
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
