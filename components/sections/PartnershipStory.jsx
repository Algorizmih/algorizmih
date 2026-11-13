import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SkeletonImage from "@/components/ui/SkeletonImage";
import { partnership } from "@/lib/content";

export default function PartnershipStory({ id = "history" }) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:gap-10 sm:px-5 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <Reveal>
          <SkeletonImage
            src="/images/signing.jpeg"
            alt="Algorizmi Health and NICRAT signing"
            width={1400}
            height={1000}
            className="h-64 w-full rounded-3xl object-cover sm:h-72 lg:h-auto lg:max-h-[32rem]"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-navy">Our History</p>
          <h2 className="mt-3 font-heading text-[1.75rem] font-semibold leading-tight tracking-tight text-space sm:text-3xl lg:text-4xl">
            {partnership.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body">{partnership.body}</p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted">{partnership.dateLabel}</dt>
              <dd className="mt-1 font-medium text-space">{partnership.date}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">{partnership.authorLabel}</dt>
              <dd className="mt-1 font-medium text-space">{partnership.author}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/about#history" text="Read More" />
            <Button href="/#research" text="More Posts" variant="secondary" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
