import { Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12.jpeg" 
                alt="Jamaah Umroh CG Tour Travel" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-[#dfa828]/10 p-4 rounded-full">
                  <Users className="w-8 h-8 text-[#dfa828]" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1E293B]">10.000+</p>
                  <p className="text-sm text-gray-500 font-medium">Jamaah Diberangkatkan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-2 uppercase tracking-tighter">CG Tour & Travel</h2>
            <h3 className="text-2xl font-bold text-[#dfa828] mb-6">Baitullah Tanpa Worries</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Berawal dari sebuah tekad Mister Catur di depan Baitullah, CG Tour & Travel lahir bukan sekadar bisnis, melainkan sebuah amal soleh untuk menjadi wasilah bagi ummat menuju rumah Allah.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Kami berkomitmen memberikan pelayanan yang paling amanah dengan prinsip <span className="font-bold text-[#dfa828]">"Baitullah Tanpa Worries"</span>. Kami yang urus segalanya, Anda cukup fokus beribadah dengan khusyuk dan tenang.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#dfa828]/10 p-3 rounded-xl shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#dfa828]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1E293B] mb-2">Berawal dari Amal</h4>
                  <p className="text-gray-600 text-sm">Dimulai dengan memberangkatkan guru ngaji, santri, dan marbot masjid sebagai wujud syukur dan bakti.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#dfa828]/10 p-3 rounded-xl shrink-0">
                  <HeartHandshake className="w-6 h-6 text-[#dfa828]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#1E293B] mb-2">Bergerak dengan Amanah</h4>
                  <p className="text-gray-600 text-sm">Berizin resmi sebagai travel yang amanah, melayani setiap jamaah layaknya saudara dengan penuh personalitas dan respon cepat.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link to="/about" className="text-[#dfa828] font-bold hover:underline inline-flex items-center gap-2">
                Baca Cerita Lengkap Kami 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
