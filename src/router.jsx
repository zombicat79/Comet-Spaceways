import { createBrowserRouter, redirect } from "react-router";

import AppLayout from "./layout/AppLayout";
import MinAppLayout from "./layout/MinAppLayout";

import Home from './pages/Home';
import Tickets from './pages/Tickets';
import NotFound from "./pages/NotFound";

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
                    { path: 'tickets', Component: Tickets }
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