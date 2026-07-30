import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-[#0d0d0d] border-t border-black/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-black/10">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-6">
            <a href="#home" className="flex items-center gap-3 hover:opacity-75 transition-opacity">
              <img src="/logo_pico.png" alt="Pico Strips Logo" className="h-9 w-auto object-contain" />
            </a>
            <p className="text-[#0d0d0d]/70 text-sm max-w-md leading-relaxed font-normal">
              The clean, high-speed photobooth experience. Ultra-fast thermal receipt printing, 4R studio prints, and instant QR cloud gallery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 flex md:justify-end gap-12">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#0d0d0d] uppercase tracking-widest block font-bold">
                Navigation
              </span>
              <ul className="space-y-2 text-sm text-[#0d0d0d]/80 font-medium">
                <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-black transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-black transition-colors">What We Offer</a></li>
                <li><a href="#clients" className="hover:text-black transition-colors">Our Clients</a></li>
                <li><a href="#gallery" className="hover:text-black transition-colors">Gallery</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#0d0d0d]/60 gap-4">
          <p>© {new Date().getFullYear()} Pico Strips. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-black/5 hover:bg-black/10 text-black transition-colors flex items-center gap-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
