import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, User, ArrowUpRight, Share2, CheckCircle2, BookOpen } from 'lucide-react';
import { Article, articles } from '../data/articles';

interface ArticlePageProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({ article, onBack, onSelectArticle }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${article.title} — Pico Booth`;
    return () => {
      document.title = 'Pico Booth — Sewa Photobooth, Software Photo Booth Murah & Paket Usaha';
    };
  }, [article]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link artikel berhasil disalin!');
    }
  };

  const relatedArticles = articles.filter((a) => a.id !== article.id);

  return (
    <div className="min-h-screen bg-white text-[#0d0d0d] font-sans selection:bg-[#c5f737] selection:text-[#0d0d0d]">
      {/* Sticky Clean Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/10 py-4 px-6 md:px-12 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#0d0d0d] hover:opacity-60 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>KEMBALI KE BERANDA</span>
          </button>

          <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="flex items-center gap-2">
            <img src="/logo_pico.png" alt="Pico Strips Logo" className="h-7 sm:h-8 w-auto object-contain" />
          </a>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/15 text-xs font-mono font-semibold text-[#0d0d0d] hover:bg-black hover:text-white transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bagikan</span>
          </button>
        </div>
      </header>

      {/* Main Wide Article Container */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Category & Meta */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#c5f737] text-black shadow-sm">
            {article.category}
          </span>
          <span className="text-xs font-mono text-zinc-500">
            • {article.readTime}
          </span>
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
            • Diperbarui {article.publishDate}
          </span>
        </div>

        {/* Big Wide Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black text-[#0d0d0d] tracking-tight leading-[1.15] mb-8">
          {article.title}
        </h1>

        {/* Author & Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-5 border-y border-black/10 text-xs sm:text-sm font-mono text-zinc-600 mb-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-zinc-800" />
              <span className="font-semibold text-black">{article.author}</span>
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-zinc-800" />
              <span>{article.publishDate}</span>
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-zinc-800" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <span className="text-xs font-mono text-zinc-400">
            Pico Insights & Panduan
          </span>
        </div>

        {/* Wide Cover Image Showcase */}
        {article.coverImage && (
          <div className="w-full h-72 sm:h-[420px] md:h-[500px] rounded-3xl overflow-hidden bg-zinc-100 border border-black/10 flex items-center justify-center p-6 mb-12 shadow-sm">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-contain filter contrast-105 select-none"
            />
          </div>
        )}

        {/* Wide Lead Summary Quote */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border-l-4 border-black text-lg sm:text-2xl text-zinc-800 font-medium leading-relaxed italic mb-14">
          "{article.summary}"
        </div>

        {/* Article Deep-Dive Sections */}
        <article className="space-y-12 text-zinc-800">
          {article.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#0d0d0d] tracking-tight">
                {sec.heading}
              </h2>
              {sec.body.map((p, pIdx) => (
                <p key={pIdx} className="text-base sm:text-xl leading-relaxed text-zinc-700 font-light">
                  {p}
                </p>
              ))}

              {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8 border border-black/10 space-y-3 mt-4">
                  {sec.bulletPoints.map((point, ptIdx) => (
                    <div key={ptIdx} className="flex items-start gap-3 text-base sm:text-lg text-zinc-800">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                      <span className="font-normal">{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Tag Cloud */}
        <div className="pt-10 mt-12 border-t border-black/10">
          <span className="text-xs font-mono uppercase text-zinc-400 block mb-3 font-semibold">
            Kata Kunci & Topik Relevan:
          </span>
          <div className="flex flex-wrap gap-2">
            {article.keywords.map((kw, idx) => (
              <span key={idx} className="px-3.5 py-1.5 bg-zinc-100 rounded-lg text-xs font-mono text-zinc-700 font-medium">
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Wide Bottom Conversion CTA Card */}
        <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-white/10">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#c5f737]" />
              <span>Solusi Langsung</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Tertarik Menggunakan Layanan Pico Booth?
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Konsultasikan kebutuhan sewa photobooth, software photo booth murah cuma 5rb/transaksi, atau paket usaha mesin photobooth 79jt bersama tim ahli kami.
            </p>
          </div>

          <a
            href={article.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-[#c5f737] text-[#0d0d0d] font-mono font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-[#b5f524] hover:scale-105 transition-all shrink-0 shadow-lg"
          >
            <span>{article.ctaText}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-24 pt-16 border-t border-black/10">
            <h3 className="text-2xl sm:text-3xl font-sans font-bold text-[#0d0d0d] tracking-tight mb-8">
              Artikel & Wawasan Lainnya
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel.slug)}
                  className="group cursor-pointer rounded-3xl p-7 bg-zinc-50 border border-black/10 hover:border-black hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-[#c5f737] text-black font-bold">
                        {rel.category}
                      </span>
                      <span>•</span>
                      <span>{rel.readTime}</span>
                    </div>

                    <h4 className="text-xl font-bold text-[#0d0d0d] tracking-tight mb-3 leading-snug group-hover:opacity-75 transition-opacity">
                      {rel.title}
                    </h4>

                    <p className="text-sm text-zinc-600 font-light line-clamp-2 mb-6">
                      {rel.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono font-bold text-[#0d0d0d]">
                    <span>BACA SELENGKAPNYA</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
