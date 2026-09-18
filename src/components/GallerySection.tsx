"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { invitationData, GalleryItem } from "@/data/invitationData";

export default function GallerySection() {
  const { gallery } = invitationData;
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setActivePhoto(gallery[index]);
  };

  const closeLightbox = () => {
    setActivePhoto(null);
  };

  const showNext = () => {
    const next = (currentIndex + 1) % gallery.length;
    setCurrentIndex(next);
    setActivePhoto(gallery[next]);
  };

  const showPrev = () => {
    const prev = (currentIndex - 1 + gallery.length) % gallery.length;
    setCurrentIndex(prev);
    setActivePhoto(gallery[prev]);
  };

  return (
    <section id="gallery" className="relative py-24 px-4 bg-stone-950 text-stone-100 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-amber-400 font-medium mb-2">
          Galeri Kenangan
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 mb-4">
          Our Moments
        </h2>
        <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-14">
          Potret kebersamaan dan senyuman yang menyertai setiap langkah perjalanan kami.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-56 sm:h-72 w-full overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 cursor-pointer shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src={item.url}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-left">
                <ZoomIn className="h-6 w-6 text-amber-300 mb-2" />
                <p className="text-xs text-white line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 backdrop-blur-md p-4">
          <button
            onClick={closeLightbox}
            aria-label="Tutup foto"
            className="absolute top-5 right-5 rounded-full bg-stone-800/80 p-2 text-white hover:bg-stone-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={showPrev}
            aria-label="Foto sebelumnya"
            className="absolute left-4 rounded-full bg-stone-800/80 p-2 text-white hover:bg-stone-700 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative max-w-3xl w-full max-h-[80vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={activePhoto.url}
                alt={activePhoto.caption}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-center text-sm text-stone-300 max-w-lg">
              {activePhoto.caption}
            </p>
          </div>

          <button
            onClick={showNext}
            aria-label="Foto selanjutnya"
            className="absolute right-4 rounded-full bg-stone-800/80 p-2 text-white hover:bg-stone-700 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
