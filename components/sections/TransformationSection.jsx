import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import SkeletonImage from "@/components/ui/SkeletonImage";
import { aboutCopy } from "@/lib/content";

export default function TransformationSection() {
  return (
    <section id="lab" className="bg-ice">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:gap-10 sm:px-5 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <Reveal>
          <SkeletonImage
            src="/images/lab.png"
            alt="Algorizmih laboratory"
            width={1200}
            height={900}
            className="h-64 w-full rounded-3xl object-cover sm:h-72 lg:h-auto lg:max-h-[32rem]"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <SectionIntro
            eyebrow="About Us"
            title="Healthcare is Evolving. Patient Care Should Too."
            text="Intelligent tools can help people find public information, organize research data, and reach a care team. The notes on this site describe Algorizmih’s collaborations. They do not replace a clinician."
          />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">{aboutCopy}</p>
          <Button href="/about" text="About Us" className="mt-8" />
        </Reveal>
      </div>
    </section>
  );
}
