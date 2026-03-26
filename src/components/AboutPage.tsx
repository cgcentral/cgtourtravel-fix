import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Star, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function AboutPage() {
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
          to="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#dfa828] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">Tentang Kami</h1>
            <h2 className="text-2xl font-semibold text-[#dfa828] mb-6">CG Tour & Travel</h2>
            <p className="text-xl text-gray-600 italic font-medium">
              "Menjelajah Dunia dengan Profesionalitas, Pulang dengan Cerita Hangat."
            </p>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p>
              Lahir di jantung Jakarta Selatan pada tahun 2025, CG Tour & Travel hadir bukan sekadar sebagai agen perjalanan, melainkan sebagai mitra perjalanan yang memahami setiap jengkal kebutuhan Anda. Kami percaya bahwa setiap perjalanan adalah investasi kebahagiaan, dan kami di sini untuk memastikan investasi tersebut memberikan hasil yang tak ternilai.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-6 mt-12">Mengapa Memilih Kami?</h3>
              <p className="mb-6">
                Dunia travel terus berkembang, begitu juga dengan standar pelayanan kami. CG Tour & Travel dibangun di atas dua pilar utama yang tidak bisa ditawar:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#dfa828]/10 p-3 rounded-xl shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#dfa828]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E293B] mb-2">Legitimasi & Standar Tertinggi</h4>
                    <p>Kami adalah agen perjalanan resmi dengan Akreditasi A. Ini adalah bukti komitmen kami terhadap regulasi, keamanan, dan kualitas manajemen perjalanan yang mumpuni.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#dfa828]/10 p-3 rounded-xl shrink-0">
                    <Star className="w-6 h-6 text-[#dfa828]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E293B] mb-2">Profesionalitas Tanpa Batas</h4>
                    <p>Dari pemilihan rute hingga akomodasi, setiap detail dikelola oleh tim ahli yang berdedikasi untuk memberikan kesempurnaan di setiap aspek perjalanan Anda.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#dfa828]/10 p-3 rounded-xl shrink-0">
                    <HeartHandshake className="w-6 h-6 text-[#dfa828]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E293B] mb-2">Keramahan yang Berkesan</h4>
                    <p>Bagi kami, Anda bukan sekadar klien. Pelayanan kami dibalut dengan keramahan khas Indonesia yang hangat, membuat Anda merasa nyaman dan aman layaknya bepergian dengan sahabat lama.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 my-10 text-center">
              <p className="text-lg font-medium text-[#1E293B] italic">
                "Di CG Tour & Travel, misi kami sederhana: Kami bekerja dengan presisi agar Anda bisa berlibur dengan hati yang tenang."
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Filosofi Pelayanan Kami</h3>
              <p className="mb-4">
                Kami memahami bahwa kenyamanan dimulai sejak interaksi pertama. Berbasis di Jakarta Selatan, tim kami siap menyambut Anda dengan senyuman dan solusi perjalanan yang dipersonalisasi. Tidak ada permintaan yang terlalu kecil, dan tidak ada destinasi yang terlalu jauh untuk kita jelajahi bersama.
              </p>
              <p>
                Siap merencanakan petualangan Anda berikutnya? Mari bicara! Kunjungi kantor kami di Jakarta Selatan atau hubungi konsultan travel kami untuk mulai merancang perjalanan impian Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
