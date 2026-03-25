import { Users, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="http://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12.jpeg" 
                alt="Jamaah Umroh CG Tour Travel" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-[#0056B3]/10 p-4 rounded-full">
                  <Users className="w-8 h-8 text-[#0056B3]" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#003366]">10.000+</p>
                  <p className="text-sm text-gray-500 font-medium">Jamaah Diberangkatkan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">Membangun Koneksi Spiritual dengan Pelayanan Sepenuh Hati</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Berdiri sejak tahun 2010, CG Tour & Travel lahir dari niat tulus untuk memfasilitasi tamu-tamu Allah menuju Baitullah. Kami memahami bahwa ibadah Umroh bukan sekadar perjalanan fisik, melainkan perjalanan spiritual yang membutuhkan ketenangan dan kekhusyukan.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Tim kami terdiri dari para profesional yang berdedikasi tinggi, mulai dari muthawif berpengalaman hingga tim operasional yang memastikan setiap detail perjalanan Anda terencana dengan sempurna.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#0056B3]/10 p-3 rounded-xl shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#0056B3]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#003366] mb-2">Amanah & Terpercaya</h4>
                  <p className="text-gray-600 text-sm">Berizin resmi Kemenag RI, menjamin keamanan dan kepastian keberangkatan setiap jamaah.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#0056B3]/10 p-3 rounded-xl shrink-0">
                  <HeartHandshake className="w-6 h-6 text-[#0056B3]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#003366] mb-2">Pelayanan Personal</h4>
                  <p className="text-gray-600 text-sm">Kami melayani setiap jamaah layaknya keluarga sendiri, memastikan kenyamanan dari pendaftaran hingga kembali ke tanah air.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
