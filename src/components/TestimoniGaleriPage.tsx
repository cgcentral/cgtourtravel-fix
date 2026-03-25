import { motion } from 'motion/react';
import { ArrowLeft, Quote, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function TestimoniGaleriPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-[#F8FAFC] pt-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Link 
          to="/paket" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C69C2D] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Paket Umroh
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">Testimoni & Galeri</h1>
            <h2 className="text-2xl font-semibold text-[#C69C2D] mb-6">Jejak Syukur di Tanah Suci</h2>
            <p className="text-xl text-gray-600 italic font-medium">
              "Karena Setiap Perjalanan Adalah Cerita Tentang Hati."
            </p>
          </div>

          <div className="space-y-12 text-gray-600 leading-relaxed">
            <p className="text-lg text-center max-w-3xl mx-auto">
              Bagi kami di CG Tour & Travel, kesuksesan bukan diukur dari jumlah tiket yang terjual, melainkan dari senyum haru jamaah saat menyentuh Ka'bah dan kenyamanan yang mereka rasakan selama di perjalanan. Inilah kepingan kenangan dan suara hati dari mereka yang telah melangkah bersama kami menuju Baitullah tanpa worries.
            </p>

            {/* Testimonials */}
            <div>
              <h3 className="text-3xl font-bold text-[#1E293B] mb-2 text-center">Apa Kata Mereka?</h3>
              <p className="text-center text-[#C69C2D] font-medium mb-10">Suara Jamaah, Kebanggaan Kami.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
                  <Quote className="w-12 h-12 text-[#C69C2D]/20 absolute top-6 left-6" />
                  <p className="relative z-10 italic text-gray-700 mb-6 pt-4">
                    "Awalnya ragu karena kantor baru 2025, tapi Akreditasi A dan lokasinya di Jaksel bikin tenang. Ternyata pelayanannya luar biasa profesional! Benar-benar ibadah tanpa kepikiran teknis hotel atau bus. Terima kasih CG Tour!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1E293B] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E293B]">Ibu Rahmawati</h4>
                      <p className="text-sm text-gray-500">Jakarta (Umroh Reguler Januari 2026)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
                  <Quote className="w-12 h-12 text-[#C69C2D]/20 absolute top-6 left-6" />
                  <p className="relative z-10 italic text-gray-700 mb-6 pt-4">
                    "Program Tabungan Umrohnya sangat membantu karyawan seperti saya. Cicilannya ringan, transparan, dan alhamdulillah tahun ini bisa berangkat tanpa beban finansial. Pelayanan mutawwifnya sangat ramah."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#C69C2D] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      A
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E293B]">Bapak Aris</h4>
                      <p className="text-sm text-gray-500">Tangerang (Program Tabungan Umroh)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="pt-12 border-t border-gray-100">
              <h3 className="text-3xl font-bold text-[#1E293B] mb-2 text-center">Galeri Keberangkatan & Kegiatan</h3>
              <p className="text-center text-[#C69C2D] font-medium mb-10">Melihat Lebih Dekat, Melangkah Lebih Mantap.</p>
              
              <p className="text-center max-w-3xl mx-auto mb-12">
                Visualisasi adalah kunci. Di galeri ini, Anda bisa melihat dedikasi tim profesional kami dalam mendampingi setiap langkah jamaah:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group relative overflow-hidden rounded-3xl shadow-sm border border-gray-100 aspect-video bg-gray-200">
                  <img src="http://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12-5.jpeg" alt="Manasik" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold text-xl mb-1">Manasik yang Nyaman</h4>
                    <p className="text-gray-200 text-sm">Persiapan ibadah di hotel berbintang Jakarta Selatan sebelum keberangkatan.</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl shadow-sm border border-gray-100 aspect-video bg-gray-200">
                  <img src="http://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12-2.jpeg" alt="Masjidil Haram" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold text-xl mb-1">Momen di Masjidil Haram</h4>
                    <p className="text-gray-200 text-sm">Kekhusyukan jamaah dalam balutan kain ihram dan doa-doa yang terpanjat.</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl shadow-sm border border-gray-100 aspect-video bg-gray-200">
                  <img src="http://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12-4.jpeg" alt="Akomodasi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold text-xl mb-1">Kenyamanan Akomodasi</h4>
                    <p className="text-gray-200 text-sm">Intip fasilitas hotel dan transportasi bus eksekutif yang kami sediakan.</p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl shadow-sm border border-gray-100 aspect-video bg-gray-200">
                  <img src="http://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12-1.jpeg" alt="Kebersamaan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold text-xl mb-1">Kebersamaan Grup</h4>
                    <p className="text-gray-200 text-sm">Keceriaan saat city tour dan ziarah ke tempat-tempat bersejarah di Madinah dan Makkah.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
