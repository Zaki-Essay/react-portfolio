import React from "react";
import Container from "./Container";

import SocialIcon from "./ui/SocialIcon";
import {logo} from "../assets/getImage.ts";

const Footer: React.FC = () => {
    return (
        <div className="bg-primaryColor">
            <Container className="flex items-center text-lightText justify-between py-5">
                <img src={logo as string} alt="logo" className="w-24" />
                <p className="text-sm lowercase hover:text-white duration-300">
                    All rights reserved @me
                </p>
                <SocialIcon />
            </Container>
        </div>
    );
};

export default Footer;
