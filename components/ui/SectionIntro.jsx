export default function SectionIntro({
  eyebrow,
  title,
  text,
  invert = false,
  as = "h2",
}) {
  const Heading = as;

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={`font-mono text-xs uppercase tracking-[0.18em] ${
            invert ? "text-cyan" : "text-navy"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={`mt-3 font-heading text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl ${
          invert ? "text-white" : "text-space"
        }`}
      >
        {title}
      </Heading>
      {text ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            invert ? "text-ice" : "text-body"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
