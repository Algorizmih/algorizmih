import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company, navItems, socials } from "@/lib/content";
import AmbientField from "@/components/ui/AmbientField";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-5 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
        <div>
          <Link href="/" className="inline-flex">
            <Image
              src="/images/logo.png"
              alt="Algorizmi Health"
              width={1972}
              height={506}
              className="h-auto max-h-11 w-auto sm:max-h-14"
            />
          </Link>
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-body">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition duration-200 hover:text-navy"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {socials.join(" / ")}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-navy">
            Contact Us
          </p>
          <a
            href={company.phoneHref}
            className="mt-3 block break-words font-heading text-2xl font-semibold text-space sm:text-3xl"
          >
            {company.phone}
          </a>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted">Location</dt>
              <dd className="mt-1 text-body">{company.address}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Email</dt>
              <dd className="mt-1">
                <a
                  href={company.emailHref}
                  className="text-body underline decoration-cyanInk underline-offset-4"
                >
                  {company.email}
                </a>
              </dd>
            </div>
            {/* <div>
              <dt className="text-sm text-muted">{company.hoursLabel}</dt>
              <dd className="mt-1 font-heading text-2xl font-semibold text-space sm:text-3xl">{company.hours}</dd>
            </div> */}
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-5 lg:px-8">
        <Link
          href="/about"
          className="group relative mb-6 flex items-center justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-space p-6 text-white outline-none transition duration-300 hover:border-cyan/50 focus-visible:shadow-focus sm:p-8 lg:p-10"
        >
          <AmbientField />
          <div className="relative z-10 min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">Ventures</p>
            <p className="mt-2 max-w-[10rem] font-heading text-2xl font-semibold tracking-tight sm:max-w-none sm:text-3xl">
              See our other Ventures
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ice">{company.legalName}</p>
          </div>
          <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-white group-hover:bg-white group-hover:text-navy">
            <ArrowUpRight aria-hidden="true" size={22} />
            <span className="sr-only">About Algorizmih</span>
          </span>
        </Link>
        <p className="text-sm text-muted">
          © {currentYear} Algorizmih. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
