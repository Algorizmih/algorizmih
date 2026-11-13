import {
  CircleCheck,
  Eye,
  Files,
  FolderKanban,
  KeyRound,
  Lock,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const icons = {
  folders: FolderKanban,
  files: Files,
  stethoscope: Stethoscope,
  lock: Lock,
  shield: ShieldCheck,
  check: CircleCheck,
  eye: Eye,
  users: Users,
  key: KeyRound,
};

export default function HealthcareFeatureCard({
  icon = "shield",
  title,
  text,
  tone = "light",
}) {
  const Icon = icons[icon] ?? ShieldCheck;
  const dark = tone === "dark";

  return (
    <article
      className={`card-lift rounded-3xl border p-6 ${
        dark
          ? "border-white/10 bg-white/5 text-ice"
          : "border-line bg-white text-body shadow-card"
      }`}
    >
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
          dark ? "bg-white/10 text-cyan" : "bg-ice text-navy"
        }`}
      >
        <Icon aria-hidden="true" size={20} />
      </span>
      <h3 className={`mt-5 font-heading text-xl font-semibold leading-snug ${dark ? "text-white" : "text-space"}`}>
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">{text}</p>
    </article>
  );
}
