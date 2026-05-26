import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "react-datepicker/dist/react-datepicker.css";
import './../css/style.css'

import { AuthProvider } from './core/contexts/AuthContext';
import { LayoutProvider } from './contexts/LayoutContext';
import { DestinationsProvider } from './contexts/DestinationsContext';
import { FlightSearchProvider } from './contexts/FlightSearchContext';
import { CartProvider } from './contexts/CartContext';

import App from './App';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient} >
    <AuthProvider>
      <LayoutProvider>
        <DestinationsProvider>
          <FlightSearchProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FlightSearchProvider>
        </DestinationsProvider>
      </LayoutProvider>
    </AuthProvider>
  </QueryClientProvider>
)
