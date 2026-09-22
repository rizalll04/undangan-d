"use client";

import { useEffect, useRef, useState } from "react";
import { Disc3, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  audioUrl: string;
  autoPlayTrigger?: boolean;
}

export default function AudioPlayer({ audioUrl, autoPlayTrigger }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<boolean>(false);

  // Auto-play saat cover dibuka (bisa diblokir browser — sudah di-handle)
  useEffect(() => {
    if (autoPlayTrigger && !hasInteracted && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          // Browser memblokir autoplay — tunggu user klik tombol
          setIsPlaying(false);
        });
    }
  }, [autoPlayTrigger, hasInteracted]);

  const togglePlay = async () => {
    if (!audioRef.current || audioError) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (err) {
        console.error("Audio play error:", err);
        setAudioError(true);
        setIsPlaying(false);
      }
    }
  };

  const handleAudioError = () => {
    console.warn("Gagal memuat file audio:", audioUrl);
    setAudioError(true);
    setIsPlaying(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
        onError={handleAudioError}
      />
      <div className="fixed bottom-24 right-5 z-40 sm:bottom-6 sm:right-6">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
          disabled={audioError}
          title={audioError ? "File audio tidak dapat dimuat" : undefined}
          className={`group flex items-center gap-2 rounded-full p-3 shadow-2xl backdrop-blur-md transition-all duration-300 ${
            audioError
              ? "bg-stone-900/50 text-stone-600 ring-1 ring-stone-700 cursor-not-allowed opacity-50"
              : isPlaying
              ? "bg-amber-900/80 text-amber-200 ring-2 ring-amber-400/50 hover:bg-amber-800"
              : "bg-stone-900/80 text-stone-400 ring-1 ring-stone-600 hover:bg-stone-800"
          }`}
        >
          <div
            className={`relative flex items-center justify-center ${isPlaying ? "animate-spin" : ""}`}
            style={{ animationDuration: "5s" }}
          >
            <Disc3 className="h-6 w-6 text-amber-300" />
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-stone-900">
              ♪
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 pr-2">
            <span className="text-xs font-serif tracking-wider">
              {audioError ? "Audio Error" : isPlaying ? "Musik Aktif" : "Musik Hening"}
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
