import React from 'react';
import { ArrowRight, Search, ShieldCheck, Plane, Box, Globe, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  onTrackClick: () => void;
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTrackClick, onQuoteClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-100">
      {/* Background Subtle World Map Watermark Lines (Low Opacity) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] overflow-hidden" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <circle cx="200" cy="300" r="180" stroke="#0046B8" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="650" cy="240" r="220" stroke="#0046B8" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M 120 380 Q 400 150 780 220 T 1100 160" stroke="#0046B8" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M 220 480 Q 550 320 850 360" stroke="#E5192D" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Statement & Primary Conversion */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Brand Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-blue-100/60 border border-blue-200/70 text-[#0046B8] text-xs font-extrabold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D] animate-pulse"></span>
              <span>SKYONE INTERNATIONAL COURIER SERVICE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] font-display">
              Your Shipment.
              <br />
              <span className="text-[#0046B8] relative inline-block">
                Our Commitment.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#E5192D]" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path d="M 0 6 Q 150 12 300 4" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed pt-1">
              Fast, secure and reliable international courier and cargo solutions — from pickup to delivery. Direct global air links connecting your parcels to key world markets with priority tracking.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onTrackClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#0046B8] hover:bg-[#003694] active:bg-[#002a75] rounded-xl shadow-md shadow-blue-900/15 transition-all duration-150 group cursor-pointer active:scale-[0.98]"
              >
                <Search className="w-4 h-4 text-white" />
                <span>TRACK YOUR SHIPMENT</span>
                <ArrowRight className="w-4 h-4 text-[#E5192D] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all duration-150 cursor-pointer active:scale-[0.98]"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Below CTA Subtext */}
            <div className="pt-2 text-xs font-semibold text-slate-500 flex flex-wrap items-center gap-y-1 gap-x-2">
              <span className="text-slate-700">International Courier</span>
              <span className="text-[#E5192D]">●</span>
              <span className="text-slate-700">Cargo Logistics</span>
              <span className="text-[#E5192D]">●</span>
              <span className="text-slate-700">Air Freight</span>
              <span className="text-[#E5192D]">●</span>
              <span className="text-slate-700">Door-to-Door</span>
            </div>

            {/* Interactive Route Banner from prompt: INDIA ●───────➜──────● UK */}
            <div className="pt-4 max-w-lg">
              <div className="p-3.5 bg-white rounded-xl border border-blue-100 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0046B8] ring-4 ring-blue-100"></div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">INDIA</div>
                    <div className="text-[10px] text-slate-500">Origin Gateway</div>
                  </div>
                </div>

                {/* Animated Flight Route Track */}
                <div className="flex-1 px-2 relative flex items-center">
                  <div className="w-full h-0.5 bg-slate-200 relative">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0046B8] to-[#E5192D] w-3/4 animate-pulse"></div>
                  </div>
                  <div className="absolute left-3/4 -translate-x-1/2 -top-2 text-[#E5192D]">
                    <Plane className="w-4 h-4 transform rotate-45 animate-bounce" />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-right">
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">UK / GLOBAL</div>
                    <div className="text-[10px] text-slate-500">Destination</div>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E5192D] ring-4 ring-red-100"></div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Logistics Visual with Arrow Concept */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Container */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 rounded-2xl p-6 sm:p-7 text-white shadow-xl shadow-slate-900/10 border border-slate-800 overflow-hidden">
                
                {/* Background glow effects */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#E5192D]/15 rounded-full blur-3xl pointer-events-none"></div>

                {/* Header of Visual */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E5192D]"></span>
                    <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">Express Flight Linehaul</span>
                  </div>
                  <span className="text-xs font-mono text-blue-400 bg-blue-950/70 px-2 py-0.5 rounded border border-blue-800/60">
                    AWB DISPATCH
                  </span>
                </div>

                {/* Route Visualizer Graph */}
                <div className="py-6 relative">
                  <svg className="w-full h-32 overflow-visible" viewBox="0 0 380 120" fill="none">
                    {/* Dashed background arc */}
                    <path
                      d="M 30 90 Q 190 10 350 90"
                      stroke="#334155"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />

                    {/* Active Flight Path Arc */}
                    <path
                      d="M 30 90 Q 190 10 350 90"
                      stroke="url(#routeGradient)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Gradient definition */}
                    <defs>
                      <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="60%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#E5192D" />
                      </linearGradient>
                    </defs>

                    {/* Origin Pin (Mumbai) */}
                    <circle cx="30" cy="90" r="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="30" y="112" fill="#94A3B8" fontSize="11" fontWeight="700" textAnchor="middle">MUMBAI</text>

                    {/* Intermediate Hub (Dubai) */}
                    <circle cx="190" cy="50" r="5" fill="#60A5FA" stroke="#FFFFFF" strokeWidth="1.5" />
                    <text x="190" y="36" fill="#60A5FA" fontSize="10" fontWeight="600" textAnchor="middle">DUBAI HUB</text>

                    {/* Moving Airplane Marker along the route */}
                    <g transform="translate(230, 48) rotate(15)">
                      <polygon points="0,0 -16,-6 -12,0 -16,6" fill="#E5192D" />
                    </g>

                    {/* Destination Pin (London) */}
                    <circle cx="350" cy="90" r="6" fill="#E5192D" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="350" y="112" fill="#F87171" fontSize="11" fontWeight="700" textAnchor="middle">LONDON</text>
                  </svg>
                </div>

                {/* Live Status Floating Ticker inside Visual */}
                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Current Transit Phase</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      Direct Air Linehaul
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-800/80 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400">Transit Mode</div>
                      <div className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                        <Plane className="w-3 h-3 text-blue-400" />
                        <span>Air Cargo</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Clearance</div>
                      <div className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>Pre-Cleared</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">Security</div>
                      <div className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                        <Box className="w-3 h-3 text-[#E5192D]" />
                        <span>Sealed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Line */}
                <div className="pt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-blue-400" />
                    Continuous flight monitoring
                  </span>
                  <span className="text-slate-500 font-mono">SKYONE-SYS</span>
                </div>

              </div>

              {/* Floating Badge (Decorative Accent) */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white text-slate-900 px-4 py-2.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0046B8] flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 leading-tight">Cross-Border Reach</div>
                  <div className="text-[10px] text-slate-500">Express hubs worldwide</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
