import React from "react";

interface SubtitleProps {
  title: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ title }) => {
  return (
      <p className="text-base text-designColor uppercase font-medium">
        {title}
      </p>
  );
};

export default Subtitle;
