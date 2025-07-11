import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import AppRouter from './AppRouter.tsx';
import './index.css';
import './styles/mobile-icons.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
