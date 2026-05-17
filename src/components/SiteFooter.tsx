type SiteFooterProps = {
  page?: "book" | (string & {});
};

export default function SiteFooter({ page }: SiteFooterProps) {
  const isBookPage = page === "book";

  return (
    <>
      {/* CTA Banner */}
      <section className="border-t border-sand/70 bg-sand">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:px-8">
          {isBookPage ? (
            <p className="w-full text-center font-display text-3xl text-ink sm:text-4xl">
              Smile better. Live better.
            </p>
          ) : (
            <>
              <p className="font-display text-3xl text-ink sm:text-4xl">
                Smile better. Live better.
              </p>
              <a
                href="/book"
                className="shrink-0 border border-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-ink hover:text-cream"
              >
                Make an Appointment
              </a>
            </>
          )}
        </div>
      </section>

      <footer className="border-t border-sand/70 bg-cream/90">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <img
              src="/images/Logo.png"
              alt="JT Alunan Dental Clinic logo"
              className="h-auto w-40"
            />
            <p className="font-display text-2xl text-ink">JT Alunan Dental Clinic</p>
            <p className="mt-3 text-base text-ink/70">
              Gentle dental care, alaga para sa ngiti mo. Community-centered care in
              Oton, Iloilo with honest guidance and patient education.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-olive/20 bg-olive/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-olive">
              Smile better. Live better.
            </div>
          </div>
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-olive">
              Visit Us
            </p>
            <p className="mt-3 text-base text-ink/75">
              2nd Floor, Door 4, St. Joseph Building, Brgy. San Antonio, Oton, Iloilo
            </p>
            <p className="mt-3 text-base text-ink/75">Monday-Saturday: 9:00 AM - 5:00 PM</p>
            <p className="mt-3 text-base text-ink/75">Sunday: By appointment only</p>
          </div>
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-olive">
              Contact
            </p>
            <p className="mt-3 text-base text-ink/75">0919 615 2434</p>
            <div className="mt-4 flex items-center gap-4 text-xl text-ink/75">
              <a href="https://www.facebook.com/Jtalunandentalclinic"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="transition hover:text-olive">
                <i className="fa-brands fa-facebook-f" />
                
              </a>
              <a href="mailto:jtsmilesdc@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="transition hover:text-olive">
                <i className="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-sand/60 py-6 text-center text-xs uppercase tracking-[0.3em] text-ink/60">
          JT Alunan Dental Clinic - {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}