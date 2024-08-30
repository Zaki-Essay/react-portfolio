import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
