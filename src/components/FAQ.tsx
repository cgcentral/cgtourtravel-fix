import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Apa saja syarat pendaftaran umroh di CG Tour & Travel?",
    answer: "Syarat pendaftaran meliputi: Paspor asli (minimal masa berlaku 8 bulan), KTP, KK, Buku Nikah (bagi suami istri), Pas Foto 4x6 (background putih), dan DP pendaftaran sesuai paket yang dipilih."
  },
  {
    question: "Apakah bisa mendaftar jika belum memiliki paspor?",
    answer: "Tentu bisa. Anda dapat mendaftar dengan membayar DP terlebih dahulu untuk mengamankan seat. Kami akan memberikan surat rekomendasi untuk pembuatan paspor di kantor imigrasi."
  },
  {
    question: "Bagaimana sistem pembayaran paket umroh?",
    answer: "Pembayaran dapat dilakukan secara bertahap. Setelah membayar DP, pelunasan dapat dicicil dan wajib lunas maksimal 1 bulan sebelum jadwal keberangkatan."
  },
  {
    question: "Apakah harga paket sudah termasuk perlengkapan umroh?",
    answer: "Ya, harga paket kami sudah termasuk perlengkapan umroh lengkap seperti koper, tas paspor, kain ihram/mukena, seragam batik, dan buku panduan doa."
  },
  {
    question: "Apakah ada pembimbing ibadah (Muthawif) selama di Tanah Suci?",
    answer: "Ya, setiap grup keberangkatan akan didampingi oleh Tour Leader dari Indonesia dan Muthawif berpengalaman yang bermukim di Saudi Arabia untuk membimbing ibadah Anda."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-gray-600">
            Temukan jawaban untuk pertanyaan umum seputar pendaftaran dan perjalanan ibadah umroh bersama kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-[#dfa828]' : 'text-[#1E293B]'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#dfa828] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
