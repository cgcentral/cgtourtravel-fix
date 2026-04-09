import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { trackContactEvent } from '../lib/analytics';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTabunganOpen, setIsTabunganOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tabunganRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (tabunganRef.current && !tabunganRef.current.contains(event.target as Node)) {
        setIsTabunganOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Tentang Kami', href: '/about', type: 'route' },
    { name: 'Blog', href: '/blog', type: 'route' },
  ];

  const paketSubLinks = [
    { name: 'Paket Utama', href: '/paket' },
    { name: 'Paket Saffa', href: '/paket/saffa' },
    { name: 'Paket Marwah', href: '/paket/marwah' },
    { name: 'Testimoni & Galeri', href: '/paket/testimoni' },
    { name: 'Persiapan Umroh', href: '/paket/persiapan' },
  ];

  const tabunganSubLinks = [
    { name: 'Tabungan Umroh', href: '/tabungan-umroh' },
    { name: 'Simulasi Tabungan Umroh', href: '/simulasi-tabungan' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                className="h-12 w-auto" 
                src="http://cgtourtravel.com/wp-content/uploads/2026/02/Gemini_Generated_Image_c2o455c2o455c2o4-removebg-preview.png" 
                alt="CG Tour Travel Logo" 
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/about" 
              className={`text-sm font-semibold transition-colors ${isScrolled || location.pathname !== '/' ? 'text-slate-800 hover:text-[#dfa828]' : 'text-white hover:text-gray-200 drop-shadow-md'}`}
            >
              Tentang Kami
            </Link>

            {/* Dropdown Paket Umroh */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  setIsTabunganOpen(false);
                }}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors ${isScrolled || location.pathname !== '/' ? 'text-slate-800 hover:text-[#dfa828]' : 'text-white hover:text-gray-200 drop-shadow-md'}`}
              >
                Paket Umroh
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2"
                  >
                    {paketSubLinks.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center justify-between px-5 py-3 text-sm font-medium text-slate-700 hover:bg-gray-50 hover:text-[#dfa828] transition-colors group"
                      >
                        {sublink.name}
                        <span className="flex items-center text-xs text-gray-400 group-hover:text-[#dfa828] transition-colors">
                          Selengkapnya <ArrowRight className="w-3 h-3 ml-1" />
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown Tabungan Umroh */}
            <div className="relative" ref={tabunganRef}>
              <button 
                onClick={() => {
                  setIsTabunganOpen(!isTabunganOpen);
                  setIsDropdownOpen(false);
                }}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors ${isScrolled || location.pathname !== '/' ? 'text-slate-800 hover:text-[#dfa828]' : 'text-white hover:text-gray-200 drop-shadow-md'}`}
              >
                Tabungan Umroh
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isTabunganOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isTabunganOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2"
                  >
                    {tabunganSubLinks.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.href}
                        onClick={() => setIsTabunganOpen(false)}
                        className="flex items-center justify-between px-5 py-3 text-sm font-medium text-slate-700 hover:bg-gray-50 hover:text-[#dfa828] transition-colors group"
                      >
                        {sublink.name}
                        <span className="flex items-center text-xs text-gray-400 group-hover:text-[#dfa828] transition-colors">
                          Selengkapnya <ArrowRight className="w-3 h-3 ml-1" />
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/blog" 
              className={`text-sm font-semibold transition-colors ${isScrolled || location.pathname !== '/' ? 'text-slate-800 hover:text-[#dfa828]' : 'text-white hover:text-gray-200 drop-shadow-md'}`}
            >
              Blog
            </Link>

            <Link 
              to="/contact" 
              onClick={() => trackContactEvent('Navbar Button', 'Hubungi Kami')}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${isScrolled || location.pathname !== '/' ? 'bg-[#dfa828] text-white hover:bg-[#A88222]' : 'bg-white text-[#1E293B] hover:bg-gray-100'}`}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled || location.pathname !== '/' ? 'text-slate-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-gray-50 hover:text-[#dfa828] rounded-md"
              >
                Tentang Kami
              </Link>
              
              <div className="px-3 py-3">
                <div className="text-base font-medium text-slate-800 mb-2">Paket Umroh</div>
                <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                  {paketSubLinks.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 text-sm font-medium text-gray-600 hover:text-[#dfa828]"
                    >
                      {sublink.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-3 py-3">
                <div className="text-base font-medium text-slate-800 mb-2">Tabungan Umroh</div>
                <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                  {tabunganSubLinks.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-2 text-sm font-medium text-gray-600 hover:text-[#dfa828]"
                    >
                      {sublink.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-gray-50 hover:text-[#dfa828] rounded-md"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 px-3 py-3 text-center text-base font-bold text-white bg-[#dfa828] rounded-md"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
