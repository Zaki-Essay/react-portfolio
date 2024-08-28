import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

// Define the interface for the `item` prop
interface FeatureCardItem {
    icon: React.ReactNode; // Type for icon; can be any valid React node
    title: string;
    descripton: string; // Assuming this is a typo and should be "description"
}

// Define the props interface
interface FeatureCardProps {
    item: FeatureCardItem;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ item }) => {
    return (
        <div className="w-full p-10 bg-black flex flex-col gap-5 rounded-lg shadow-lg shadow-gray-500/10">
            <span className="iconstyle">{item.icon}</span>
            <p className="text-xl font-bold">{item.title}</p>
            <p className="text-base font-medium">{item.descripton}</p>
            <IoMdArrowRoundForward className="iconstyle" />
        </div>
    );
};

export default FeatureCard;

