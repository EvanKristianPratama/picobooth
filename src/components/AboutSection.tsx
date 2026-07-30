import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// PICO Dog Logo Icon SVG - Clean Black Lineart
const PicoDogLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 80" fill="currentColor" className={className}>
    <path d="M20,60 C10,50 10,25 25,15 C40,5 65,5 80,20 C95,35 90,60 75,70 C60,80 30,70 20,60 Z" />
    <path d="M70,20 C85,25 95,45 85,60 C80,50 75,35 70,20 Z" fill="#000000" />
    <circle cx="45" cy="32" r="7" fill="#FFFFFF" />
    <circle cx="45" cy="32" r="3" fill="#000000" />
  </svg>
);

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-white text-[#0d0d0d] border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-12">
        {/* Header Title */}
        <div className="border-b border-black/10 pb-8">
          <h2 className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-[#0d0d0d]">
            About Us
          </h2>
        </div>

        {/* Clean Typography */}
        <div className="about-text space-y-8 font-sans text-xl sm:text-3xl text-[#0d0d0d]/80 leading-relaxed font-light">
          <p>
            <strong className="font-bold text-[#0d0d0d]">PICO</strong> is an integrated photobooth solutions creating end-to-end photobooth ecosystems from{' '}
            <span className="font-semibold text-[#0d0d0d] underline decoration-black/30 underline-offset-8">
              brand, software development
            </span>{' '}
            and{' '}
            <span className="font-semibold text-[#0d0d0d] underline decoration-black/30 underline-offset-8">
              hardware manufacturing
            </span>.
          </p>

          <p className="text-base sm:text-2xl text-[#0d0d0d]/70 leading-relaxed border-t border-black/10 pt-8">
            We believe a photobooth is more than a machine that captures images. It is a medium for{' '}
            <strong className="font-semibold text-[#0d0d0d]">authentic human interaction</strong>, bringing people together and transforming moments into meaningful, tangible memories (whether they are together{' '}
            <strong className="font-semibold text-[#0d0d0d]">in person</strong> or{' '}
            <span className="font-semibold text-[#0d0d0d] underline decoration-[#c5f737] decoration-4 underline-offset-4">connected across distances</span>.)
          </p>
        </div>
      </div>
    </section>
  );
};
