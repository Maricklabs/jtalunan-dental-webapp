type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center mx-auto" : "text-left"} max-w-2xl`}>
      {eyebrow ? <p className="pill">{eyebrow}</p> : null}
      <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-base text-ink/70">{subtitle}</p> : null}
    </div>
  );
}
