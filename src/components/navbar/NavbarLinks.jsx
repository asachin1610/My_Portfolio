import React from 'react'
import { Link} from 'react-scroll';
const links = [
    {link: "About me", section: "about"},
    {link: "Skills", section: "skills"},
    {link: "Tools", section: "tools"},
    {link: "Projects", section: "projects"},
    {link: "Contact", section: "contact"},
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row flex-col gap-6 text-white font-bold lg:relative absolute top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md text-xl bg-cyan-800/60 backdrop-blur-lg lg:bg-amber-950 w-full py-4">

        {links.map((link,index)=>{
            return <li key={index} className='group'>
                <Link 
                to={link.section}
                smooth={true}
                spy={true}
                duration={500}
                offset={-130}
                className="cursor-pointer text-white hover:text-cyan-400 transition-all duration-500"
                >
                  {link.link}
                </Link>
            <div className="mx-auto bg-cyan-400 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
            </li>
        })}
    </ul>
  )
};

export default NavbarLinks;
