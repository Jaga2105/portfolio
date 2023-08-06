import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import  contactImg  from "../../assets/images/contactImg.png";

const ContactLeft = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-44 lg:h-36 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-white">Jagannath Nayak</h3>
        <p className="text-md font-normal text-gray-400">
          MERN Stack Developer
        </p>
        {/* <p className="text-sm text-gray-400 tracking-wide">
        Front-End Developer who is passionate about developing end-to-end web solutions with creativity and technical excellence.
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7735953310</span>
        </p>
        <p className="text-base text-gray-400 flex gap-2">
          Email: <span className="text-lightText break-all">jagannathnayak2105@gmail.com</span>
        </p>
      </div>
    </div>
  );
}

export default ContactLeft