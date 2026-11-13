import Image from "next/image";
import Link from "next/link";
import { company, navItems, socials } from "@/lib/content";
import { BackToTopButton } from "@/components/ui/ScrollToTop";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ice">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-5 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
        <div>
          <Link href="/" className="inline-flex">
            <Image src="/images/logo.png" alt="Algorizmi Health" width={1972} height={506} className="h-auto max-h-11 w-auto sm:max-h-14" />
          </Link>
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-body">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="transition duration-200 hover:text-navy">
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
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-navy">Contact Us</p>
          <a href={company.phoneHref} className="mt-3 block break-words font-heading text-2xl font-semibold text-space sm:text-3xl">
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
                <a href={company.emailHref} className="text-body underline decoration-cyan underline-offset-4">
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">{company.hoursLabel}</dt>
              <dd className="mt-1 font-heading text-2xl font-semibold text-space sm:text-3xl">{company.hours}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-5 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4 rounded-3xl border border-space bg-space p-5 text-white sm:p-8">
          <div className="min-w-0">
            <p className="font-heading text-xl font-semibold">See our other Ventures</p>
            <Link href="/about" className="mt-1 inline-flex text-sm text-ice underline decoration-cyan underline-offset-4">
              About Algorizmih
            </Link>
          </div>
          <BackToTopButton />
        </div>
        <p className="text-sm text-muted">© {currentYear} Algorizmih. All rights reserved.</p>
      </div>
    </footer>
  );
}
