import React from 'react';
import { SERVICES_LIST } from '../data/servicesData';
import { ArrowRight, Plane, Globe, Zap, Package, Truck, ShieldCheck, ShoppingBag, FileText, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  onSelectService: (slug: string) => void;
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onOpenQuote }) => {
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

  return (
    <div className="py-14 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 text-[#0046B8] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
            <span>END-TO-END GLOBAL LOGISTICS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
            Our International Services
          </h1>

          <p className="text-sm sm:text-base text-slate-600">
            Engineered for corporate exporters, e-commerce retailers, and time-sensitive cargo. Explore our dedicated delivery modes.
          </p>
        </div>

        {/* Services List with Rich Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service) => {
            const Icon = getIcon(service.iconName);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#0046B8] shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#E5192D] transition-colors">
                      SERVICE {service.number}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-[#0046B8] rounded-full border border-blue-100">
                      {service.deliveryTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0046B8] group-hover:bg-[#0046B8] group-hover:text-white transition-all flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0046B8] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {service.fullDescription}
                  </p>

                  {/* Key Features Preview */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0046B8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service.slug)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0046B8] group-hover:text-[#E5192D] transition-colors cursor-pointer"
                  >
                    <span>View Service Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenQuote}
                    className="px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 text-center max-w-4xl mx-auto border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Need a Customized Multi-Modal Cargo Plan?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-2 mb-6">
            For charter flights, dangerous goods (IATA certified), or enterprise contract freight rates, our senior cargo team will structure a dedicated schedule.
          </p>
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0046B8] hover:bg-[#003694] active:bg-[#002a75] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>Request Enterprise Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#E5192D]" />
          </button>
        </div>

      </div>
    </div>
  );
};
