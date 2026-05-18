import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

const highlights = [
  "Preventive-care focus with clear, calm explanations.",
  "Passionate about serving the Oton community with honest dental care.",
  "Patient education comes first, so you can decide with confidence.",
  "Gentle approach for families and anyone anxious about dental visits."
];

const values = [
  {
    title: "Alaga (Gentle Care)",
    description: "We slow down, listen, and keep every step comfortable."
  },
  {
    title: "Tiwala (Trust)",
    description: "Transparent pricing and honest guidance, always."
  },
  {
    title: "Education",
    description: "We teach you the why and how behind every recommendation."
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

export default function AboutPage() {
  return (
    <div>
      {/* Hero / Intro */}
      <section className="section-pad bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="About Us"
            subtitle="Led by Dr. Jogi Terese Alunan, JT Alunan Dental Clinic blends modern dentistry with the warmth of Filipino care. We prioritize preventive treatment, patient education, and a calm, reassuring approach so you can make confident decisions about your oral health."
            align="center"
            size="xl"
          />
        </div>

        <div className="relative mt-10 flex min-h-[80vh] items-center overflow-hidden bg-cream">
          <Image
            src="/images/doctor_profile_hero.png"
            alt="Portrait of Dr. Jogi Terese Alunan"
            fill
            className="hidden object-contain object-right transition-opacity duration-700 sm:block"
            priority
          />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-cream/95 via-cream/80 to-transparent sm:w-3/5" />
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-olive/15 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl" />
          <div className="relative z-10 w-full px-6 py-14 sm:px-12 lg:pl-24 lg:pr-6">
            <div className="w-full lg:w-[52%]">
              <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
                <p className="pill w-fit">Dr. Jogi Terese Alunan</p>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl text-ink">
                  Gentle care with clear guidance
                </h3>
                <p className="mt-4 text-sm sm:text-base text-ink/70 leading-relaxed">
                  Dr. Jogi Terese Alunan is a graduate of Iloilo Doctor's College (Batch 2021) and passed the Dental Board Examination in May 2022. With three years of clinical experience, she remains committed to continuous learning through advanced training in orthodontics, aesthetic dentistry, and surgery.
                </p>
                <p className="mt-4 text-sm sm:text-base text-ink/70 leading-relaxed">
                  Her goal is to provide quality yet affordable dental care while helping patients feel calm, informed, and supported through every visit.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-sand/30 bg-cream/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-ink/55">Credential</p>
                    <p className="mt-2 text-sm text-ink/75">Doctor of Dental Surgery</p>
                  </div>
                  <div className="rounded-2xl border border-sand/30 bg-cream/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-ink/55">Board Exam</p>
                    <p className="mt-2 text-sm text-ink/75">Passed May 2022</p>
                  </div>
                  <div className="rounded-2xl border border-sand/30 bg-cream/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-ink/55">Focus</p>
                    <p className="mt-2 text-sm text-ink/75">Preventive, aesthetic, and orthodontic care</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="/book" className="btn-primary w-full text-center sm:w-auto">
                    Book an Appointment with Dr. Jogi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile / Details */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Profile"
            title="Meet Dr. JT Alunan"
            subtitle="Focused on gentle care, confident smiles, and community trust."
          />

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-shell p-6">
              <h3 className="font-display text-lg text-ink">Credentials & Highlights</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/70 list-disc list-inside">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card-shell p-6">
              <h3 className="font-display text-lg text-ink">Mission</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                To provide quality, affordable dental care with a calm and reassuring
                approach — clear explanations, gentle technique, and thoughtful follow-up.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brown">
                Gentle · Trusted · Educational
              </div>
            </div>

            <div className="card-shell p-6">
              <h3 className="font-display text-lg text-ink">Community</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                We prioritize preventive care and patient education so families in Oton
                can make informed choices about their dental health.
              </p>
            </div>
          </div>
        </div>
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
                  <div className="grid grid-cols-1 gap-x-10 gap-y-8 pr-8 md:grid-cols-2">
                    {whyChooseItems.map((item) => (
                      <div key={item.title} className="flex items-start gap-4 px-4 sm:px-0">
                        <div className="shrink-0 text-[#a07840]">
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
