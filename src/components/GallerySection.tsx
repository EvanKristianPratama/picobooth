import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin();

const mosaicTiles = [
  // 17 Photos safely positioned inside canvas boundaries - 100% Unclipped
  {
    id: 1,
    src: '/gallery/IMG_4280 2.PNG',
    pos: 'top-[8%] left-[2%] sm:left-[5%]',
    size: 'w-24 sm:w-36',
    z: 'z-10',
    floatX: -14,
    floatY: -16,
    rot: -4
  },
  {
    id: 2,
    src: '/gallery/IMG_4281.PNG',
    pos: 'top-[8%] right-[2%] sm:right-[5%]',
    size: 'w-28 sm:w-38',
    z: 'z-20',
    floatX: 16,
    floatY: -18,
    rot: 3
  },
  {
    id: 3,
    src: '/gallery/IMG_4282.PNG',
    pos: 'top-[32%] left-[1%] sm:left-[3%]',
    size: 'w-24 sm:w-36',
    z: 'z-15',
    floatX: -18,
    floatY: 14,
    rot: 5
  },
  {
    id: 4,
    src: '/gallery/IMG_4283.PNG',
    pos: 'top-[34%] right-[1%] sm:right-[3%]',
    size: 'w-28 sm:w-38',
    z: 'z-25',
    floatX: 18,
    floatY: 16,
    rot: -3
  },
  {
    id: 5,
    src: '/gallery/IMG_4284.PNG',
    pos: 'bottom-[10%] left-[2%] sm:left-[4%]',
    size: 'w-28 sm:w-38',
    z: 'z-30',
    floatX: -12,
    floatY: 18,
    rot: 3
  },
  {
    id: 6,
    src: '/gallery/IMG_4285.PNG',
    pos: 'bottom-[8%] right-[2%] sm:right-[4%]',
    size: 'w-28 sm:w-38',
    z: 'z-10',
    floatX: 14,
    floatY: -15,
    rot: -4
  },
  {
    id: 7,
    src: '/gallery/collage-SESS-4604D05B.png',
    pos: 'top-[10%] left-[22%] sm:left-[25%]',
    size: 'w-20 sm:w-32',
    z: 'z-20',
    floatX: -18,
    floatY: -14,
    rot: 3
  },
  {
    id: 8,
    src: '/gallery/collage-SESS-543B1A7A (1).png',
    pos: 'top-[10%] right-[22%] sm:right-[25%]',
    size: 'w-20 sm:w-32',
    z: 'z-15',
    floatX: 18,
    floatY: 16,
    rot: -2
  },
  {
    id: 9,
    src: '/gallery/collage-SESS-57B583C8.png',
    pos: 'bottom-[10%] left-[22%] sm:left-[25%]',
    size: 'w-22 sm:w-32',
    z: 'z-10',
    floatX: 12,
    floatY: -18,
    rot: 4
  },
  {
    id: 10,
    src: '/gallery/collage-SESS-763AA4D9.png',
    pos: 'bottom-[8%] right-[22%] sm:right-[25%]',
    size: 'w-22 sm:w-32',
    z: 'z-20',
    floatX: -15,
    floatY: 15,
    rot: -4
  },
  {
    id: 11,
    src: '/gallery/collage-SESS-8A231389.png',
    pos: 'bottom-[30%] left-[12%] sm:left-[15%]',
    size: 'w-22 sm:w-32',
    z: 'z-25',
    floatX: -12,
    floatY: -15,
    rot: 2
  },
  {
    id: 12,
    src: '/gallery/collage-SESS-8BC8DD36.png',
    pos: 'bottom-[30%] right-[12%] sm:right-[15%]',
    size: 'w-22 sm:w-32',
    z: 'z-20',
    floatX: 15,
    floatY: -12,
    rot: -3
  },
  {
    id: 13,
    src: '/gallery/collage-SESS-A4276AD3.png',
    pos: 'top-[38%] left-[14%] sm:left-[17%]',
    size: 'w-20 sm:w-28',
    z: 'z-15',
    floatX: 10,
    floatY: 14,
    rot: 2
  },
  {
    id: 14,
    src: '/gallery/collage-SESS-E5734AEA.png',
    pos: 'top-[38%] right-[14%] sm:right-[17%]',
    size: 'w-20 sm:w-28',
    z: 'z-25',
    floatX: -14,
    floatY: -16,
    rot: -2
  },
  {
    id: 15,
    src: '/gallery/print-SESS-2101620F.png',
    pos: 'top-[6%] left-[40%] sm:left-[42%]',
    size: 'w-20 sm:w-28',
    z: 'z-30',
    floatX: 8,
    floatY: -18,
    rot: 1
  },
  {
    id: 16,
    src: '/gallery/print-SESS-D47C0100.png',
    pos: 'bottom-[6%] left-[40%] sm:left-[42%]',
    size: 'w-20 sm:w-28',
    z: 'z-30',
    floatX: -10,
    floatY: 18,
    rot: -1
  },
  {
    id: 17,
    src: '/gallery/print-SESS-F84DC24F.png',
    pos: 'top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2',
    size: 'w-20 sm:w-28 opacity-40 hover:opacity-100',
    z: 'z-10',
    floatX: 8,
    floatY: -8,
    rot: 0
  }
];

export const GallerySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray('.mosaic-tile');
      
      // Infinite organic floating, rotating, and scaling animation loop
      tiles.forEach((tile: any, idx: number) => {
        const item = mosaicTiles[idx] || mosaicTiles[0];
        gsap.to(tile, {
          y: item.floatY,
          x: item.floatX,
          rotation: item.rot,
          scale: 1.03,
          duration: 3.2 + (idx % 4) * 0.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.easeInOut',
          delay: idx * 0.08
        });
      });

      // Mouse move interactive floating parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        if (!clusterRef.current) return;
        const rect = clusterRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) / (rect.width / 2);
        const deltaY = (e.clientY - centerY) / (rect.height / 2);

        tiles.forEach((tile: any, idx: number) => {
          const depth = (idx % 4 + 1) * 8;
          gsap.to(tile, {
            x: `+=${deltaX * depth * 0.25}`,
            y: `+=${deltaY * depth * 0.25}`,
            duration: 1.2,
            ease: 'power1.out',
            overwrite: 'auto'
          });
        });
      };

      const element = clusterRef.current;
      element?.addEventListener('mousemove', handleMouseMove);

      return () => {
        element?.removeEventListener('mousemove', handleMouseMove);
      };
    }, clusterRef);

    return () => ctx.revert();
  }, []);

  const whatsappUrl = "https://wa.me/6287779511667?text=Halo%20Pico%20Strips,%20saya%20ingin%20inquiry%20layanan%20photobooth";

  return (
    <section id="gallery" ref={containerRef} className="py-24 bg-white text-[#0d0d0d] border-t border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#0d0d0d] tracking-tight text-center sm:text-left">
            Let's bring memory to last forever to people around us
          </h2>
        </div>

        {/* Floating Scatter Cluster Area - Height expanded and ample padding so no photo is cut off */}
        <div
          ref={clusterRef}
          className="relative w-full h-[680px] sm:h-[780px] bg-white flex items-center justify-center p-8 overflow-hidden"
        >
          {/* Floating Photos with Safe Positioning - 100% Unclipped */}
          {mosaicTiles.map((tile) => (
            <div
              key={tile.id}
              className={`mosaic-tile absolute ${tile.pos} ${tile.size} ${tile.z} transition-transform duration-300 hover:scale-115 hover:z-50 cursor-pointer group`}
            >
              <img
                src={tile.src}
                alt="Pico photobooth gallery print photo"
                className="w-full h-auto object-contain filter drop-shadow-xl group-hover:drop-shadow-2xl transition-all"
              />
            </div>
          ))}

          {/* Centerpiece Pill Button - INQUIRY NOW */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#c5f737] text-[#0d0d0d] font-mono font-extrabold text-sm sm:text-base tracking-wider flex items-center gap-2.5 shadow-2xl hover:bg-[#b5f524] hover:scale-110 transition-all duration-300 border-2 border-black"
          >
            <span>INQUIRY NOW</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
