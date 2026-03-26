import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: "Barang yang Wajib Dibawa Saat Musim Dingin di Saudi",
    excerpt: "Persiapkan ibadah umroh Anda di musim dingin dengan membawa perlengkapan yang tepat agar tetap hangat dan khusyuk.",
    date: "12 Okt 2026",
    author: "Tim Edukasi CG",
    image: "https://picsum.photos/seed/winter-saudi/800/600",
    link: "#"
  },
  {
    title: "Tata Cara Pelaksanaan Umroh Sesuai Sunnah",
    excerpt: "Panduan lengkap dari miqat hingga tahallul untuk memastikan ibadah umroh Anda sah dan diterima oleh Allah SWT.",
    date: "05 Nov 2026",
    author: "Ustadz Pembimbing",
    image: "https://picsum.photos/seed/tawaf/800/600",
    link: "#"
  },
  {
    title: "Tips Menjaga Kesehatan Selama Ibadah di Tanah Suci",
    excerpt: "Cuaca yang berbeda dan aktivitas fisik yang padat membutuhkan persiapan fisik yang matang. Simak tips sehat berikut ini.",
    date: "20 Des 2026",
    author: "Dr. Kesehatan Haji",
    image: "https://picsum.photos/seed/health-umroh/800/600",
    link: "#"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Artikel & Tips Umroh</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bekali diri Anda dengan ilmu dan informasi terkini seputar ibadah umroh dan perjalanan ke Tanah Suci.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 leading-snug">
                  <a href={article.link} className="hover:text-[#dfa828] transition-colors">
                    {article.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>
                <a 
                  href={article.link} 
                  className="inline-flex items-center gap-2 text-[#dfa828] font-semibold hover:text-[#A88222] transition-colors mt-auto"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
