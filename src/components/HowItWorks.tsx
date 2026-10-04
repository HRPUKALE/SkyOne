import React from 'react';
import { 
  FileCheck, 
  Truck, 
  Barcode, 
  Plane, 
  MapPin, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'BOOK',
      desc: 'Submit shipment details online or over the phone. Receive your instant consignment AWB number.',
      icon: FileCheck
    },
    {
      num: '02',
      title: 'PICKUP',
      desc: 'Our uniformed courier agent collects the parcel directly from your doorstep with barcode verification.',
      icon: Truck
    },
    {
      num: '03',
      title: 'PROCESS',
      desc: 'Weighed, security inspected, packed, and pre-cleared for export customs filing.',
      icon: Barcode
    },
    {
      num: '04',
      title: 'SHIP',
      desc: 'Loaded onto scheduled express cargo flights with dedicated commercial airline partners.',
      icon: Plane
    },
    {
      num: '05',
      title: 'TRACK',
      desc: 'Continuous real-time milestone tracking from origin departure to overseas arrival.',
      icon: MapPin
    },
    {
      num: '06',
      title: 'DELIVER',
      desc: 'Final mile handoff to the recipient with digital signature confirmation (e-POD).',
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#0046B8] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
            <span>END-TO-END SHIPMENT LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            From Pickup to Delivery
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A seamless six-stage logistics journey connecting origin to destination with complete transparency.
          </p>
        </div>

        {/* Desktop Connected Journey (6 Columns) */}
        <div className="hidden lg:grid grid-cols-6 gap-4 relative">
          
          {/* Connecting arrow path line across all steps */}
          <div className="absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-[#0046B8] via-blue-400 to-[#E5192D] z-0"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.num} className="relative z-10 flex flex-col items-center text-center group">
                
                {/* Step Circle with Icon */}
                <div className="w-24 h-24 rounded-2xl bg-white border-2 border-slate-200 group-hover:border-[#0046B8] shadow-md group-hover:shadow-lg transition-all duration-200 flex flex-col items-center justify-center p-2 group-hover:-translate-y-1">
                  <span className="text-[10px] font-mono font-extrabold text-[#E5192D]">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0046B8] group-hover:bg-[#0046B8] group-hover:text-white transition-colors flex items-center justify-center mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Step Title & Description */}
                <div className="mt-5 space-y-1.5">
                  <h3 className="text-sm font-extrabold text-slate-900 tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed px-1">
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative border-l-2 border-blue-200 ml-4 pl-6 space-y-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative group">
                {/* Marker */}
                <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-white border-2 border-[#0046B8] text-[#0046B8] font-bold text-xs flex items-center justify-center shadow-xs">
                  {step.num}
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-[#E5192D]" />
                    <h3 className="text-sm font-extrabold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
