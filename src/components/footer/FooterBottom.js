import React from 'react'
import {AiFillHeart} from "react-icons/ai"

const FooterBottom = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-lg flex justify-center items-center gap-2">
        Made with <AiFillHeart color='red'/> by Jagannath
      </p>
    </div>
  );
}

export default FooterBottom
