"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import CoverScreen from "@/components/CoverScreen";
import AudioPlayer from "@/components/AudioPlayer";
import FloatingNav from "@/components/FloatingNav";
import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import EventsSection from "@/components/EventsSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import RsvpSection from "@/components/RsvpSection";
import GiftSection from "@/components/GiftSection";
import FooterSection from "@/components/FooterSection";
import { invitationData } from "@/data/invitationData";

function WeddingInvitationContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    // Smoothly scroll to hero section on cover open
    setTimeout(() => {
      const hero = document.getElementById("hero");
      if (hero) hero.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <main className="relative min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Cover Screen */}
      <CoverScreen
        guestName={guestName}
        isOpen={isOpen}
        onOpen={handleOpenInvitation}
      />

      {/* Background Audio Player */}
      <AudioPlayer
        audioUrl={invitationData.audioUrl}
        autoPlayTrigger={isOpen}
      />

      {/* Floating Gold Particles Animation */}
      {isOpen && <FloatingParticles />}

      {/* Floating Bottom Navigation Dock */}
      {isOpen && <FloatingNav />}

      {/* Invitation Sections */}
      <div className={`transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0 h-screen overflow-hidden"}`}>
        <HeroSection />
        <CoupleSection />
        <EventsSection />
        <StorySection />
        <GallerySection />
        <RsvpSection defaultGuestName={guestName !== "Tamu Undangan" ? guestName : ""} />
        <GiftSection />
        <FooterSection />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-stone-950 text-amber-300 font-serif">
          Memuat Undangan...
        </div>
      }
    >
      <WeddingInvitationContent />
    </Suspense>
  );
}

