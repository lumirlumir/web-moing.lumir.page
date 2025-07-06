import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/index.scss';

import App from './App';

ReactDOM.createRoot(document.getElementById('App')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
