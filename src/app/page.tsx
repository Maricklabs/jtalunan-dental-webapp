import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

type TransformationCard =
  | {
      title: string;
      note: string;
    }
  | {
      title: string;
      images: string[];
    };

const coreCards = [
  {
    title: "General Dentistry",
    description: "Check-ups, cleanings, fillings, and gentle extractions.",
    cta: "Learn More",
    href: "/services"
  },
  {
    title: "Orthodontics (Braces)",
    description: "Metal or ceramic braces with flexible payment plans.",
    cta: "Learn More",
    href: "/services"
  },
  {
    title: "Oral Surgery",
    description: "Wisdom tooth removal and minor oral surgeries with gentle care.",
    cta: "Learn More",
    href: "/services"
  },
  {
    title: "Clinic Info",
    description: "Find our hours, directions, and contact details.",
    cta: "Contact Us",
    href: "/location"
  }
];

const testimonials = [
  {
    name: "Maria L.",
    quote: "The calm explanation eased my dental anxiety right away."
  },
  {
    name: "Carlos R.",
    quote: "The cleaning was painless, and the staff was incredibly kind."
  },
  {
    name: "Jenny M.",
    quote: "The braces payment plan was affordable and clearly explained."
  }
];

const transformations: TransformationCard[] = [
  {
    title: "Smile Makeover",
    images: ["/images/adofferings_2.jpg", "/images/adofferings_4.jpg"]
  },
  {
    title: "Braces Placement",
    images: ["/images/adofferings_1.jpg", "/images/adofferings_5.jpg"]
  }
];


export default function HomePage() {
  return (
    <div>
      <section className="section-pad">
        <div className="space-y-10">
          <div>
            <p className="pill">Kumusta ang ngiti mo?</p>
            <h1 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Gentle dental care, alaga para sa ngiti mo.
            </h1>
            <p className="mt-5 text-base text-ink/70">
              JT Alunan Dental Clinic is your community dental home in Oton, Iloilo.
              We focus on Alaga, Tiwala, and Education so every visit feels calm,
              transparent, and empowering.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="btn-secondary">
                Learn More
              </Link>
              <Link href="/book" className="btn-primary">
                Make an Appointment
              </Link>
            </div>
          </div>
          <div className="card-shell p-6">
            <h2 className="font-display text-2xl text-ink">Meet Dr. JT Alunan</h2>
            <p className="mt-3 text-base text-ink/70">
              Dr. JT Alunan focuses on preventive care and patient education, making
              sure you understand every option without pressure or hidden fees.
            </p>
            <p className="mt-4 text-base text-ink/70">
              Passionate about serving the Oton community with honest, gentle dental care.
            </p>
          </div>
        </div>
      </section>

      

      <section className="section-pad">
        <SectionHeading
          title="Care options for every smile."
          subtitle="Explore our most requested services below."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {coreCards.map((card) => (
            <div key={card.title} className="card-shell flex h-full flex-col p-6">
              <h3 className="font-display text-xl text-ink">{card.title}</h3>
              <p className="mt-3 text-base text-ink/70">{card.description}</p>
              <div className="mt-6">
                <Link href={card.href} className="btn-secondary w-full">
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Kind words from our community."
          subtitle="Calm explanations, painless cleanings, and kind, caring staff."
        />
        <div className="mt-10 space-y-6">
          {testimonials.map((story) => (
            <div key={story.name} className="card-shell p-6">
              <p className="text-base text-ink/70">"{story.quote}"</p>
              <p className="mt-4 text-base font-semibold text-ink">- {story.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Before & After"
          title="Real transformations, real confidence."
          subtitle="Place your clinical results photos here to show patient outcomes."
        />
        <div className="mt-10 space-y-6">
          {transformations.map((item) => (
            <div key={item.title} className="card-shell p-6">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              {"images" in item ? (
                <div className="mt-4 grid overflow-hidden rounded-3xl">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {item.images.map((src, index) => (
                      <div
                        key={src}
                        className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-sand/70 bg-white p-1"
                      >
                        <Image
                          src={src}
                          alt={`${item.title} ${index + 1}`}
                          fill
                          className="rounded-xl object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex min-h-[220px] items-center justify-center rounded-3xl border border-sand/80 bg-sand/60 text-base text-ink/60">
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Visit Us"
          title="Your dental home in Oton, Iloilo."
          subtitle="We are located in the heart of the community, ready to welcome you."
        />
        <div className="mt-6 space-y-3 text-base text-ink/75">
          <p>
            2nd Floor, Door 4, St. Joseph Building, Brgy. San Antonio, Oton, Iloilo
          </p>
          <p>Phone: 0919 615 2434 | Email: jtsmilesdc@gmail.com</p>
          <p>Monday-Saturday: 9:00 AM - 5:00 PM</p>
          <p>Sunday: By appointment only</p>
          <p>Facebook: JT Alunan Dental Clinic</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/location" className="btn-primary">
            Get Directions
          </Link>
          <Link href="/book" className="btn-secondary">
            Make an Appointment
          </Link>
        </div>
        <div className="mt-10 card-shell flex min-h-[260px] items-center justify-center text-base text-ink/60">
          Google Maps embed placeholder
        </div>
      </section>
    </div>
  );
}
