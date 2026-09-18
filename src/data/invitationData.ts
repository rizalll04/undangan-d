export interface CoupleInfo {
  name: string;
  fullName: string;
  father: string;
  mother: string;
  instagram?: string;
  photo: string;
  order: string;
  quote?: string;
}

export interface EventDetail {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  googleMapsUrl: string;
  calendarUrl: string;
  streamingUrl?: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  story: string;
  icon?: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  caption: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountName: string;
  badgeColor?: string;
}

export interface GiftInfo {
  bankAccounts: BankAccount[];
  qrisUrl: string;
  giftAddress: {
    recipient: string;
    phone: string;
    address: string;
    note?: string;
  };
}

export interface InvitationData {
  title: string;
  groom: CoupleInfo;
  bride: CoupleInfo;
  events: {
    akad: EventDetail;
    resepsi: EventDetail;
  };
  eventDateISO: string;
  quote: {
    arabic: string;
    translation: string;
    source: string;
  };
  loveStory: StoryMilestone[];
  gallery: GalleryItem[];
  gift: GiftInfo;
  audioUrl: string;
  youtubeTeaserId?: string;
}
export const invitationData: InvitationData = {
  title: "The Wedding of Faizal & Anisa",
  eventDateISO: "2026-10-24T08:00:00+07:00",
  groom: {
    name: "Faizal",
    fullName: "Faizal Anwar, S.Kom",
    order: "Putra Pertama dari",
    father: "Bpk. H. Bambang Sudaryo",
    mother: "Ibu Hj. Siti Nurjanah",
    instagram: "https://instagram.com/faizalanwar",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    quote: "Mencintaimu adalah anugerah terindah, dan melangkah bersamamu adalah impian yang kini menjadi nyata."
  },
  bride: {
    name: "Anisa",
    fullName: "Anisa Rahmawati, S.Farm",
    order: "Putri Kedua dari",
    father: "Bpk. H. Ahmad Fauzi",
    mother: "Ibu Hj. Maryam Latifah",
    instagram: "https://instagram.com/anisarahma",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    quote: "Menemukanmu adalah takdir, dan memilihmu untuk menyempurnakan separuh agamaku adalah kebahagiaan terbesar."
  },
  events: {
    akad: {
      title: "Akad Nikah",
      date: "Sabtu, 24 Oktober 2026",
      time: "08.00 - 10.00 WIB",
      venue: "Masjid Agung Al-Azhar",
      address: "Jl. Sisingamangaraja No. 1, Kebayoran Baru, Jakarta Selatan",
      googleMapsUrl: "https://maps.google.com/?q=Masjid+Agung+Al-Azhar+Jakarta",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Faizal+%26+Anisa&dates=20261024T010000Z/20261024T030000Z&details=Akad+Nikah+Faizal+dan+Anisa&location=Masjid+Agung+Al-Azhar+Jakarta",
      streamingUrl: "https://youtube.com/live"
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      date: "Sabtu, 24 Oktober 2026",
      time: "11.00 - 16.00 WIB",
      venue: "Grand Ballroom Sasana Kriya",
      address: "Komplek Taman Mini Indonesia Indah (TMII), Jakarta Timur",
      googleMapsUrl: "https://maps.google.com/?q=Sasana+Kriya+TMII",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Faizal+%26+Anisa&dates=20261024T040000Z/20261024T090000Z&details=Resepsi+Pernikahan+Faizal+dan+Anisa&location=Sasana+Kriya+TMII"
    }
  },
  quote: {
    arabic: "وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ",
    translation: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
    source: "QS. Ar-Rum: 21"
  },
  loveStory: [
    {
      year: "September 2020",
      title: "Awal Berjumpa",
      story: "Takdir mempertemukan kami saat kegiatan kampus. Senyuman dan percakapan sederhana membuka lembaran baru takdir indah kami."
    },
    {
      year: "Mei 2022",
      title: "Merajut Janji",
      story: "Setelah saling memahami, kami memutuskan berkomitmen untuk saling mendukung dan melangkah beriringan."
    },
    {
      year: "Desember 2025",
      title: "Lamaran Sakral",
      story: "Dengan ridho kedua orang tua serta keluarga besar, ikatan suci lamaran resmi diikrarkan."
    },
    {
      year: "Oktober 2026",
      title: "Menuju Mahligai Pernikahan",
      story: "Insya Allah, ikatan suci ijab kabul menyatukan kami dalam ikatan pernikahan yang sakinah, mawaddah, warahmah."
    }
  ],

  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
      caption: "Momen bahagia bersama di bawah hangatnya mentari"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
      caption: "Cincin pengikat janji suci kedua insan"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
      caption: "Saling menatap masa depan dengan penuh cinta"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop",
      caption: "Langkah pasti bergandengan tangan menyongsong masa depan"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop",
      caption: "Tawa dan kebahagiaan dalam setiap jejak perjalanan"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop",
      caption: "Melangkah bersama menggapai ridho Illahi"
    }
  ],
  gift: {
    bankAccounts: [
      {
        bankName: "BCA (Bank Central Asia)",
        accountNumber: "8735123490",
        accountName: "FAIZAL ANWAR",
        badgeColor: "from-blue-600 to-blue-800"
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "1320098765432",
        accountName: "ANISA RAHMAWATI",
        badgeColor: "from-amber-600 to-amber-800"
      },
      {
        bankName: "Bank Syariah Indonesia (BSI)",
        accountNumber: "7123456789",
        accountName: "FAIZAL ANWAR",
        badgeColor: "from-emerald-600 to-emerald-800"
      }
    ],
    qrisUrl: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=00020101021126580016ID.CO.GOPAY.WWW01189360000000000000000208123456780303UME51440014ID.CO.QRIS.WWW0215ID10200000000000303UME5204581253033605802ID5912WEDDING+FAIZAL6007JAKARTA61051219062070703A016304E67E",
    giftAddress: {
      recipient: "Faizal Anwar & Anisa",
      phone: "+62 812-3456-7890",
      address: "Jl. Melati Raya No. 25, RT 03 / RW 05, Cilandak, Jakarta Selatan 12430",
      note: "Konfirmasi pengiriman kado via WhatsApp mempelai"
    }
  },
  audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_c976f92c19.mp3?filename=romantic-wedding-piano-112191.mp3"
};

