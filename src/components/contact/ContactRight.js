import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BiLogoGmail} from "react-icons/bi"

const ContactRight = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
          <a href='mailTo:jagannathnayak2105@gmail.com'  className="contactLink">
            <BiLogoGmail />
            <span>Gmail</span>
          </a>
          <a href='https://twitter.com/Jaganna92887247' target='_blank'
            rel='noreferrer'  className="contactLink">
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a href='https://www.linkedin.com/in/jagannath-nayak-031bbb229/' target='_blank'
            rel='noreferrer' className="contactLink">
            <FaLinkedinIn />
            <span>LinkdIn</span>
          </a>
          <a href='https://github.com/Jaga2105' target='_blank'
            rel='noreferrer' className="contactLink">
            <FaGithub />
            <span>Github</span>
          </a>
      </div>
  )
}

export default ContactRight