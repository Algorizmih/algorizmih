import AIProductShowcase from "@/components/sections/AIProductShowcase";
import PatientJourney from "@/components/sections/PatientJourney";
import SectionIntro from "@/components/ui/SectionIntro";

export default function PatientExperienceSection() {
  return (
    <section id="patients" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8 lg:py-24">
        <SectionIntro
          eyebrow="For patients"
          title="How a patient moves through the platform."
          text="The path and screens below are demonstrations. They share public information and show where a future assistant could sit. They do not offer a diagnosis."
        />
        <div className="mt-10">
          <PatientJourney />
        </div>
        <div className="mt-8">
          <AIProductShowcase />
        </div>
      </div>
    </section>
  );
}
