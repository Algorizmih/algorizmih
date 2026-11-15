import AmbientField from "@/components/ui/AmbientField";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { workflowSteps } from "@/lib/content";

export default function WorkflowVisualization() {
  return (
    <section id="workflow" className="relative overflow-hidden bg-navy text-white">
      <AmbientField />
      <div className="relative z-10 mx-auto max-w-content px-gutter py-section sm:px-gutter-sm sm:py-section-sm lg:px-gutter-lg lg:py-section-lg">
        <SectionIntro
          invert
          eyebrow="How it works"
          title="A clear path from access to human responsibility."
          text="This is the intended information flow. This website does not produce a diagnosis or a prescription."
        />
        <ol className="mt-12 grid gap-5 lg:grid-cols-5 lg:gap-4">
          {workflowSteps.map((step, index) => (
            <li key={step.title} className="relative flex gap-4 lg:block">
              {index < workflowSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="health-link absolute left-5 top-10 h-full w-px bg-cyan/40 lg:left-5 lg:top-5 lg:h-px lg:w-[calc(100%+1rem)]"
                />
              ) : null}
              <Reveal delay={index * 0.08} className="flex min-w-0 flex-1 gap-4 lg:block">
                <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan/50 bg-navy font-mono text-xs text-cyan transition duration-150 lg:mb-6">
                  0{index + 1}
                </span>
                <div className="card-lift min-w-0 flex-1 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-heading text-xl font-semibold leading-snug text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ice sm:text-[15px]">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
