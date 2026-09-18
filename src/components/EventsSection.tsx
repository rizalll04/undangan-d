"use client";

import { Calendar, Clock, MapPin, Navigation, Video } from "lucide-react";
import { invitationData, EventDetail } from "@/data/invitationData";

function EventCard({ event, badge, showCalendar }: { event: EventDetail; badge: string; showCalendar?: boolean }) {
  return (
    <div className="flex flex-col justify-between rounded-3xl border border-amber-400/30 bg-stone-900/60 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative hover:border-amber-400/60 transition-all">
      <div className="absolute top-0 right-8 -translate-y-1/2 rounded-full border border-amber-400/40 bg-amber-950 px-4 py-1 text-[11px] font-semibold tracking-wider text-amber-300 uppercase">
        {badge}
      </div>

      <div className="space-y-4 pt-2">
        <h3 className="font-serif text-2xl text-amber-200 font-semibold">{event.title}</h3>
        <div className="flex flex-col items-center gap-2 text-stone-200 text-sm">
          <div className="flex items-center gap-2 text-amber-300 font-medium">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-stone-300">
            <Clock className="h-4 w-4 text-amber-400" />
            <span>{event.time}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-stone-800">
          <div className="flex items-start justify-center gap-2 text-stone-300">
            <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white text-base">{event.venue}</h4>
              <p className="text-xs text-stone-400 mt-1 max-w-xs">{event.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-stone-800 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={event.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg hover:bg-amber-500 transition-colors"
        >
          <Navigation className="h-3.5 w-3.5" />
          <span>Petunjuk Lokasi</span>
        </a>
        {event.streamingUrl && (
          <a
            href={event.streamingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-700 bg-stone-800/80 px-4 py-2.5 text-xs font-medium text-stone-200 hover:bg-stone-700 transition-colors"
          >
            <Video className="h-3.5 w-3.5 text-rose-400" />
            <span>Live Streaming</span>
          </a>
        )}
        {showCalendar && (
          <a
            href={event.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-700 bg-stone-800/80 px-4 py-2.5 text-xs font-medium text-stone-200 hover:bg-stone-700 transition-colors"
          >
            <Calendar className="h-3.5 w-3.5 text-amber-300" />
            <span>Simpan Kalender</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function EventsSection() {
  const { akad, resepsi } = invitationData.events;

  return (
    <section id="events" className="relative py-24 px-4 bg-stone-950 text-stone-100 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-amber-400 font-medium mb-2">
          Rangkaian Acara
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 mb-4">
          Waktu &amp; Lokasi Acara
        </h2>
        <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed mb-14">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <EventCard event={akad} badge="Akad Nikah" />
          <EventCard event={resepsi} badge="Resepsi" showCalendar />
        </div>
      </div>
    </section>
  );
}
