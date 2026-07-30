import React from 'react';
import { Camera, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-[#0d0d0d] border-t border-black/10 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-black/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <a href="#home" className="flex items-center gap-3 hover:opacity-75 transition-opacity">
              <img src="/logo_pico.png" alt="Pico Strips Logo" className="h-9 w-auto object-contain" />
            </a>
            <p className="text-[#0d0d0d]/60 text-sm max-w-sm leading-relaxed">
              The clean, high-speed photobooth experience. Ultra-fast thermal receipt printing, lab 4R quality, and instant QR cloud sync for luxury events.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono text-[#0d0d0d] uppercase tracking-widest block font-bold">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-[#0d0d0d]/70 font-medium">
              <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Our Services</a></li>
              <li><a href="#clients" className="hover:text-black transition-colors">Our Clients</a></li>
              <li><a href="#gallery" className="hover:text-black transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Event Booking Direct */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono text-[#0d0d0d] uppercase tracking-widest block font-bold">
              Event Hotline
            </span>
            <p className="text-[#0d0d0d] font-mono text-lg font-bold">
              +62 812-3456-7890
            </p>
            <p className="text-[#0d0d0d]/60 text-xs">
              Available for Jakarta, Bali, & International Destination Events.
            </p>
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#c5f737] text-[#0d0d0d] font-mono font-bold text-xs hover:bg-[#b5f524] transition-colors shadow-sm"
            >
              Book Event Now ↗
            </button>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#0d0d0d]/50 gap-4">
          <p>© {new Date().getFullYear()} Pico Strips. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Made With GSAP Style</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-black transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
