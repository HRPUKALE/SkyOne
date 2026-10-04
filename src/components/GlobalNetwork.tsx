import React from 'react';
import { Globe, Plane, MapPin, ArrowRight } from 'lucide-react';

interface GlobalNetworkProps {
  onViewLocations?: () => void;
}

export const GlobalNetwork: React.FC<GlobalNetworkProps> = ({ onViewLocations }) => {
  const routes = [
    { origin: 'Mumbai (BOM)', destination: 'Dubai (DXB)', duration: 'Same-Day / Next-Day', tag: 'High Frequency' },
    { origin: 'Delhi (DEL)', destination: 'London (LHR)', duration: '2 - 3 Days Express', tag: 'Core Linehaul' },
    { origin: 'Mumbai (BOM)', destination: 'New York (JFK)', duration: '3 - 4 Days Priority', tag: 'Transatlantic' },
    { origin: 'Bangalore (BLR)', destination: 'Singapore (SIN)', duration: '2 Days Express', tag: 'Asia Corridor' }
  ];

  const regions = [
    { name: 'India Hubs', desc: 'Mumbai, New Delhi, Ahmedabad, Bangalore, Chennai' },
    { name: 'Middle East', desc: 'Dubai, Abu Dhabi, Riyadh, Doha, Muscat' },
    { name: 'United Kingdom', desc: 'London Heathrow, Manchester, Birmingham' },
    { name: 'Europe', desc: 'Frankfurt, Paris, Amsterdam, Milan, Madrid' },
    { name: 'North America', desc: 'New York, Chicago, Los Angeles, Toronto' },
    { name: 'Asia Pacific & Oceania', desc: 'Singapore, Hong Kong, Sydney, Melbourne' }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background World Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60A5FA" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950 text-blue-400 border border-blue-800 text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
            <span>STRATEGIC TRANSIT CORRIDORS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Connecting You to the World
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Reliable air freight routing connecting the subcontinent with major global economic centres.
          </p>
        </div>

        {/* Global Map Schematic Visual */}
        <div className="relative bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 mb-10 overflow-hidden">
          
          <div className="relative h-64 sm:h-80 w-full flex items-center justify-center">
            
            {/* SVG Flight Routes Visualizer */}
            <svg className="w-full h-full max-w-4xl" viewBox="0 0 900 400" fill="none">
              {/* World Map Simplified Outlines (Stylized) */}
              <g opacity="0.25" stroke="#3B82F6" strokeWidth="1" fill="#1E293B">
                {/* North America */}
                <path d="M 120 100 Q 200 90 240 140 T 160 220 Z" />
                {/* Europe */}
                <path d="M 420 80 Q 480 80 500 120 T 440 160 Z" />
                {/* Africa */}
                <path d="M 430 180 Q 510 180 520 280 T 440 300 Z" />
                {/* India & South Asia */}
                <path d="M 580 160 Q 640 170 650 240 T 590 260 Z" fill="#0046B8" opacity="0.4" />
                {/* East Asia */}
                <path d="M 680 120 Q 780 130 760 220 T 670 200 Z" />
                {/* Australia */}
                <path d="M 720 270 Q 820 270 800 340 T 730 340 Z" />
              </g>

              {/* Major Hub Pins */}
              {/* Mumbai Gateway */}
              <circle cx="600" cy="210" r="7" fill="#0046B8" stroke="#FFFFFF" strokeWidth="2" />
              <text x="600" y="235" fill="#FFFFFF" fontSize="12" fontWeight="800" textAnchor="middle">MUMBAI</text>

              {/* Dubai Hub */}
              <circle cx="530" cy="180" r="5" fill="#60A5FA" stroke="#FFFFFF" strokeWidth="1.5" />
              <text x="530" y="165" fill="#93C5FD" fontSize="11" fontWeight="700" textAnchor="middle">DUBAI</text>

              {/* London Heathrow */}
              <circle cx="440" cy="110" r="6" fill="#E5192D" stroke="#FFFFFF" strokeWidth="2" />
              <text x="440" y="95" fill="#FCA5A5" fontSize="11" fontWeight="700" textAnchor="middle">LONDON</text>

              {/* New York JFK */}
              <circle cx="210" cy="130" r="6" fill="#E5192D" stroke="#FFFFFF" strokeWidth="2" />
              <text x="210" y="115" fill="#FCA5A5" fontSize="11" fontWeight="700" textAnchor="middle">NEW YORK</text>

              {/* Singapore */}
              <circle cx="710" cy="240" r="5" fill="#60A5FA" stroke="#FFFFFF" strokeWidth="1.5" />
              <text x="710" y="260" fill="#93C5FD" fontSize="11" fontWeight="700" textAnchor="middle">SINGAPORE</text>

              {/* Flight Arcs */}
              {/* Mumbai -> Dubai */}
              <path d="M 600 210 Q 565 185 530 180" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="4 4" />
              
              {/* Dubai -> London */}
              <path d="M 530 180 Q 480 120 440 110" stroke="#E5192D" strokeWidth="3" />

              {/* London -> New York */}
              <path d="M 440 110 Q 320 80 210 130" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 6" />

              {/* Mumbai -> Singapore */}
              <path d="M 600 210 Q 660 215 710 240" stroke="#60A5FA" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

          </div>

          {/* Floating Sample Route Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {routes.map((rt, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 hover:border-blue-600 transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="text-blue-400 font-mono">{rt.tag}</span>
                  <span className="text-slate-400">{rt.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <span>{rt.origin}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E5192D]" />
                  <span>{rt.destination}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Global Regions Breakdown */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {regions.map((reg, idx) => (
            <div key={idx} className="bg-slate-900/60 rounded-xl p-4 border border-slate-800/80">
              <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                <MapPin className="w-3 h-3 text-[#E5192D]" />
                <span>{reg.name}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {reg.desc}
              </p>
            </div>
          ))}
        </div>

        {onViewLocations && (
          <div className="mt-8 text-center">
            <button
              onClick={onViewLocations}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white uppercase tracking-wider cursor-pointer"
            >
              <span>Explore Network Hubs &amp; Offices</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E5192D]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
