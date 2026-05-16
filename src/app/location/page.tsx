import SectionHeading from "@/components/SectionHeading";
import LocationMap from "@/components/LocationMap";

const travelTips = [
  "Near the Oton Town Plaza for easy landmark navigation.",
  "Parking is available nearby for cars and motorcycles.",
  "Arrive 10 minutes early to complete your comfort check."
];

export default function LocationPage() {
  return (
    <div>
      <section className="section-pad">
        <div className="space-y-10">
          <div>
            <p className="pill">Contact Us</p>
            <h1 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
              Find us in Oton, Iloilo.
            </h1>
            <p className="mt-4 text-base text-ink/70">
              Use live directions to reach JT Alunan Dental Clinic. We are just a
              short walk from local landmarks and main transit routes.
            </p>
            <div className="mt-6 space-y-3 text-base text-ink/70">
              {travelTips.map((tip) => (
                <p key={tip}>{tip}</p>
              ))}
            </div>
          </div>
          <div className="card-shell p-6">
            <h3 className="font-display text-xl text-ink">Clinic Address</h3>
            <p className="mt-3 text-base text-ink/70">
              2nd Floor, Door 4, St. Joseph Building, Brgy. San Antonio, Oton, Iloilo
            </p>
            <p className="mt-3 text-base text-ink/70">Monday-Saturday: 9:00 AM - 5:00 PM</p>
            <p className="mt-3 text-base text-ink/70">Sunday: By appointment only</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Live Directions"
          title="See your route in real time."
          subtitle="Allow GPS to pinpoint your current location and render turn-by-turn directions."
        />
        <div className="mt-10">
          <LocationMap />
        </div>
      </section>
    </div>
  );
}
