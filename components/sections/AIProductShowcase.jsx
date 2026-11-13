"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { blogPosts, company } from "@/lib/content";

const tabs = [
  {
    id: "information",
    label: "Health information",
    title: "Health information discovery",
  },
  {
    id: "support",
    label: "Patient support",
    title: "Patient support interface",
  },
  {
    id: "appointments",
    label: "Appointments",
    title: "Appointment assistance",
  },
];

export default function AIProductShowcase() {
  const [active, setActive] = useState(tabs[0].id);
  const reduce = useReducedMotion();
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-space text-white shadow-card">
      <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan">Demonstration</p>
          <p className="mt-1 text-sm text-ice">Not a clinical system. No diagnosis is produced.</p>
        </div>
        <div role="tablist" aria-label="Demonstration screens" className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-3 py-2 text-xs font-medium transition duration-300 ${
                active === tab.id ? "bg-white text-navy" : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="grid gap-6 p-4 sm:p-5 lg:grid-cols-[0.8fr_1.2fr] lg:p-8"
        >
          <div>
            <h3 className="font-heading text-xl font-semibold sm:text-2xl">{current.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ice">
              Sample interface only. For a real conversation, contact Algorizmih at {company.email} or {company.phone}.
            </p>
          </div>
          {current.id === "information" ? <InformationPanel /> : null}
          {current.id === "support" ? <SupportPanel /> : null}
          {current.id === "appointments" ? <AppointmentPanel /> : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function InformationPanel() {
  return (
    <ul className="space-y-3">
      {blogPosts.map((post) => (
        <li key={post.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-medium text-white">{post.title}</p>
          <p className="mt-1 text-xs text-ice">{post.description}</p>
        </li>
      ))}
    </ul>
  );
}

function SupportPanel() {
  return (
    <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cyan">Sample exchange</p>
      <p className="rounded-2xl bg-white/10 p-3 text-sm">Where is Algorizmih located?</p>
      <p className="rounded-2xl bg-navy p-3 text-sm leading-relaxed">
        Algorizmih is at {company.address}. This demonstration shares public contact information only. It does not
        diagnose, prescribe, or replace a healthcare professional.
      </p>
    </div>
  );
}

function AppointmentPanel() {
  return (
    <form className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4" aria-label="Appointment demonstration">
      <label className="text-sm" htmlFor="demo-topic">
        What do you want to discuss?
      </label>
      <input
        id="demo-topic"
        readOnly
        value="General enquiry"
        className="rounded-xl border border-white/10 bg-space px-3 py-3 text-sm text-ice"
      />
      <p className="text-sm text-ice">
        These fields are disabled. Use the contact form on this page to reach the team during {company.hoursLabel}, {company.hours}.
      </p>
    </form>
  );
}
