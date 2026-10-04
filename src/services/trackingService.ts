import { Shipment, TrackingQueryResult } from '../types';
import { SAMPLE_SHIPMENTS } from '../data/mockShipments';

export const DEMO_MODE = true;

/**
 * Normalizes any external carrier tracking payload into the standardized SkyOne Shipment model.
 */
export function normalizeShipmentData(raw: any): Shipment {
  if (!raw) {
    throw new Error('Empty shipment payload');
  }

  return {
    trackingNumber: String(raw.trackingNumber || raw.awb || raw.tracking_number || '').trim().toUpperCase(),
    status: raw.status || 'IN_TRANSIT',
    statusLabel: raw.statusLabel || raw.status_label || raw.status || 'In Transit',
    currentLocation: raw.currentLocation || raw.current_location || 'Transit Hub',
    origin: raw.origin || 'Origin Facility',
    destination: raw.destination || 'Destination Facility',
    originCode: raw.originCode || raw.origin_code,
    destinationCode: raw.destinationCode || raw.destination_code,
    estimatedDelivery: raw.estimatedDelivery || raw.estimated_delivery || 'Pending Confirmation',
    serviceType: raw.serviceType || raw.service_type || 'SkyOne International Express',
    lastUpdated: raw.lastUpdated || raw.last_updated || new Date().toISOString(),
    weight: raw.weight || '1.0 kg',
    pieces: Number(raw.pieces || 1),
    carrier: raw.carrier || 'SkyOne Express',
    isDemo: Boolean(raw.isDemo ?? false),
    transitRoute: Array.isArray(raw.transitRoute) ? raw.transitRoute : undefined,
    history: Array.isArray(raw.history)
      ? raw.history.map((h: any) => ({
          date: String(h.date || ''),
          time: String(h.time || ''),
          location: String(h.location || ''),
          status: String(h.status || ''),
          description: String(h.description || ''),
          isCompleted: Boolean(h.isCompleted ?? true)
        }))
      : []
  };
}

/**
 * Query shipment status securely through server-side /api/track.
 * Falls back to demo records during prototyping when DEMO_MODE is true.
 */
export async function trackShipment(trackingInput: string): Promise<TrackingQueryResult> {
  const cleanedAwb = trackingInput.trim().toUpperCase().replace(/[\s-]/g, '');

  if (!cleanedAwb) {
    return {
      success: false,
      errorType: 'EMPTY_INPUT',
      errorMessage: 'Please enter a valid AWB or shipment tracking number.'
    };
  }

  // Validate format: AWB should typically be alphanumeric, 6-25 characters
  if (cleanedAwb.length < 5 || cleanedAwb.length > 30 || !/^[A-Z0-9]+$/.test(cleanedAwb)) {
    return {
      success: false,
      errorType: 'INVALID_NUMBER',
      errorMessage: 'Invalid tracking number format. An AWB number typically contains letters and numbers (e.g., SKY123456789).'
    };
  }

  // Try calling the backend /api/track endpoint first
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(`/api/track?awb=${encodeURIComponent(cleanedAwb)}`, {
      headers: {
        'Accept': 'application/json'
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.success && data.shipment) {
        return {
          success: true,
          shipment: normalizeShipmentData(data.shipment)
        };
      } else if (data && data.errorType) {
        return {
          success: false,
          errorType: data.errorType,
          errorMessage: data.errorMessage || 'Shipment tracking information not found.'
        };
      }
    }
  } catch (err: any) {
    // If the network request was aborted or failed, we handle gracefully
    if (err.name === 'AbortError') {
      return {
        success: false,
        errorType: 'TIMEOUT',
        errorMessage: 'The tracking system timed out. Please check your connection and try again.'
      };
    }
    // For other errors, continue to demo mode fallback if enabled
    console.warn('API tracking fetch failed, checking demo shipments:', err.message);
  }

  // DEMO MODE: Check sample shipments if API endpoint returned 404 or isn't connected yet
  if (DEMO_MODE) {
    // Exact match in sample database
    if (SAMPLE_SHIPMENTS[cleanedAwb]) {
      return {
        success: true,
        shipment: SAMPLE_SHIPMENTS[cleanedAwb]
      };
    }

    // If starts with "SKY" followed by digits, generate a sample active shipment for demo purposes
    if (/^SKY\d{6,12}$/i.test(cleanedAwb)) {
      return {
        success: true,
        shipment: {
          trackingNumber: cleanedAwb,
          status: 'IN_TRANSIT',
          statusLabel: 'In Transit',
          currentLocation: 'SkyOne Central Gateway Hub',
          origin: 'Origin Dispatch',
          destination: 'International Destination',
          estimatedDelivery: '3-4 Business Days',
          serviceType: 'SkyOne International Courier',
          lastUpdated: 'Today, 10:15 Local Time',
          weight: '3.20 kg',
          pieces: 1,
          carrier: 'SkyOne Express',
          isDemo: true,
          transitRoute: ['Origin Facility', 'Central Air Hub', 'Destination Hub'],
          history: [
            {
              date: 'Today',
              time: '10:15',
              location: 'SkyOne Central Air Hub',
              status: 'In Transit',
              description: 'Consolidated into international cargo pallet',
              isCompleted: true
            },
            {
              date: 'Yesterday',
              time: '19:40',
              location: 'Regional Dispatch Center',
              status: 'Departed Facility',
              description: 'Cleared outbound documentation',
              isCompleted: true
            },
            {
              date: 'Yesterday',
              time: '14:20',
              location: 'Customer Pickup Point',
              status: 'Shipment Picked Up',
              description: 'Parcel collected and weighed',
              isCompleted: true
            }
          ]
        }
      };
    }

    return {
      success: false,
      errorType: 'NOT_FOUND',
      errorMessage: `No shipment found for AWB "${cleanedAwb}". Please verify your tracking number and try again. Try sample AWB: SKY123456789, SKY987654321, or SKY445566778.`
    };
  }

  return {
    success: false,
    errorType: 'NOT_FOUND',
    errorMessage: `AWB "${cleanedAwb}" was not found in our global tracking database.`
  };
}
