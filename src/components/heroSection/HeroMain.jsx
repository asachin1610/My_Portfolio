import React from 'react'
import HeroPic from './HeroPic';
import HeroText from './HeroText';

const HeroMain = () => {
  return (
    <div className='pt-40 pb-16'>
      <div className='flex md:flex-row flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4'>
        <HeroPic/>
        <HeroText/>
      </div>
    </div>
  );
};

export default HeroMain;