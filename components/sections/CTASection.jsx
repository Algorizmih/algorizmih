import Button from "@/components/ui/Button";
import AmbientField from "@/components/ui/AmbientField";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <AmbientField />
      <div className="relative z-10 mx-auto max-w-content px-gutter py-section sm:px-gutter-sm sm:py-section-sm lg:px-gutter-lg lg:py-section-lg">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">Contact</p>
          <h2 className="mt-3 max-w-3xl font-heading text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Experience a Smarter Future of Healthcare.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ice sm:text-lg">
            Discover how intelligent healthcare technology can help create more connected, accessible and personalized
            patient experiences.
          </p>
          <Button href="/#contact" text="Get Started" variant="inverse" className="mt-8 w-full sm:w-auto" />
        </Reveal>
      </div>
    </section>
  );
}
