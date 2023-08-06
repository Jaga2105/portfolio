import React from 'react'
import { motion } from 'framer-motion'
import AboutCard from "./AboutCard"

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      className="w-full"
    >
        <div className="mx-auto mt-6 lgl:mt-14 w-[80%] md:w-[60%] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <AboutCard
            title="Software Development Intern"
            subTitle="Cognizant, Bangalore"
            duration="Mar 2023- Jun 2023"
            des={["Gained the experience of working with web technologies i.e. React JS, Node JS, Express JS, MongoDB.",
                    "Got to know about the unit testing using JEST.",
                "Got to know about the project release through Agile Methodology",
            "Effective communication with team members"]}
          />
        </div>
    </motion.div>
  )
}

export default Experience