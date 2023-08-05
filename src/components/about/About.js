import React, {  useState } from 'react'
import Title from '../../helpers/Title';
// import Education from './Education';
// import Skills from './Skills';
// import Achievement from './Achievement';
// import Experience from "./Experience"

const About = () => {
const [active, setActive] = useState(1);
  return (
    <section id="about" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li
            onClick={() =>setActive(1)}
            className={`${
            active===1
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } aboutLi`}
          >
            Education
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
            Experience
          </li>
        </ul>
      </div>
      {/* {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />} */}
 
    </section>
  );
}

export default About