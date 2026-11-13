import Reveal from "@/components/ui/Reveal";
import { patientJourney } from "@/lib/content";

export default function PatientJourney() {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {patientJourney.map((step, index) => (
        <li key={step.title} className="card-lift rounded-3xl border border-line bg-ice p-5">
          <Reveal delay={index * 0.08}>
            <span className="font-mono text-xs text-navy">0{index + 1}</span>
            <h3 className="mt-3 font-heading text-xl font-semibold text-space">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{step.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
