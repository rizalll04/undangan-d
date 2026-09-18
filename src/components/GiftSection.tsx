"use client";

import { useState } from "react";
import Image from "next/image";
import { Gift, Copy, Check, QrCode, MapPin } from "lucide-react";
import { invitationData, BankAccount } from "@/data/invitationData";

export default function GiftSection() {
  const { bankAccounts, giftAddress, qrisUrl } = invitationData.gift;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showQris, setShowQris] = useState(false);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="gift" className="py-24 px-4 bg-stone-950 text-stone-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase text-amber-400 font-medium mb-2 tracking-[0.3em]">Tanda Kasih</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 mb-4">Amplop Digital &amp; Kado</h2>
        <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto mb-12 leading-relaxed">
          Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat menyampaikannya melalui:
        </p>

        {/* Bank Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {bankAccounts.map((b: BankAccount) => {
            const isCopied = copiedKey === b.accountNumber;
            return (
              <div key={b.accountNumber} className="rounded-2xl border border-amber-400/30 bg-stone-900/60 p-6 flex flex-col justify-between shadow-xl text-left">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-xl font-bold tracking-wider text-amber-300">{b.bankName}</span>
                  <Gift className="h-5 w-5 text-amber-400" />
                </div>
                <div className="space-y-1 my-2">
                  <p className="text-xs text-stone-400">Nomor Rekening</p>
                  <p className="font-mono text-lg sm:text-xl font-bold tracking-widest text-white">{b.accountNumber}</p>
                  <p className="text-xs text-stone-300">a.n. {b.accountName}</p>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(b.accountNumber, b.accountNumber)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/40 py-2 text-xs font-semibold text-amber-200 transition-colors"
                >
                  {isCopied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  <span>{isCopied ? "Berhasil Disalin!" : "Salin Nomor Rekening"}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* QRIS & Physical Address */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* QRIS */}
          <div className="rounded-2xl border border-stone-800 bg-stone-900/40 p-6 flex flex-col items-center justify-center text-center">
            <QrCode className="h-8 w-8 text-amber-400 mb-3" />
            <h4 className="font-serif text-base text-amber-200 font-semibold mb-1">QRIS Pembayaran</h4>
            <p className="text-xs text-stone-400 mb-4">Dapat dipindai melalui seluruh e-wallet &amp; mobile banking</p>
            <button
              onClick={() => setShowQris(!showQris)}
              className="rounded-xl border border-amber-400/40 bg-amber-950/40 px-4 py-2 text-xs text-amber-200 hover:bg-amber-900/60 transition-colors"
            >
              {showQris ? "Sembunyikan QRIS" : "Tampilkan QRIS"}
            </button>
            {showQris && (
              <div className="mt-4 p-3 bg-white rounded-xl shadow-inner">
                <Image
                  src={qrisUrl}
                  alt="QRIS Wedding"
                  width={160}
                  height={160}
                  className="rounded"
                />
              </div>
            )}
          </div>

          {/* Physical Gift */}
          <div className="rounded-2xl border border-stone-800 bg-stone-900/40 p-6 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-2 mb-2 text-amber-300">
                <MapPin className="h-5 w-5" />
                <h4 className="font-serif text-base font-semibold">Kirim Kado Fisik</h4>
              </div>
              <p className="text-xs text-stone-400">Penerima: {giftAddress.recipient} ({giftAddress.phone})</p>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed bg-stone-950/60 p-3 rounded-xl border border-stone-800">
                {giftAddress.address}
              </p>
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard(giftAddress.address, "address")}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-stone-800 hover:bg-stone-700 py-2 text-xs text-stone-200 transition-colors"
            >
              {copiedKey === "address" ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              <span>{copiedKey === "address" ? "Alamat Disalin!" : "Salin Alamat"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
