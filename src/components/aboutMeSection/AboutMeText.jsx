import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start items-center md:text-left text-center'>
        <h2 className='text-6xl text-cyan-400 mb-10'>About Me</h2>
        <p className='text-white'>
        I'm Sachin Kumar, a Computer Science student and a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React.JS. I specialize in building responsive, user-friendly web interfaces that offer smooth and engaging user experiences. I enjoy turning complex problems into simple, beautiful, and intuitive designs. I’ve worked on a variety of projects-from static websites to dynamic web applications-honing my skills in modern development practices and frontend technologies. I'm always eager to learn, grow, and collaborate on innovative projects that push me both creatively and technically. My journey in tech is driven by curiosity, continuous learning, and a commitment to creating impactful digital solutions.
        </p>
        <a
          href="/Sachin_Resume.pdf"
          download
          className="md:self-start self-center"
        >
          <button 
            className="border border-amber-500 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-amber-500 transition-all duration-500 cursor-pointer text-white hover:text-cyan-400"
          >
            My Resume
          </button>
        </a>
    </div>
  );
};

export default AboutMeText;