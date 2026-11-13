import CapabilityCard from "@/components/ui/CapabilityCard";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { capabilities } from "@/lib/content";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionIntro
            eyebrow="Services"
            title="What Algorizmih is working on."
            text="Each card points to a collaboration or research note on this website. None of them is presented as an operational clinical product."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <CapabilityCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
