import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, MapPin, Clock, Plane, Building2, Star, CheckCircle2, Phone } from 'lucide-react';
import Footer from './Footer';

const packageData = {
  saffa: {
    title: "Paket Saffa",
    price: "Rp 29 Jutaan",
    hotelClass: 4,
    description: "Paket Umroh Saffa dirancang untuk jamaah yang mengutamakan nilai terbaik tanpa mengurangi kualitas ibadah. Dengan hotel bintang 4 yang memiliki akses mudah ke Masjidil Haram dan Masjid Nabawi, Anda dapat beribadah dengan lebih khusyuk dan nyaman.",
    dates: [
      "13 Juli 2026",
      "21 Juli 2026",
      "6 Augustus 2026",
      "20 Augustus 2026",
      "8 September 2026",
      "12 September 2026",
      "14 September 2026",
      "28 September 2026"
    ],
    details: {
      "13 Juli 2026": {
        images: [
          "http://cgtourtravel.com/wp-content/uploads/2026/03/Paket-Umrah-2.png",
          "http://cgtourtravel.com/wp-content/uploads/2026/03/Paket-Umrah-4.png"
        ],
        description: "Keberangkatan 13 Juli 2026: Nikmati perjalanan ibadah yang terorganisir dengan baik. Paket ini mencakup bimbingan manasik intensif, penerbangan langsung, dan akomodasi hotel bintang 4 yang nyaman. Tim kami akan mendampingi Anda di setiap langkah untuk memastikan pengalaman 'Baitullah Tanpa Worries'."
      }
    }
  },
  marwah: {
    title: "Paket Marwah",
    price: "Rp 32 Jutaan",
    hotelClass: 5,
    description: "Paket Umroh Marwah adalah pilihan bagi Anda yang menginginkan fasilitas premium dan pelayanan eksklusif. Menghadirkan hotel bintang 5 di pelataran Masjidil Haram, paket ini memberikan kemudahan akses dan kenyamanan maksimal selama perjalanan suci Anda.",
    dates: [
      "13 Juli 2026",
      "21 Juli 2026",
      "6 Augustus 2026",
      "20 Augustus 2026",
      "8 September 2026",
      "14 September 2026",
      "28 September 2026"
    ],
    details: {
      "13 Juli 2026": {
        images: [
          "http://cgtourtravel.com/wp-content/uploads/2026/03/Paket-Umrah-3.png",
          "http://cgtourtravel.com/wp-content/uploads/2026/03/Paket-Umrah-4.png"
        ],
        description: "Keberangkatan 13 Juli 2026: Rasakan kemewahan beribadah dengan Paket Marwah. Fasilitas hotel bintang 5 terbaik, layanan VIP, dan pendampingan mutawwif yang sangat berpengalaman. Fokuslah sepenuhnya pada ibadah Anda, sementara kami menangani semua detail logistik dengan standar tertinggi."
      }
    }
  }
};

export default function PackageDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const currentPackage = packageData[slug as keyof typeof packageData];
  const [selectedDate, setSelectedDate] = useState(currentPackage?.dates[0] || "");

  useEffect(() => {
    if (currentPackage) {
      setSelectedDate(currentPackage.dates[0]);
    }
  }, [slug, currentPackage]);

  if (!currentPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Paket tidak ditemukan</h1>
          <Link to="/paket" className="text-[#dfa828] hover:underline">Kembali ke daftar paket</Link>
        </div>
      </div>
    );
  }

  const dateDetail = currentPackage.details[selectedDate as keyof typeof currentPackage.details];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Link 
          to="/paket" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#dfa828] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Daftar Paket
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Dates Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-28">
              <h2 className="text-xl font-bold text-[#1E293B] mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#dfa828]" />
                Pilih Jadwal Keberangkatan
              </h2>
              <div className="space-y-3">
                {currentPackage.dates.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all border-2 ${
                      selectedDate === date
                        ? 'bg-[#dfa828]/10 border-[#dfa828] text-[#dfa828]'
                        : 'bg-white border-gray-50 text-gray-600 hover:border-gray-200'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-2">{currentPackage.title}</h1>
                    <div className="flex items-center gap-1 text-[#dfa828]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < currentPackage.hotelClass ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="ml-2 text-gray-500 text-sm font-medium">Hotel Bintang {currentPackage.hotelClass}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Harga Mulai Dari</p>
                    <p className="text-4xl font-bold text-[#dfa828]">{currentPackage.price}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-12">
                  {currentPackage.description}
                </p>

                <div className="border-t border-gray-100 pt-12">
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-6">Detail Keberangkatan: {selectedDate}</h3>
                  
                  <AnimatePresence mode="wait">
                    {dateDetail ? (
                      <motion.div
                        key={selectedDate}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-8"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {dateDetail.images.map((img, idx) => (
                            <img 
                              key={idx} 
                              src={img} 
                              alt={`Detail ${idx}`} 
                              className="rounded-2xl w-full h-auto shadow-sm border border-gray-100"
                              referrerPolicy="no-referrer"
                            />
                          ))}
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                          <p className="text-gray-700 leading-relaxed italic">
                            {dateDetail.description}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex items-start gap-4">
                            <div className="bg-[#dfa828]/10 p-3 rounded-xl shrink-0">
                              <Plane className="w-6 h-6 text-[#dfa828]" />
                            </div>
                            <div>
                              <h4 className="font-bold text-[#1E293B]">Penerbangan</h4>
                              <p className="text-sm text-gray-600">Direct Flight (Tanpa Transit)</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-[#dfa828]/10 p-3 rounded-xl shrink-0">
                              <Building2 className="w-6 h-6 text-[#dfa828]" />
                            </div>
                            <div>
                              <h4 className="font-bold text-[#1E293B]">Akomodasi</h4>
                              <p className="text-sm text-gray-600">Hotel Pilihan Dekat Masjid</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200"
                      >
                        <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">Detail untuk tanggal ini akan segera diperbarui.</p>
                        <p className="text-sm text-gray-400 mt-2">Silakan hubungi admin untuk informasi lebih lanjut.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20CG%20Tour%20Travel,%20saya%20ingin%20bertanya%20tentang%20${currentPackage.title}%20keberangkatan%20${selectedDate}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#dfa828] hover:bg-[#A88222] text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Daftar Sekarang
                  </a>
                  <Link
                    to="/contact"
                    className="flex-1 bg-white border-2 border-[#1E293B] text-[#1E293B] hover:bg-[#1E293B] hover:text-white font-bold py-4 px-8 rounded-full flex items-center justify-center transition-all"
                  >
                    Konsultasi Gratis
                  </Link>
                </div>
              </div>
            </div>

            {/* Included Section */}
            <div className="bg-[#1E293B] p-8 md:p-12 rounded-3xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center">Fasilitas Termasuk (All-In)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Tiket Pesawat PP",
                  "Visa Umroh",
                  "Hotel Sesuai Paket",
                  "Makan 3x Sehari",
                  "Transportasi Bus AC",
                  "Mutawwif Berpengalaman",
                  "Air Zam-zam 5L",
                  "Perlengkapan Umroh Premium"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#dfa828]" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
