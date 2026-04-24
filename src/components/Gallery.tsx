import { Instagram, ExternalLink } from 'lucide-react';

const instagramReels = [
  { id: 'DSo6VriE3I6', url: 'https://www.instagram.com/reel/DSo6VriE3I6/' },
  { id: 'DXDzAPBirRE', url: 'https://www.instagram.com/reel/DXDzAPBirRE/?igsh=MXVkbTJ3a216OGZmcQ==' },
  { id: 'DXaz6nyggVR', url: 'https://www.instagram.com/reel/DXaz6nyggVR/?igsh=emFpc3BiajFicnc0' },
  { id: 'DTP7kNFE1wk', url: 'https://www.instagram.com/reel/DTP7kNFE1wk/' },
  { id: 'DSoXDQdE-yf', url: 'https://www.instagram.com/reel/DSoXDQdE-yf/' },
  { id: 'DTfKnPuk5nz', url: 'https://www.instagram.com/reel/DTfKnPuk5nz/' },
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
            href="https://www.instagram.com/cgtourtravel/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#dfa828] font-semibold hover:text-[#A88222] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Ikuti kami di Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramReels.map((reel, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className="aspect-[9/16] relative">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed`}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  scrolling="no"
                  title={`Instagram Reel ${index + 1}`}
                ></iframe>
              </div>
              <div className="p-4 mt-auto">
                <a 
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#1E293B] font-bold rounded-xl transition-colors text-sm"
                >
                  Selengkapnya <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
