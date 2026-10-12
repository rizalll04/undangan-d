"use client";

import { useEffect, useState } from "react";
import { Home, Users, Calendar, BookHeart, Image as ImageIcon, MessageSquareQuote, Gift } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Mempelai", href: "#couple", icon: Users },
  { label: "Acara", href: "#events", icon: Calendar },
  { label: "Cerita", href: "#story", icon: BookHeart },
  { label: "Galeri", href: "#gallery", icon: ImageIcon },
  { label: "Ucapan", href: "#rsvp", icon: MessageSquareQuote },
  { label: "Kado", href: "#gift", icon: Gift },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-3 sm:bottom-6">
      <nav
        aria-label="Navigasi undangan"
        className="relative flex max-w-full items-center gap-0.5 overflow-x-auto rounded-[1.35rem] border border-white/15 bg-stone-950/75 p-1.5 shadow-[0_14px_45px_-12px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:gap-1 sm:rounded-full sm:p-2"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-gradient-to-b from-white/10 via-transparent to-amber-500/5 sm:rounded-full" />
        <div className="pointer-events-none absolute -inset-1 -z-10 rounded-[1.5rem] bg-amber-500/10 blur-xl sm:rounded-full" />
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              aria-current={isActive ? "page" : undefined}
              className={`group relative flex min-w-[3.05rem] shrink-0 flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1.5 transition-all duration-300 sm:min-w-[3.8rem] sm:rounded-full sm:px-3 sm:py-2 ${
                isActive
                  ? "bg-gradient-to-b from-amber-300/20 to-amber-700/10 text-amber-200 shadow-inner shadow-amber-200/10"
                  : "text-stone-400 hover:bg-white/10 hover:text-amber-200"
              }`}
              title={item.label}
            >
              <Icon className={`h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 sm:h-[1.1rem] sm:w-[1.1rem] ${isActive ? "drop-shadow-[0_0_7px_rgba(252,211,77,0.75)]" : ""}`} />
              <span className={`font-sans text-[8px] font-medium tracking-wide transition-colors sm:text-[9px] ${isActive ? "text-amber-100" : "text-stone-500 group-hover:text-amber-200"}`}>
                {item.label}
              </span>
              {isActive && <span className="absolute -bottom-0.5 h-0.5 w-4 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.9)]" />}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
