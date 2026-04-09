// ================================================================
// KJPX RAMP TRACKER - CONFIGURATION FILE
// ================================================================
// SECURITY NOTE:
// This file contains API credentials.
// - On GitHub: use TEST credentials only
// - On prosser.com/ramp: use PRODUCTION credentials only
// Never commit production credentials to GitHub.
// ================================================================

const CONFIG = {

  // ── TRELLO ──────────────────────────────────────────────────
  trello: {
    apiKey: '91d4799692a37d718fe3af5ee4aaafad',  // TEST key
    token:  'REPLACE_WITH_TOKEN',                 // Trello auth token
    boardName: 'SAS Ramp Tracker',               // Auto-selects this board
  },

  // ── MAPBOX ──────────────────────────────────────────────────
  mapbox: {
    token: 'REPLACE_WITH_MAPBOX_TOKEN',          // pk.eyJ1...
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [-72.2508, 40.9603],                 // KJPX default center
    zoom: 16.2,                                  // Default zoom level
  },

  // ── APP SETTINGS ────────────────────────────────────────────
  app: {
    refreshInterval: 30,       // Auto-refresh in seconds (0 = off)
    autoConnect: true,         // Auto-connect on page load
    autoLoad: true,            // Auto-load aircraft after connect
    doneLists: [               // Cards in these lists are removed from map
      'done',
      'complete',
      'completed',
      'departed'
    ],
  },

  // ── DATABASE (future use) ───────────────────────────────────
  // Uncomment and fill in when ready to connect to a backend DB
  // db: {
  //   host:     'localhost',
  //   port:     5432,
  //   name:     'ramp_tracker',
  //   user:     'ramp_user',
  //   password: 'REPLACE_WITH_DB_PASSWORD',
  //   apiEndpoint: 'https://prosser.com/ramp/api',  // Backend API URL
  // },

};
