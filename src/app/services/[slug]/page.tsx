import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import ServiceGallery from "@/components/ServiceGallery";

type ServiceData = {
  title: string;
  subtitle: string;
  hero: string;
  description: string;
  includes: string[];
  suitableFor: string[];
  gallery: {
    src: string;
    alt: string;
    eyebrow?: string;
    title?: string;
  }[];
};

const services: Record<string, ServiceData> = {
  "general-dentistry": {
    title: "General Dentistry",
    subtitle: "Routine care for healthy teeth and gums.",
    hero: "/images/oral_prophylaxis.jpg",
    description:
      "General dentistry covers routine exams, professional cleanings, fillings, and simple extractions. It is the starting point for preventive care and basic treatment when a tooth needs attention.",
    includes: [
      "Dental exams and oral health checks",
      "Professional cleaning and stain removal",
      "Tooth-colored fillings for cavities",
      "Simple extractions with aftercare guidance"
    ],
    suitableFor: ["Routine check-ups", "Cleaning visits", "Cavities", "Mild tooth pain"],
    gallery: [
      {
        src: "/images/oral_prophylaxis.jpg",
        alt: "General dentistry cleaning",
        eyebrow: "Initial Visit",
        title: "Oral Prophylaxis"
      },
      {
        src: "/images/tooth_restoration.jpg",
        alt: "General dentistry restoration",
        eyebrow: "Treatment Phase",
        title: "Tooth Restoration"
      },
      {
        src: "/images/teeth_whitening.jpg",
        alt: "General dentistry whitening result",
        eyebrow: "Completed Care",
        title: "Brightened Smile"
      }
    ]
  },

  "orthodontics-braces": {
    title: "Orthodontics (Braces)",
    subtitle: "Braces treatment for alignment and bite correction.",
    hero: "/images/braces_installation.jpg",
    description:
      "Orthodontic care uses braces to improve alignment, spacing, and bite concerns. Treatment usually includes assessment, bracket placement, regular adjustments, and retention after the teeth have moved into place.",
    includes: [
      "Orthodontic assessment and treatment planning",
      "Metal and ceramic bracket systems",
      "Regular adjustments during treatment",
      "Retainers after active treatment"
    ],
    suitableFor: ["Crowded teeth", "Spacing issues", "Bite correction", "Smile alignment"],
    gallery: [
      {
        src: "/images/orthodontics.jpg",
        alt: "Orthodontic treatment consultation",
        eyebrow: "Initial Assessment",
        title: "Orthodontic Treatment"
      },
      {
        src: "/images/braces_installation.jpg",
        alt: "Day one of metal braces",
        eyebrow: "Treatment Day 1",
        title: "Metal Braces"
      },
      {
        src: "/images/adposter_2.jpg",
        alt: "Orthodontic clinic setting",
        eyebrow: "Ongoing Care",
        title: "Patient Care"
      }
    ]
  },

  "oral-surgery": {
    title: "Oral Surgery",
    subtitle: "Minor oral surgical care with careful planning.",
    hero: "/images/adofferings_3.jpg",
    description:
      "Oral surgery covers wisdom tooth removal, simple surgical extractions, and selected minor oral procedures. Care is planned to support comfort, safety, and clear aftercare instructions.",
    includes: [
      "Wisdom tooth removal and impacted tooth care",
      "Simple surgical extractions",
      "Selected minor oral procedures",
      "Post-operative instructions and follow-up"
    ],
    suitableFor: ["Impacted wisdom teeth", "Teeth needing surgical removal", "Selected minor oral procedures"],
    gallery: [
      {
        src: "/images/oralSurgery.jpg",
        alt: "Oral surgery procedure",
        eyebrow: "Initial Evaluation",
        title: "Surgical Care"
      },
      {
        src: "/images/adofferings_3.jpg",
        alt: "Oral surgery setting",
        eyebrow: "Procedure",
        title: "Comfort-First Treatment"
      },
      {
        src: "/images/adofferings_4.jpg",
        alt: "Oral surgery aftercare",
        eyebrow: "Recovery",
        title: "Recovery Support"
      }
    ]
  },

  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    subtitle: "Aesthetic treatments that improve smile appearance.",
    hero: "/images/teeth_whitening.jpg",
    description:
      "Cosmetic dentistry includes whitening, bonding, veneers, and other smile enhancement treatments. The goal is to improve color, shape, and overall appearance while keeping the result as natural-looking as possible.",
    includes: [
      "In-office teeth whitening",
      "Direct composite bonding",
      "Veneers for selected cases",
      "Smile enhancement and shade matching"
    ],
    suitableFor: ["Yellow or stained teeth", "Minor chips", "Shape corrections", "Smile improvement"],
    gallery: [
      {
        src: "/images/teeth_whitening.jpg",
        alt: "Teeth whitening consultation",
        eyebrow: "Initial Consultation",
        title: "Teeth Whitening"
      },
      {
        src: "/images/tooth_abfraction.jpg",
        alt: "Tooth abfraction repair",
        eyebrow: "Treatment Phase",
        title: "Tooth Abfraction"
      },
      {
        src: "/images/tooth_restoration.jpg",
        alt: "Cosmetic restoration result",
        eyebrow: "Completed Result",
        title: "Tooth Restoration"
      }
    ]
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = services[slug];

  if (!data) {
    notFound();
  }

  return (
    <div>
      <section className="section-pad bg-cream/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <div className="rounded-[2rem] border border-sand/30 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
              <p className="pill w-fit">Service Overview</p>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-ink text-balance">{data.title}</h1>
              <p className="mt-3 text-base sm:text-lg text-ink/75 leading-relaxed">{data.subtitle}</p>

              <div className="mt-6 prose prose-sm sm:prose-base prose-sand max-w-none">
                <p>{data.description}</p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-sand/40 bg-sand/10 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">Includes</h4>
                  <ul className="mt-3 space-y-2 text-sm text-ink/80">
                    {data.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sand-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-sand/40 bg-white p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/55">Best for</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {data.suitableFor.map((item) => (
                      <span key={item} className="rounded-full border border-sand/60 bg-sand/15 px-3 py-1 text-sm text-ink/75">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/book" className="btn-primary w-full sm:w-auto px-5 sm:px-6 py-3 text-sm sm:text-base tracking-[0.08em]">
                  Book an Appointment
                </Link>
                <Link href="/services" className="btn-secondary w-full sm:w-auto px-5 sm:px-6 py-3 text-sm sm:text-base tracking-[0.08em]">
                  Back to Services
                </Link>
              </div>
            </div>

            <div className="order-first lg:order-none">
              <div className="rounded-[1.75rem] border border-sand/30 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.07)] lg:sticky lg:top-6">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-cream/20 aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]">
                  <Image src={data.hero} alt={data.title} fill className="object-cover" priority />
                </div>
                <div className="mt-3 px-1 pb-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/45">Supporting image</p>
                  <p className="mt-1 text-sm text-ink/70">
                    A quick visual reference for the service. The treatment details remain the primary focus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 rounded-[2rem] border border-sand/30 bg-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <SectionHeading eyebrow="Gallery" title="Treatment Gallery" size="md" />
            <p className="mt-4 max-w-3xl text-sm text-ink/70">
              A visual look at the service flow, from the first visit through treatment and results.
            </p>
            <div className="mt-5 sm:mt-6">
              <ServiceGallery items={data.gallery} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
