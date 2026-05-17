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

export default function AboutPage() {
  return (
    <div>
      {/* Hero / Intro */}
      <section className="section-pad bg-cream/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="About Us" align="center" size="xl" />

          {/* Subheader: Text & CTA */}
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-lg text-ink/80 leading-relaxed">
              Led by Dr. Jogi Terese Alunan, JT Alunan Dental Clinic blends modern
              dentistry with the warmth of Filipino care. We prioritize preventive
              treatment, patient education, and a calm, reassuring approach so you
              can make confident decisions about your oral health.
            </p>
          </div>

          {/* Profile Card & Image Side-by-Side */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            {/* Profile Card */}
            <div className="card-shell p-6">
              <h3 className="font-display text-2xl text-ink">Dr. Jogi Terese Alunan</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                Dr. Jogi Terese Alunan is a graduate of Iloilo Doctor's College (Batch 2021) and passed the Dental Board Examination in May 2022. With three years of clinical experience, she remains committed to continuous learning through advanced training in orthodontics, aesthetic dentistry, and surgery.
              </p>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                With gentle and detail-oriented hands, her goal is to provide quality yet affordable dental care for everyone. Her mission is to reassure patients that dental treatment is not scary and that visiting the dentist can be a comfortable and positive experience.
              </p>
              <div className="mt-4 space-y-2 text-sm text-ink/70">
                <p><span className="font-semibold text-ink">Credential:</span> Doctor of Dental Surgery, Iloilo Doctor's College</p>
                <p><span className="font-semibold text-ink">Board Exam:</span> Passed May 2022</p>
                <p><span className="font-semibold text-ink">Specialties:</span> Orthodontics, aesthetic dentistry, oral surgery</p>
              </div>
              <div className="mt-6">
                <Link href="/book" className="btn-primary w-full text-center">
                  Book an Appointment with Dr. Jogi
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-sm">
                <Image
                  src="/images/doctor_profile_hero.png"
                  alt="Portrait of Dr. Jogi Terese Alunan"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
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

    </div>
  );
}
