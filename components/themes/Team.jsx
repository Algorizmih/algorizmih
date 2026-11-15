import SkeletonImage from "@/components/ui/SkeletonImage";
import Reveal from "@/components/ui/Reveal";
import { team } from "@/lib/content";

export default function Team() {
  return (
    <section id="team" className="bg-ice">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="text-center font-heading text-[1.75rem] font-semibold leading-tight tracking-tight text-space sm:text-4xl">
            Meet the Team
          </h2>
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {team.map((staff, index) => (
            <li key={staff.id} className="card-lift group min-w-0 overflow-hidden rounded-2xl border border-line bg-white shadow-card sm:rounded-3xl">
              <Reveal delay={index * 0.06}>
                <div className="relative aspect-[3/4] sm:aspect-[4/5]">
                  <SkeletonImage
                    src={staff.image}
                    alt={`${staff.name}, ${staff.title}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="object-cover object-top group-hover:scale-105"
                  />
                </div>
                <div className="px-1.5 py-2 text-center sm:p-5">
                  <h3 className="font-heading text-xs font-semibold leading-tight text-space sm:text-xl">{staff.name}</h3>
                  <p className="mt-1 text-[11px] leading-snug text-muted sm:text-sm">{staff.title}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
