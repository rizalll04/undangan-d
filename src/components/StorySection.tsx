"use client";

import { Sparkles, Heart } from "lucide-react";
import { invitationData } from "@/data/invitationData";

export default function StorySection() {
  const { loveStory } = invitationData;

  return (
    <section id="story" className="relative py-24 px-4 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-amber-400 font-medium mb-2">
          Kisah Kami
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 mb-4">
          Love Story
        </h2>
        <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-16">
          Setiap perjalanan memiliki cerita, dan inilah kisah bagaimana takdir mempertemukan kami berdua.
        </p>

        {/* Timeline */}
        <div className="relative border-l border-amber-400/30 ml-4 sm:ml-32 text-left space-y-12">
          {loveStory.map((milestone, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Timeline marker */}
              <div className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-amber-400 bg-stone-950 text-amber-300 shadow-md group-hover:scale-125 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all">
                {idx % 2 === 0 ? <Heart className="h-3 w-3 fill-current" /> : <Sparkles className="h-3 w-3" />}
              </div>

              {/* Year badge */}
              <span className="inline-block rounded-full bg-amber-950/70 border border-amber-400/30 px-3 py-1 text-xs font-semibold text-amber-300 tracking-wider mb-2">
                {milestone.year}
              </span>

              {/* Content box */}
              <div className="rounded-2xl border border-stone-800 bg-stone-950/60 p-5 sm:p-6 backdrop-blur-sm shadow-xl transition-all hover:border-amber-400/40">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-amber-200 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {milestone.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
