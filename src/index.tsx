import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './components/ThemeContext';

const root = createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
);
