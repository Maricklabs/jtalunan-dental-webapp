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
        <SectionHeading title="Contact Us" align="center" size="xl" />
        <div className="mt-10">
          <LocationMap />
        </div>
      </section>

      <section className="section-pad">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div className="flex items-center justify-center">
            <img
              src="/images/Logo.png"
              alt="JT Alunan Dental Clinic logo"
              className="h-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="font-display text-4xl text-ink sm:text-5xl">
                Find us in Oton, Iloilo.
              </h1>
              <p className="mt-4 text-base text-ink/70">
                We are located at the heart of the community with easy access to
                nearby landmarks and public routes.
              </p>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="font-display text-xl text-ink">Clinic Address</h3>
                <p className="mt-2 text-base text-ink/70">
                  2nd Floor, Door 4, St. Joseph Building, Brgy. San Antonio, Oton,
                  Iloilo
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-ink">Landmarks</h3>
                <ul className="mt-2 space-y-2 text-base text-ink/70">
                  {travelTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl text-ink">Clinic Hours</h3>
                <p className="mt-2 text-base text-ink/70">
                  Monday-Saturday: 9:00 AM - 5:00 PM
                </p>
                <p className="mt-2 text-base text-ink/70">Sunday: By appointment only</p>
              </div>
              <div>
                <h3 className="font-display text-xl text-ink">Contact</h3>
                <p className="mt-2 text-base text-ink/70">Phone: 0919 615 2434</p>
                <p className="mt-2 text-base text-ink/70">Email: jtsmilesdc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
