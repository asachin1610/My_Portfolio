import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (

    <div className='flex flex-col gap-4 h-full justify-center md:text-left text-center'>

      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
       className='lg:text-2xl text-xl uppercase text-cyan-400'>
        FRONT-END WEB DEVELOPER
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }} 
      className='md:text-[2.8rem] lg:text-6xl text-4xl font-bold font-special text-orange-400'>
        SACHIN KUMAR
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }} 
      className='text-lg mt-4 text-white'>
          I'm a Frontend Developer skilled in HTML, CSS, JavaScript, and ReactJS,
          <br/> 
          creating responsive and user focused web experiences.
      </motion.p>
    </div>
  );
};

export default HeroText;