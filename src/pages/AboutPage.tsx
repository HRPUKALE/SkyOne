import React from 'react';
import { ValuesSection } from '../components/ValuesSection';
import { WhySkyOne } from '../components/WhySkyOne';
import { GlobalNetwork } from '../components/GlobalNetwork';
import { ArrowRight, Globe, Shield, Target, Compass } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="space-y-0 bg-white">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/60 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-100/70 text-[#0046B8] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
            <span>OUR STORY &amp; ETHOS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight font-display">
            Moving More Than Packages.
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Connecting people, enterprises, and international markets through disciplined air logistics, uncompromising security, and committed delivery standards.
          </p>
        </div>
      </section>

      {/* Editorial Company Overview */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Global Connectivity Built on Certainty
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                SkyOne International Courier Service was established to address the critical friction in cross-border air logistics: predictability. In an interconnected world where international commerce demands tight delivery schedules, we provide businesses with reliable airline space allocations and structured end-to-end management.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                From our primary gateway in Mumbai to strategic distribution centers spanning the Middle East, Europe, North America, and the Asia-Pacific region, we bridge continents through transparent tracking technology and personalized logistics care.
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-xs font-mono font-bold text-[#0046B8] uppercase tracking-wider mb-2">
                Operational Framework
              </div>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5192D]"></span>
                  <span><strong>Primary Focus:</strong> International Courier &amp; Air Cargo</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0046B8]"></span>
                  <span><strong>Linehaul Network:</strong> Tier-1 Commercial Airline Alliances</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5192D]"></span>
                  <span><strong>Tracking Engine:</strong> Standardized Real-Time AWB Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0046B8]"></span>
                  <span><strong>Customer Support:</strong> Dedicated Air Dispatch Helpdesk</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
            <div className="p-8 rounded-2xl bg-blue-50/50 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-[#0046B8] text-white flex items-center justify-center mb-4 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To provide fast, secure, and technologically transparent cross-border courier and cargo services that empower exporters, enterprises, and individuals to conduct global trade with absolute confidence.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-rose-50/40 border border-rose-100">
              <div className="w-12 h-12 rounded-xl bg-[#E5192D] text-white flex items-center justify-center mb-4 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be the most dependable international courier partner recognized for integrity, operational precision, and seamless customer service across all major air cargo corridors.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Values Section Component */}
      <ValuesSection />

      {/* Why Choose SkyOne Component */}
      <WhySkyOne />

      {/* Global Network Component */}
      <GlobalNetwork onViewLocations={() => onNavigate('/locations')} />

      {/* Big Action CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
            Ready to Dispatch Your Next International Shipment?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Our logistics coordinators are standing by to guide you through route schedules, rate cards, and customs preparation.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0046B8] hover:bg-[#003694] active:bg-[#002a75] text-white text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer group active:scale-[0.98]"
            >
              <span>REQUEST COMMERCIAL QUOTE</span>
              <ArrowRight className="w-4 h-4 text-[#E5192D] group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold rounded-xl transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>Contact Dispatch Center</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
