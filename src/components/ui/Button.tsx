import React from "react";

interface ButtonProps {
  title?: string;   // Optional title prop
  className?: string; // Optional className prop
}

const Button: React.FC<ButtonProps> = ({ title = "Hire Me", className = "" }) => {
  return (
      <button
          className={`text-designColor/70 text-sm font-bold bg-gradient-to-tr from-black to-gray-500 rounded-md hover:bg-gradient-to-tr hover:from-to-gray-500 hover:to-gray-700 hover:text-designColor duration-300 hover:-translate-y-1 ${className}`}
      >
        {title}
      </button>
  );
};

export default Button;

