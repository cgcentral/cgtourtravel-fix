import { motion } from 'motion/react';
import { ArrowLeft, FileText, HeartPulse, BookOpen, Heart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function PersiapanUmrohPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-white pt-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Link 
          to="/paket" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0056B3] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Paket Umroh
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">Persiapan Umroh</h1>
            <h2 className="text-2xl font-semibold text-[#0056B3] mb-6">Matangkan Niat, Sempurnakan Ikhtiar</h2>
            <p className="text-xl text-gray-600 italic font-medium">
              "Berangkat dengan Ilmu, Beribadah dengan Khusyuk."
            </p>
          </div>

          <div className="space-y-12 text-gray-600 leading-relaxed">
            <p className="text-lg text-center max-w-3xl mx-auto">
              Ibadah Umroh adalah perjalanan fisik sekaligus spiritual. Di CG Tour & Travel, kami memastikan Anda tidak melangkah sendirian. Persiapan yang matang adalah kunci utama agar Anda bisa beribadah di Baitullah tanpa worries tentang hal-hal teknis. Berikut adalah panduan persiapan komprehensif yang kami susun khusus untuk Anda:
            </p>

            <div className="space-y-8">
              {/* Persiapan 1 */}
              <div className="bg-[#E6F0FA] p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-[#003366] p-4 rounded-2xl shrink-0">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">1. Persiapan Dokumen & Administrasi</h3>
                  <p className="mb-4">Langkah awal yang legal adalah fondasi ketenangan. Sebagai travel Akreditasi A, kami akan memandu Anda melengkapi:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Paspor Asli:</strong> Berlaku minimal 6-12 bulan sebelum keberangkatan.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Dokumen Identitas:</strong> KTP, KK, and Buku Nikah (bagi suami istri).</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Vaksinasi:</strong> Memastikan status vaksinasi sesuai regulasi terbaru dari Pemerintah Arab Saudi.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Pas Foto:</strong> Ukuran khusus untuk kebutuhan visa Umroh.</span></li>
                  </ul>
                </div>
              </div>

              {/* Persiapan 2 */}
              <div className="bg-[#E6F0FA] p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-[#0056B3] p-4 rounded-2xl shrink-0">
                  <HeartPulse className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">2. Persiapan Fisik & Kesehatan</h3>
                  <p className="mb-4">Makkah dan Madinah memiliki ritme yang dinamis. Kami menyarankan Anda untuk:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Latihan Fisik Ringan:</strong> Mulailah rutin jalan santai 2-3 km setiap pagi untuk membiasakan kaki saat Tawaf dan Sa'i.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Cek Kesehatan:</strong> Konsultasikan kondisi fisik Anda pada dokter, terutama jika memiliki riwayat penyakit tertentu.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Perlengkapan Pribadi:</strong> Siapkan obat-obatan pribadi dan pakaian yang nyaman sesuai musim (panas/dingin) di Tanah Suci.</span></li>
                  </ul>
                </div>
              </div>

              {/* Persiapan 3 */}
              <div className="bg-[#E6F0FA] p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-[#003366] p-4 rounded-2xl shrink-0">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">3. Persiapan Ilmu (Manasik)</h3>
                  <p className="mb-4">Ibadah yang sempurna lahir dari pemahaman yang benar. CG Tour & Travel menyediakan:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Bimbingan Manasik Eksklusif:</strong> Sesi tatap muka di Jakarta Selatan yang dipandu oleh ustadz berkompeten.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Buku Panduan Doa:</strong> Memudahkan Anda menghafal dan memahami setiap rukun umroh.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Konsultasi Fikih:</strong> Layanan tanya jawab terbuka mengenai tata cara ibadah sesuai sunnah.</span></li>
                  </ul>
                </div>
              </div>

              {/* Persiapan 4 */}
              <div className="bg-[#E6F0FA] p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-[#0056B3] p-4 rounded-2xl shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">4. Persiapan Mental & Ruhiyah</h3>
                  <p className="mb-4">Ini adalah bagian terpenting. Kami mengajak Anda untuk:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Meluruskan Niat:</strong> Pastikan perjalanan ini murni karena Allah SWT.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Memohon Maaf:</strong> Berpamitan dengan keluarga dan kerabat untuk membersihkan hati sebelum berangkat.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#0056B3] shrink-0 mt-0.5" /> <span><strong>Memperbanyak Doa:</strong> Memohon kemudahan agar setiap langkah di Tanah Suci diberkahi.</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#003366] p-8 rounded-3xl text-center shadow-lg mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Fasilitas Perlengkapan dari CG Tour & Travel</h3>
              <p className="text-gray-300 mb-6">Daftar jadi jamaah kami, dan Anda akan langsung mendapatkan paket perlengkapan premium:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">Koper Eksklusif</span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">Kain Ihram / Mukena</span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">Seragam Batik</span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">Tas Paspor</span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">Buku Doa</span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">Air Zam-zam (Sesuai Regulasi)</span>
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Butuh Panduan Lebih Detail?</h3>
              <p className="text-lg mb-8">
                Silakan jadwalkan kunjungan ke kantor kami di Jakarta Selatan untuk berkonsultasi langsung dengan tim profesional kami.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-[#0056B3] hover:bg-[#004494] text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg"
              >
                Hubungi Kami Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
