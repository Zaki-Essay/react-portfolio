import React from "react";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header.tsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import ConatctPage from "./pages/ContactPage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import {createRoot} from "react-dom/client";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/react-portfolio/",
        element: <Layout />,
        children: [
            {
                path: "/react-portfolio/",
                element: <App />,
            },
            {
                path: "/react-portfolio/about",
                element: <About />,
            },
            {
                path: "/react-portfolio/services",
                element: <Services />,
            },
            {
                path: "/react-portfolio/portfolio",
                element: <PortfolioPage />,
            },
            {
                path: "/react-portfolio/contact",
                element: <ConatctPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
);
