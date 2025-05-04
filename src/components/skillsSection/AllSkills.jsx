import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { PiFileCpp } from "react-icons/pi";
import SingleSkill from './SingleSkill';
import { fadeIn } from "../../framerMotion/variants";
import { motion } from "framer-motion";

const skills = [
  {
    skill: 'HTML',
    icon: TiHtml5,
  },
  {
    skill: 'CSS',
    icon: IoLogoCss3,
  },
  {
    skill: 'Bootstrap',
    icon: SiBootstrap,
  },
  {
    skill: 'TailwindCSS',
    icon: SiTailwindcss,
  },
  {
    skill: 'JavaScript',
    icon: SiJavascript,
  },
  {
    skill: 'ReactJS',
    icon: FaReact,
  },
  {
    skill: 'MySQL',
    icon: SiMysql,
  },
  {
    skill: 'JAVA',
    icon: FaJava,
  },
  {
    skill: 'PYTHON',
    icon: FaPython,
  },
  {
    skill: 'C++',
    icon: PiFileCpp,
  },

];

const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              
            >
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
            </motion.div>
          );
        })}
        
      </div>
    </div>
  );
};

export default AllSkills;