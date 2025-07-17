import { createBrowserRouter } from "react-router";
import AppLayout from "./layout/AppLayout";
import Home from './pages/Home';
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        Component: AppLayout,
        children: [
            { index: true, Component: Home },
            /* { path: '*', Component: NotFound } */
        ]
    },
    { path: '*', Component: NotFound }
]);

export default router;