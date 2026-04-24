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
            <h2 className="text-2xl font-semibold text-[#dfa828] mb-2">CG Tour & Travel</h2>
            <h3 className="text-xl font-bold text-[#1E293B] uppercase tracking-wider mb-8">Baitullah Tanpa Worries</h3>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p className="font-semibold text-gray-800">
              CG Tour & Travel lahir dari sebuah momen yang mengubah segalanya.
            </p>
            
            <p>
              Ketika Mister Catur untuk pertama kalinya menginjakkan kaki di Tanah Suci bersama kedua orang tua dan keluarganya, ada satu tekad yang terpatri di hati: <span className="italic font-medium">"Ya Allah, gunakan diri ini untuk menjadi wasilah agar lebih banyak orang bisa sampai ke rumah-Mu."</span> Azzam itu bukan sekadar doa yang berlalu — melainkan awal dari sebuah perjalanan panjang yang kemudian melahirkan CG Tour & Travel.
            </p>

            <p>
              Langkah pertama kami bukan dimulai dari bisnis. CG Tour & Travel bergerak dari amal soleh — memberangkatkan guru ngaji, santri penghafal Al-Qur'an, relawan dakwah, relawan sosial, dan marbot masjid ke Baitullah. Dari pengalaman itulah kami menyaksikan sendiri bagaimana air mata haru mengalir saat mereka yang selama ini mengabdi untuk ummat akhirnya bisa berdiri di hadapan Ka'bah. Momen-momen itu yang membentuk DNA kami: bahwa setiap orang berhak merasakan kedamaian di rumah Allah, dan kami ingin menjadi jembatan untuk mewujudkannya melalui muamalah yang baik dan amanah.
            </p>

            <p>
              Hari ini, CG Tour & Travel hadir sebagai mitra perjalanan umroh dan wisata Anda — berbasis di Jakarta Selatan, berizin resmi sebagai Travel Amanah, dan bergerak dengan satu value yang tidak pernah berubah sejak hari pertama: <span className="text-[#dfa828] font-bold">Baitullah Tanpa Worries</span>.
            </p>

            <p>
              Artinya sederhana — kami yang urus segalanya. Dari persiapan dokumen, visa, akomodasi, transportasi, bimbingan ibadah yang mendalam, hingga kepulangan dengan selamat. Tim kami hadir secara personal dan responsif di setiap tahap perjalanan, karena bagi kami setiap jamaah bukan klien, melainkan saudara yang sedang kami antarkan pulang ke rumah Allah. Anda dan keluarga cukup fokus pada satu hal saja: beribadah dengan khusyuk, berdoa dengan tenang, dan pulang membawa ketenangan hati.
            </p>

            <p>
              Kami mungkin bukan travel terbesar. Tapi kami berkomitmen menjadi yang paling amanah — karena CG Tour & Travel tidak lahir dari ambisi pasar, melainkan dari azzam seorang hamba di depan Baitullah.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-6 mt-12 text-center">Mengapa Memilih Kami?</h3>
              <p className="mb-6 text-center">
                Dunia travel terus berkembang, begitu juga dengan standar pelayanan kami. Kami membangun CG Tour & Travel di atas tiga pilar utama:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#dfa828]/10 p-3 rounded-xl shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#dfa828]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E293B] mb-2">Travel Amanah & Terpercaya</h4>
                    <p>Kami adalah Agen Tour & Travel resmi yang amanah. Ini adalah bukti komitmen kami dalam menjaga setiap kepercayaan jamaah dengan bimbingan ibadah yang khusyuk dan kepastian keberangkatan.</p>
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

            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4 mt-12">Filosofi Pelayanan Kami</h3>
              <p className="mb-4">
                Filosofi kami tertuang dalam tagline <span className="text-[#dfa828] font-bold italic">"Baitullah Tanpa Worries"</span>. Kami memahami bahwa kenyamanan dimulai sejak interaksi pertama. Berbasis di Jakarta Selatan, tim kami siap menyambut Anda dengan senyuman dan solusi perjalanan yang dipersonalisasi.
              </p>
              <p>
                Tidak ada permintaan yang terlalu kecil, dan tidak ada destinasi yang terlalu jauh untuk kita jelajahi bersama. Kami hadir untuk memastikan setiap langkah Anda menuju rumah Allah diliputi ketenangan, karena bagi kami, melayani Anda adalah bagian dari amanah yang kami emban dengan penuh rasa syukur.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-[#dfa828]/20 my-12 text-center">
              <p className="text-xl font-bold text-[#1E293B] mb-4 text-balance">
                Berawal dari amal, bertumbuh dengan amanah, bergerak untuk ummat.
              </p>
              <p className="text-2xl font-black text-[#dfa828]">
                CG Tour & Travel — Baitullah Tanpa Worries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
