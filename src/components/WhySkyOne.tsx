import React from 'react';
import { 
  ShieldCheck, 
  Globe2, 
  Lock, 
  Radar, 
  Headphones, 
  Workflow,
  ArrowRight 
} from 'lucide-react';

export const WhySkyOne: React.FC = () => {
  const reasons = [
    {
      title: 'Reliable Delivery',
      desc: 'Committed airline space allocations and predictable flight schedules ensure your deadlines are honored without transshipment delays.',
      icon: ShieldCheck,
      color: 'text-[#0046B8]'
    },
    {
      title: 'Global Reach',
      desc: 'Seamless connections through key transshipment gateways linking India to over 50 destination countries and territories.',
      icon: Globe2,
      color: 'text-[#0046B8]'
    },
    {
      title: 'Secure Handling',
      desc: 'Barcode scanning at every handoff, tamper-evident pouch sealing, and rigorous chain-of-custody protocols safeguard your assets.',
      icon: Lock,
      color: 'text-[#E5192D]'
    },
    {
      title: 'Real-Time Tracking',
      desc: 'Live Air Waybill milestone updates from initial booking scan through customs clearance and final recipient signature.',
      icon: Radar,
      color: 'text-[#0046B8]'
    },
    {
      title: 'Professional Support',
      desc: 'Direct access to experienced air cargo coordinators and logistics specialists ready to resolve documentation and customs queries.',
      icon: Headphones,
      color: 'text-[#E5192D]'
    },
    {
      title: 'Flexible Logistics',
      desc: 'Custom solutions scaled from lightweight urgent document pouches up to palletized commercial freighter shipments.',
      icon: Workflow,
      color: 'text-[#0046B8]'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#0046B8] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
            <span>THE SKYONE DIFFERENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Why Choose SkyOne?
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Purpose-built logistics infrastructure designed around speed, operational integrity, and customer peace of mind.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-[#0046B8] hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#0046B8] group-hover:bg-[#0046B8] group-hover:text-white transition-all flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0046B8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-200/60 flex items-center gap-1 text-xs font-bold text-slate-400 group-hover:text-[#E5192D] transition-colors">
                  <span>SkyOne Standard</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
