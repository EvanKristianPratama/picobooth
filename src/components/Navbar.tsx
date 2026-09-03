import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex items-center justify-between transition-all duration-300">
      {/* Brand Logo Image from /public/logo_pico2.png */}
      <a href="#home" className="flex items-center gap-2 hover:opacity-75 transition-opacity" data-cursor="PICO">
        <img src="/logo_pico2.png" alt="Pico Strips Logo" className="h-8 md:h-10 w-auto object-contain" />
      </a>

      {/* Plain Text Navigation Links - Order: ABOUT, SERVICES, CLIENTS, GALLERY, ARTIKEL, FAQ */}
      <nav className="flex items-center gap-5 sm:gap-7 text-xs font-mono tracking-wider font-semibold text-[#0d0d0d]">
        <a href="#about" className="hover:opacity-60 transition-opacity">
          ABOUT
        </a>
        <a href="#services" className="hover:opacity-60 transition-opacity">
          SERVICES
        </a>
        <a href="#clients" className="hover:opacity-60 transition-opacity">
          CLIENTS
        </a>
        <a href="#gallery" className="hover:opacity-60 transition-opacity hidden sm:inline">
          GALLERY
        </a>
        <a href="#articles" className="hover:opacity-60 transition-opacity">
          ARTIKEL
        </a>
        <a href="#faq" className="hover:opacity-60 transition-opacity hidden md:inline">
          FAQ
        </a>
      </nav>
    </header>
  );
};
