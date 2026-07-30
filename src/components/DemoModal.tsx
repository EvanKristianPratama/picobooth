import React, { useState } from 'react';
import { X, Camera, Play, CheckCircle2, RefreshCw, Printer } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'intro' | 'capturing' | 'printing'>('intro');

  if (!isOpen) return null;

  const startSimulatedBooth = () => {
    setStep('capturing');
    setTimeout(() => {
      setStep('printing');
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="glass-panel w-full max-w-2xl rounded-3xl p-8 border border-[#38bdf8]/30 relative shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'intro' && (
          <div className="text-center space-y-6 py-6">
            <div className="w-16 h-16 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center mx-auto border border-[#38bdf8]/30">
              <Camera className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white">
                Live Photobooth Simulation
              </h3>
              <p className="text-white/70 text-sm max-w-md mx-auto">
                Experience the 0.4s fast capture and instant thermal receipt printing flow directly inside your browser.
              </p>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black flex flex-col items-center justify-center gap-3 p-4">
              <img src="/picobooth_hero.png" className="absolute inset-0 w-full h-full object-cover opacity-40" />
              <a
                href="https://picobooth.biz.id"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 px-6 py-3 rounded-full bg-[#34d399] text-[#050807] font-bold text-sm flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Launch Live Web Booth (picobooth.biz.id)</span>
              </a>
              <button
                onClick={startSimulatedBooth}
                className="relative z-10 text-xs font-mono text-white/80 hover:text-white underline"
              >
                Or view interactive quick preview
              </button>
            </div>
          </div>
        )}

        {step === 'capturing' && (
          <div className="text-center space-y-6 py-12">
            <div className="w-20 h-20 rounded-full border-4 border-[#34d399] border-t-transparent animate-spin mx-auto flex items-center justify-center text-2xl font-bold font-mono text-[#34d399]">
              3
            </div>
            <h4 className="text-2xl font-syne font-bold text-white">CAPTURING PHOTO...</h4>
            <p className="text-white/60 text-sm font-mono">Simulating Pro DSLR shutter & instant thermal dither...</p>
          </div>
        )}

        {step === 'printing' && (
          <div className="text-center space-y-6 py-8">
            <div className="w-16 h-16 rounded-full bg-[#34d399]/20 text-[#34d399] flex items-center justify-center mx-auto">
              <Printer className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-syne font-bold text-white">THERMAL RECEIPT PRINTED!</h4>
            
            <div className="w-56 thermal-strip rounded-md p-4 mx-auto rotate-1 shadow-2xl">
              <div className="flex justify-between items-center border-b border-black/20 pb-2 mb-2">
                <span className="text-[8px] font-mono font-bold">DEMO RECEIPT #99</span>
                <span className="text-[8px] font-mono">0.4 SEC</span>
              </div>
              <img src="/picobooth_event.png" className="w-full h-28 object-cover rounded filter contrast-125 grayscale" />
              <div className="text-[8px] font-mono mt-2">QR CODE SYNC: ONLINE</div>
            </div>

            <button
              onClick={() => setStep('intro')}
              className="px-6 py-2.5 rounded-full bg-white/10 text-white font-medium text-xs hover:bg-white/20 transition-colors inline-flex items-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Test Again</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
