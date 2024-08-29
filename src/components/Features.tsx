import React from "react";
import Container from "./Container";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import FeatureCard from "./FeatureCard";
import {FeatureItem, featuresData} from "../constant/data"; // Assuming this is a TypeScript file


// Define the props for the Features component
const Features: React.FC = () => {
    return (
        <Container className="border-b border-black flex flex-col gap-7">
            <Subtitle title="Features" />
            <Title title="What I Do" />
            <div className="grid grid-cols-3 gap-x-5 gap-y-7">
                {featuresData.map((item: FeatureItem) => (
                    <FeatureCard key={item.id} item={item} />
                ))}
            </div>
        </Container>
    );
};

export default Features;
