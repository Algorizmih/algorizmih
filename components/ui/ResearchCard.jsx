"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SkeletonImage from "@/components/ui/SkeletonImage";

export default function ResearchCard({ post, open, onToggle }) {
  const reduce = useReducedMotion();

  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card">
      <SkeletonImage
        alt={post.title}
        src={post.imageUrl}
        width={1000}
        height={700}
        className="h-44 w-full object-cover group-hover:scale-105 sm:h-56"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl font-semibold leading-snug text-space">{post.title}</h3>
        <p className="mt-3 text-sm text-muted">{post.description}</p>
        <AnimatePresence initial={false}>
          {open ? (
            <motion.p
              key="note"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <span className="mt-4 block rounded-2xl bg-ice p-4 text-sm leading-relaxed text-body">
                This is the full note published on this page: {post.description}
              </span>
            </motion.p>
          ) : null}
        </AnimatePresence>
        <button
          type="button"
          aria-expanded={open}
          onClick={onToggle}
          className="mt-6 inline-flex w-fit rounded-full bg-navy px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-space"
        >
          {open ? "Close" : "Read More"}
        </button>
      </div>
    </article>
  );
}
