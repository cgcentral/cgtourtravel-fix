import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function SimulasiTabunganPage() {
  const [targetDana, setTargetDana] = useState<number>(30000000);
  const [danaAwal, setDanaAwal] = useState<number>(5000000);
  const [durasiBulan, setDurasiBulan] = useState<number>(12);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(angka);
  };

  const sisaDana = Math.max(0, targetDana - danaAwal);
  const setoranPerBulan = durasiBulan > 0 ? sisaDana / durasiBulan : 0;

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
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">Simulasi Tabungan Umroh</h1>
            <h2 className="text-2xl font-semibold text-[#C69C2D] mb-6">Rencanakan Keberangkatan Anda</h2>
            <p className="text-xl text-gray-600 italic font-medium">
              "Hitung estimasi tabungan Anda untuk merencanakan keberangkatan dengan lebih matang."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Input */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#1E293B] mb-2">Target Harga Paket Umroh</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">Rp</span>
                  <input 
                    type="number" 
                    value={targetDana}
                    onChange={(e) => setTargetDana(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#C69C2D] focus:border-transparent outline-none transition-all font-medium text-[#1E293B]" 
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Estimasi harga paket yang ingin Anda ikuti.</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1E293B] mb-2">Setoran Awal (DP)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">Rp</span>
                  <input 
                    type="number" 
                    value={danaAwal}
                    onChange={(e) => setDanaAwal(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#C69C2D] focus:border-transparent outline-none transition-all font-medium text-[#1E293B]" 
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Dana awal yang Anda miliki saat ini untuk membuka tabungan.</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1E293B] mb-4">Target Waktu Keberangkatan</label>
                <div className="grid grid-cols-2 gap-3">
                  {[3, 4, 6, 12].map((bulan) => (
                    <button
                      key={bulan}
                      onClick={() => setDurasiBulan(bulan)}
                      className={`py-3 px-4 rounded-xl font-bold transition-all border-2 ${
                        durasiBulan === bulan 
                          ? 'bg-[#C69C2D] border-[#C69C2D] text-white shadow-md scale-[1.02]' 
                          : 'bg-white border-gray-100 text-gray-600 hover:border-[#C69C2D]/30'
                      }`}
                    >
                      {bulan} Bulan
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">Pilih jangka waktu menabung yang Anda inginkan.</p>
              </div>
            </div>

            {/* Hasil Simulasi */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Calculator className="w-32 h-32" />
              </div>
              
              <h3 className="text-xl font-bold text-[#1E293B] mb-6 relative z-10">Hasil Estimasi Tabungan</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="text-gray-600">Total Kekurangan Dana</span>
                  <span className="font-bold text-[#1E293B]">{formatRupiah(sisaDana)}</span>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <span className="block text-gray-600 text-sm mb-2">Estimasi Setoran Per Bulan</span>
                  <span className="block text-3xl font-bold text-[#C69C2D]">{formatRupiah(setoranPerBulan)}</span>
                  <span className="block text-xs text-gray-500 mt-2">*Selama {durasiBulan} bulan</span>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <a 
                  href={`https://wa.me/6281234567890?text=Halo%20CG%20Tour%20Travel,%20saya%20tertarik%20dengan%20program%20Tabungan%20Umroh.%20Target%20paket%20${formatRupiah(targetDana)},%20DP%20${formatRupiah(danaAwal)},%20rencana%20menabung%20${durasiBulan}%20bulan.%20Mohon%20infonya.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-md"
                >
                  Konsultasi via WhatsApp
                </a>
                <p className="text-xs text-center text-gray-500 mt-3">
                  *Simulasi ini hanya estimasi kasar. Hubungi kami untuk detail program yang lebih akurat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
