import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search, PhoneCall } from 'lucide-react';
import { SkyOneLogo } from './SkyOneLogo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenQuote: () => void;
  onOpenTrack?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenQuote,
  onOpenTrack
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Track Shipment', path: '/track' },
    { label: 'About Us', path: '/about' },
    { label: 'Global Network', path: '/locations' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: SkyOne Brand Logo */}
            <div className="flex items-center shrink-0">
              <button
                onClick={() => handleLinkClick('/')}
                className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md cursor-pointer transition-transform group-hover:scale-[1.01]"
                aria-label="SkyOne International Courier Service Home"
              >
                <SkyOneLogo size="md" variant="light" />
              </button>
            </div>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
                return (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`relative py-1 transition-colors cursor-pointer group whitespace-nowrap ${
                      isActive ? 'text-[#0046B8] font-bold' : 'text-slate-600 hover:text-[#0046B8]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E5192D] rounded-full" />
                    )}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0046B8] rounded-full transition-all duration-200 group-hover:w-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Track Shipment & Get a Quote) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  if (onOpenTrack) {
                    onOpenTrack();
                  } else {
                    handleLinkClick('/track');
                  }
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#0046B8] bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200/80 rounded-lg transition-all duration-150 cursor-pointer shadow-xs whitespace-nowrap active:scale-[0.98]"
              >
                <Search className="w-3.5 h-3.5 text-[#0046B8]" />
                <span>TRACK SHIPMENT</span>
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#0046B8] hover:bg-[#003694] active:bg-[#002a75] rounded-lg transition-all duration-150 cursor-pointer shadow-sm shadow-blue-900/10 whitespace-nowrap group active:scale-[0.98]"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E5192D] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenQuote}
                className="px-2.5 py-1.5 text-xs font-bold text-white bg-[#0046B8] rounded-md shadow-xs"
              >
                QUOTE
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-250">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <SkyOneLogo size="sm" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 space-y-1">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.path;
                  return (
                    <button
                      key={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className={`w-full text-left px-3 py-3 text-base font-semibold rounded-lg flex items-center justify-between min-h-[44px] ${
                        isActive
                          ? 'bg-blue-50 text-[#0046B8] border-l-4 border-[#E5192D]'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenTrack) {
                    onOpenTrack();
                  } else {
                    handleLinkClick('/track');
                  }
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-blue-200 text-[#0046B8] bg-blue-50/60 font-bold text-sm min-h-[44px]"
              >
                <Search className="w-4 h-4" />
                <span>Track AWB Shipment</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0046B8] text-white font-bold text-sm min-h-[44px] shadow-sm"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-[#E5192D]" />
              </button>

              <div className="text-center text-xs text-slate-500 pt-2 flex items-center justify-center gap-1">
                <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                <span>Dispatch Desk: +91 22 8800 1200</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
