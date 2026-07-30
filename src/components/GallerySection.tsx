import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin();

const mosaicTiles = [
  // --- FRONT / PROMINENT VENDOR EVENT PHOTOS (Foreground z-30 & z-40) ---
  {
    id: 1,
    src: '/vendor/IMG_4280 2.PNG',
    pos: 'top-4 left-[6%] sm:left-[10%]',
    size: 'w-36 sm:w-52',
    z: 'z-30',
    floatX: -20,
    floatY: -22,
    rot: -4
  },
  {
    id: 2,
    src: '/vendor/IMG_4281.PNG',
    pos: 'top-2 right-[6%] sm:right-[10%]',
    size: 'w-36 sm:w-52',
    z: 'z-40',
    floatX: 22,
    floatY: -20,
    rot: 5
  },
  {
    id: 3,
    src: '/vendor/IMG_4282.PNG',
    pos: 'bottom-[4%] left-[6%] sm:left-[10%]',
    size: 'w-36 sm:w-56',
    z: 'z-30',
    floatX: -24,
    floatY: 20,
    rot: 3
  },
  {
    id: 4,
    src: '/vendor/IMG_4283.PNG',
    pos: 'bottom-[2%] right-[6%] sm:right-[10%]',
    size: 'w-36 sm:w-56',
    z: 'z-40',
    floatX: 25,
    floatY: 22,
    rot: -5
  },
  {
    id: 5,
    src: '/vendor/IMG_4284.PNG',
    pos: 'top-8 left-[32%] sm:left-[36%]',
    size: 'w-32 sm:w-48',
    z: 'z-35',
    floatX: 16,
    floatY: -25,
    rot: -3
  },
  {
    id: 6,
    src: '/vendor/IMG_4285.PNG',
    pos: 'top-6 right-[30%] sm:right-[34%]',
    size: 'w-32 sm:w-48',
    z: 'z-35',
    floatX: -18,
    floatY: -22,
    rot: 4
  },

  // --- FLOATING GALLERY PHOTOSTRIP PRINTS (Midground & Background z-10 to z-25) ---
  {
    id: 7,
    src: '/gallery/collage-SESS-4604D05B.png',
    pos: 'top-1/3 left-[2%] sm:left-[4%]',
    size: 'w-28 sm:w-36',
    z: 'z-15',
    floatX: -18,
    floatY: 16,
    rot: 6
  },
  {
    id: 8,
    src: '/gallery/print-SESS-2101620F.png',
    pos: 'top-1/3 right-[2%] sm:right-[4%]',
    size: 'w-28 sm:w-36',
    z: 'z-20',
    floatX: 20,
    floatY: 18,
    rot: -6
  },
  {
    id: 9,
    src: '/gallery/collage-SESS-543B1A7A (1).png',
    pos: 'bottom-[8%] left-[26%] sm:left-[30%]',
    size: 'w-28 sm:w-36',
    z: 'z-25',
    floatX: -14,
    floatY: 24,
    rot: 3
  },
  {
    id: 10,
    src: '/gallery/print-SESS-D47C0100.png',
    pos: 'bottom-[6%] right-[26%] sm:right-[29%]',
    size: 'w-28 sm:w-36',
    z: 'z-20',
    floatX: 16,
    floatY: 20,
    rot: -4
  },
  {
    id: 11,
    src: '/gallery/print-SESS-F84DC24F.png',
    pos: 'bottom-[25%] left-[16%] sm:left-[20%]',
    size: 'w-28 sm:w-36',
    z: 'z-10',
    floatX: -22,
    floatY: -16,
    rot: -2
  },
  {
    id: 12,
    src: '/gallery/collage-SESS-57B583C8.png',
    pos: 'bottom-[22%] right-[16%] sm:right-[20%]',
    size: 'w-28 sm:w-36',
    z: 'z-15',
    floatX: 18,
    floatY: -18,
    rot: 4
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
          scale: 1.04,
          duration: 3 + (idx % 4) * 0.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.easeInOut',
          delay: idx * 0.1
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
          const depth = (idx % 3 + 1) * 12;
          gsap.to(tile, {
            x: `+=${deltaX * depth * 0.4}`,
            y: `+=${deltaY * depth * 0.4}`,
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

        {/* Floating Scatter Cluster Area - Vendor Photos in Front + Gallery Prints Floating Around */}
        <div
          ref={clusterRef}
          className="relative w-full h-[600px] sm:h-[680px] bg-white flex items-center justify-center p-4 overflow-hidden"
        >
          {/* Floating Photos */}
          {mosaicTiles.map((tile) => (
            <div
              key={tile.id}
              className={`mosaic-tile absolute ${tile.pos} ${tile.size} ${tile.z} transition-transform duration-300 hover:scale-115 hover:z-50 cursor-pointer group`}
            >
              <img
                src={tile.src}
                alt="Pico photobooth memory photo"
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
