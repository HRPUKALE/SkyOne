import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuoteModal } from './components/QuoteModal';

import { HomePage } from './pages/HomePage';
import { TrackPage } from './pages/TrackPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { LocationsPage } from './pages/LocationsPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ProhibitedItemsPage } from './pages/ProhibitedItemsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Programmatic navigation
  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Render current view
  const renderCurrentPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={navigate}
          onOpenQuote={() => setIsQuoteModalOpen(true)}
        />
      );
    }

    if (currentPath === '/track') {
      return (
        <TrackPage
          onNavigate={navigate}
          onOpenQuote={() => setIsQuoteModalOpen(true)}
        />
      );
    }

    if (currentPath === '/services') {
      return (
        <ServicesPage
          onSelectService={(slug) => navigate(`/services/${slug}`)}
          onOpenQuote={() => setIsQuoteModalOpen(true)}
        />
      );
    }

    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return (
        <ServiceDetailPage
          slug={slug}
          onNavigate={navigate}
          onOpenQuote={() => setIsQuoteModalOpen(true)}
        />
      );
    }

    if (currentPath === '/about') {
      return (
        <AboutPage
          onNavigate={navigate}
          onOpenQuote={() => setIsQuoteModalOpen(true)}
        />
      );
    }

    if (currentPath === '/locations') {
      return (
        <LocationsPage
          onOpenQuote={() => setIsQuoteModalOpen(true)}
        />
      );
    }

    if (currentPath === '/quote') {
      return <QuotePage />;
    }

    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    if (currentPath === '/faq') {
      return (
        <FaqPage
          onNavigate={navigate}
          onOpenQuote={() => setIsQuoteModalOpen(true)}
        />
      );
    }

    if (currentPath === '/privacy') {
      return <PrivacyPage />;
    }

    if (currentPath === '/terms') {
      return <TermsPage />;
    }

    if (currentPath === '/prohibited-items') {
      return (
        <ProhibitedItemsPage
          onContactClick={() => navigate('/contact')}
        />
      );
    }

    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#0046B8] selection:text-white">
      {/* 1. Announcement Bar */}
      <AnnouncementBar onQuoteClick={() => setIsQuoteModalOpen(true)} />

      {/* 2. Sticky Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
        onOpenTrack={() => {
          if (currentPath === '/') {
            const el = document.getElementById('tracking-portal');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
              navigate('/track');
            }
          } else {
            navigate('/track');
          }
        }}
      />

      {/* Main Routed Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 16. Footer */}
      <Footer
        onNavigate={navigate}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />

      {/* Quick Action Interactive Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
