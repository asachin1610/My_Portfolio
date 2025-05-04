import React from 'react'
import ProjectsText from './ProjectsText';
import SingleProject from './SingleProject';
import { fadeIn } from "../../framerMotion/variants";
import { motion } from "framer-motion";

const projects = [
    {
        name: 'My Portfolio',
        year: 'Feb2025',
        align: 'right',
        image: '../images/p1image.png',
        link: 'about',
    },
    {
        name: 'Tic Tac Toe Game',
        year: 'June2023',
        align: 'left',
        image: '../images/p2image.png',
        link: 'https://github.com/asachin1610/Tic_Tac_Toe_Game_project',
    },
    {
        name: 'Employee Management System',
        year: 'july2024',
        align: 'right',
        image: '../images/p3image.png',
        link: 'https://github.com/asachin1610/Employee_Management_System_project',
    },
    {
        name: 'Weather App',
        year: 'Jan2025',
        align: 'left',
        image: '../images/p4image.png',
        link: 'https://react-weather-app-swart-three.vercel.app/',
    },
    {
        name: 'Stone Paper Scissor',
        year: 'Sep2024',
        align: 'right',
        image: '../images/p5image.png',
        link: 'https://github.com/asachin1610/Stone_Paper_Scissors_Game',
    },
    {
        name: 'Calculator',
        year: 'June2023',
        align: 'left',
        image: '../images/p6image.png',
        link: "https://github.com/asachin1610/Calculator_project",
    },
];

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <ProjectsText />
        </motion.div>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item,index)=>{
                return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>
            })}
        </div>
    </div>
  );
};

export default ProjectsMain;
