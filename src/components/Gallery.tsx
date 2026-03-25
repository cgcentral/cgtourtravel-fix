import { Instagram } from 'lucide-react';

const galleryImages = [
  'https://picsum.photos/seed/umroh-1/600/600',
  'https://picsum.photos/seed/umroh-2/600/600',
  'https://picsum.photos/seed/umroh-3/600/600',
  'https://picsum.photos/seed/umroh-4/600/600',
  'https://picsum.photos/seed/umroh-5/600/600',
  'https://picsum.photos/seed/umroh-6/600/600',
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Dokumentasi Keberangkatan Terkini</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Momen-momen indah dan penuh berkah jamaah CG Tour & Travel saat menjalankan ibadah di Tanah Suci.
          </p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C69C2D] font-semibold hover:text-[#A88222] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Ikuti kami di Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-2xl group relative cursor-pointer">
              <img 
                src={src} 
                alt={`Dokumentasi Umroh ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
