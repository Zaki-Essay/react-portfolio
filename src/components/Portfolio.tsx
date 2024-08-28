import React from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import PortfolioCard from "./ui/PortfolioCard";
import { portfolioData } from "../constant/data";

// Define the type for portfolio items
interface PortfolioItem {
    id: number;
    title: string;
    subtitle: string;
    img: string; // Assuming img is a URL or path string
    icon: JSX.Element;
    link: string;
}

const Portfolio: React.FC = () => {
    return (
        <Container className="border-b border-black">
            <div className="flex flex-col items-center">
                <Subtitle title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" />
                <Title title="My Portfolio" />
            </div>
            <div className="grid grid-cols-3 gap-10 pt-10">
                {portfolioData.map((item: PortfolioItem) => (
                    <PortfolioCard key={item.id} item={item} />
                ))}
            </div>
        </Container>
    );
};

export default Portfolio;
