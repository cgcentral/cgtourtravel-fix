import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Bapak Ahmad & Ibu Siti",
    date: "2 Bulan yang lalu",
    text: "Alhamdulillah perjalanan umroh bersama CG Tour sangat berkesan. Muthawif sangat sabar membimbing kami yang sudah sepuh. Hotel dekat dengan masjid, makanan juga cocok di lidah.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Ahmad+Siti&background=dfa828&color=fff"
  },
  {
    name: "Keluarga Bapak Budi",
    date: "5 Bulan yang lalu",
    text: "Pelayanan dari awal pendaftaran sampai pulang ke tanah air sangat memuaskan. Tour leader komunikatif dan informatif. Fasilitas sesuai dengan yang dijanjikan di awal.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Keluarga+Budi&background=1E293B&color=fff"
  },
  {
    name: "Ibu Nisa",
    date: "1 Tahun yang lalu",
    text: "Sangat direkomendasikan untuk yang baru pertama kali umroh. Bimbingan manasiknya jelas, dan selama di sana kita benar-benar diurus dengan baik. Terima kasih CG Tour.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Ibu+Nisa&background=dfa828&color=fff"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">Apa Kata Jamaah Kami?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kepercayaan dan kepuasan jamaah adalah prioritas utama kami. Berikut adalah pengalaman mereka bersama CG Tour & Travel.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-xl font-bold text-[#1E293B]">4.9</span>
            <div className="flex text-[#dfa828]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-gray-500 text-sm">dari 500+ ulasan Google Maps</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-[#1E293B]">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex text-[#dfa828] mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed italic flex-grow">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
