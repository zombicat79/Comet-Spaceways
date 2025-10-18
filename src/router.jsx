import { createBrowserRouter, redirect } from "react-router";

import AppLayout from "./layout/AppLayout";
import MinAppLayout from "./layout/MinAppLayout";

import Home from './pages/Home';
import FlightFetcher from "./components/flight/FlightFetcher";
import FlightScheduleLoader from "./components/flight/FlightScheduleLoader";
import PassengerDetails from "./pages/purchase/Details";
import NotFound from "./pages/NotFound";

import { fetchFlights } from "./components/flight/FlightScheduleLoader";

function purchaseRedirection() {
    return redirect('/purchase/tickets');
}

const router = createBrowserRouter([
    {
        Component: AppLayout,
        children: [
            { index: true, Component: Home },
            { 
                path: 'purchase', 
                children: [
                    { index: true, loader: purchaseRedirection },
                    { path: 'tickets', children: [
                        { index: true, Component: FlightFetcher },
                        { path: 'flight-data', Component: FlightScheduleLoader, loader: fetchFlights }
                    ]},
                    { path: 'details', Component: PassengerDetails }
                ]
            }
        ]
    },
    {
        Component: MinAppLayout,
        children: [
            { path: '*', Component: NotFound }
        ]
    }
]);

export default router;