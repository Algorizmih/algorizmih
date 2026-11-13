import HealthcareFeatureCard from "@/components/ui/HealthcareFeatureCard";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { professionalFeatures } from "@/lib/content";

export default function ProfessionalFeatureSection() {
  return (
    <section id="professionals" className="bg-ice">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionIntro
            eyebrow="For healthcare professionals"
            title="AI supports professional judgment. It does not replace it."
            text="Algorizmih’s public work includes research collaboration, including the NICRAT imaging data repository. Where a clinical decision is required, a qualified professional remains responsible."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {professionalFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <HealthcareFeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
