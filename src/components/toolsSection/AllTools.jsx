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

const AllTools = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {tools.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
                          
            >
            <SingleTool key={index} text={item.tools} imgSvg={<item.icon />} />
            </motion.div>
          );
        })}
        
      </div>
    </div>
  );
};

export default AllTools;