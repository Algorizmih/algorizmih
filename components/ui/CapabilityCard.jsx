import Link from "next/link";
import { Database, FlaskConical, Newspaper, Workflow } from "lucide-react";

const icons = {
  database: Database,
  flask: FlaskConical,
  workflow: Workflow,
  newspaper: Newspaper,
};

export default function CapabilityCard({ title, status, text, href, icon }) {
  const Icon = icons[icon] ?? Database;

  return (
    <article className="card-lift flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-card">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ice text-navy">
          <Icon aria-hidden="true" size={20} />
        </span>
        <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-navy">
          {status}
        </span>
      </div>
      <h3 className="mt-6 font-heading text-xl font-semibold leading-snug text-space">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-body sm:text-[15px]">{text}</p>
      <Link
        href={href}
        className="mt-6 inline-flex text-sm font-medium text-navy underline decoration-cyan decoration-2 underline-offset-4"
      >
        View source note
      </Link>
    </article>
  );
}
