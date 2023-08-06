import React from 'react'
import { motion } from 'framer-motion';
import AboutCard from './AboutCard';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};


const Education = () => {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      className="w-full"
    >
        <div className="mx-auto mt-6 lgl:mt-14 w-[80%] md:w-[60%] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <AboutCard
            title="Master in Computer Application"
            subTitle="OUTR Bhubaneswar, Odisha"
            duration="2021-23"
            des={["I have completed my masters in Computer Science and Application with 8.5 CGPA."]}
          />
          <AboutCard
            title="Bachelor in Science (Chemistry)"
            subTitle="Khallikote University, Berhampur"
            duration="2016-19"
            des={["I have completed my bachelors degree in Chemistry honours with 8.09 CGPA ."]}
          />
        </div>
    </motion.div>
  );
}

export default Education