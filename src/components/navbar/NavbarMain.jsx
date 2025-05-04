import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
      <div className="flex justify-between w-full max-w-[1200px] ms-auto bg-amber-950 items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-400">
        <NavbarLogo />

        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl p-3 border border-orange-400 rounded-full text-white">
            <GiHamburgerMenu />
          </button>
        </div>

        
        <div className={`${menuOpen ? "flex flex-col items-center" : "hidden"} lg:flex`}>
          <NavbarLinks />
        </div>

        
        <NavbarBtn className="hidden sm:flex" />
      </div>
    </nav>
  );
};

export default NavbarMain;

