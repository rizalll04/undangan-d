"use client";

import { Heart, Share2, Check } from "lucide-react";
import { useState } from "react";
import { invitationData } from "@/data/invitationData";

export default function FooterSection() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <footer className="py-20 px-4 bg-stone-950 text-stone-300 border-t border-stone-800/80 text-center relative overflow-hidden pb-28">
      <div className="max-w-xl mx-auto space-y-6">
        <p className="font-serif italic text-sm text-stone-400">
          Tiada kata yang dapat kami ungkapkan selain rasa terima kasih yang mendalam atas kehadiran serta doa restu Bapak/Ibu/Saudara/i sekalian.
        </p>

        <div className="space-y-1">
          <p className="text-xs text-amber-300 tracking-widest uppercase">Kami yang berbahagia,</p>
          <h3 className="font-serif text-3xl text-amber-100">
            {invitationData.groom.name} &amp; {invitationData.bride.name}
          </h3>
          <p className="text-xs text-stone-400">Beserta Keluarga Besar</p>
        </div>

        <div className="pt-4">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/90 px-5 py-2 text-xs font-medium text-stone-300 hover:text-amber-300 hover:border-amber-400/50 transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
            <span>{copied ? "Tautan Berhasil Disalin!" : "Bagikan Undangan Ini"}</span>
          </button>
        </div>

        <div className="pt-8 border-t border-stone-900 text-stone-500 text-[11px] flex items-center justify-center gap-1.5">
          <span>Dibuat dengan penuh cinta</span>
          <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
          <span>untuk momen sakral pernikahan</span>
        </div>
      </div>
    </footer>
  );
}
