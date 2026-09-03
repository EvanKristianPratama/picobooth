import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { USPSection } from './components/USPSection';
import { ClientsSection } from './components/ClientsSection';
import { GallerySection } from './components/GallerySection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { BookingModal } from './components/BookingModal';
import { DemoModal } from './components/DemoModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-[#0d0d0d] overflow-hidden selection:bg-[#c5f737] selection:text-[#0d0d0d]">
      {/* GSAP Preloader Screen */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Custom Awwwards Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Page Sections */}
      <main>
        <HeroSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenDemo={() => setIsDemoOpen(true)}
        />
        <AboutSection />
        <ServicesSection />
        <USPSection />
        <ClientsSection />
        <GallerySection />
        <BlogSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
};

export default App;
