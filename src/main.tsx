import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './libs/components/app/app.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
