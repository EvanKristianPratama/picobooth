import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const interactiveEl = target?.closest('a, button, [data-cursor]');
      if (interactiveEl) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const follow = () => {
      setTrailPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15
      }));
    };
    const anim = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(anim);
  }, [pos, trailPos]);

  return (
    <>
      {/* Primary Dark Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#0d0d0d] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />
      {/* Trailing Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out border border-[#0d0d0d]/30 ${
          isHovered
            ? 'w-12 h-12 bg-[#0d0d0d]/5 scale-110'
            : 'w-8 h-8 scale-100'
        }`}
        style={{ transform: `translate3d(${trailPos.x}px, ${trailPos.y}px, 0)` }}
      />
    </>
  );
};
