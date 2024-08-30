import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./ui/Button";
import {logo} from "../assets/getImage.ts";

const Header: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navigationArray = [
    { title: "Home", link: "/react-portfolio/" },
    { title: "About", link: "/react-portfolio/about" },
    { title: "Services", link: "/react-portfolio/services" },
    { title: "Portfolio", link: "/react-portfolio/portfolio" },
    { title: "Contact", link: "/react-portfolio/contact" },
    { title: "Blog", link: "/react-portfolio/blog" },
  ];

  /*
  * TODO....$
  *
  * interface NavItem {
  title: string;
  link: string;
}

const navigationArray: NavItem[] = [
  // ... navigation items
];
  *
  * */

  return (
      <header className="w-full h-20 bg-[#16181C]/90 backdrop-blur-2xl sticky top-0 z-50">
        <div className="h-full max-w-screen-xl mx-auto flex items-center justify-between">
          <div>
            <Link to="/">
              <img src={logo as string} alt="logo" className="w-24" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            {navigationArray.map(({ title, link }) => (
                <Link key={link} to={link}>
                  <p
                      className={`${
                          pathname === link ? "text-designColor" : "text-lightText"
                      } text-sm uppercase font-semibold hover:text-designColor cursor-pointer duration-300`}
                  >
                    {title}
                  </p>
                </Link>
            ))}
            <Button className="w-28 h-10 uppercase" />
          </div>
        </div>
      </header>
  );
};

export default Header;
