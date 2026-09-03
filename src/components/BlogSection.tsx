import React from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { articles } from '../data/articles';

interface BlogSectionProps {
  onOpenArticle: (slug: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenArticle }) => {
  return (
    <section id="articles" className="py-24 bg-zinc-50 text-[#0d0d0d] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#0d0d0d] tracking-tight">
              Wawasan & Panduan Photobooth
            </h2>
            <p className="mt-3 text-zinc-600 text-base sm:text-lg max-w-2xl font-light">
              Pelajari tips sewa photobooth terbaik, perbandingan software booth murah, hingga analisis peluang cuan dari paket usaha mesin photobooth.
            </p>
          </div>

          <span className="text-xs font-mono text-zinc-500 hidden md:block">
            Terupdate September 2026
          </span>
        </div>

        {/* 3 Clean Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href={`?article=${article.slug}`}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  e.preventDefault();
                  onOpenArticle(article.slug);
                }
              }}
              className="group block rounded-3xl p-7 bg-white border border-black/15 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Preview */}
                <div className="w-full h-44 mb-6 rounded-2xl overflow-hidden bg-zinc-100 border border-black/5 flex items-center justify-center p-3 relative group-hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-contain filter contrast-105"
                    loading="lazy"
                  />
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-3 uppercase tracking-wider font-semibold">
                  <span className="text-[#0d0d0d] font-bold">{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#0d0d0d] tracking-tight mb-3 leading-snug group-hover:opacity-70 transition-opacity">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-zinc-600 font-sans leading-relaxed line-clamp-3 mb-6 font-light">
                  {article.summary}
                </p>
              </div>

              {/* Read More Trigger */}
              <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#0d0d0d] group-hover:underline underline-offset-4 flex items-center gap-1">
                  BACA SELENGKAPNYA
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  Halaman Penuh
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
