"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { invitationData } from "@/data/invitationData";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function CoupleSection() {
  const { groom, bride } = invitationData;

  return (
    <section id="couple" className="relative py-24 px-4 bg-stone-900 text-stone-100 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-xs tracking-[0.3em] uppercase text-amber-400 font-medium mb-2">
          Pasangan Mempelai
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 mb-4">
          Mempelai Yang Berbahagia
        </h2>
        <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-16">
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta&apos;ala, kami bermaksud menyatukan dua hati dalam ikatan suci pernikahan:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Groom Card */}
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-3xl border border-amber-400/20 bg-stone-950/60 backdrop-blur-sm shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/40 animate-spin" style={{ animationDuration: "30s" }} />
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-amber-400/60 shadow-lg">
                <Image
                  src={groom.photo}
                  alt={groom.fullName}
                  fill
                  sizes="(max-width: 768px) 176px, 208px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <h3 className="font-serif text-2xl text-amber-200 font-semibold mb-1">
              {groom.fullName}
            </h3>
            <p className="text-xs text-amber-400 font-medium mb-3">
              {groom.order}
            </p>
            <p className="text-stone-300 text-sm mb-1">{groom.father}</p>
            <p className="text-stone-400 text-sm mb-4">&amp; {groom.mother}</p>

            {groom.quote && (
              <p className="font-serif italic text-xs text-stone-400 mb-5 px-4">
                &ldquo;{groom.quote}&rdquo;
              </p>
            )}

            {groom.instagram && (
              <a
                href={groom.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/80 px-4 py-1.5 text-xs text-stone-300 hover:text-amber-300 hover:border-amber-400/50 transition-colors"
              >
                <InstagramIcon className="h-3.5 w-3.5 text-rose-400" />
                <span>@{groom.instagram.split("/").pop()}</span>
              </a>
            )}
          </div>

          {/* Bride Card */}
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-3xl border border-amber-400/20 bg-stone-950/60 backdrop-blur-sm shadow-xl transition-transform duration-300 hover:-translate-y-1">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-rose-400/40 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-amber-400/60 shadow-lg">
                <Image
                  src={bride.photo}
                  alt={bride.fullName}
                  fill
                  sizes="(max-width: 768px) 176px, 208px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <h3 className="font-serif text-2xl text-amber-200 font-semibold mb-1">
              {bride.fullName}
            </h3>
            <p className="text-xs text-amber-400 font-medium mb-3">
              {bride.order}
            </p>
            <p className="text-stone-300 text-sm mb-1">{bride.father}</p>
            <p className="text-stone-400 text-sm mb-4">&amp; {bride.mother}</p>

            {bride.quote && (
              <p className="font-serif italic text-xs text-stone-400 mb-5 px-4">
                &ldquo;{bride.quote}&rdquo;
              </p>
            )}

            {bride.instagram && (
              <a
                href={bride.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/80 px-4 py-1.5 text-xs text-stone-300 hover:text-amber-300 hover:border-amber-400/50 transition-colors"
              >
                <InstagramIcon className="h-3.5 w-3.5 text-rose-400" />
                <span>@{bride.instagram.split("/").pop()}</span>
              </a>
            )}
          </div>
        </div>

        {/* Center Heart Indicator */}
        <div className="mt-12 flex items-center justify-center gap-2 text-stone-400 text-xs">
          <div className="h-px w-16 bg-stone-700" />
          <Heart className="h-4 w-4 text-rose-400 fill-rose-400/40" />
          <span className="font-serif tracking-widest text-amber-300">FAIZAL &amp; ANISA</span>
          <Heart className="h-4 w-4 text-rose-400 fill-rose-400/40" />
          <div className="h-px w-16 bg-stone-700" />
        </div>
      </div>
    </section>
  );
}
