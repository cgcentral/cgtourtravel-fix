import { ReactNode, useState, useEffect } from 'react';
import { Clock, Calendar, Plane, Building2, Star, Gift, Users, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { trackPurchaseEvent } from '../lib/analytics';

interface PackageProps {
  title: ReactNode;
  subtitle?: string;
  price: string;
  description?: string;
  duration: string;
  schedule: string;
  flight: string;
  mekkahHotel: string;
  madinahHotel: string;
  hotelClass: number;
  freebies: string;
  seatsLeft?: number;
  whatsappLink: string;
  images?: string[];
  slug?: string;
  key?: number | string;
}

export default function PackageCard({
  title,
  subtitle = "Harga Mulai Dari",
  price,
  description,
  duration,
  schedule,
  flight,
  mekkahHotel,
  madinahHotel,
  hotelClass,
  freebies,
  seatsLeft,
  whatsappLink,
  images = [],
  slug
}: PackageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentImageIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  const variants = {
    enter: {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(10px)'
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)'
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.9,
      filter: 'blur(10px)'
    }
  };

  return (
    <div className="bg-white rounded-3xl flex flex-col h-full border border-gray-200 hover:border-[#dfa828]/50 transition-all duration-300 relative overflow-hidden group">
      {/* Image Slideshow */}
      <div className="relative aspect-[3/4] overflow-hidden bg-white group/slider">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex] || "https://picsum.photos/seed/umroh/800/600"}
            alt="Package Image"
            className="absolute inset-0 w-full h-full object-contain"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Progress Bar */}
        {images.length > 1 && (
          <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-2">
            {images.map((_, idx) => (
              <div key={idx} className="h-1 flex-1 bg-black/10 rounded-full overflow-hidden">
                {idx === currentImageIndex && (
                  <motion.div 
                    className="h-full bg-[#dfa828]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
                {idx < currentImageIndex && <div className="h-full w-full bg-[#dfa828]/50" />}
              </div>
            ))}
          </div>
        )}
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => paginate(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Navigation Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentImageIndex ? 1 : -1);
                  setCurrentImageIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex ? 'bg-[#dfa828] w-4' : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}

        {/* Seats Left Badge */}
        {seatsLeft !== undefined && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-10">
            <Users className="w-3 h-3" />
            Sisa {seatsLeft} Kursi
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#1E293B] mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-1">{subtitle}</p>
          <p className="text-3xl font-bold text-[#dfa828] mb-3">{price}</p>
          {description && <p className="text-sm text-gray-600 line-clamp-2">{description}</p>}
        </div>

        {/* Features List */}
        <div className="flex-grow space-y-3 mb-8">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#dfa828] shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">Durasi: {duration}</span>
          </div>
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-[#dfa828] shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">Jadwal: {schedule}</span>
          </div>
          <div className="flex items-start gap-3">
            <Plane className="w-5 h-5 text-[#dfa828] shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">{flight}</span>
          </div>
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-[#dfa828] shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm">Hotel: {mekkahHotel}</span>
          </div>
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-[#dfa828] shrink-0 mt-0.5" />
            <div className="flex items-center gap-1 text-sm text-gray-700">
              Kelas: 
              <div className="flex text-[#dfa828] ml-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < hotelClass ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          {slug && (
            <Link
              to={`/paket/${slug}`}
              className="bg-white border-2 border-[#dfa828] text-[#dfa828] hover:bg-[#dfa828] hover:text-white font-bold py-3 px-4 rounded-full flex items-center justify-center gap-1 transition-all duration-300 text-sm"
            >
              Detail <ChevronRight className="w-4 h-4" />
            </Link>
          )}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackPurchaseEvent(`WhatsApp Card: ${title}`, price)}
            className={`bg-[#dfa828] hover:bg-[#A88222] text-white font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 text-sm ${!slug ? 'col-span-2' : ''}`}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Tanya
          </a>
        </div>
      </div>
    </div>
  );
}
