import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" py-20 h-auto border-b-[1px] border-b-black flex flex-col md:flex-row justify-evenly items-center gap-8">
      <div className="">
        <h3 className="text-md md:text-xl uppercase text-designColor tracking-wider">
          Quick Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <Link
              to={"about"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                About
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={"projects"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Projects
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="none"
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Contact
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h3 className="text-md md:text-xl uppercase text-designColor tracking-wider">
          Social Links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <a href='https://github.com/Jaga2105' target='_blank'
            rel='noreferrer' className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Github
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/jagannath-nayak-031bbb229/' target='_blank'
            rel='noreferrer' className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              LinkedIn
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/Jaganna92887247' target='_blank'
            rel='noreferrer' className="w-full text-base md:text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Twitter
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
