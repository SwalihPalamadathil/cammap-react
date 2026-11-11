import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../index.css';
import './map.css';
import MapPage from './MapPage';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MapPage />
  </React.StrictMode>
);
