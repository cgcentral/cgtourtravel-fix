import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Blog from './Blog';
import Footer from './Footer';

export default function BlogPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-white pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0056B3] transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>
      </div>
      <Blog />
      <Footer />
    </motion.div>
  );
}
