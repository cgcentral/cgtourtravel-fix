import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppFAB() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage based on viewport height (home section)
      const scrolled = (window.scrollY / window.innerHeight) * 100;
      
      // Show if scrolled more than 70% of the home section
      setIsVisible(scrolled > 70);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          href="https://wa.me/628132104826?text=Halo%20CG%20Tour%20Travel,%20saya%20ingin%20bertanya%20tentang%20paket%20umroh."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1EBE5D] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Tanya Paket Umroh
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
