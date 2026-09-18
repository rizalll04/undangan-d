"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle2, MessageSquareHeart, UserCheck } from "lucide-react";

interface Wish {
  id: string;
  name: string;
  attendance: string;
  message: string;
}

const initialWishes: Wish[] = [
  { id: "1", name: "Dimas & Sarah", attendance: "Hadir", message: "Barakallahu lakum wa baraka alaikum. Selamat Faizal & Anisa!" },
  { id: "2", name: "Bpk. Hendra & Kel.", attendance: "Hadir", message: "Semoga menjadi keluarga sakinah, mawaddah, warahmah." },
];

export default function RsvpSection({ defaultGuestName }: { defaultGuestName?: string }) {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [name, setName] = useState(defaultGuestName || "");
  const [attendance, setAttendance] = useState("Hadir");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (defaultGuestName) setName(defaultGuestName);
    const saved = localStorage.getItem("undangan_wishes");
    if (saved) {
      try { setWishes(JSON.parse(saved)); } catch {}
    }
  }, [defaultGuestName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const item: Wish = { id: Date.now().toString(), name: name.trim(), attendance, message: message.trim() };
    const updated = [item, ...wishes];
    setWishes(updated);
    try { localStorage.setItem("undangan_wishes", JSON.stringify(updated)); } catch {}
    setMessage("");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-stone-900 text-stone-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase text-amber-400 font-medium mb-1">Buku Tamu</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 mb-3">RSVP &amp; Doa Restu</h2>
        <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto mb-10">
          Kirimkan konfirmasi kehadiran serta ucapan terbaik Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-amber-400/30 bg-stone-950/70 p-6 space-y-3 text-xs sm:text-sm">
            <h3 className="font-serif text-lg text-amber-200 flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-amber-400" /> Konfirmasi Kehadiran
            </h3>
            {sent && <p className="text-xs text-emerald-300 bg-emerald-950/60 p-2 rounded-lg flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Terkirim!</p>}
            <div>
              <label className="block text-stone-300 mb-1">Nama</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-white" />
            </div>
            <div>
              <label className="block text-stone-300 mb-1">Kehadiran</label>
              <select value={attendance} onChange={e => setAttendance(e.target.value)} className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-white">
                <option value="Hadir">Hadir</option>
                <option value="Ragu-ragu">Ragu-ragu</option>
                <option value="Berhalangan">Berhalangan</option>
              </select>
            </div>
            <div>
              <label className="block text-stone-300 mb-1">Pesan &amp; Doa</label>
              <textarea required rows={3} value={message} onChange={e => setMessage(e.target.value)} className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-white" />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-600 hover:bg-amber-500 py-2.5 font-semibold text-white">
              <Send className="h-4 w-4" /> Kirim
            </button>
          </form>

          <div className="rounded-2xl border border-amber-400/30 bg-stone-950/70 p-6 flex flex-col max-h-[400px]">
            <h3 className="font-serif text-lg text-amber-200 mb-3 flex items-center gap-2 border-b border-stone-800 pb-2">
              <MessageSquareHeart className="h-4 w-4 text-rose-400" /> Untaian Doa ({wishes.length})
            </h3>
            <div className="space-y-3 overflow-y-auto pr-1 flex-1">
              {wishes.map(w => (
                <div key={w.id} className="rounded-xl border border-stone-800 bg-stone-900/60 p-3 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-amber-300">{w.name}</span>
                    <span className="text-[10px] bg-stone-800 px-2 py-0.5 rounded text-stone-300">{w.attendance}</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">{w.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
