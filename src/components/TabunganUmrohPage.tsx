import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function TabunganUmrohPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-[#F8FAFC] pt-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Link 
          to="/paket" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C69C2D] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Paket Umroh
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">Tabungan Umroh</h1>
            <h2 className="text-2xl font-semibold text-[#C69C2D] mb-6">Langkah Kecil Menuju Baitullah</h2>
            <p className="text-xl text-gray-600 italic font-medium">
              "Niatkan Sekarang, Berangkat Kemudian. Menabung Tenang, Hati Senang."
            </p>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p>
              Banyak yang bertanya, "Kapan waktu terbaik untuk mendaftar Umroh?" Jawaban kami selalu sama: Saat niat itu muncul di hati Anda.
            </p>
            <p>
              Kami memahami bahwa merencanakan biaya perjalanan ibadah membutuhkan pengelolaan finansial yang bijak. Itulah mengapa CG Tour & Travel menghadirkan fitur Tabungan Umroh—sebuah jembatan aman bagi Anda yang ingin mewujudkan impian ke Tanah Suci dengan cara yang terencana, ringan, dan berkah.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-6 mt-12">Mengapa Memulai Tabungan Umroh di CG Tour & Travel?</h3>
              <p className="mb-6">
                Kami menghilangkan semua kekhawatiran (worries) Anda dalam menyisihkan dana ibadah. Program tabungan kami dirancang dengan prinsip:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C69C2D] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1E293B]">Setoran Ringan & Fleksibel</h4>
                    <p>Anda yang menentukan besaran setoran sesuai kemampuan. Tidak ada paksaan, yang ada hanyalah konsistensi menuju niat suci.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C69C2D] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1E293B]">Dana Aman & Transparan</h4>
                    <p>Sebagai travel Akreditasi A, dana tabungan Anda dikelola dengan sistem yang aman dan tercatat secara transparan. Anda bisa memantau saldo tabungan kapan saja.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C69C2D] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1E293B]">Pengunci Harga (Price Lock)</h4>
                    <p>Salah satu keuntungan menabung di sini adalah perlindungan dari kenaikan harga paket yang fluktuatif di masa depan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#C69C2D] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1E293B]">Tanpa Bunga & Tanpa Riba</h4>
                    <p>Kami memastikan skema tabungan dijalankan sesuai prinsip syariah agar keberkahan ibadah Anda terjaga sejak rupiah pertama.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-6 mt-12">Cara Kerja Tabungan Umroh "Tanpa Worries"</h3>
              <p className="mb-6">
                Kami membuat prosesnya sesederhana mungkin, semudah memesan kopi di Jakarta Selatan:
              </p>
              <ol className="list-decimal pl-5 space-y-4">
                <li><strong className="text-[#1E293B]">Buka Akun:</strong> Daftar dan tentukan target keberangkatan Anda (misal: 1 atau 2 tahun ke depan).</li>
                <li><strong className="text-[#1E293B]">Mulai Menabung:</strong> Setor dana awal yang sangat terjangkau.</li>
                <li><strong className="text-[#1E293B]">Pantau Progres:</strong> Kami akan memberikan laporan berkala hingga saldo Anda mencukupi untuk paket yang dipilih.</li>
                <li><strong className="text-[#1E293B]">Siap Berangkat:</strong> Begitu saldo cukup, Anda tinggal memilih jadwal keberangkatan dan fokus pada persiapan batin.</li>
              </ol>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 my-10 text-center">
              <p className="text-lg font-medium text-[#1E293B] italic">
                "Jangan tunggu uang terkumpul baru berniat. Tapi berniatlah, maka Allah akan cukupkan jalannya. Tabungan Umroh adalah ikhtiar nyata Anda menjemput undangan-Nya."
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Mulai Langkah Pertama Anda Hari Ini</h3>
              <p className="mb-8">
                Jangan biarkan impian ke Baitullah hanya menjadi angan-angan. Dengan manajemen keuangan yang tepat bersama CG Tour & Travel, siapa pun bisa berangkat Umroh.
              </p>
              <Link 
                to="/paket/simulasi" 
                className="inline-block bg-[#1E293B] hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg"
              >
                Hitung Simulasi Tabungan Anda Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
