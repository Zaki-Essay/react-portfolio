import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../pages/About.tsx";
import Services from "../pages/Services.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import PortfolioPage from "../pages/PortfolioPage.tsx";
import {HOMEPAGE_URL} from "../constant/constants.ts";
import Layout from "../Layouts/Layout.tsx";

export const router = createBrowserRouter([
    {
        path: HOMEPAGE_URL,
        element: <Layout />,
        children: [
            {
                path: HOMEPAGE_URL,
                element: <App />,
            },
            {
                path: `${HOMEPAGE_URL}about`,
                element: <About />,
            },
            {
                path: `${HOMEPAGE_URL}services`,
                element: <Services />,
            },
            {
                path: `${HOMEPAGE_URL}portfolio`,
                element: <PortfolioPage />,
            },
            {
                path: `${HOMEPAGE_URL}contact`,
                element: <ContactPage />,
            },
        ],
    },
]);
