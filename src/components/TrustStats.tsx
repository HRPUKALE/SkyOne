import React, { useState, useEffect } from 'react';
import { Package, Globe, Clock, ThumbsUp, Shield } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const [counts, setCounts] = useState({
    shipments: 0,
    countries: 0,
    support: 24,
    satisfaction: 0
  });

  useEffect(() => {
    // Smooth counter animation
    const duration = 1200;
    const steps = 30;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      
      setCounts({
        shipments: Math.floor(progress * 10),
        countries: Math.floor(progress * 50),
        support: 24,
        satisfaction: Math.floor(progress * 98)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: `${counts.shipments}K+`,
      label: 'Shipments Delivered',
      subtext: 'Demonstrative volume capacity',
      icon: Package,
      accent: 'text-[#0046B8]'
    },
    {
      value: `${counts.countries}+`,
      label: 'Countries Served',
      subtext: 'Global reach & destination network',
      icon: Globe,
      accent: 'text-[#0046B8]'
    },
    {
      value: '24/7',
      label: 'Tracking Support',
      subtext: 'Continuous AWB status monitoring',
      icon: Clock,
      accent: 'text-[#E5192D]'
    },
    {
      value: `${counts.satisfaction}%`,
      label: 'Customer Satisfaction',
      subtext: 'Committed delivery standards',
      icon: ThumbsUp,
      accent: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-blue-200 transition-all text-center sm:text-left group"
              >
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50/80 text-[#0046B8] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Placeholder Disclosure according to instructions */}
        <div className="mt-4 text-center">
          <p className="text-[11px] text-slate-400 italic">
            * Operational figures and statistics are illustrative benchmark figures for preview purposes and will reflect certified audit metrics.
          </p>
        </div>

      </div>
    </section>
  );
};
