import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS_LIST } from '../data/faqData';

interface FaqSectionProps {
  onContactClick?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS_LIST[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-[#0046B8] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Clear Answers for Your Shipments
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Everything you need to know about international courier procedures, AWB tracking, and customs.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS_LIST.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left font-bold text-slate-900 hover:text-[#0046B8] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-blue-50 text-[#0046B8]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in-50 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        {onContactClick && (
          <div className="mt-10 text-center text-xs text-slate-500">
            Have a specialized cargo or tender question?{' '}
            <button
              onClick={onContactClick}
              className="font-bold text-[#0046B8] hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              <span>Contact our Air Logistics Helpdesk</span>
              <ArrowRight className="w-3 h-3 text-[#E5192D]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
