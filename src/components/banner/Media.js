import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-8">
            <a href='https://twitter.com/Jaganna92887247' target='_blank'
            rel='noreferrer' className="bannerIcon">
              <FaTwitter />
            </a>
            <a href='https://www.linkedin.com/in/jagannath-nayak-031bbb229/' target='_blank'
            rel='noreferrer' className="bannerIcon">
              <FaLinkedinIn />
            </a>
            <a href='https://github.com/Jaga2105' target='_blank'
            rel='noreferrer' className="bannerIcon">
              <FaGithub />
            </a>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
  )
}

export default Media