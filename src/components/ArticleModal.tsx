import React, { useEffect } from 'react';
import { X, Clock, Calendar, User, ArrowUpRight, Share2, CheckCircle2 } from 'lucide-react';
import { Article } from '../data/articles';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link artikel berhasil disalin ke clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white text-[#0d0d0d] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-white/90 backdrop-blur sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#c5f737] text-black">
              {article.category}
            </span>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline-block">
              • {article.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-black/5 text-zinc-700 transition-colors flex items-center gap-1 text-xs font-mono"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Bagikan</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/10 text-zinc-800 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body Scrollable */}
        <div className="overflow-y-auto px-6 sm:px-12 py-8 space-y-8 font-sans">
          {/* Title and Meta Info */}
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0d0d0d] tracking-tight leading-tight mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 border-b border-black/10 pb-6">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-zinc-700" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-700" />
                {article.publishDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-700" />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Cover Image */}
          {article.coverImage && (
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-zinc-100 border border-black/10 flex items-center justify-center p-4">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-contain filter contrast-105"
              />
            </div>
          )}

          {/* Lead Summary */}
          <div className="p-5 rounded-2xl bg-zinc-50 border-l-4 border-[#c5f737] text-base sm:text-lg text-zinc-800 font-medium leading-relaxed italic">
            "{article.summary}"
          </div>

          {/* Article Sections */}
          <div className="space-y-8 text-zinc-800">
            {article.sections.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0d0d0d] tracking-tight">
                  {sec.heading}
                </h2>
                {sec.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-zinc-700 font-light">
                    {p}
                  </p>
                ))}

                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <div className="bg-zinc-50 rounded-xl p-4 sm:p-5 border border-black/5 space-y-2.5 mt-3">
                    {sec.bulletPoints.map((point, ptIdx) => (
                      <div key={ptIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-800">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Keywords Tag Cloud */}
          <div className="pt-6 border-t border-black/10">
            <span className="text-xs font-mono uppercase text-zinc-400 block mb-2 font-semibold">
              Topik & Kata Kunci:
            </span>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((kw, idx) => (
                <span key={idx} className="px-3 py-1 bg-zinc-100 rounded-lg text-xs font-mono text-zinc-700">
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Conversion CTA Box */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-zinc-900 to-black text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Tertarik Menggunakan Layanan Pico Booth?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Diskusikan kebutuhan sewa photobooth, software OS murah, atau paket usaha bersama tim kami.
              </p>
            </div>
            <a
              href={article.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#c5f737] text-black font-mono font-bold text-xs flex items-center gap-2 hover:bg-[#b5f524] hover:scale-105 transition-all shrink-0 shadow-lg"
            >
              <span>{article.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
