import React from 'react';
import { ArrowUp, Instagram, MessageCircle } from 'lucide-react';

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
          <div className="md:col-span-5 space-y-6">
            <a href="#home" className="flex items-center gap-3 hover:opacity-75 transition-opacity">
              <img src="/logo_pico2.png" alt="Pico Strips Logo" className="h-9 w-auto object-contain" />
            </a>
            <p className="text-[#0d0d0d]/70 text-sm max-w-md leading-relaxed font-normal">
              The clean, high-speed photobooth experience. Ultra-fast thermal receipt printing, 4R studio prints, and instant QR cloud gallery.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/picostrips/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-black/20 text-[#0d0d0d] text-xs font-mono font-semibold hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                <span>@picostrips</span>
              </a>
              <a
                href="https://wa.me/6287779511667?text=Halo%20Pico%20Strips%2C%20saya%20ingin%20tanya%20lebih%20lanjut"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#c5f737] border-2 border-black text-[#0d0d0d] text-xs font-mono font-bold hover:bg-[#b5f524] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono text-[#0d0d0d] uppercase tracking-widest block font-bold">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-[#0d0d0d]/80 font-medium">
              <li><a href="#home" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Layanan & Harga</a></li>
              <li><a href="#clients" className="hover:text-black transition-colors">Our Clients</a></li>
              <li><a href="#gallery" className="hover:text-black transition-colors">Gallery</a></li>
              <li><a href="#articles" className="hover:text-black transition-colors">Artikel & Panduan</a></li>
              <li><a href="#faq" className="hover:text-black transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono text-[#0d0d0d] uppercase tracking-widest block font-bold">
              Contact
            </span>
            <ul className="space-y-3 text-sm text-[#0d0d0d]/80">
              <li>
                <a
                  href="https://www.instagram.com/picostrips/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black transition-colors"
                >
                  <Instagram className="w-4 h-4 shrink-0" />
                  <span>picostrips</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6287779511667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>+62 877-7951-1667</span>
                </a>
              </li>
            </ul>
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
