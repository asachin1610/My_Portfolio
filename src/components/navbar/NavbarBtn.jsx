import React from 'react'
import { BsArrowDownRightCircleFill } from "react-icons/bs";

const NavbarBtn = () => {
  return (
    <button 
      style={{ boxShadow: '0px 0px 20px 0px rgba(94, 206, 220, 0.5)' }}
      className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-300 border flex items-center gap-1 bg-gradient-to-r from-cyan-300 to-orange-400 hover:border-orange-400 hover:scale-110 transition-all duration-500 cursor-pointer hover:shadow-boxShadow">
        Hire Me
        <div className="hidden md:block">
          <BsArrowDownRightCircleFill />
        </div>
    </button>
  );
};

export default NavbarBtn;