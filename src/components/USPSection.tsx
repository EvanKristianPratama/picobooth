import React from 'react';

const differentiators = [
  {
    number: '01',
    title: 'We Have Our Own Social Media',
    description: 'Pico Strips actively documents every event and moment on our own platform. Your guests get featured, your brand gets amplified — organically.',
    image: '/usp/Tangkapan Layar 2026-07-30 pukul 13.30.40.png',
    tag: 'Content & Reach'
  },
  {
    number: '02',
    title: 'Full Customize Hardware',
    description: 'From shell design to print layout, every Pico unit is built and tailored to match your event identity. No cookie-cutter setups — pure bespoke.',
    image: '/usp/IMG_2693_3.jpg',
    tag: 'Bespoke Build'
  },
  {
    number: '03',
    title: 'Anywhere We Can Take Pictures Together',
    description: 'Indoor or outdoor, intimate or massive — Pico Strips goes wherever your event takes us. We bring the studio to you.',
    image: '/usp/Tangkapan Layar 2026-07-30 pukul 13.37.06.png',
    tag: 'Mobile & Flexible'
  }
];

export const USPSection: React.FC = () => {
  return (
    <section className="py-24 bg-white text-[#0d0d0d] border-t border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-[#0d0d0d]/50 uppercase tracking-widest block mb-3 font-bold">
            Why Pico
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#0d0d0d] tracking-tight leading-tight">
            What Makes{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Us Different</span>
              <span className="absolute bottom-1 left-0 w-full h-3 sm:h-4 bg-[#c5f737] rounded-sm -z-0" />
            </span>
          </h2>
        </div>

        {/* USP Cards - 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item) => (
            <div
              key={item.number}
              className="group flex flex-col border border-black/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 bg-white"
            >
              {/* Image - object-contain so nothing is cut */}
              <div className="bg-zinc-50 flex items-center justify-center p-4 min-h-[260px] sm:min-h-[300px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto max-h-[280px] sm:max-h-[320px] object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 border-t border-black/10">
              {/* Number + Title */}
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-syne font-black text-black/10 leading-none select-none">
                    {item.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-[#0d0d0d] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#0d0d0d]/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
