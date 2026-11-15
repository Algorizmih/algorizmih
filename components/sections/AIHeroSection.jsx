import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AmbientField from "@/components/ui/AmbientField";
import AIVisualization from "@/components/visuals/AIVisualization";
import { hero, socials } from "@/lib/content";

export default function AIHeroSection() {
  return (
    <section className="relative overflow-hidden bg-space text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-space via-space to-navy"
        aria-hidden="true"
      />
      <AmbientField />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <Reveal>
          <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-heading text-[1.875rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.5rem] lg:text-[4rem] xl:text-[4.5rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ice sm:text-lg">{hero.support}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#lab" text={hero.primaryCta} variant="inverse" className="w-full sm:w-auto" />
            <Button href="/#capabilities" text={hero.secondaryCta} variant="ghost" className="w-full sm:w-auto" />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="/#lab" className="w-full rounded-2xl bg-white px-4 py-2.5 text-left text-xs font-medium leading-snug text-space sm:w-fit sm:rounded-full">
              {hero.tagline}
            </a>
            <a href="/#contact" className="text-sm font-medium text-white underline decoration-cyan underline-offset-4">
              {hero.demoCta}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#lab" aria-label="Move to the next section" className="text-white transition duration-300 hover:translate-y-1">
              <ArrowDown size={28} />
            </a>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ice/80">{socials.join(" / ")}</p>
          </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <AIVisualization />
        </Reveal>
      </div>
    </section>
  );
}
