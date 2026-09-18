"use client";

import { useEffect, useRef, useState } from "react";
import { Disc3, Music2, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  audioUrl: string;
  autoPlayTrigger?: boolean;
}

export default function AudioPlayer({ audioUrl, autoPlayTrigger }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  useEffect(() => {
    if (autoPlayTrigger && !hasInteracted && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy until manual user click
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger, hasInteracted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />
      <div className="fixed bottom-24 right-5 z-40 sm:bottom-6 sm:right-6">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
          className={`group flex items-center gap-2 rounded-full p-3 shadow-2xl backdrop-blur-md transition-all duration-300 ${
            isPlaying
              ? "bg-amber-900/80 text-amber-200 ring-2 ring-amber-400/50 hover:bg-amber-800"
              : "bg-stone-900/80 text-stone-400 ring-1 ring-stone-600 hover:bg-stone-800"
          }`}
        >
          <div className={`relative flex items-center justify-center ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "5s" }}>
            <Disc3 className="h-6 w-6 text-amber-300" />
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-stone-900">
              ♪
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 pr-2">
            <span className="text-xs font-serif tracking-wider">
              {isPlaying ? "Musik Aktif" : "Musik Hening"}
            </span>
            {isPlaying ? (
              <Volume2 className="h-4 w-4 animate-pulse text-amber-300" />
            ) : (
              <VolumeX className="h-4 w-4 text-stone-400" />
            )}
          </div>
        </button>
      </div>
    </>
  );
}
