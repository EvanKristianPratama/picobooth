import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Berapa harga sewa photobooth untuk event & wedding di Pico Booth?',
    answer: 'Paket sewa photobooth di Pico Booth mulai dari Rp 999.000. Setiap paket sudah termasuk kru operator standby, cetak instan (thermal receipt cepat 3 detik atau 4R studio), custom desain frame berlogo acara, dan link download cloud gallery via scan QR code instan di tempat.',
    category: 'Sewa Photobooth'
  },
  {
    question: 'Bagaimana cara menggunakan software photo booth murah Pico Booth?',
    answer: 'Software Pico Booth OS mengusung sistem Pay-As-You-Go tanpa biaya langganan bulanan yang mahal—hanya Rp 5.000 per transaksi foto berhasil! Anda cukup mengakses browser di laptop (Windows/Mac) atau tablet, menghubungkan kamera (DSLR/webcam), dan software siap digunakan untuk event.',
    category: 'Software Photobooth'
  },
  {
    question: 'Apa saja yang didapatkan dalam paket usaha photobooth komersial seharga 79jt?',
    answer: 'Paket usaha photobooth lengkap seharga 79 juta (diskon dari 90jt) mencakup satu unit hardware booth komersial berbahan aluminium kokoh, layar sentuh interaktif, kamera high-definition, printer berkecepatan tinggi, integrasi software Pico OS, pelatihan pengoperasian, serta pendampingan bisnis dengan estimasi balik modal dalam 3-6 bulan.',
    category: 'Paket Usaha'
  },
  {
    question: 'Di mana saja cakupan wilayah layanan sewa photobooth Pico Booth?',
    answer: 'Layanan sewa photobooth kami beroperasi aktif di seluruh wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi), Bandung, Jawa Barat, dan seluruh Indonesia dengan biaya akomodasi yang transparan.',
    category: 'Sewa Photobooth'
  },
  {
    question: 'Bagaimana jika belum memiliki modal cukup untuk membeli unit photobooth?',
    answer: 'Pico Booth memiliki program kemitraan profit sharing hingga 30% bagi hasil pendapatan. Anda dapat menyediakan lokasi strategis (seperti kafe, mall, atau studio) atau jaringan event, dan kami akan mensupport unit booth serta teknologinya untuk berkembang bersama.',
    category: 'Paket Usaha'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white text-[#0d0d0d] border-t border-black/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 text-zinc-800 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-600" />
            <span>FAQ & Bantuan</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-[#0d0d0d] tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-zinc-600 text-base sm:text-lg max-w-xl mx-auto font-light">
            Informasi lengkap seputar sewa photobooth, software murah pay-per-use, dan kemitraan paket usaha.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'bg-zinc-50 border-black shadow-sm' : 'bg-white border-black/15 hover:border-black/40'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#c5f737] text-black shrink-0 hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-sans font-bold text-[#0d0d0d]">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1 rounded-full bg-black/5 text-black shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-zinc-600 leading-relaxed font-light border-t border-black/5 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
