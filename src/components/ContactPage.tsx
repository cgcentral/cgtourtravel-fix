import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-white pt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#dfa828] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">Hubungi Kami</h1>
          <p className="text-xl text-[#dfa828] italic font-medium mb-6">
            "Satu Langkah Lebih Dekat Menuju Baitullah. Kami Siap Mendengar."
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Punya pertanyaan tentang paket Umroh, rincian tabungan, atau sekadar ingin berkonsultasi mengenai rencana perjalanan Anda? Tim profesional CG Tour & Travel hadir dengan keramahan penuh untuk membantu Anda menemukan solusi terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Saluran Komunikasi Cepat (Fast Response)</h2>
              <p className="text-gray-600 mb-6">Pilih cara yang paling nyaman bagi Anda untuk terhubung dengan kami:</p>
              
              <div className="space-y-6">
                <a href="https://wa.me/628132104826" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="bg-[#25D366]/10 p-3 rounded-xl shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E293B] group-hover:text-[#25D366] transition-colors">WhatsApp Chat</h4>
                    <p className="text-gray-600 text-sm">Respons cepat untuk tanya jawab paket & pendaftaran</p>
                  </div>
                </a>

                <a href="tel:02100000000" className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="bg-[#dfa828]/10 p-3 rounded-xl shrink-0">
                    <Phone className="w-6 h-6 text-[#dfa828]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E293B] group-hover:text-[#dfa828] transition-colors">Telepon Kantor</h4>
                    <p className="text-gray-600 text-sm">(021) XXXX-XXXX (Layanan suara untuk konsultasi mendalam)</p>
                  </div>
                </a>

                <a href="mailto:sales@cgtourtravel.com" className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="bg-[#1E293B]/10 p-3 rounded-xl shrink-0">
                    <Mail className="w-6 h-6 text-[#1E293B]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1E293B] transition-colors">Email</h4>
                    <p className="text-gray-600 text-sm">sales@cgtourtravel.com (Untuk kerja sama, grup korporasi, atau pengiriman dokumen)</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Kunjungi Kantor Kami (Jakarta Selatan)</h2>
              <p className="text-gray-600 mb-6">
                Ingin berkonsultasi langsung sambil menikmati secangkir kopi? Pintu kami selalu terbuka untuk Anda. Nikmati suasana kantor yang nyaman dan representatif di jantung Jakarta Selatan.
              </p>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#dfa828] shrink-0 mt-1" />
                  <p className="text-gray-600">
                    <strong>Alamat Kantor Pusat:</strong><br />
                    Jl. Ciputat Raya No.1b, RT.1/RW.8, Pd. Pinang, Kec. Kebayoran Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-bold text-[#1E293B] mb-2">Jam Operasional:</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>Senin - Jumat: 08.00 - 17.00 WIB</li>
                    <li>Sabtu: 09.00 - 14.00 WIB</li>
                    <li>Minggu & Hari Libur: (Hanya melalui Janji Temu)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Map */}
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Formulir Konsultasi Online</h2>
              <p className="text-gray-600 mb-8 text-sm">
                Malas mengetik di WhatsApp? Isi formulir singkat di bawah ini, dan konsultan travel kami akan menghubungi Anda dalam waktu kurang dari 24 jam.
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dfa828] focus:border-transparent outline-none transition-all" placeholder="Masukkan nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dfa828] focus:border-transparent outline-none transition-all" placeholder="Contoh: 08132104826" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pilih Layanan</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dfa828] focus:border-transparent outline-none transition-all text-gray-600">
                    <option value="">-- Pilih Layanan --</option>
                    <option value="Paket Umroh">Paket Umroh</option>
                    <option value="Tabungan Umroh">Tabungan Umroh</option>
                    <option value="Wisata Halal">Wisata Halal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan/Pertanyaan</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#dfa828] focus:border-transparent outline-none transition-all resize-none" placeholder="Tuliskan pertanyaan Anda di sini..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#1E293B] hover:bg-[#dfa828] text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Kirim Pertanyaan Saya
                </button>
              </form>
            </div>

            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.088365110515!2d106.7729353147693!3d-6.252085995474665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a073f15b3b%3A0x8e87f2e1b1a7b1c1!2sJl.%20Ciputat%20Raya%20No.1b%2C%20RT.1%2FRW.8%2C%20Pd.%20Pinang%2C%20Kec.%20Kebayoran%20Lama%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012310!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-[#1E293B] italic">
            "Kepuasan Anda dimulai dari tegur sapa pertama kami. Jangan ragu, setiap niat baik berhak mendapatkan jawaban terbaik."
          </p>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
