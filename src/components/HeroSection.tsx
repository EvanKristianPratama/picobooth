import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenDemo: () => void;
}

const boothPhotos = [
  '/booth/1.png',
  '/booth/2.png',
  '/booth/3.png',
  '/booth/4.png',
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(centerColRef.current, {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-36 pb-20 flex flex-col justify-between bg-white text-[#0d0d0d] px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Main Hero Title Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Headline Text */}
        <div className="lg:col-span-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium text-[#0d0d0d] tracking-tight leading-[1.08]">
            Your <span className="font-bold underline decoration-[#c5f737] decoration-[8px] underline-offset-8">Complete</span> Photobooth Solution
          </h1>
        </div>

        {/* Center Single-Column Auto-Scrolling Booth Photos Stream (Non-interactive) */}
        <div className="lg:col-span-4 flex justify-center">
          <div
            ref={centerColRef}
            className="w-full max-w-sm h-[460px] sm:h-[520px] relative overflow-hidden flex flex-col items-center bg-transparent pointer-events-none select-none"
          >
            {/* Top Fade Overlay */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/90 to-transparent z-20 pointer-events-none" />
            {/* Bottom Fade Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none" />

            {/* Single Column Upward Auto-Scrolling Transparent PNG Cutouts from /booth */}
            <div className="flex flex-col gap-8 w-full animate-scrollUp">
              {boothPhotos.concat(boothPhotos).map((src, idx) => (
                <div
                  key={idx}
                  className="w-full shrink-0 flex items-center justify-center py-2"
                >
                  <img
                    src={src}
                    alt={`Pico Booth setup ${idx + 1}`}
                    className="w-full max-h-[360px] object-contain block drop-shadow-2xl select-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Aesthetic Try It Now & Book CTA */}
        <div className="lg:col-span-4 lg:text-right flex flex-col lg:items-end gap-5">
          <a
            href="https://picobooth.biz.id"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="TRY"
            className="inline-flex items-center gap-2 text-4xl sm:text-6xl font-sans font-medium text-[#0d0d0d] hover:opacity-70 tracking-tight leading-[1.1] transition-all group"
          >
            <span>try it now...</span>
            <ArrowUpRight className="w-8 h-8 text-[#0d0d0d] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#0d0d0d]/40 uppercase tracking-widest font-semibold">
              OR
            </span>
            <a
              href="https://wa.me/6287779511667?text=Halo%20Pico%20Strips,%20saya%20ingin%20inquiry%20layanan%20photobooth"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WA"
              className="px-7 py-3 rounded-full bg-[#c5f737] text-[#0d0d0d] font-mono font-bold text-xs flex items-center gap-2 hover:bg-[#b5f524] hover:scale-105 transition-all shadow-sm"
            >
              <span>INQUIRY</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>


    </section>
  );
};
