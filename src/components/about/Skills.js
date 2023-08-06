import React from 'react'
import { motion } from 'framer-motion';
import languages from '../../assets/language';


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

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="mx-auto w-[60%] mt-10"
    >
        <motion.ul
              className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lgl:grid-cols-5 gap-10'
              variants={container}
              initial='hidden'
              animate='visible'
            >
              {languages.map((lang, i) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  className={"bg-white rounded-md p-4 flex flex-col items-center gap-2"}
                  key={'icon-' + i + 1}
                  variants={item}
                >
                  <img src={lang.src} alt={lang.title} loading='lazy' />
                  <span className='text-black'>{lang.title}</span>
                </motion.li>
              ))}
            </motion.ul>
    </motion.div>
  )
}

export default Skills