import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <img 
              src="http://cgtourtravel.com/wp-content/uploads/2026/02/Gemini_Generated_Image_c2o455c2o455c2o4-removebg-preview.png" 
              alt="CG Tour Travel Logo" 
              className="h-16 w-auto bg-white/10 p-2 rounded-xl"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Biro perjalanan Umroh & Haji Plus resmi dan terpercaya. Berkomitmen memberikan pelayanan terbaik untuk kenyamanan ibadah Anda di Tanah Suci.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#C69C2D] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C69C2D] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C69C2D] transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-[#C69C2D] transition-colors">Beranda</Link></li>
              <li><Link to="/paket" className="text-gray-400 hover:text-[#C69C2D] transition-colors">Paket Umroh</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#C69C2D] transition-colors">Tentang Kami</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-[#C69C2D] transition-colors">Blog & Edukasi</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-[#C69C2D] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white">Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#C69C2D] shrink-0 mt-1" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Jl. Ciputat Raya No.1b, RT.1/RW.8, Pd. Pinang, Kec. Kebayoran Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12310
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#C69C2D] shrink-0" />
                <p className="text-gray-400 text-sm">
                  +62 812 3456 7890 (WhatsApp/Telp)
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#C69C2D] shrink-0" />
                <p className="text-gray-400 text-sm">
                  hello@cgtourtravel.id
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CG Tour & Travel. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
