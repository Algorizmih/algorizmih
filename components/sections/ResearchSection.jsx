"use client";

import { useState } from "react";
import ResearchCard from "@/components/ui/ResearchCard";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { blogPosts } from "@/lib/content";

export default function ResearchSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="research" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionIntro
            eyebrow="Research and insights"
            title="Algorizmih Collaborations"
            text="Three notes already published with this site. Read More opens the text that exists here and does not invent an article."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.08}>
              <ResearchCard
                post={post}
                open={openId === post.id}
                onToggle={() => setOpenId((current) => (current === post.id ? null : post.id))}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
