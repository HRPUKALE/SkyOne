import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Package, 
  Plane, 
  AlertCircle, 
  Loader2, 
  Info,
  Calendar,
  Building,
  RotateCcw
} from 'lucide-react';
import { Shipment, TrackingQueryResult } from '../types';
import { trackShipment } from '../services/trackingService';

interface TrackingSectionProps {
  initialAwb?: string;
  autoScroll?: boolean;
}

export const TrackingSection: React.FC<TrackingSectionProps> = ({ 
  initialAwb = '',
  autoScroll = false 
}) => {
  const [awbInput, setAwbInput] = useState(initialAwb);
  const [isLoading, setIsLoading] = useState(false);
  const [trackingResult, setTrackingResult] = useState<TrackingQueryResult | null>(null);

  const sampleAwbs = ['SKY123456789', 'SKY987654321', 'SKY445566778'];

  // Handle tracking submission
  const handleTrack = async (awbToTrack?: string) => {
    const targetAwb = (awbToTrack || awbInput).trim();
    if (!targetAwb) {
      setTrackingResult({
        success: false,
        errorType: 'EMPTY_INPUT',
        errorMessage: 'Please enter your Air Waybill (AWB) or tracking number.'
      });
      return;
    }

    setIsLoading(true);
    setTrackingResult(null);

    try {
      const res = await trackShipment(targetAwb);
      setTrackingResult(res);
    } catch (err: any) {
      setTrackingResult({
        success: false,
        errorType: 'NETWORK_ERROR',
        errorMessage: 'Unable to connect to the tracking network. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // If initialAwb changes, trigger track
  useEffect(() => {
    if (initialAwb) {
      setAwbInput(initialAwb);
      handleTrack(initialAwb);
    }
  }, [initialAwb]);

  const handleSelectSample = (sample: string) => {
    setAwbInput(sample);
    handleTrack(sample);
  };

  const shipment = trackingResult?.shipment;

  // Determine status color styles
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'DELIVERED':
        return {
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          dot: 'bg-emerald-500',
          label: 'Delivered'
        };
      case 'OUT_FOR_DELIVERY':
        return {
          bg: 'bg-amber-50 text-amber-700 border-amber-200',
          dot: 'bg-amber-500',
          label: 'Out For Delivery'
        };
      case 'IN_TRANSIT':
      default:
        return {
          bg: 'bg-blue-50 text-[#0046B8] border-blue-200',
          dot: 'bg-[#0046B8]',
          label: 'In Transit'
        };
    }
  };

  // Standard milestone timeline steps
  const standardSteps = [
    { key: 'BOOKED', label: 'Booked' },
    { key: 'PICKED_UP', label: 'Picked Up' },
    { key: 'DEPARTED_ORIGIN', label: 'Departed Origin' },
    { key: 'IN_TRANSIT', label: 'In Transit' },
    { key: 'DESTINATION_HUB', label: 'Destination Hub' },
    { key: 'OUT_FOR_DELIVERY', label: 'Out for Delivery' },
    { key: 'DELIVERED', label: 'Delivered' }
  ];

  const getStepStatus = (stepKey: string, currentStatus: string) => {
    const order = ['BOOKED', 'PICKED_UP', 'DEPARTED_ORIGIN', 'IN_TRANSIT', 'DESTINATION_HUB', 'OUT_FOR_DELIVERY', 'DELIVERED'];
    const currentIndex = order.indexOf(currentStatus);
    const stepIndex = order.indexOf(stepKey);

    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'upcoming';
  };

  return (
    <section id="tracking-portal" className="relative -mt-6 sm:-mt-10 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Tracking Search Card */}
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/8 border border-slate-200/90 p-6 sm:p-8 relative overflow-hidden">
        
        {/* Subtle decorative top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0046B8] via-blue-500 to-[#E5192D]"></div>

        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0046B8] text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5192D]"></span>
            <span>Real-Time Consignment Tracking</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Track Your Shipment
          </h2>

          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Enter your AWB or tracking number to see the latest shipment status, route progress, and delivery schedule.
          </p>
        </div>

        {/* Input & Track Button Form */}
        <div className="mt-6 max-w-3xl mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleTrack();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5 text-[#0046B8]" />
              </div>
              <input
                type="text"
                value={awbInput}
                onChange={(e) => setAwbInput(e.target.value)}
                placeholder="ENTER TRACKING / AWB NUMBER (e.g. SKY123456789)"
                className="w-full pl-11 pr-4 py-3.5 sm:py-4 bg-slate-50/70 hover:bg-slate-50 focus:bg-white text-slate-900 text-sm font-semibold rounded-xl border border-slate-300 focus:border-[#0046B8] focus:ring-4 focus:ring-blue-100 transition-all outline-none uppercase placeholder:normal-case placeholder:font-normal placeholder:text-slate-400"
                aria-label="Tracking or AWB number"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 bg-[#0046B8] hover:bg-[#003694] active:bg-[#002a75] text-white text-sm font-bold rounded-xl shadow-md shadow-blue-900/15 transition-all duration-150 cursor-pointer disabled:opacity-70 group whitespace-nowrap active:scale-[0.98]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <span>TRACK SHIPMENT</span>
                  <ArrowRight className="w-4 h-4 text-[#E5192D] group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Test AWB Chips */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-slate-600">Sample tracking numbers:</span>
            {sampleAwbs.map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => handleSelectSample(sample)}
                className="px-2.5 py-1 bg-slate-100 hover:bg-blue-50 hover:text-[#0046B8] hover:border-blue-200 border border-slate-200 text-slate-700 font-mono font-semibold rounded-md transition-colors cursor-pointer text-[11px]"
              >
                {sample}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State Banner */}
        {isLoading && (
          <div className="mt-8 p-8 max-w-3xl mx-auto rounded-xl bg-slate-50 border border-slate-200 text-center animate-pulse">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0046B8] flex items-center justify-center mx-auto mb-3">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Searching for your shipment...</h3>
            <p className="text-xs text-slate-500 mt-1">Connecting to global logistics dispatch servers and querying milestones.</p>
          </div>
        )}

        {/* Error States (NOT FOUND, EMPTY, TIMEOUT, etc.) */}
        {!isLoading && trackingResult && !trackingResult.success && (
          <div className="mt-8 max-w-3xl mx-auto p-5 rounded-xl bg-rose-50/70 border border-rose-200 text-slate-800">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#E5192D] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-rose-900">
                  {trackingResult.errorType === 'EMPTY_INPUT' && 'Tracking Number Required'}
                  {trackingResult.errorType === 'INVALID_NUMBER' && 'Invalid Tracking Format'}
                  {trackingResult.errorType === 'NOT_FOUND' && 'Shipment Not Found'}
                  {trackingResult.errorType === 'TIMEOUT' && 'Connection Timeout'}
                  {trackingResult.errorType === 'NETWORK_ERROR' && 'Network Connection Issue'}
                  {trackingResult.errorType === 'API_ERROR' && 'Tracking Service Temporarily Unavailable'}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {trackingResult.errorMessage}
                </p>
                <div className="pt-2 text-xs text-slate-500">
                  Need assistance? Contact our 24/7 Air Cargo Desk at{' '}
                  <span className="font-semibold text-slate-800">+91 (022) 8800-1200</span> or email{' '}
                  <span className="font-semibold text-[#0046B8]">support@skyonecourier.com</span>.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Tracking Result Dashboard */}
        {!isLoading && shipment && (
          <div className="mt-8 border-t border-slate-200 pt-8 animate-in fade-in-50 duration-300">
            
            {/* Top Status Banner */}
            <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Left: AWB & Status */}
                <div>
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <span>AIR WAYBILL / CONSIGNMENT NUMBER</span>
                    {shipment.isDemo && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded">
                        DEMO RECORD
                      </span>
                    )}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white mt-1">
                    {shipment.trackingNumber}
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Service: <span className="font-semibold text-white">{shipment.serviceType}</span>
                  </div>
                </div>

                {/* Right: Status Badge & Last Updated */}
                <div className="text-left sm:text-right">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20">
                    <span className={`w-2 h-2 rounded-full ${
                      shipment.status === 'DELIVERED' 
                        ? 'bg-emerald-400' 
                        : shipment.status === 'OUT_FOR_DELIVERY' 
                        ? 'bg-[#E5192D]' 
                        : 'bg-blue-400'
                    } animate-pulse`}></span>
                    <span>{shipment.statusLabel}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-2 flex items-center sm:justify-end gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Last Updated: {shipment.lastUpdated}</span>
                  </div>
                </div>

              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-5 border-t border-slate-800 text-xs">
                <div>
                  <div className="text-slate-400 font-medium">Origin</div>
                  <div className="text-sm font-bold text-white mt-0.5">{shipment.origin}</div>
                </div>
                <div>
                  <div className="text-slate-400 font-medium">Destination</div>
                  <div className="text-sm font-bold text-white mt-0.5">{shipment.destination}</div>
                </div>
                <div>
                  <div className="text-slate-400 font-medium">Current Location</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">{shipment.currentLocation}</div>
                </div>
                <div>
                  <div className="text-slate-400 font-medium">Estimated Delivery</div>
                  <div className="text-sm font-bold text-white mt-0.5">{shipment.estimatedDelivery}</div>
                </div>
              </div>
            </div>

            {/* Shipment Route Visualization Map (Decorative) */}
            <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100 mb-8">
              <div className="flex items-center justify-between pb-3 border-b border-blue-100/80 mb-4">
                <span className="text-xs font-bold text-[#0046B8] uppercase tracking-wider flex items-center gap-1.5">
                  <Plane className="w-4 h-4 text-[#E5192D]" />
                  Transit Route Corridor
                </span>
                <span className="text-xs text-slate-500">
                  {shipment.weight} • {shipment.pieces} Piece(s)
                </span>
              </div>

              {/* Interactive Route Corridor */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0046B8] text-white flex items-center justify-center font-bold text-xs">
                    {shipment.originCode || 'ORG'}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{shipment.origin}</div>
                    <div className="text-[11px] text-slate-500">Origin Clearance</div>
                  </div>
                </div>

                {/* Connecting arrow with plane marker */}
                <div className="hidden md:flex flex-1 items-center px-4 relative">
                  <div className="w-full h-1 bg-slate-200 relative">
                    <div className="absolute top-0 left-0 h-full bg-[#0046B8] w-2/3"></div>
                  </div>
                  <div className="absolute left-2/3 -translate-x-1/2 -top-2.5 bg-white p-1 rounded-full border border-blue-200 text-[#E5192D] shadow-xs">
                    <Plane className="w-3.5 h-3.5 transform rotate-45" />
                  </div>
                </div>

                <div className="flex items-center gap-3 text-right">
                  <div>
                    <div className="text-xs font-bold text-slate-900">{shipment.destination}</div>
                    <div className="text-[11px] text-slate-500">Destination Hub</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E5192D] text-white flex items-center justify-center font-bold text-xs">
                    {shipment.destinationCode || 'DST'}
                  </div>
                </div>
              </div>
            </div>

            {/* Tracking Milestones Timeline */}
            <div className="space-y-6">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Package className="w-4 h-4 text-[#0046B8]" />
                <span>Shipment Milestones</span>
              </h3>

              {/* Desktop Horizontal Milestone Flow */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-7 gap-2 relative">
                  {standardSteps.map((step, idx) => {
                    const status = getStepStatus(step.key, shipment.status);
                    const isCompleted = status === 'completed';
                    const isCurrent = status === 'current';

                    return (
                      <div key={step.key} className="text-center relative">
                        {/* Connecting Line */}
                        {idx < standardSteps.length - 1 && (
                          <div 
                            className={`absolute top-4 left-1/2 w-full h-0.5 z-0 ${
                              isCompleted ? 'bg-[#0046B8]' : 'bg-slate-200'
                            }`}
                          />
                        )}

                        {/* Step Marker */}
                        <div className="relative z-10 flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                              isCompleted
                                ? 'bg-[#0046B8] text-white shadow-xs'
                                : isCurrent
                                ? 'bg-[#E5192D] text-white ring-4 ring-red-100 shadow-sm animate-pulse'
                                : 'bg-slate-100 text-slate-400 border border-slate-200'
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-4 h-4" />
                            ) : isCurrent ? (
                              <span className="w-2 h-2 rounded-full bg-white"></span>
                            ) : (
                              <span>{idx + 1}</span>
                            )}
                          </div>

                          <div className={`mt-2 text-xs font-semibold ${
                            isCurrent ? 'text-[#E5192D] font-bold' : isCompleted ? 'text-slate-900' : 'text-slate-400'
                          }`}>
                            {step.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile / Tablet History Timeline */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Detailed Event Log ({shipment.history.length} events)
                </h4>

                <div className="relative border-l-2 border-blue-200/80 ml-3 sm:ml-4 pl-4 sm:pl-6 space-y-6">
                  {shipment.history.map((event, index) => {
                    const isLatest = index === 0;

                    return (
                      <div key={index} className="relative group">
                        {/* Dot on the timeline */}
                        <div
                          className={`absolute -left-[23px] sm:-left-[31px] top-1 w-3.5 h-3.5 rounded-full border-2 border-white ${
                            isLatest
                              ? 'bg-[#E5192D] ring-4 ring-red-100'
                              : 'bg-[#0046B8]'
                          }`}
                        />

                        <div className="bg-slate-50 hover:bg-slate-100/80 transition-colors p-4 rounded-xl border border-slate-200/80">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                            <span className="font-extrabold text-slate-900 text-sm">
                              {event.status}
                            </span>
                            <span className="font-mono text-slate-500">
                              {event.date} • {event.time}
                            </span>
                          </div>

                          <div className="text-xs text-slate-600 font-medium flex items-center gap-1.5 mt-1">
                            <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{event.location}</span>
                          </div>

                          <p className="text-xs text-slate-600 mt-2 font-normal leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
