import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "react-datepicker/dist/react-datepicker.css";
import './../css/style.css'

import { LayoutProvider } from './contexts/LayoutContext';
import { FlightSearchProvider } from './contexts/FlightSearchContext';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LayoutProvider>
      <FlightSearchProvider>
        <App />
      </FlightSearchProvider>
    </LayoutProvider>
  </StrictMode>,
)
