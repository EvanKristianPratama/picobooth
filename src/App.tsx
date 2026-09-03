import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { USPSection } from './components/USPSection';
import { ClientsSection } from './components/ClientsSection';
import { GallerySection } from './components/GallerySection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { ArticlePage } from './components/ArticlePage';
import { BookingModal } from './components/BookingModal';
import { DemoModal } from './components/DemoModal';
import { Footer } from './components/Footer';
import { articles } from './data/articles';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [activeArticleSlug, setActiveArticleSlug] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('article');
  });

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setActiveArticleSlug(params.get('article'));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenArticle = (slug: string) => {
    window.history.pushState({}, '', `?article=${slug}`);
    setActiveArticleSlug(slug);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    window.history.pushState({}, '', window.location.pathname);
    setActiveArticleSlug(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const currentArticle = activeArticleSlug
    ? articles.find((a) => a.slug === activeArticleSlug)
    : null;

  return (
    <div className="relative min-h-screen bg-white text-[#0d0d0d] overflow-hidden selection:bg-[#c5f737] selection:text-[#0d0d0d]">
      {/* GSAP Preloader Screen */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Custom Awwwards Cursor */}
      <CustomCursor />

      {currentArticle ? (
        <>
          <ArticlePage
            article={currentArticle}
            onBack={handleBackToHome}
            onSelectArticle={handleOpenArticle}
          />
          <Footer onOpenBooking={() => setIsBookingOpen(true)} />
        </>
      ) : (
        <>
          {/* Navigation Header */}
          <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

          {/* Main Page Sections */}
          <main>
            <HeroSection
              onOpenBooking={() => setIsBookingOpen(true)}
              onOpenDemo={() => setIsDemoOpen(true)}
            />
            <AboutSection />
            <ServicesSection />
            <USPSection />
            <ClientsSection />
            <GallerySection />
            <BlogSection onOpenArticle={handleOpenArticle} />
            <FAQSection />
          </main>

          {/* Footer */}
          <Footer onOpenBooking={() => setIsBookingOpen(true)} />
        </>
      )}

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
};

export default App;
