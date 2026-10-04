import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe,
  ShieldCheck
} from 'lucide-react';
import { SkyOneLogo } from './SkyOneLogo';
import { SKYONE_CONFIG } from '../config';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Info (span 4) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <button
              onClick={() => onNavigate('/')}
              className="text-left focus:outline-none cursor-pointer"
              aria-label="SkyOne Home"
            >
              <SkyOneLogo size="md" variant="dark" />
            </button>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              SkyOne International Courier Service provides reliable cross-border express delivery, commercial air freight, cargo solutions, and real-time shipment tracking connecting India to over 50 destinations worldwide.
            </p>

            {/* Quick Contact Micro-items */}
            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E5192D] shrink-0" />
                <span>{SKYONE_CONFIG.primaryPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0046B8] shrink-0" />
                <span>{SKYONE_CONFIG.supportEmail}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>{SKYONE_CONFIG.corporateAddress}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (span 2) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/locations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Global Hubs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (span 2) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('/services/international-courier')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  International Courier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/express-delivery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Express Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/air-freight')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Air Freight Cargo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/door-to-door')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Door-to-Door Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/customs-clearance')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Customs Clearance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Tracking & Tools (span 2) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Tracking &amp; Support
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('/track')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Track Shipment
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Request a Quote
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Help &amp; FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/prohibited-items')}
                  className="hover:text-white transition-colors cursor-pointer text-rose-300/90"
                >
                  Prohibited Items
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Operations (span 2) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('/privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Carriage
                </button>
              </li>
              <li>
                <span className="text-[11px] text-slate-500 block pt-2">
                  Operating 24/7 International Cargo Gateways
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 SkyOne International Courier Service. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('/privacy')} className="hover:text-slate-300">Privacy</button>
            <button onClick={() => onNavigate('/terms')} className="hover:text-slate-300">Terms of Service</button>
            <button onClick={() => onNavigate('/prohibited-items')} className="hover:text-slate-300">Dangerous Goods</button>
          </div>
        </div>
      </div>

    </footer>
  );
};
