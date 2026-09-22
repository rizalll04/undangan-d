CARA MENAMBAHKAN MUSIK LATAR UNDANGAN
=====================================

1. Siapkan file musik pernikahan dalam format .mp3
   - Disarankan: ukuran < 5 MB, durasi 3-5 menit, looping-friendly

2. Letakkan file .mp3 ini di folder ini (public/audio/)
   Contoh: public/audio/wedding-song.mp3

3. Pastikan nama file sesuai dengan yang ada di:
   src/data/invitationData.ts → field "audioUrl"
   Nilai default: "/audio/wedding-song.mp3"

Sumber musik gratis (bebas hak cipta):
- https://pixabay.com/music/ (cari "wedding piano")
- https://freemusicarchive.org
- https://soundcloud.com (pastikan Creative Commons)
