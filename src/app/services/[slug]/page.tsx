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
  highlights: string[];
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
    subtitle: "Routine care to keep your smile healthy and strong.",
    hero: "/images/oral_prophylaxis.jpg",
    description:
      "Comprehensive preventive and restorative services including dental exams, professional cleanings, fillings, and extractions. We focus on early detection, minimally invasive treatments, and long-term oral health planning.",
    highlights: [
      "Thorough dental examinations and x-ray assessments",
      "Professional cleaning and stain removal (prophylaxis)",
      "Tooth-colored composite restorations for cavities",
      "Simple extractions with careful post-op instructions"
    ],
    gallery: [
      {
        src: "/images/oral_prophylaxis.jpg",
        alt: "General dentistry cleaning before",
        eyebrow: "Before",
        title: "Oral Prophylaxis"
      },
      {
        src: "/images/tooth_restoration.jpg",
        alt: "General dentistry restoration",
        eyebrow: "Treatment",
        title: "Tooth Restoration"
      },
      {
        src: "/images/teeth_whitening.jpg",
        alt: "General dentistry whitening",
        eyebrow: "After",
        title: "Brightened Smile"
      }
    ]
  },

  "orthodontics-braces": {
    title: "Orthodontics (Braces)",
    subtitle: "Straightening smiles with proven orthodontic care.",
    hero: "/images/braces_installation.jpg",
    description:
      "We offer braces-based orthodontic treatment to correct crowding, spacing, and bite issues. From the initial consultation to bracket placement and follow-ups, we create individualized treatment plans to deliver predictable, comfortable results.",
    highlights: [
      "Full orthodontic assessments and treatment planning",
      "Metal and ceramic bracket systems",
      "Regular adjustments and retention planning",
      "Clear instructions for care, hygiene, and diet while in braces"
    ],
    gallery: [
      {
        src: "/images/orthodontics.jpg",
        alt: "Orthodontic treatment before",
        eyebrow: "Before",
        title: "Orthodontic Treatment"
      },
      {
        src: "/images/braces_installation.jpg",
        alt: "Day one of metal braces",
        eyebrow: "Day 1",
        title: "Metal Braces"
      },
      {
        src: "/images/adposter_2.jpg",
        alt: "Orthodontic clinic setting",
        eyebrow: "Clinic",
        title: "Patient Care"
      }
    ]
  },

  "oral-surgery": {
    title: "Oral Surgery",
    subtitle: "Comfort-forward minor oral surgical care.",
    hero: "/images/adofferings_3.jpg",
    description:
      "Our oral surgery treatments address impacted teeth, simple surgical extractions, and minor procedures performed with attention to pain control and gentle aftercare advice.",
    highlights: [
      "Wisdom tooth removal and impacted tooth management",
      "Management of minor oral lesions and soft-tissue procedures",
      "Clear post-operative instructions and follow-up care"
    ],
    gallery: [
      {
        src: "/images/oralSurgery.jpg",
        alt: "Oral surgery procedure",
        eyebrow: "Before",
        title: "Surgical Care"
      },
      {
        src: "/images/adofferings_3.jpg",
        alt: "Oral surgery setting",
        eyebrow: "During",
        title: "Comfort-First Treatment"
      },
      {
        src: "/images/adofferings_4.jpg",
        alt: "Oral surgery aftercare",
        eyebrow: "After",
        title: "Recovery Support"
      }
    ]
  },

  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    subtitle: "Natural-looking cosmetic improvements for confident smiles.",
    hero: "/images/teeth_whitening.jpg",
    description:
      "From professional teeth whitening to direct bonding and smile makeovers, cosmetic dentistry at our clinic aims to enhance form and color while preserving tooth structure.",
    highlights: [
      "In-office teeth whitening for immediate brightening",
      "Direct composite bonding and tooth reshaping",
      "Small smile correction cases and shade matching"
    ],
    gallery: [
      {
        src: "/images/teeth_whitening.jpg",
        alt: "Teeth whitening before",
        eyebrow: "Before",
        title: "Teeth Whitening"
      },
      {
        src: "/images/tooth_abfraction.jpg",
        alt: "Tooth abfraction repair",
        eyebrow: "Treatment",
        title: "Tooth Abfraction"
      },
      {
        src: "/images/tooth_restoration.jpg",
        alt: "Cosmetic restoration after",
        eyebrow: "After",
        title: "Tooth Restoration"
      }
    ]
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = services[slug];

  if (!data) {
    notFound();
  }

  return (
    <div>
      <section className="relative">
        <div className="relative h-72 md:h-96 w-full bg-sand/10">
          <Image src={data.hero} alt={data.title} fill className="object-cover opacity-95" />
        </div>
        <div className="-mt-24 max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-sand/30">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3">
                <h1 className="font-display text-3xl md:text-4xl text-ink">{data.title}</h1>
                <p className="mt-2 text-ink/70">{data.subtitle}</p>

                <div className="mt-6 prose prose-sand max-w-none">
                  <p>{data.description}</p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-ink">What we do</h4>
                  <ul className="list-disc list-inside mt-3 text-ink/80 space-y-2">
                    {data.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link href="/book" className="btn-primary">
                    Book an Appointment
                  </Link>
                  <Link href="/services" className="btn-secondary">
                    Back to Services
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {data.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-sand/40 bg-sand/10 p-5">
                  <p className="font-display text-lg text-ink">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <SectionHeading eyebrow="Gallery" title="Before & After" size="md" />
              <p className="mt-4 max-w-3xl text-sm text-ink/70">
                The gallery is temporarily simplified while we refine the final presentation.
              </p>
              <div className="mt-6">
                <ServiceGallery items={data.gallery} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
