import { ReactNode } from 'react';
import { Clock, Calendar, Plane, Building2, Star, Gift, Users } from 'lucide-react';

interface PackageProps {
  title: ReactNode;
  subtitle?: string;
  price: string;
  duration: string;
  schedule: string;
  flight: string;
  mekkahHotel: string;
  madinahHotel: string;
  hotelClass: number;
  freebies: string;
  seatsLeft?: number;
  whatsappLink: string;
}

export default function PackageCard({
  title,
  subtitle = "Harga Mulai Dari",
  price,
  duration,
  schedule,
  flight,
  mekkahHotel,
  madinahHotel,
  hotelClass,
  freebies,
  seatsLeft,
  whatsappLink
}: PackageProps) {
  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 flex flex-col h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
      {/* Seats Left Badge */}
      {seatsLeft !== undefined && (
        <div className="absolute top-4 right-4 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-red-100 shadow-sm">
          <Users className="w-3 h-3" />
          Sisa {seatsLeft} Kursi
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8 mt-4">
        <h3 className="text-2xl font-bold text-[#1E293B] mb-2 leading-tight min-h-[64px] flex flex-col items-center justify-center whitespace-pre-wrap">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-1">{subtitle}</p>
        <p className="text-4xl font-bold text-[#C69C2D]">{price}</p>
      </div>

      {/* Features List */}
      <div className="flex-grow space-y-4 mb-8">
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-[#C69C2D] shrink-0 mt-0.5" />
          <span className="text-gray-700 text-sm">Durasi: {duration}</span>
        </div>
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-[#C69C2D] shrink-0 mt-0.5" />
          <span className="text-gray-700 text-sm">Jadwal: {schedule}</span>
        </div>
        <div className="flex items-start gap-3">
          <Plane className="w-5 h-5 text-[#C69C2D] shrink-0 mt-0.5" />
          <span className="text-gray-700 text-sm">{flight}</span>
        </div>
        <div className="flex items-start gap-3">
          <Building2 className="w-5 h-5 text-[#C69C2D] shrink-0 mt-0.5" />
          <span className="text-gray-700 text-sm">Mekkah: {mekkahHotel}</span>
        </div>
        <div className="flex items-start gap-3">
          <Building2 className="w-5 h-5 text-[#C69C2D] shrink-0 mt-0.5" />
          <span className="text-gray-700 text-sm">Madinah: {madinahHotel}</span>
        </div>
        <div className="flex items-start gap-3">
          <Star className="w-5 h-5 text-[#C69C2D] shrink-0 mt-0.5" />
          <div className="flex items-center gap-1 text-sm text-gray-700">
            Kelas Hotel: 
            <div className="flex text-[#C69C2D] ml-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < hotelClass ? 'fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Gift className="w-5 h-5 text-[#C69C2D] shrink-0 mt-0.5" />
          <span className="text-gray-700 text-sm">Free: {freebies}</span>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#C69C2D] hover:bg-[#A88222] text-white font-bold py-3.5 px-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-300"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        Tanya Paket
      </a>
    </div>
  );
}
