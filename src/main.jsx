import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "react-datepicker/dist/react-datepicker.css";
import './../css/style.css'

import { LayoutProvider } from './contexts/LayoutContext';

import App from './App.jsx'
import ScrollBlocker from './layout/ScrollBlocker';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutProvider>
      <ScrollBlocker />
      <App />
    </LayoutProvider>
  </StrictMode>,
)
