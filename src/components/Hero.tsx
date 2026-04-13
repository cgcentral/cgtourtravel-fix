import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const images = [
  'https://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12-5.jpeg',
  'https://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12-4.jpeg',
  'https://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12-3.jpeg',
  'https://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12-2.jpeg',
  'https://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12-1.jpeg',
  'https://cgtourtravel.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-13.38.12.jpeg'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change every 6 seconds for better Ken Burns effect

    return () => clearInterval(interval);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Umroh Background"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ 
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" }
            }}
          />
        </AnimatePresence>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10 pointer-events-none"></div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-30 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={() => paginate(-1)}
          className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto group"
        >
          <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto group"
        >
          <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3 pointer-events-auto">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentIndex ? 'bg-[#dfa828] w-12' : 'bg-white/30 w-6 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto pt-10 pointer-events-auto">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          src="https://cgtourtravel.com/wp-content/uploads/2026/02/Gemini_Generated_Image_c2o455c2o455c2o4-removebg-preview.png"
          alt="CG Tour Travel Logo"
          // UPDATE: Mengubah mb-8 menjadi -mb-4 (margin negatif) untuk menarik teks ke atas mendekati logo,
          // dan sedikit mengurangi tinggi maksimal logo (lg:h-[24rem]) agar tombol tidak terdorong keluar layar.
          className="h-56 md:h-80 lg:h-[24rem] -mb-4 drop-shadow-2xl object-contain"
          referrerPolicy="no-referrer"
        />

        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          // UPDATE: Mengubah mb-4 menjadi mb-3 agar teks lebih rapat
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-xl tracking-wide relative z-10"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
        >
          Baitullah Tanpa Worries
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          // UPDATE: Mengubah mb-4 menjadi mb-3
          className="text-xl md:text-2xl font-medium text-gray-200 mb-3 drop-shadow-md tracking-wide"
        >
          Rencanakan Ibadah Anda Bersama Kami
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="text-base md:text-lg text-gray-300 drop-shadow max-w-2xl font-light"
        >
          Kenyamanan & ketenangan dalam setiap langkah menuju Baitullah
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          // UPDATE: Mengubah mt-12 menjadi mt-8 agar tombol ditarik lebih ke atas
          className="mt-8"
        >
          <Link 
            to="/paket" 
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-500 ease-in-out bg-white/10 border border-white/30 rounded-full backdrop-blur-md hover:bg-white/20 hover:border-white/50 hover:scale-105"
          >
            <span className="relative z-10 tracking-wider">Lihat Paket Keberangkatan</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}