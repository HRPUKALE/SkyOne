import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Built-in sample database for demonstration
const SAMPLE_SHIPMENTS_MAP: Record<string, any> = {
  'SKY123456789': {
    trackingNumber: 'SKY123456789',
    status: 'IN_TRANSIT',
    statusLabel: 'In Transit',
    currentLocation: 'Dubai Air Logistics Hub, UAE',
    origin: 'Mumbai, India',
    destination: 'London, United Kingdom',
    originCode: 'BOM',
    destinationCode: 'LHR',
    estimatedDelivery: '08 October 2026',
    serviceType: 'SkyOne Priority International Express',
    lastUpdated: 'Today, 14:30 GMT+4',
    weight: '4.80 kg',
    pieces: 1,
    carrier: 'SkyOne Air Logistics',
    isDemo: true,
    transitRoute: ['Mumbai (BOM)', 'Dubai Hub (DXB)', 'London Heathrow (LHR)'],
    history: [
      {
        date: '04 Oct 2026',
        time: '14:30',
        location: 'Dubai Air Hub (DXB), UAE',
        status: 'In Transit',
        description: 'Transshipment container sorted and cleared for flight connecting to London Heathrow',
        isCompleted: true
      },
      {
        date: '04 Oct 2026',
        time: '06:15',
        location: 'Dubai Air Hub (DXB), UAE',
        status: 'Arrived at Intermediate Hub',
        description: 'Aircraft landed. Inbound cargo offloaded and processed through security screening',
        isCompleted: true
      },
      {
        date: '03 Oct 2026',
        time: '23:40',
        location: 'Mumbai Int. Airport (BOM), India',
        status: 'Departed Origin Hub',
        description: 'Export customs cleared. Departed on scheduled international flight SK-408',
        isCompleted: true
      },
      {
        date: '03 Oct 2026',
        time: '18:20',
        location: 'Mumbai Central Gateway, India',
        status: 'Processed at Facility',
        description: 'Package weighed, barcoded, and packed in secure air transit container',
        isCompleted: true
      },
      {
        date: '03 Oct 2026',
        time: '12:45',
        location: 'Andheri West, Mumbai, India',
        status: 'Shipment Picked Up',
        description: 'Collected by SkyOne courier dispatch agent',
        isCompleted: true
      },
      {
        date: '03 Oct 2026',
        time: '09:30',
        location: 'SkyOne Online Booking',
        status: 'Shipment Booked',
        description: 'Shipping label generated and booking confirmed electronically',
        isCompleted: true
      }
    ]
  },
  'SKY987654321': {
    trackingNumber: 'SKY987654321',
    status: 'DELIVERED',
    statusLabel: 'Delivered',
    currentLocation: 'Paris 8e, France',
    origin: 'Delhi, India',
    destination: 'Paris, France',
    originCode: 'DEL',
    destinationCode: 'CDG',
    estimatedDelivery: '03 October 2026 (Delivered)',
    serviceType: 'SkyOne Global Express Courier',
    lastUpdated: '03 Oct 2026, 11:20 CET',
    weight: '2.10 kg',
    pieces: 1,
    carrier: 'SkyOne Express Europe',
    isDemo: true,
    transitRoute: ['New Delhi (DEL)', 'Frankfurt Hub (FRA)', 'Paris CDG (CDG)', 'Paris 8e'],
    history: [
      {
        date: '03 Oct 2026',
        time: '11:20',
        location: 'Paris 8e, France',
        status: 'Delivered',
        description: 'Package delivered to recipient and signed by: M. Laurent',
        isCompleted: true
      },
      {
        date: '03 Oct 2026',
        time: '08:45',
        location: 'Paris Distribution Depot, France',
        status: 'Out for Delivery',
        description: 'Assigned to courier route van for final door delivery',
        isCompleted: true
      },
      {
        date: '02 Oct 2026',
        time: '21:10',
        location: 'Charles de Gaulle Airport (CDG), France',
        status: 'Customs Cleared',
        description: 'Import customs clearance completed',
        isCompleted: true
      },
      {
        date: '01 Oct 2026',
        time: '19:00',
        location: 'Indira Gandhi Int. (DEL), India',
        status: 'Departed Origin Hub',
        description: 'International linehaul departure',
        isCompleted: true
      },
      {
        date: '01 Oct 2026',
        time: '10:00',
        location: 'Connaught Place, New Delhi, India',
        status: 'Shipment Picked Up',
        description: 'Received at SkyOne collection counter',
        isCompleted: true
      }
    ]
  },
  'SKY445566778': {
    trackingNumber: 'SKY445566778',
    status: 'OUT_FOR_DELIVERY',
    statusLabel: 'Out For Delivery',
    currentLocation: 'Downtown Commercial Hub, Singapore',
    origin: 'Ahmedabad, India',
    destination: 'Singapore',
    originCode: 'AMD',
    destinationCode: 'SIN',
    estimatedDelivery: 'Today, by 18:00 SGT',
    serviceType: 'SkyOne Air Cargo & Door Delivery',
    lastUpdated: 'Today, 08:15 SGT',
    weight: '12.50 kg',
    pieces: 2,
    carrier: 'SkyOne Asia Logistics',
    isDemo: true,
    transitRoute: ['Ahmedabad (AMD)', 'Mumbai Gateway', 'Singapore Changi (SIN)'],
    history: [
      {
        date: '04 Oct 2026',
        time: '08:15',
        location: 'Changi Logistics Park, Singapore',
        status: 'Out for Delivery',
        description: 'Courier van dispatched for scheduled commercial delivery',
        isCompleted: true
      },
      {
        date: '03 Oct 2026',
        time: '22:30',
        location: 'Changi Airport (SIN), Singapore',
        status: 'Arrived at Destination Hub',
        description: 'Inbound cargo manifest verified and custom duties paid',
        isCompleted: true
      },
      {
        date: '02 Oct 2026',
        time: '16:00',
        location: 'Ahmedabad Central Hub, India',
        status: 'Shipment Picked Up',
        description: 'Commercial consignment verified and barcoded',
        isCompleted: true
      }
    ]
  }
};

/**
 * Server-side /api/track route
 * Securely proxies to existing tracking systems without exposing credentials
 */
app.get('/api/track', async (req, res) => {
  const awb = String(req.query.awb || '').trim().toUpperCase().replace(/[\s-]/g, '');

  if (!awb) {
    return res.status(400).json({
      success: false,
      errorType: 'EMPTY_INPUT',
      errorMessage: 'Tracking number cannot be empty.'
    });
  }

  // If a real external tracking API is configured via environment variables
  const externalApiUrl = process.env.TRACKING_API_URL;
  const externalApiKey = process.env.TRACKING_API_KEY;

  if (externalApiUrl) {
    try {
      const response = await fetch(`${externalApiUrl}?awb=${encodeURIComponent(awb)}`, {
        headers: {
          'Authorization': `Bearer ${externalApiKey || ''}`,
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        if (response.status === 404) {
          return res.status(404).json({
            success: false,
            errorType: 'NOT_FOUND',
            errorMessage: `AWB ${awb} was not found.`
          });
        }
        return res.status(502).json({
          success: false,
          errorType: 'API_ERROR',
          errorMessage: 'Tracking carrier service temporarily unavailable.'
        });
      }

      const externalData = await response.json();
      return res.json({
        success: true,
        shipment: externalData
      });
    } catch (err: any) {
      console.error('External tracking API error:', err);
      // Fall through to sample lookup if enabled
    }
  }

  // Sample shipment lookup
  if (SAMPLE_SHIPMENTS_MAP[awb]) {
    return res.json({
      success: true,
      shipment: SAMPLE_SHIPMENTS_MAP[awb]
    });
  }

  // Demo fallback for any valid-looking SKY AWB
  if (/^SKY\d{6,12}$/i.test(awb)) {
    return res.json({
      success: true,
      shipment: {
        trackingNumber: awb,
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
          }
        ]
      }
    });
  }

  return res.status(404).json({
    success: false,
    errorType: 'NOT_FOUND',
    errorMessage: `AWB ${awb} not found in tracking records.`
  });
});

/**
 * Server-side /api/quote route
 */
app.post('/api/quote', (req, res) => {
  const { name, email, phone, pickupCountry, destinationCountry, weight, shipmentType } = req.body || {};

  if (!name || !email || !phone || !pickupCountry || !destinationCountry || !weight) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields (name, email, phone, pickup, destination, weight).'
    });
  }

  // Quote reference ID
  const quoteRef = 'SKY-Q' + Math.floor(100000 + Math.random() * 900000);

  return res.json({
    success: true,
    quoteId: quoteRef,
    message: 'Your shipping quote request has been received. A SkyOne logistics specialist will contact you shortly with tailored rates.'
  });
});

/**
 * Server-side /api/contact route
 */
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required.'
    });
  }

  const ticketId = 'SKY-T' + Math.floor(10000 + Math.random() * 90000);

  return res.json({
    success: true,
    ticketId,
    message: 'Thank you for reaching out. We have logged your request and our support desk will respond shortly.'
  });
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SkyOne server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
