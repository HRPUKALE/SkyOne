import React from 'react';
import { 
  Globe, 
  Zap, 
  Plane, 
  Package, 
  Truck, 
  ShieldCheck, 
  ShoppingBag, 
  FileText, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (slug: string) => void;
  onViewAll?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService,
  onViewAll 
}) => {
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
    <section id="services-section" className="py-18 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#0046B8] text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
              <span>COMPREHENSIVE LOGISTICS SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Engineered for Global Speed &amp; Precision
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              From mission-critical document dispatch to heavy commercial air cargo, SkyOne delivers tailored supply chain solutions worldwide.
            </p>
          </div>

          {onViewAll && (
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0046B8] hover:text-[#003694] group cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 text-[#E5192D] group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => {
            const IconComponent = getIcon(service.iconName);

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.slug)}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-[#0046B8] shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-200 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#E5192D] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-blue-50/80 text-[#0046B8] group-hover:bg-[#0046B8] group-hover:text-white transition-all flex items-center justify-center">
                      <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0046B8] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 font-normal leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Bottom Action & Transit Time */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-500 font-mono">
                    {service.deliveryTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#0046B8] group-hover:text-[#E5192D] transition-colors font-bold">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
