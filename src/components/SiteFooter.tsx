export default function SiteFooter() {
  return (
    <footer className="border-t border-sand/70 bg-cream/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
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
            <a
              href="https://www.facebook.com/Jtalunandentalclinic"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition hover:text-olive"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a
              href="mailto:jtsmilesdc@gmail.com"
              aria-label="Email"
              className="transition hover:text-olive"
            >
              <i className="fa-solid fa-envelope" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-sand/60 py-6 text-center text-xs uppercase tracking-[0.3em] text-ink/60">
        JT Alunan Dental Clinic - {new Date().getFullYear()}
      </div>
    </footer>
  );
}
