"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { MailOpen, Heart, Sparkles, Calendar, MapPin } from "lucide-react";
import { invitationData } from "@/data/invitationData";

interface CoverScreenProps {
  guestName: string;
  isOpen: boolean;
  onOpen: () => void;
}

export default function CoverScreen({ guestName, isOpen, onOpen }: CoverScreenProps) {
  const [shouldRender, setShouldRender] = useState(!isOpen);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(true);
    }
  }, [isOpen]);

  const handleOpenInvitation = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#D4AF37", "#F3E5AB", "#FFD700", "#E8B4B8", "#FFFFFF"]
      });
    } catch {
      // Confetti fallback if canvas not supported
    }
    onOpen();
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden bg-stone-950 px-6 py-12 text-center text-white transition-all duration-1000 ease-in-out ${
        isOpen ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Background Image with Dark Romantic Gradient */}
      <div
        className="absolute inset-0 z-0 scale-105 bg-cover bg-center transition-transform duration-1000 brightness-[0.35]"
        style={{
          backgroundImage: `url(${invitationData.gallery[0]?.url || "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200"})`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/80" />

      {/* Subtle floating gold shimmer circles */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

      {/* Top Section */}
      <div className="relative z-10 flex flex-col items-center space-y-3 pt-6 animate-fade-in">
        <div className="flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-950/40 px-4 py-1 text-xs tracking-widest text-amber-300 backdrop-blur-md uppercase">
          <Sparkles className="h-3.5 w-3.5" />
          The Wedding Invitation
          <Sparkles className="h-3.5 w-3.5" />
        </div>
        <p className="font-serif text-sm tracking-[0.25em] text-stone-300 uppercase">
          Walimatul &apos;Ursy
        </p>
      </div>

      {/* Middle Section: Couple Names */}
      <div className="relative z-10 my-auto flex flex-col items-center space-y-4 max-w-lg">
        <h1 className="font-serif text-4xl sm:text-6xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 drop-shadow-md">
          {invitationData.groom.name}
          <span className="mx-3 text-3xl sm:text-5xl font-light text-rose-300">&amp;</span>
          {invitationData.bride.name}
        </h1>

        <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-300 font-light">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-amber-400" />
            <span>24 Oktober 2026</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-amber-400" />
            <span>Jakarta, Indonesia</span>
          </div>
        </div>

        {/* Guest Recipient Card */}
        <div className="w-full mt-6 rounded-2xl border border-amber-300/30 bg-stone-900/70 p-6 backdrop-blur-md shadow-2xl">
          <p className="text-xs tracking-wider text-stone-300 uppercase">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <div className="my-2 text-xl sm:text-2xl font-semibold tracking-wide text-amber-200 capitalize">
            {guestName || "Tamu Undangan"}
          </div>
          <p className="text-[11px] text-stone-400 italic">
            *Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </p>
        </div>
      </div>

      {/* Bottom Section: Open Button */}
      <div className="relative z-10 pb-4">
        <button
          onClick={handleOpenInvitation}
          className="group relative flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-8 py-3.5 text-sm font-semibold tracking-wider text-white shadow-xl shadow-amber-900/40 transition-all duration-300 hover:scale-105 hover:from-amber-400 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          <MailOpen className="h-4 w-4 transition-transform group-hover:scale-110" />
          <span>Buka Undangan</span>
          <Heart className="h-4 w-4 text-rose-200 fill-rose-200 animate-pulse" />
        </button>
      </div>
    </div>
  );
}
