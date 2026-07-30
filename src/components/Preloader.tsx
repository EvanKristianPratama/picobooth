import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLSpanElement>(null);
  const rightTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      // 1. Fade in text centered
      tl.fromTo(
        [leftTextRef.current, rightTextRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }
      )
      // 2. Pause briefly
      .to({}, { duration: 0.6 })
      // 3. Words split apart horizontally matching user's request
      .to(leftTextRef.current, {
        x: '-35vw',
        duration: 1,
        ease: 'power4.inOut'
      })
      .to(
        rightTextRef.current,
        {
          x: '35vw',
          duration: 1,
          ease: 'power4.inOut'
        },
        '<'
      )
      // 4. Fade out preloader curtain
      .to(containerRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.6,
        ease: 'power2.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-white flex items-center justify-center px-6 overflow-hidden select-none"
    >
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-medium text-[#0d0d0d] tracking-tight text-center">
        <span ref={leftTextRef} className="inline-block whitespace-nowrap">
          your complete
        </span>
        <span ref={rightTextRef} className="inline-block whitespace-nowrap font-normal text-[#0d0d0d]/80">
          photobooth solution
        </span>
      </div>
    </div>
  );
};
