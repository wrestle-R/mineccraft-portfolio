import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import MinecraftPage from '../minecraft/MinecraftPage';
import './index.css';

const NotFound = lazy(() => import('./NotFound'));
const isWorld = ['/', '/index.html', '/minecraft', '/minecraft/'].includes(window.location.pathname);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      {isWorld ? <MinecraftPage /> : <Suspense fallback={null}><NotFound /></Suspense>}
    </ThemeProvider>
  </StrictMode>,
);
