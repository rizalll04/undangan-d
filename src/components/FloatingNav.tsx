"use client";

import { Home, Users, Calendar, BookHeart, Image as ImageIcon, MessageSquareQuote, Gift } from "lucide-react";

export default function FloatingNav() {
  const navItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "Mempelai", href: "#couple", icon: Users },
    { label: "Acara", href: "#events", icon: Calendar },
    { label: "Cerita", href: "#story", icon: BookHeart },
    { label: "Galeri", href: "#gallery", icon: ImageIcon },
    { label: "Ucapan", href: "#rsvp", icon: MessageSquareQuote },
    { label: "Kado", href: "#gift", icon: Gift },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-fit">
      <nav className="flex items-center gap-1 sm:gap-2 rounded-full border border-amber-300/40 bg-stone-900/85 px-3 py-2 shadow-2xl backdrop-blur-md">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group flex flex-col items-center justify-center rounded-full p-2 text-stone-300 transition-all duration-200 hover:bg-amber-950/60 hover:text-amber-300"
              title={item.label}
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
              <span className="sr-only sm:not-sr-only sm:text-[9px] font-sans tracking-tight text-stone-400 group-hover:text-amber-200">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
