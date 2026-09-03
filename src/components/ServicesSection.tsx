import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card-new', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 95%',
        },
        y: 15,
        duration: 0.5,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const whatsappBaseUrl = "https://wa.me/6287779511667";

  return (
    <section id="services" ref={containerRef} className="py-24 bg-white text-[#0d0d0d] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#0d0d0d] tracking-tight">
            Sewa Photobooth, Software Murah & Paket Usaha
          </h2>
          <p className="mt-2 text-zinc-600 text-base sm:text-lg max-w-2xl font-light">
            Ekosistem photobooth terlengkap di Indonesia dari manufaktur mesin komersial, persewaan event wedding, hingga software cloud.
          </p>
        </div>

        {/* 3 Main Service Cards Grid - Crisp White Background & High Contrast Solid Black Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Manufacturing / Photobooth Hardware (Uses /booth/3.png) */}
          <div className="service-card-new rounded-3xl p-8 bg-white border border-black/20 shadow-md hover:shadow-2xl hover:border-black transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div>
              {/* Header Tag */}
              <div className="mb-6">
                <span className="text-xs font-mono font-extrabold tracking-widest text-[#0d0d0d] uppercase">
                  01 / PAKET USAHA
                </span>
              </div>

              {/* Hardware Image /booth/3.png */}
              <div className="w-full h-48 mb-6 flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 border border-black/10 p-2">
                <img
                  src="/booth/3.png"
                  alt="Paket Usaha Mesin Photobooth Komersial"
                  className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Large Title */}
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#0d0d0d] tracking-tight mb-3">
                Paket Usaha Photobooth
              </h3>

              {/* Pricing Hook - 79jt (Red Coret 90jt) */}
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0d0d0d] font-bold">Mulai dari</span>
                <span className="text-3xl font-sans font-black text-[#0d0d0d]">79jt</span>
                <span className="text-base font-sans font-bold text-red-600 line-through">90jt</span>
              </div>

              {/* Hook Copy */}
              <p className="text-sm sm:text-base text-[#0d0d0d] font-sans leading-relaxed mb-8">
                Raih potensi keuntungan <strong className="font-black text-black underline decoration-[#c5f737] decoration-4 underline-offset-4">hingga 30jt per bulan</strong> dengan mesin photobooth komersial kokoh, software bawaan, dan pelatihan bisnis siap pakai.
              </p>
            </div>

            {/* CTA Link */}
            <a
              href={`${whatsappBaseUrl}?text=Halo%20Pico%20Strips,%20saya%20tertarik%20inquiry%20Paket%20Usaha%20Photobooth%20(79jt)`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-[#0d0d0d] text-white font-mono font-bold text-xs flex items-center justify-between hover:bg-black hover:scale-102 transition-all shadow-md group-hover:bg-[#ff4d00]"
            >
              <span>KONSULTASI USAHA</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Event Rental & Experience (Uses /booth/2.png) */}
          <div className="service-card-new rounded-3xl p-8 bg-white border border-black/20 shadow-md hover:shadow-2xl hover:border-black transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div>
              {/* Header Tag */}
              <div className="mb-6">
                <span className="text-xs font-mono font-extrabold tracking-widest text-[#0d0d0d] uppercase">
                  02 / SEWA PHOTOBOOTH
                </span>
              </div>

              {/* Event Rental Booth Image /booth/2.png */}
              <div className="w-full h-48 mb-6 flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 border border-black/10 p-2">
                <img
                  src="/booth/2.png"
                  alt="Jasa Sewa Photobooth Event dan Wedding"
                  className="w-full h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Large Title */}
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#0d0d0d] tracking-tight mb-3">
                Sewa Photobooth Event
              </h3>

              {/* Pricing Hook - 999k */}
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0d0d0d] font-bold">Mulai dari</span>
                <span className="text-3xl font-sans font-black text-[#0d0d0d]">999k</span>
              </div>

              {/* Hook Copy */}
              <p className="text-sm sm:text-base text-[#0d0d0d] font-sans leading-relaxed mb-8">
                Jasa sewa photobooth <strong className="font-black text-black">lengkap untuk wedding & event</strong> dengan cetak thermal receipt super cepat 3 detik, studio 4R glossy, operator, dan instant QR cloud gallery.
              </p>
            </div>

            {/* CTA Link - Book Now WhatsApp */}
            <a
              href={`${whatsappBaseUrl}?text=Halo%20Pico%20Strips,%20saya%20ingin%20Book%20Now%20untuk%20Sewa%20Photobooth%20Event%20(999k)`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-[#c5f737] text-[#0d0d0d] font-mono font-bold text-xs flex items-center justify-between hover:bg-[#b5f524] hover:scale-102 transition-all shadow-md"
            >
              <span>SEWA SEKARANG</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Card 3: Software & SaaS Business OS (Uses /software/Tangkapan Layar 2026-07-14 pukul 23.58.56.png) */}
          <div className="service-card-new rounded-3xl p-8 bg-white border border-black/20 shadow-md hover:shadow-2xl hover:border-black transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div>
              {/* Header Tag */}
              <div className="mb-6">
                <span className="text-xs font-mono font-extrabold tracking-widest text-[#0d0d0d] uppercase">
                  03 / SOFTWARE OS
                </span>
              </div>

              {/* Software Image: Tangkapan Layar 2026-07-14 pukul 23.58.56.png */}
              <div className="w-full h-48 mb-6 flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-50 border border-black/10 p-1">
                <img
                  src="/software/Tangkapan%20Layar%202026-07-14%20pukul%2023.58.56.png"
                  alt="Software Photo Booth Murah Pico OS"
                  className="w-full h-full object-cover rounded-xl filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Large Title */}
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#0d0d0d] tracking-tight mb-3">
                Software Photo Booth Murah
              </h3>

              {/* Pricing Hook - Only 5k per transaction */}
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0d0d0d] font-bold">Pay as you go</span>
                <span className="text-xl font-sans font-bold text-[#0d0d0d]">Cuma 5k</span>
                <span className="text-xs font-mono text-[#0d0d0d] font-bold">/ transaksi</span>
              </div>

              {/* Hook Copy */}
              <p className="text-sm sm:text-base text-[#0d0d0d] font-sans leading-relaxed mb-8">
                Software photobooth <strong className="font-black text-black">tanpa biaya langganan bulanan mahal</strong>. Didukung Duo multi-kamera sync, drag-and-drop frame designer, dan live cloud analytics.
              </p>
            </div>

            {/* CTA Link - Direct Picobooth Demo */}
            <a
              href="https://picobooth.biz.id"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-[#0d0d0d] text-white font-mono font-bold text-xs flex items-center justify-between hover:bg-black hover:scale-102 transition-all shadow-md group-hover:bg-[#ff4d00]"
            >
              <span>COBA DEMO SOFTWARE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Profit Sharing Notice */}
        <div className="mt-12 flex items-start gap-3">
          <span className="text-2xl leading-snug">😊</span>
          <p className="text-[#0d0d0d]/80 text-base sm:text-lg font-sans leading-relaxed">
            If you don't have enough money yet to rent out a booth, don't worry —{' '}
            <span className="font-bold text-[#0d0d0d]">we can offer a profit sharing program</span>{' '}
            (up to <span className="font-bold text-[#0d0d0d]">30% from revenue</span>) so you can still get started together with us.{' '}
            <a
              href="https://wa.me/6287779511667?text=Halo%20Pico%20Strips%2C%20saya%20ingin%20diskusi%20tentang%20program%20profit%20sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#0d0d0d] underline underline-offset-2 hover:text-[#c5f737] transition-colors"
            >
              Discuss Now ↗
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
