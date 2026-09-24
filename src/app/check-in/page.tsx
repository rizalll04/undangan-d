"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Download } from "lucide-react";
import { CheckCircle2, QrCode, UserCheck, AlertCircle, RefreshCw } from "lucide-react";
import { invitationData } from "@/data/invitationData";

interface AttendanceRecord {
  name: string;
  checkInTime: string;
}

function CheckInContent() {
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get("name") || "";

  const [guestName, setGuestName] = useState(guestNameParam);
  const [status, setStatus] = useState<"idle" | "success" | "already">("idle");
  const [attendanceList, setAttendanceList] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("wedding_attendance");
    if (saved) {
      try { setAttendanceList(JSON.parse(saved)); } catch {}
    }
  }, []);

  useEffect(() => {
    if (guestNameParam) {
      setGuestName(guestNameParam);
      handleCheckIn(guestNameParam);
    }
  }, [guestNameParam]);

  const handleCheckIn = (nameToCheck: string) => {
    const trimmed = nameToCheck.trim();
    if (!trimmed) return;
    setLoading(true);
    setTimeout(() => {
      const now = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
      const existing = attendanceList.find(i => i.name.toLowerCase() === trimmed.toLowerCase());
      if (existing) {
        setStatus("already");
      } else {
        const updated = [{ name: trimmed, checkInTime: now }, ...attendanceList];
        setAttendanceList(updated);
        localStorage.setItem("wedding_attendance", JSON.stringify(updated));
        setStatus("success");
      }
      setLoading(false);
    }, 300);
  };
  const exportToCSV = () => {
    if (attendanceList.length === 0) {
      alert("Belum ada data kehadiran untuk di-export.");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,No,Nama Tamu,Waktu Check-In,Status\r\n";
    attendanceList.forEach((item, index) => {
      csvContent += `${index + 1},"${item.name}","${item.checkInTime}","Hadir"\r\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Daftar_Hadir_Resepsi_${invitationData.groom.name}_${invitationData.bride.name}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <div className="w-full bg-stone-900 border border-amber-500/30 rounded-3xl p-6 shadow-2xl my-6">
        {status === "success" && (
          <div className="text-center py-6">
            <div className="h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h2 className="font-serif text-2xl text-emerald-300 mb-1">Check-In Berhasil!</h2>
            <p className="text-stone-300 text-sm capitalize font-semibold mb-6">{guestName}</p>
            <button onClick={() => setStatus("idle")} className="px-6 py-2.5 rounded-xl bg-stone-800 text-amber-300 text-xs">
              Scan Tamu Lain
            </button>
          </div>
        )}

        {status === "already" && (
          <div className="text-center py-6">
            <div className="h-16 w-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-10 w-10" />
            </div>
            <h2 className="font-serif text-2xl text-amber-300 mb-1">Sudah Check-In</h2>
            <p className="text-stone-300 text-sm capitalize font-semibold mb-6">{guestName}</p>
            <button onClick={() => setStatus("idle")} className="px-6 py-2.5 rounded-xl bg-stone-800 text-amber-300 text-xs">
              Scan Tamu Lain
            </button>
          </div>
        )}

        {status === "idle" && (
          <form onSubmit={(e) => { e.preventDefault(); handleCheckIn(guestName); }} className="space-y-4">
            <div className="text-center mb-4">
              <QrCode className="h-8 w-8 text-amber-400 mx-auto mb-2" />
              <h3 className="font-serif font-semibold text-lg text-white">Buku Tamu Resepsi</h3>
              <p className="text-xs text-stone-400">Scan QR atau ketik nama tamu.</p>
            </div>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Nama tamu..."
              required
              className="w-full rounded-xl bg-stone-950 border border-stone-800 px-4 py-3 text-sm text-white capitalize"
            />
            <button type="submit" disabled={loading} className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm">
              {loading ? "Memproses..." : "Catat Kehadiran"}
            </button>
          </form>
        )}
      </div>

      <div className="w-full bg-stone-900/60 border border-stone-800 rounded-2xl p-4 mb-6">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-800 text-xs text-amber-300 font-semibold uppercase">
          <span>Daftar Hadir ({attendanceList.length})</span>
          <button
            onClick={exportToCSV}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-medium transition-colors lowercase tracking-normal"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Export Excel (.csv)</span>
          </button>
        </div>
        <div className="max-h-40 overflow-y-auto space-y-2">
          {attendanceList.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between bg-stone-950 px-3 py-2 rounded-xl text-xs border border-stone-800">
              <span className="text-white capitalize">{item.name}</span>
              <span className="text-amber-400 font-mono">{item.checkInTime}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CheckInPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center justify-between p-6">
      <div className="w-full max-w-md text-center pt-8">
        <h1 className="font-serif text-2xl text-amber-200">
          {invitationData.groom.name} & {invitationData.bride.name}
        </h1>
      </div>
      <Suspense fallback={<div className="text-amber-300">Memuat...</div>}>
        <CheckInContent />
      </Suspense>
      <div className="text-xs text-stone-500 pb-4">&copy; 2026 Wedding System</div>
    </main>
  );
}
