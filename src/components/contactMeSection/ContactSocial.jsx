import React from 'react'
import SingleContactSocial from './SingleContactSocial';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link='https://github.com/asachin1610' Icon={FaGithub}/>
      <SingleContactSocial link='https://www.linkedin.com/in/sachin-kumar-431278254/' Icon={FaLinkedin}/>
      <SingleContactSocial link='https://www.instagram.com/_sachin_singh_.x._?igsh=MTA3cXFuMXZibnowdw==' Icon={FaInstagram}/>
    </div>
  );
};

export default ContactSocial;