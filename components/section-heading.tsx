type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#b49a1c]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#172b3d] md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[#65717d] md:text-lg">{description}</p> : null}
    </div>
  );
}
