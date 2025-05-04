import React from 'react'
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiJupyter } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import SingleTool from './SingleTool';
import { fadeIn } from "../../framerMotion/variants";
import { motion } from "framer-motion";


const tools = [
  {
    tools: "Git",
    icon: FaGitAlt,
  },
  {
    tools: "GitHub",
    icon: FaGithub,
  },
  {
    tools: "VS Code",
    icon: VscVscode,
  },
  {
    tools: "Jupyter Notebook",
    icon: SiJupyter,
  },
  {
    tools: "Tableau",
    icon: SiTableau,
  },
];

const AllToolsSM = () => {
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 gap-12 my-12'>
        {tools.map((item,index)=>{
            return (
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }} 
                key={index} 
                className='flex flex-col items-center'>
                <item.icon className='text-7xl text-amber-600'/>
                <p className='text-center mt-4 text-white'>{item.tools}</p>
              </motion.div>
            );
      })}
    </div>
  );
};

export default AllToolsSM;