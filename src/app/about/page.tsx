import SectionHeading from "@/components/SectionHeading";

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

export default function AboutPage() {
  return (
    <div>
      <section className="section-pad">
        <div className="space-y-10">
          <div>
            <p className="pill">About Us</p>
            <h1 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
              The Face Behind Your Smile.
            </h1>
            <p className="mt-4 text-base text-ink/70">
              Led by Dr. JT Alunan, our clinic blends modern dentistry with the warmth
              of Filipino care. Every visit is guided by empathy, patience, and honest
              guidance.
            </p>
          </div>
          <div className="card-shell overflow-hidden">
            <img
              src="/images/doctor_profile_hero.png"
              alt="Dr. JT Alunan"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Profile"
          title="Meet Dr. JT Alunan"
          subtitle="Focused on gentle care, confident smiles, and community trust."
        />
        <div className="mt-10 space-y-6">
          <div className="card-shell p-6">
            <h3 className="font-display text-xl text-ink">Credentials</h3>
            <ul className="mt-4 space-y-3 text-base text-ink/70">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card-shell p-6">
            <h3 className="font-display text-xl text-ink">Mission</h3>
            <p className="mt-4 text-base text-ink/70">
              To provide quality yet affordable dental care, reassuring patients that
              treatment can be calm, comfortable, and easy to understand.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-terracotta/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brown">
              Gentle - Trusted - Educational
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Our Values"
          title="Care rooted in community."
          subtitle="The clinic experience is built on three simple promises."
        />
        <div className="mt-10 space-y-6">
          {values.map((item) => (
            <div key={item.title} className="card-shell p-6">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-base text-ink/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
