import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { invitationData } from "@/data/invitationData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${invitationData.groom.name} & ${invitationData.bride.name} Wedding Invitation`,
  description: `Walimatul 'Ursy Pernikahan ${invitationData.groom.fullName} & ${invitationData.bride.fullName}. Merupakan kehormatan bagi kami atas kehadiran Bapak/Ibu/Saudara/i.`,
  openGraph: {
    title: `The Wedding of ${invitationData.groom.name} & ${invitationData.bride.name}`,
    description: `Walimatul 'Ursy ${invitationData.groom.fullName} & ${invitationData.bride.fullName} - ${invitationData.events.akad.date}`,
    images: [
      {
        url: invitationData.gallery[0]?.url || "",
        width: 1200,
        height: 630,
        alt: `${invitationData.groom.name} & ${invitationData.bride.name}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-stone-950 text-stone-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

