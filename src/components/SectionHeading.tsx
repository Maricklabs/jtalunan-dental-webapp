type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg" | "xl";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  size = "md",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const sizeClass = {
    sm: "text-2xl sm:text-3xl",
    md: "text-3xl sm:text-4xl",
    lg: "text-4xl sm:text-5xl",
    xl: "text-5xl sm:text-6xl",
  }[size];

  return (
    <div className={`${isCenter ? "text-center mx-auto" : "text-left"} max-w-2xl`}>
      {eyebrow ? <p className="pill">{eyebrow}</p> : null}
      <h2 className={`mt-4 font-display leading-tight text-ink ${sizeClass}`}>
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-base text-ink/70">{subtitle}</p> : null}
    </div>
  );
}