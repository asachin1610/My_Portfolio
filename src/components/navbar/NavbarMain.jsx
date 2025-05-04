import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  const toggleMenu = ()=>{
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
        <div className="flex justify-between w-full max-w-[1200px] ms-auto bg-amber-950 items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-400">
            <NavbarLogo/>
            <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
              <NavbarLinks/>
            </div>
            <NavbarBtn/>
        </div>
        <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange-400'>
          <button 
          className="text-2xl-1536px p-3 border border-orange-400 rounded-full text-red-100"
          onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
    </nav>
  );
};

export default NavbarMain;

