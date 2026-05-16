type HeaderBannerProps = {
  desktopSrc?: string;
  mobileSrc?: string;
  alt?: string;
};

const DEFAULT_DESKTOP = "/images/banner.svg";
const DEFAULT_MOBILE = "/images/banner.svg";

export default function HeaderBanner({
  desktopSrc = DEFAULT_DESKTOP,
  mobileSrc = DEFAULT_MOBILE,
  alt = "JT Alunan Dental Clinic banner"
}: HeaderBannerProps) {
  return (
  <div className="relative h-[150px] w-full overflow-hidden border-b border-sand">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopSrc} />
        <img
          src={mobileSrc}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cream/10 to-cream/80" />
    </div>
  );
}
