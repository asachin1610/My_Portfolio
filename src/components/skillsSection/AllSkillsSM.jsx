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

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 gap-12 my-12'>
        {skills.map((item,index)=>{
            return (
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }} 
                key={index} 
                className='flex flex-col items-center'
                >
                <item.icon className='text-7xl text-amber-600'/>
                <p className='text-center mt-4 text-white'>{item.skill}</p>
              </motion.div>
            );
      })}
    </div>
  );
};

export default AllSkillsSM;