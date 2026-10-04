import React, { useState } from 'react';
import { GLOBAL_HUBS } from '../data/locationsData';
import { Search, MapPin, Phone, Mail, Clock, Globe, Building2 } from 'lucide-react';

interface LocationsPageProps {
  onOpenQuote: () => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onOpenQuote }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('ALL');

  const regions = ['ALL', 'South Asia', 'Middle East', 'Europe', 'North America', 'Asia Pacific', 'Oceania'];

  const filteredLocations = GLOBAL_HUBS.filter((loc) => {
    const matchesSearch = 
      loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.office.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion = selectedRegion === 'ALL' || loc.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="py-14 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-[#0046B8] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
            <span>STRATEGIC HUBS &amp; DESKS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
            Global Network Hubs
          </h1>

          <p className="text-sm sm:text-base text-slate-600">
            Our international air freight desks, transshipment terminals, and clearance offices worldwide.
          </p>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, country, or terminal office..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-[#0046B8] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0046B8]">
                    {loc.country}
                  </span>
                  {loc.isHub && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#0046B8] border border-blue-200">
                      Primary Gateway
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {loc.city}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mb-4">
                  {loc.office}
                </div>

                <div className="space-y-2.5 text-xs text-slate-600 pt-3 border-t border-slate-100">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E5192D] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{loc.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-2 px-3 text-xs font-bold text-[#0046B8] hover:text-[#003694] bg-blue-50/70 hover:bg-blue-100/70 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Book Linehaul from {loc.city}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Content Disclosure */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 italic">
            * Network locations and operational hours shown are representative of our international partner corridors and will be updated with local branch details.
          </p>
        </div>

      </div>
    </div>
  );
};
