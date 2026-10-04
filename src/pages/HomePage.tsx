import React from 'react';
import { Hero } from '../components/Hero';
import { TrackingSection } from '../components/TrackingSection';
import { TrustStats } from '../components/TrustStats';
import { ServicesSection } from '../components/ServicesSection';
import { FeaturedService } from '../components/FeaturedService';
import { HowItWorks } from '../components/HowItWorks';
import { GlobalNetwork } from '../components/GlobalNetwork';
import { WhySkyOne } from '../components/WhySkyOne';
import { AboutSection } from '../components/AboutSection';
import { ValuesSection } from '../components/ValuesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { RateCalculatorSection } from '../components/RateCalculatorSection';
import { FaqSection } from '../components/FaqSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const scrollToTracking = () => {
    const el = document.getElementById('tracking-portal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="space-y-0">
      {/* 3. Hero */}
      <Hero
        onTrackClick={scrollToTracking}
        onQuoteClick={onOpenQuote}
      />

      {/* 4. Track Shipment (immediately following hero) */}
      <TrackingSection />

      {/* 5. Trust Statistics */}
      <TrustStats />

      {/* 6. Services Bento / Grid */}
      <ServicesSection
        onSelectService={(slug) => onNavigate(`/services/${slug}`)}
        onViewAll={() => onNavigate('/services')}
      />

      {/* 7. Featured International Courier */}
      <FeaturedService
        onLearnMore={() => onNavigate('/services/international-courier')}
        onGetQuote={onOpenQuote}
      />

      {/* 8. How SkyOne Works (01 Book -> 06 Deliver) */}
      <HowItWorks />

      {/* 9. Global Network */}
      <GlobalNetwork
        onViewLocations={() => onNavigate('/locations')}
      />

      {/* 10. Why SkyOne (6 Features) */}
      <WhySkyOne />

      {/* 11. About SkyOne */}
      <AboutSection
        onLearnMore={() => onNavigate('/about')}
        onGetQuote={onOpenQuote}
      />

      {/* 12. Values (5 Values) */}
      <ValuesSection />

      {/* 13. Testimonials Carousel */}
      <TestimonialsSection />

      {/* 14. Quote CTA & Rate Calculator */}
      <RateCalculatorSection onOpenQuote={onOpenQuote} />

      {/* 15. FAQ Section */}
      <FaqSection onContactClick={() => onNavigate('/contact')} />
    </div>
  );
};
