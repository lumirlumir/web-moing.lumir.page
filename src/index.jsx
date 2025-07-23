/**
 * @fileoverview Entry point for the application.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import '@/styles/index.scss';

// --------------------------------------------------------------------------------
// Render
// --------------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('App')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
