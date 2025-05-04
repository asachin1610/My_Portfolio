import React from 'react'
import SingleInfo from './SingleInfo';
import { MdOutlineEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
        <SingleInfo text="sk750702@gmail.com" Image={MdOutlineEmail}/>
        <SingleInfo text="+91 7479909365" Image={FaSquarePhone}/>
        <SingleInfo text="Roorkee, UK(India)" Image={IoLocationSharp}/>
    </div>
  );
};

export default ContactInfo;