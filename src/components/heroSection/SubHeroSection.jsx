import React from 'react'

const subHeroSection = () => {
  return (
    <div className='w-full border-y border-gray-400 text-gray-400 flex justify-around uppercase xl:text-4xl md:text-2xl text-4xl py-8 items-center gap-4 bg-amber-950'>
        <p className='md:block hidden'>Problem Solver</p>
        <p className='md:block hidden'>Team Work</p>
        <p>Fast Learner</p>
    </div>
  );
};

export default subHeroSection;