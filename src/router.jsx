import { createBrowserRouter, redirect } from "react-router";

import AppLayout from "./layout/AppLayout";
import MinAppLayout from "./layout/MinAppLayout";

import Home from './pages/Home';
import FlightFetcher from "./components/flight/FlightFetcher";
import FlightScheduleLoader from "./components/flight/FlightScheduleLoader";
import PassengerDetails from "./pages/purchase/PassengerDetails";
import Allocation from "./pages/purchase/Allocation";
import DestinationsIndex from "./pages/destinations/DestinationsIndex";
import DestinationDetail from "./pages/destinations/DestinationDetail";
import SignUp from "./pages/SignUp";
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
                    { path: 'details', Component: PassengerDetails },
                    { path: 'allocation', Component: Allocation }
                ]
            },
            {
                path: 'destinations',
                children: [
                    { index: true, Component: DestinationsIndex },
                    { path: "*", Component: DestinationDetail },
                ]
            }
        ]
    },
    {
        Component: MinAppLayout,
        children: [
            { path: '*', Component: NotFound },
            { path: 'create-account', Component: SignUp }
        ]
    }
]);

export default router;