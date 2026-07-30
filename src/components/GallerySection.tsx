import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin();

const mosaicTiles = [
  // 17 Total Photos from /public/gallery/
  {
    id: 1,
    src: '/gallery/IMG_4280 2.PNG',
    pos: 'top-2 left-[2%] sm:left-[6%]',
    size: 'w-28 sm:w-44',
    z: 'z-10',
    floatX: -18,
    floatY: -22,
    rot: -5
  },
  {
    id: 2,
    src: '/gallery/IMG_4281.PNG',
    pos: 'top-0 right-[2%] sm:right-[6%]',
    size: 'w-32 sm:w-44',
    z: 'z-20',
    floatX: 20,
    floatY: -24,
    rot: 4
  },
  {
    id: 3,
    src: '/gallery/IMG_4282.PNG',
    pos: 'top-[22%] left-[1%] sm:left-[3%]',
    size: 'w-28 sm:w-40',
    z: 'z-15',
    floatX: -24,
    floatY: 18,
    rot: 6
  },
  {
    id: 4,
    src: '/gallery/IMG_4283.PNG',
    pos: 'top-[25%] right-[1%] sm:right-[4%]',
    size: 'w-32 sm:w-44',
    z: 'z-25',
    floatX: 22,
    floatY: 20,
    rot: -4
  },
  {
    id: 5,
    src: '/gallery/IMG_4284.PNG',
    pos: 'bottom-[6%] left-[2%] sm:left-[5%]',
    size: 'w-32 sm:w-44',
    z: 'z-30',
    floatX: -15,
    floatY: 25,
    rot: 3
  },
  {
    id: 6,
    src: '/gallery/IMG_4285.PNG',
    pos: 'bottom-[4%] right-[2%] sm:right-[5%]',
    size: 'w-32 sm:w-44',
    z: 'z-10',
    floatX: 18,
    floatY: -20,
    rot: -6
  },
  {
    id: 7,
    src: '/gallery/collage-SESS-4604D05B.png',
    pos: 'top-4 left-[24%] sm:left-[28%]',
    size: 'w-24 sm:w-36',
    z: 'z-20',
    floatX: -26,
    floatY: -18,
    rot: 4
  },
  {
    id: 8,
    src: '/gallery/collage-SESS-543B1A7A (1).png',
    pos: 'top-2 right-[24%] sm:right-[28%]',
    size: 'w-24 sm:w-36',
    z: 'z-15',
    floatX: 24,
    floatY: 22,
    rot: -3
  },
  {
    id: 9,
    src: '/gallery/collage-SESS-57B583C8.png',
    pos: 'bottom-[4%] left-[24%] sm:left-[28%]',
    size: 'w-28 sm:w-36',
    z: 'z-10',
    floatX: 15,
    floatY: -25,
    rot: 5
  },
  {
    id: 10,
    src: '/gallery/collage-SESS-763AA4D9.png',
    pos: 'bottom-[2%] right-[24%] sm:right-[28%]',
    size: 'w-28 sm:w-36',
    z: 'z-20',
    floatX: -20,
    floatY: 20,
    rot: -5
  },
  {
    id: 11,
    src: '/gallery/collage-SESS-8A231389.png',
    pos: 'bottom-[25%] left-[14%] sm:left-[18%]',
    size: 'w-28 sm:w-36',
    z: 'z-25',
    floatX: -16,
    floatY: -20,
    rot: 2
  },
  {
    id: 12,
    src: '/gallery/collage-SESS-8BC8DD36.png',
    pos: 'bottom-[25%] right-[14%] sm:right-[18%]',
    size: 'w-28 sm:w-36',
    z: 'z-20',
    floatX: 20,
    floatY: -16,
    rot: -4
  },
  {
    id: 13,
    src: '/gallery/collage-SESS-A4276AD3.png',
    pos: 'top-[35%] left-[16%] sm:left-[20%]',
    size: 'w-24 sm:w-32',
    z: 'z-15',
    floatX: 14,
    floatY: 18,
    rot: 3
  },
  {
    id: 14,
    src: '/gallery/collage-SESS-E5734AEA.png',
    pos: 'top-[35%] right-[16%] sm:right-[20%]',
    size: 'w-24 sm:w-32',
    z: 'z-25',
    floatX: -18,
    floatY: -22,
    rot: -2
  },
  {
    id: 15,
    src: '/gallery/print-SESS-2101620F.png',
    pos: 'top-1 left-[42%] sm:left-[45%]',
    size: 'w-24 sm:w-32',
    z: 'z-30',
    floatX: 12,
    floatY: -26,
    rot: 1
  },
  {
    id: 16,
    src: '/gallery/print-SESS-D47C0100.png',
    pos: 'bottom-2 left-[42%] sm:left-[45%]',
    size: 'w-24 sm:w-32',
    z: 'z-30',
    floatX: -14,
    floatY: 24,
    rot: -1
  },
  {
    id: 17,
    src: '/gallery/print-SESS-F84DC24F.png',
    pos: 'top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2',
    size: 'w-24 sm:w-32 opacity-40 hover:opacity-100',
    z: 'z-10',
    floatX: 10,
    floatY: -10,
    rot: 0
  }
];

export const GallerySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray('.mosaic-tile');
      
      // Infinite organic floating, rotating, and scaling animation loop for all 17 items
      tiles.forEach((tile: any, idx: number) => {
        const item = mosaicTiles[idx] || mosaicTiles[0];
        gsap.to(tile, {
          y: item.floatY,
          x: item.floatX,
          rotation: item.rot,
          scale: 1.04,
          duration: 3 + (idx % 4) * 0.7,
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
          const depth = (idx % 4 + 1) * 10;
          gsap.to(tile, {
            x: `+=${deltaX * depth * 0.35}`,
            y: `+=${deltaY * depth * 0.35}`,
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

        {/* Floating Scatter Cluster Area - All 17 Photos Floating Organically */}
        <div
          ref={clusterRef}
          className="relative w-full h-[620px] sm:h-[720px] bg-white flex items-center justify-center p-4 overflow-hidden"
        >
          {/* Floating Photos with Organic Movement & Rotation */}
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
