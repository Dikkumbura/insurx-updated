import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './AppRouter.tsx';
import './index.css';
import './styles/mobile-icons.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  </StrictMode>
);
