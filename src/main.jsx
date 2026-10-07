import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import MinecraftPage from '../minecraft/MinecraftPage';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MinecraftPage />
    </ThemeProvider>
  </StrictMode>,
);
