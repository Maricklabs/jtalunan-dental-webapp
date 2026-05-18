
import SectionHeading from "@/components/SectionHeading";

const informationItems = [
  "Basic information, such as name, address, date and place of birth, civil status, gender, nationality, religion and occupation.",
  "Contact details",
  "Dental records",
  "Financial details, payment for services and doctor professional fees",
  "Responses to surveys, about healthcare issues",
  "Visual images, personal appearance and behavior, example CCTV images which used for building security"
];

const useItems = [
  "To provide and maintain our service",
  "To notify you about changes to our service",
  "To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection",
  "To provide you with the dental care and treatment that you need, we require up-to-date and accurate information about you",
  "We may use your contact details to inform you of products and services available at our clinic",
  "To meet regulatory requirements",
  "In any other way we may describe when you provide the information",
  "For any other purpose with your consent"
];

const disclosureItems = [
  "Your doctor",
  "The hospital or community dental services or other health professionals caring for you",
  "Specialist dental or medical services to which we may refer you",
  "Dental laboratories",
  "Private dental insurance or schemes of which you are a member"
];

const surveillanceItems = [
  "Monitor operational and safety related incidents",
  "Protect our staff, doctors, patients and other visitors",
  "Provide a safer environment",
  "Prevent or reduce unlawful activity"
];

export default function TermsOfUsePage() {
  return (
    <div>
      <section className="section-pad">
        <div className="space-y-10">
          <SectionHeading title="Terms of Use" align="center" size="xl" />

          <div className="mx-auto max-w-4xl space-y-6 text-base text-ink/80">
            <p>
              JT Alunan Dental Clinic is committed to protect your privacy and ensure
              that all personal data collected from you are processed according to the
              principles of transparency, legitimate purpose, and proportionality
              pursuant to R.A. 10173 (Data Privacy Act of 2012). Our goal is to protect
              your personal data on the channels you interact with us - through our
              website, electronic channels, in our clinic, and on the phone.
            </p>

            <div>
              <h2 className="font-display text-2xl text-ink">Information Collection and Use</h2>
              <p className="mt-3">
                Once you come to our clinic we may ask for or hold personal information
                about you which will be used to give you an appropriate and excellent
                healthcare and treatment.
              </p>
              <p className="mt-4">This information may include:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {informationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">How we use information</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {useItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Disclosure of Data</h2>
              <p className="mt-3">
                We do not disclose our data unless required to do so by law or in
                response to valid requests by public authorities. Your information is
                normally used only by those working at the clinic but there may be
                instances where we need to share it, for example, with:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {disclosureItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                We will only disclose your information on a need-to-know basis and
                will limit any information that we share to the minimum necessary. We
                will not disclose your personal information to any other third parties
                without patient consent unless health and safety is at risk and law
                mandates us to pass your information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Security of Information</h2>
              <p className="mt-3">
                Our obligation is to protect and secure your personal, sensitive
                information and its confidentiality. We implemented security control
                measures to ensure the security and confidentiality of your personal
                data whether it is in a form of paper or computerized.
              </p>
              <p className="mt-4">
                We store your personal information securely on our clinic computer
                system or in some occasions in a manual filing system.
              </p>
              <p className="mt-4">
                Your information cannot be accessed by those who do not work at the
                clinic; only those working at the clinic have access to your
                information. They understand their legal responsibility to maintain
                confidentiality and follow clinic procedures to ensure this.
              </p>
              <p className="mt-4">
                We take precautions to ensure security of the clinic premises, the
                clinic filing systems, and computers.
              </p>
              <p className="mt-4">
                We use high-quality specialist dental software to record and use your
                personal information safely and effectively.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Surveillance Cameras</h2>
              <p className="mt-3">
                We employ surveillance cameras on and around our dental facilities in
                order to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {surveillanceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Retention of Data</h2>
              <p className="mt-3">
                We will retain your Personal Data only for as long as is necessary for
                the purposes set out in this Terms of Use. We will retain and use your
                Personal Data to the extent necessary to comply with our legal
                obligations, resolve disputes, and enforce our legal agreements and
                policies.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink">Contact Us</h2>
              <p className="mt-3">
                If you have any questions about these Terms of Use, please contact us
                by email: {""}
                <a
                  href="mailto:jtsmilesdc@gmail.com"
                  className="no-underline transition hover:text-olive"
                >
                  jtsmilesdc@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
