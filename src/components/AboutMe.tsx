import React from "react";
import Container from "./Container";
import Button from "./ui/Button";
import Subtitle from "./ui/Subtitle";
import Title from "./ui/Title";
import { AboutMeImg } from "../assets/getImage";

const AboutMe: React.FC = () => {
  return (
      <Container className="flex justify-between">
        {/* Left part */}
        <div className="w-[35%] h-[330px] bg-[#212428] p-10 mt-14 rounded-sm shadow-md shadow-gray-500 overflow-hidden group hover:shadow-2xl">
          <div className="h-[500px] overflow-hidden rounded-md">
            <img
                src={AboutMeImg as string}
                alt="aboutMeImage"
                className=" group-hover:scale-110 duration-500 rounded-md"
            />
          </div>
        </div>
        {/* Right part */}
        <div className="w-[55%] flex flex-col justify-center gap-7">
          <Subtitle title="About me" />
          <Title title="Dr. Laura Jerry" />
          <p>
            Dr. Laura Jerry brings a wealth of experience and expertise to her
            practice. With a focus on patient-centered care, she is known for her
            warm and empathetic approach, always taking the time to listen to her
            patients’ concerns. Her extensive medical knowledge and dedication to
            staying at the forefront of the field make her a trusted healthcare
            partner.
          </p>
          <p>
            Explore the range of medical services Dr. Collins offers, including
            general check-ups, preventative care, chronic disease management, and
            more. She is committed to working with you to develop personalized
            treatment plans that suit your unique needs.
          </p>
          <Button title="Learn more" className="w-40 mt-8 h-14" />
        </div>
      </Container>
  );
};

export default AboutMe;
