import HealthcareFeatureCard from "@/components/ui/HealthcareFeatureCard";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { trustPoints } from "@/lib/content";

export default function TrustSecuritySection() {
  return (
    <section id="trust" className="bg-space text-white">
      <div className="mx-auto max-w-content px-gutter py-section sm:px-gutter-sm sm:py-section-sm lg:px-gutter-lg lg:py-section-lg">
        <Reveal>
          <SectionIntro
            invert
            eyebrow="Trust and security"
            title="Privacy, consent, and a human still in the loop."
            text="No security certification or regulatory approval is claimed here. This section describes how the public website actually behaves."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.06}>
              <HealthcareFeatureCard {...point} tone="dark" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
