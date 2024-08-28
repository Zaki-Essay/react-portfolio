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
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/portfolio",
                element: <PortfolioPage />,
            },
            {
                path: "/contact",
                element: <ConatctPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
