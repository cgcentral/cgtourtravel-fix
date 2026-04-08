/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageList from './components/PackageList';
import About from './components/About';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PackagesPage from './components/PackagesPage';
import BlogPage from './components/BlogPage';
import FAQPage from './components/FAQPage';
import TabunganUmrohPage from './components/TabunganUmrohPage';
import TestimoniGaleriPage from './components/TestimoniGaleriPage';
import PersiapanUmrohPage from './components/PersiapanUmrohPage';
import SimulasiTabunganPage from './components/SimulasiTabunganPage';
import PackageDetailPage from './components/PackageDetailPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#dfa828] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PackageList />
        <About />
        <Gallery />
        <Reviews />
        <Blog />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  // Track PageView on route change
  useEffect(() => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'PageView');
      console.log(`[Analytics] PageView tracked for: ${location.pathname}`);
    }
  }, [location]);
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/paket" element={<PackagesPage />} />
        <Route path="/paket/:slug" element={<PackageDetailPage />} />
        <Route path="/tabungan-umroh" element={<TabunganUmrohPage />} />
        <Route path="/paket/testimoni" element={<TestimoniGaleriPage />} />
        <Route path="/paket/persiapan" element={<PersiapanUmrohPage />} />
        <Route path="/simulasi-tabungan" element={<SimulasiTabunganPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}
