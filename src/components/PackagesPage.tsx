import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Star, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PackageList from './PackageList';
import Footer from './Footer';

export default function PackagesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-white pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C69C2D] transition-colors group mb-8"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>

        {/* Intro Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">Umroh: Baitullah Tanpa Worries</h1>
            <h2 className="text-2xl font-semibold text-[#C69C2D] mb-6">Layanan Umroh: Melangkah ke Baitullah dengan Tenang</h2>
            <p className="text-xl text-gray-600 italic font-medium max-w-3xl mx-auto">
              "Baitullah Tanpa Worries — Fokus Beribadah, Biar Kami yang Mengurus Sisanya."
            </p>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed max-w-4xl mx-auto">
            <p className="text-lg">
              Impian setiap Muslim adalah berdiri di depan Ka'bah dengan hati yang khusyuk. Namun, kami paham bahwa kekhawatiran akan persiapan teknis seringkali membayangi niat mulia tersebut. Di CG Tour & Travel, kami mengubah kekhawatiran Anda menjadi ketenangan.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-6 mt-12">Mengapa Ibadah Umroh Bersama Kami Lebih Tenang?</h3>
              <p className="mb-6">
                Sebagai travel Umroh & Haji resmi yang berbasis di Jakarta Selatan, kami memastikan setiap jamaah mendapatkan haknya secara penuh melalui sistem yang transparan dan profesional.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="bg-[#C69C2D]/10 p-3 rounded-xl shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#C69C2D]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E293B] mb-1">Akreditasi A</h4>
                    <p className="text-sm">Penilaian tertinggi dari Kemenag, menjamin standar operasional yang aman dan legal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="bg-[#C69C2D]/10 p-3 rounded-xl shrink-0">
                    <Star className="w-6 h-6 text-[#C69C2D]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E293B] mb-1">Jaminan 100% Berangkat</h4>
                    <p className="text-sm">Kepastian jadwal dan tiket sejak awal pendaftaran. Tanpa drama, tanpa tunda.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="bg-[#C69C2D]/10 p-3 rounded-xl shrink-0">
                    <Users className="w-6 h-6 text-[#C69C2D]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E293B] mb-1">Pembimbing Berpengalaman</h4>
                    <p className="text-sm">Mutawwif yang kompeten dan sabar, siap membimbing ibadah sesuai sunnah.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="bg-[#C69C2D]/10 p-3 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6 text-[#C69C2D]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E293B] mb-1">Akomodasi Pilihan</h4>
                    <p className="text-sm">Hotel yang dekat dengan Masjidil Haram dan Masjid Nabawi demi kenyamanan Anda.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-6 mt-12">Komitmen "Baitullah Tanpa Worries"</h3>
              <p className="mb-6">
                Kami tidak hanya menjual tiket dan hotel. Kami menyediakan ekosistem ibadah yang mendukung kekhusyukan Anda:
              </p>
              <ul className="space-y-4 list-disc pl-5">
                <li><strong className="text-[#1E293B]">Administrasi Anti-Ribet:</strong> Mulai dari pengurusan paspor, visa, hingga suntik vaksin, tim kami siap mendampingi.</li>
                <li><strong className="text-[#1E293B]">Transparansi Harga:</strong> Tidak ada biaya tersembunyi. Apa yang Anda bayar adalah apa yang Anda dapatkan.</li>
                <li><strong className="text-[#1E293B]">Perhatian Personal:</strong> Sebagai biro yang mengutamakan keramahan, setiap jamaah akan mendapatkan perhatian khusus, terutama bagi lansia dan jamaah dengan kebutuhan tertentu.</li>
              </ul>
            </div>

            <div className="bg-[#1E293B] p-8 rounded-2xl my-10 text-center shadow-lg">
              <p className="text-xl font-medium text-white italic">
                "Ibadah Umroh adalah perjalanan ruhani. Tugas Anda hanya satu: Menyiapkan hati. Biarkan kami yang memastikan semua urusan duniawi berjalan sempurna."
              </p>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Siap Menjemput Panggilan-Nya?</h3>
              <p className="text-lg">
                Jangan biarkan keraguan menunda niat suci Anda. Bergabunglah dengan ratusan jamaah yang telah mempercayakan perjalanan spiritualnya kepada kami.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Package List Component */}
      <PackageList />

      {/* Sub Pages Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold text-center text-[#1E293B] mb-12">Informasi & Layanan Tambahan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/paket/tabungan" className="block p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#C69C2D] transition-all group">
            <h4 className="text-2xl font-bold text-[#1E293B] group-hover:text-[#C69C2D] transition-colors mb-2">Tabungan Umroh</h4>
            <p className="text-gray-600">Langkah Kecil Menuju Baitullah. Niatkan Sekarang, Berangkat Kemudian.</p>
          </Link>
          <Link to="/paket/testimoni" className="block p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#C69C2D] transition-all group">
            <h4 className="text-2xl font-bold text-[#1E293B] group-hover:text-[#C69C2D] transition-colors mb-2">Testimoni & Galeri</h4>
            <p className="text-gray-600">Jejak Syukur di Tanah Suci. Karena Setiap Perjalanan Adalah Cerita Tentang Hati.</p>
          </Link>
          <Link to="/paket/persiapan" className="block p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#C69C2D] transition-all group">
            <h4 className="text-2xl font-bold text-[#1E293B] group-hover:text-[#C69C2D] transition-colors mb-2">Persiapan Umroh</h4>
            <p className="text-gray-600">Matangkan Niat, Sempurnakan Ikhtiar. Berangkat dengan Ilmu, Beribadah dengan Khusyuk.</p>
          </Link>
          <Link to="/paket/simulasi" className="block p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#C69C2D] transition-all group">
            <h4 className="text-2xl font-bold text-[#1E293B] group-hover:text-[#C69C2D] transition-colors mb-2">Simulasi Tabungan Umroh</h4>
            <p className="text-gray-600">Hitung estimasi tabungan Anda untuk merencanakan keberangkatan dengan lebih matang.</p>
          </Link>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
