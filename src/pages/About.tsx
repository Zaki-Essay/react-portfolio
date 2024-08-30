import React from "react";
import AboutMe from "../components/AboutMe";

const About: React.FC = () => {
    return (
        <div className="bg-primaryColor h-screen text-gray-200">
            <div className="pt-40">
                <AboutMe />
            </div>
        </div>
    );
};

export default About;

