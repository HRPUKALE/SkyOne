import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Plane, Clock, Award } from 'lucide-react';

interface FeaturedServiceProps {
  onLearnMore: () => void;
  onGetQuote: () => void;
}

export const FeaturedService: React.FC<FeaturedServiceProps> = ({ 
  onLearnMore, 
  onGetQuote 
}) => {
  const highlights = [
    { title: 'Fast Transit', desc: 'Direct international air routes with optimized linehauls' },
    { title: 'Secure Handling', desc: 'Tamper-evident sealing and verified chain-of-custody' },
    { title: 'Shipment Tracking', desc: 'Real-time AWB updates and dispatch notifications' },
    { title: 'Door-to-Door Delivery', desc: 'Direct doorstep pickup through to final recipient handover' },
    { title: 'Customs Assistance', desc: 'Comprehensive regulatory documentation and HS guidance' }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Logistics Imagery & Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
              {/* Image asset with fallback styling */}
              <div className="relative h-[380px] sm:h-[440px] w-full bg-slate-900">
                <img
                  src="/src/assets/images/hero_air_cargo_1791116054335.jpg"
                  alt="SkyOne International Cargo Aircraft on Runway"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Measured Scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>

                {/* Floating Overlay Badge on Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0046B8] flex items-center justify-center">
                        <Plane className="w-5 h-5 transform -rotate-45" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-slate-500 uppercase">PRIORITY AIRLINE ALLOCATION</div>
                        <div className="text-sm font-bold text-slate-900">Scheduled Daily Departures</div>
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <div className="text-xs font-bold text-[#E5192D]">Transit Guarantee</div>
                      <div className="text-[11px] text-slate-500">Tier-1 Airline Capacity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Offset Border */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-40 h-40 border-b-2 border-l-2 border-[#0046B8]/40 rounded-bl-2xl -z-10"></div>
          </div>

          {/* Right Column: Content & Benefits */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-[#0046B8] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
              <span>FEATURED CORE SERVICE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight font-display">
              Global Delivery.
              <br />
              <span className="text-[#0046B8]">Local Attention.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When shipping overseas, certainty matters. SkyOne International Courier combines dedicated global air logistics with meticulous door-to-door ground operations. We treat every parcel, commercial sample, and critical document as an imperative commitment.
            </p>

            {/* 5 Features List */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0046B8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0046B8]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{item.title}: </span>
                    <span className="text-xs sm:text-sm text-slate-600 font-normal">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0046B8] hover:bg-[#003694] active:bg-[#002a75] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-blue-900/10 transition-all cursor-pointer group active:scale-[0.98]"
              >
                <span>LEARN MORE ABOUT COURIER</span>
                <ArrowRight className="w-4 h-4 text-[#E5192D] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onGetQuote}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>Request Custom Quote</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
