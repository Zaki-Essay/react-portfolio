import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
      <div className={`max-w-screen-xl mx-auto py-10 ${className}`}>
        {children}
      </div>
  );
};

export default Container;
