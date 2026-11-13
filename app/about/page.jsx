import PartnershipStory from "@/components/sections/PartnershipStory";
import CTASection from "@/components/sections/CTASection";
import Team from "@/components/themes/Team";
import Reveal from "@/components/ui/Reveal";
import SkeletonImage from "@/components/ui/SkeletonImage";
import { aboutCopy } from "@/lib/content";

export const metadata = {
  title: "About Us",
  description:
    "Algorizmih health provides new technology that significantly enhances the medical diagnosis in Nigeria.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ice">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:gap-12 sm:px-5 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy">About Us</p>
              <h1 className="mt-4 max-w-3xl font-heading text-[2rem] font-semibold leading-[1.12] tracking-tight text-space sm:text-[2.75rem] lg:text-[4rem] xl:text-[4.5rem]">
                About Algorizmih
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg">{aboutCopy}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SkeletonImage
              src="/images/lab.png"
              alt="Algorizmih laboratory"
              width={1200}
              height={900}
              priority
              className="h-64 w-full rounded-3xl border border-line object-cover shadow-card sm:h-72 lg:h-auto lg:max-h-[32rem]"
            />
          </Reveal>
        </div>
      </section>
      <PartnershipStory id="history" />
      <Team />
      <CTASection />
    </>
  );
}
