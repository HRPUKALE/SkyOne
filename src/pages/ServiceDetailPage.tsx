import React from 'react';
import { SERVICES_LIST } from '../data/servicesData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Plane, 
  Globe, 
  Package, 
  ShieldCheck, 
  Zap, 
  Truck, 
  ShoppingBag, 
  FileText 
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenQuote
}) => {
  const service = SERVICES_LIST.find((s) => s.slug === slug) || SERVICES_LIST[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return Globe;
      case 'Zap': return Zap;
      case 'Plane': return Plane;
      case 'Package': return Package;
      case 'Truck': return Truck;
      case 'ShieldCheck': return ShieldCheck;
      case 'ShoppingBag': return ShoppingBag;
      case 'FileText': return FileText;
      default: return Package;
    }
  };

  const Icon = getIcon(service.iconName);

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0046B8] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </button>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#0046B8] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
              <span>SERVICE {service.number}</span>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-[#0046B8]" />
              <span>Standard Transit: {service.deliveryTime}</span>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0046B8] flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
                {service.title}
              </h1>
              <p className="text-base text-slate-600 mt-2 leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {service.fullDescription}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0046B8] hover:bg-[#003694] active:bg-[#002a75] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer group active:scale-[0.98]"
            >
              <span>GET QUOTE FOR {service.title.toUpperCase()}</span>
              <ArrowRight className="w-4 h-4 text-[#E5192D] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('/track')}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>Track Existing Consignment</span>
            </button>
          </div>
        </div>

        {/* Two Columns: Specifications & Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Features / Capabilities */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0046B8]" />
              <span>Key Service Capabilities</span>
            </h3>
            <ul className="space-y-3">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0046B8] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Use Cases */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-[#E5192D]" />
              <span>Recommended Applications</span>
            </h3>
            <ul className="space-y-3">
              {service.idealFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D] mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
