import React, {  useState } from 'react'
// import Title from '../../helpers/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
// import Skills from './Skills';
// import Achievement from './Achievement';
// import Experience from "./Experience"

const About = () => {
const [active, setActive] = useState(1);
  return (
    <section id="about" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
      <h3 className="text-4xl md:text-4xl text-gray-300 font-bold capitalize mb-6">About me</h3>
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
          <li
            onClick={() =>setActive(1)}
            className={`${
            active===1
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } aboutLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>setActive(2)}
            className={`${
            active===2 ? "border-designColor rounded-lg" : "border-transparent"
            } aboutLi`}
          >
             Skills
          </li>
          <li
            onClick={() =>setActive(3)
            }
            className={`${
            active===3
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } aboutLi`}
          >
            Education
          </li>
        </ul>
      </div>
       {active===1 && <Experience/>}
      {active===2 && <Skills/>}
      {active===3 && <Education/>}
    </section>
  );
}

export default About