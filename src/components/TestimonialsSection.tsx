import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'R. K. Sharma',
      role: 'Head of Export Operations',
      company: 'Apex Precision Engineering (Demo Client)',
      rating: 5,
      review: 'SkyOne handled our critical air cargo machinery consignment to Frankfurt with flawless precision. The proactive milestone updates gave our German buyers total confidence.'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Supply Chain Coordinator',
      company: 'Meridian Global Trade UK (Demo Client)',
      rating: 5,
      review: 'The express document delivery between Mumbai and London Heathrow consistently meets our tight deadlines. Customs pre-clearance has saved us days on time-sensitive tenders.'
    },
    {
      name: 'Dr. Vikram Mehta',
      role: 'Managing Director',
      company: 'BioHealth Diagnostic Supplies (Demo Client)',
      rating: 5,
      review: 'Reliability in temperature-controlled diagnostic samples is non-negotiable. SkyOne delivers with pristine integrity and true 24/7 dispatcher responsiveness.'
    },
    {
      name: 'Amanda Chen',
      role: 'Cross-Border E-Commerce Director',
      company: 'Aura Lifestyle Brands (Demo Client)',
      rating: 5,
      review: 'Their seamless door-to-door transit to Dubai and Singapore reduced our parcel returns significantly. The tracking portal is clear and easy for our customers.'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-[#0046B8] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
              <span>CUSTOMER EXPERIENCES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              What Our Customers Say
            </h2>

            <p className="text-sm sm:text-base text-slate-600">
              Trusted by corporate exporters, manufacturers, and international businesses worldwide.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0046B8] hover:border-blue-300 shadow-xs flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0046B8] hover:border-blue-300 shadow-xs flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:border-blue-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blue-100" />
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <div className="font-extrabold text-sm text-slate-900">
                  {item.name}
                </div>
                <div className="text-xs text-[#0046B8] font-medium">
                  {item.role}
                </div>
                <div className="text-xs text-slate-500">
                  {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Placeholder Disclosure according to instructions */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-slate-400 italic">
            * Testimonials shown are illustrative preview placeholders and will be updated with verified corporate client endorsements.
          </p>
        </div>

      </div>
    </section>
  );
};
