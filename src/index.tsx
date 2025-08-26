/**
 * @fileoverview Entry point for the application.
 */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

import '@/styles/index.scss';

// --------------------------------------------------------------------------------
// Render
// --------------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
