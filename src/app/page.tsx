"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";


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
    quote: "The calm explanation eased my dental anxiety right away.",
    image: "/images/adtestimonial_1.jpg"
  },
  {
    name: "Carlos R.",
    quote: "The cleaning was painless, and the staff was incredibly kind.",
    image: "/images/adtestimonial_2.jpg"
  },
  {
    name: "Jenny M.",
    quote: "The braces payment plan was affordable and clearly explained.",
    image: "/images/doctor_profile_1.jpg"
  }
];

const whyChooseItems = [
  {
    title: "Skilled Dental Experts",
    description: "Experienced team providing gentle, confident care for every smile."
  },
  {
    title: "Personalized Treatment Plans",
    description: "Care plans tailored to your needs, schedule, and comfort."
  },
  {
    title: "State-of-the-Art Tools",
    description: "Modern equipment for accurate diagnosis and safer procedures."
  },
  {
    title: "Full Range of Services",
    description: "From cleanings to braces and cosmetic makeovers in one clinic."
  },
  {
    title: "Transparent & Affordable",
    description: "Honest pricing with flexible options, no hidden surprises."
  },
  {
    title: "Trusted by Families",
    description: "Community-first care that patients recommend to loved ones."
  }
];

const heroImages = ["/heroimages/1.svg", "/heroimages/2.svg"];

function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((p) => (p - 1 + total) % total);
  const next = () => setActive((p) => (p + 1) % total);

  const getIndex = (offset: number) => (active + offset + total) % total;

  const cards = [
    { story: testimonials[getIndex(-1)], position: "left" },
    { story: testimonials[getIndex(0)], position: "center" },
    { story: testimonials[getIndex(1)], position: "right" }
  ];

  return (
    <div className="mt-10">
      <div className="relative flex items-center justify-center gap-6">
        {/* Prev button */}
        <button
          onClick={prev}
          className="z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-sand/60 bg-white text-ink transition hover:bg-sand/30"
          aria-label="Previous testimonial"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        {/* Cards */}
        <div className="flex items-center justify-center gap-6">
          {cards.map(({ story, position }) => {
            const isCenter = position === "center";
            return (
              <div
                key={`${story.name}-${position}`}
                className={`overflow-hidden rounded-lg border border-sand/60 bg-white transition-all duration-500 ${isCenter
                    ? "z-10 w-96 scale-105 shadow-md"
                    : "hidden w-80 opacity-60 sm:block"
                  }`}
              >
                <div className={`relative w-full ${isCenter ? "h-80" : "h-64"}`}>
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 384px"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-3xl text-ink/30">"</p>
                  <p className="mt-2 text-base text-ink/80">{story.quote}</p>
                  <p className="mt-5 text-base font-semibold text-ink">— {story.name}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-sand/60 bg-white text-ink transition hover:bg-sand/30"
          aria-label="Next testimonial"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-ink" : "w-1.5 bg-ink/30"
              }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-cream">
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Dental care illustration"
            fill
            className={`object-contain object-right transition-opacity duration-700 ${i === heroIndex ? "opacity-100" : "opacity-0"
              }`}
            priority={i === 0}
          />
        ))}
        {/* Left-only fade so text is readable but image is unobstructed */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-cream via-cream/80 to-transparent" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-olive/15 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl" />
        <div className="relative z-10 w-full px-6 py-12 sm:px-12 lg:pl-24 lg:pr-6">
          <div className="w-full lg:w-[50%]">
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              Kamusta ang{" "}
              <span className="text-olive">ngiti mo?</span>
            </h1>
            <p className="mt-5 text-base text-ink/70 sm:text-lg">
              JT Alunan Dental Clinic is your community dental home in Oton, Iloilo.
              <br />We focus on listening with empathy and healing with compassion,
              <br />so every visit feels calm, transparent, and empowering.
            </p>
            <div className="mt-5 w-full card-shell p-6">
              <h2 className="font-display text-2xl text-ink">Meet Dr. Jogi Terese Alunan</h2>
              <p className="mt-3 text-base text-ink/70">
                Dr. JT Alunan focuses on preventive care and patient education, making
                sure you understand every option without pressure or hidden fees.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book" className="btn-primary">
                Make an Appointment
              </Link>
              <Link href="/services" className="btn-secondary">
                Learn More
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <SectionHeading
          title="Care options for every smile."
          subtitle="Explore our most requested services below."
          size="lg"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {coreCards.map((card) => (
            <div key={card.title} className="card-shell flex h-full flex-col p-6">
              <div className="mb-5 flex h-36 items-center justify-center rounded-2xl border border-sand/70 bg-sand/40 text-sm uppercase tracking-[0.2em] text-ink/50">
                Image placeholder
              </div>
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

      {/* Testimonials */}
      <section className="section-pad overflow-hidden">
        <div className="text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            See what all the talk is about!
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Real smiles and kind words from patients across our community.
          </p>
        </div>
        <TestimonialCarousel />
      </section>

      {/* Why Choose */}
      <section className="flex min-h-screen items-center section-pad">
        <div className="w-full">
          <div className="text-center">
            <h2 className="font-display text-4xl text-ink sm:text-5xl">
              Why Choose JT Alunan Dental Clinic
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-ink/70">
              Gentle expertise, community care, and modern dentistry designed for you.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[1fr_2fr] gap-6 lg:items-center pr-8">
            <div className="flex items-center justify-center">
              <Image
                src="/images/adposter_2.jpg"
                alt="JT Alunan Dental Clinic illustration"
                width={480}
                height={620}
                className="h-auto w-full max-h-[70vh] object-contain object-center"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 pr-8">
              {whyChooseItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 shrink-0 text-[#a07840]">
                    <i className="fa-solid fa-check text-3xl" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#a07840]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base text-ink/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 