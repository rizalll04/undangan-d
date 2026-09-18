"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Heart } from "lucide-react";
import { invitationData } from "@/data/invitationData";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(invitationData.eventDateISO).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20 text-center bg-stone-950 text-stone-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.25] scale-105"
        style={{
          backgroundImage: `url(${invitationData.gallery[2]?.url || invitationData.gallery[0]?.url})`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-stone-950 via-stone-900/80 to-stone-950" />

      {/* Decorative Elements */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-5">
        <div className="text-amber-300 font-serif text-xl sm:text-2xl tracking-wider">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>

        <p className="text-xs sm:text-sm tracking-[0.25em] text-amber-200/80 uppercase font-light">
          Walimatul &apos;Ursy
        </p>

        <h1 className="font-serif text-5xl sm:text-7xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
          {invitationData.groom.name}
          <span className="inline-block mx-3 text-3xl sm:text-5xl font-light text-rose-300">&amp;</span>
          {invitationData.bride.name}
        </h1>

        <p className="font-serif italic text-sm sm:text-base text-stone-300 max-w-md px-4">
          &ldquo;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, agar kamu merasa tenteram bersamanya.&rdquo;
        </p>
        <span className="text-xs text-amber-400 font-semibold tracking-wider">
          {invitationData.quote.source}
        </span>

        {/* Divider */}
        <div className="flex items-center gap-3 w-48 mx-auto my-1">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400" />
          <Heart className="h-4 w-4 text-amber-300 fill-amber-300/30" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400" />
        </div>

        {/* Countdown Timer */}
        <div className="w-full max-w-md rounded-2xl border border-amber-300/20 bg-stone-900/70 p-6 backdrop-blur-md shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-4 text-xs font-medium tracking-widest text-amber-300 uppercase">
            <Clock className="h-3.5 w-3.5" />
            <span>Menghitung Hari Bahagia</span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {[
              { val: timeLeft.days, label: "Hari" },
              { val: timeLeft.hours, label: "Jam" },
              { val: timeLeft.minutes, label: "Menit" },
              { val: timeLeft.seconds, label: "Detik" },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center rounded-xl bg-stone-950/80 border border-amber-500/20 p-2 sm:p-3">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-200">
                  {t.val}
                </span>
                <span className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-wider mt-1">
                  {t.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <a
              href={invitationData.events.akad.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-950/40 px-5 py-2 text-xs font-medium text-amber-200 hover:bg-amber-900/60 transition-colors"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Simpan ke Google Calendar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
