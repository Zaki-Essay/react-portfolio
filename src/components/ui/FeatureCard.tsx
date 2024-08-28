import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface FeatureCardProps {
    item: FeatureItem;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ item }) => {
    return (
        <div className="w-full p-10 bg-black flex flex-col gap-5 rounded-lg shadow-lg shadow-gray-500/10">
            <span className="iconstyle">{item.icon}</span>
            <p className="text-xl font-bold">{item.title}</p>
            <p className="text-base font-medium">{item.description}</p>
            <IoMdArrowRoundForward className="iconstyle" />
        </div>
    );
};

export default FeatureCard;
