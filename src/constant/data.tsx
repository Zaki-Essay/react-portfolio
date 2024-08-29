import { AiOutlineMenu } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
import {
  imgFive,
  imgFour,
  imgOne,
  imgSix,
  imgThree,
  imgTwo,
} from "../assets/getImage";

// Define the interface for items in the featuresData array
export interface FeatureItem {
  id: number;
  icon: React.ReactNode; // Type for icon; can be any valid React node
  title: string;
  descripton: string; // Assuming this is a typo and should be "description"
}

// Define the interface for items in the portfolioData array
export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  img: string; // Update this if images are not strings
  icon: React.ReactNode; // Type for icon; can be any valid React node
  link: string;
}

// Define the data arrays with the appropriate types
export const featuresData: FeatureItem[] = [
  {
    id: 1,
    icon: <AiOutlineMenu />,
    title: "Business Stratagy",
    descripton:
        "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
  {
    id: 2,
    icon: <IoBookOutline />,
    title: "App Development",
    descripton:
        " We’ll handle everything from to app development process until it is time to make your project live. ",
  },
  {
    id: 3,
    icon: <AiOutlineMenu />,
    title: "Business Stratagy",
    descripton:
        "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
  {
    id: 4,
    icon: <AiOutlineMenu />,
    title: "Business Stratagy",
    descripton:
        "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
  {
    id: 5,
    icon: <AiOutlineMenu />,
    title: "Business Stratagy",
    descripton:
        "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
  {
    id: 6,
    icon: <AiOutlineMenu />,
    title: "Business Stratagy",
    descripton:
        "I throw myself down among the tall grass by the stream as Ilie close to the earth.",
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 101,
    title: "NFT Dashboard Application Development.",
    subtitle: "Gallery",
    img: imgOne as unknown as string, // Cast if necessary
    icon: <AiOutlineMenu />,
    link: "https://facebook.com",
  },
  {
    id: 102,
    title: "Online Food Delivery Mobile App Design.",
    subtitle: "Video",
    img: imgTwo as unknown as string, // Cast if necessary
    icon: <AiOutlineMenu />,
    link: "https://youtube.com",
  },
  {
    id: 103,
    title: "Travel App Design Creativity & Application.",
    subtitle: "External Link",
    img: imgThree as unknown as string, // Cast if necessary
    icon: <AiOutlineMenu />,
    link: "https://amazon.com",
  },
  {
    id: 104,
    title: "NFT Dashboard Application Development.",
    subtitle: "Gallery",
    img: imgFour as unknown as string, // Cast if necessary
    icon: <AiOutlineMenu />,
    link: "https://facebook.com",
  },
  {
    id: 105,
    title: "NFT Dashboard Application Development.",
    subtitle: "Gallery",
    img: imgFive as unknown as string, // Cast if necessary
    icon: <AiOutlineMenu />,
    link: "https://facebook.com",
  },
  {
    id: 106,
    title: "NFT Dashboard Application Development.",
    subtitle: "Gallery",
    img: imgSix as unknown as string, // Cast if necessary
    icon: <AiOutlineMenu />,
    link: "https://facebook.com",
  },
];
