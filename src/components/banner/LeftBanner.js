import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {BsDownload} from "react-icons/bs"
import Media from './Media';
import resume from "../../assets/Resume_2.0.pdf"

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Frontend Developer", "MERN Stack Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Jagannath Nayak</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Front-End Developer who is passionate about developing end-to-end web solutions with creativity and technical excellence.
        </p>
        <a href={resume} target='_blank'  className=' flex justify-between items-center bg-designColor text-white px-4 py-2 w-[120px] rounded-md'>Resume
        <BsDownload/></a>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner