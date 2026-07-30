import React from 'react';

const clientImages = [
  { id: 1, src: "/client/542759937_17905118400236914_4914616448070268619_n_edited (1).png", alt: "Client Partner 1" },
  { id: 2, src: "/client/572899620_17850816780580784_7577787132373154288_n (1).png", alt: "Client Partner 2" },
  { id: 3, src: "/client/5851023_Paskal_edited (1).png", alt: "Paskal Client Partner" },
  { id: 4, src: "/client/640395060_17940070107146291_612783178151538824_n_edited (1).png", alt: "Client Partner 4" },
  { id: 5, src: "/client/706946242_17962313943090089_2379775333864026209_n_edited (1).png", alt: "Client Partner 5" }
];

// Repeat images 4x for smooth seamless infinite horizontal marquee loop
const infiniteMarqueeList = [...clientImages, ...clientImages, ...clientImages, ...clientImages];

export const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-white text-[#0d0d0d] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#0d0d0d] tracking-tight">
            Our Clients & Partners
          </h2>
        </div>
      </div>

      {/* Infinite Horizontal Marquee - No Card Box & Full Color */}
      <div className="py-8 border-y border-black/10 overflow-hidden relative bg-white">
        {/* Fade Out Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex space-x-16 animate-marquee whitespace-nowrap items-center">
          {infiniteMarqueeList.map((client, idx) => (
            <div
              key={idx}
              className="inline-block h-16 sm:h-24 max-w-[200px] shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
