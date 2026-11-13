import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-navy bg-navy px-5 py-10 text-white sm:px-12 sm:py-14 lg:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">Contact</p>
          <h2 className="mt-3 max-w-3xl font-heading text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Experience a Smarter Future of Healthcare.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ice sm:text-lg">
            Discover how intelligent healthcare technology can help create more connected, accessible and personalized
            patient experiences.
          </p>
          <Button href="/#contact" text="Get Started" variant="inverse" className="mt-8 w-full sm:w-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
