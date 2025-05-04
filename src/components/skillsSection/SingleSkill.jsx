import React from 'react'

const SingleSkill = ({imgSvg, text}) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500'>
      <div className='flex flex-col items-center gap-2 relative'>
        <div className='bg-white text-shadow-black h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-gray-700 hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-amber-600'>
          {imgSvg}
        </div>
        <p className='text-white font-bold'>{text}</p>
      </div>
      <div className='w-[100px] h-[200px] bg-amber-500 absolute top-[50px] -z-10'></div>
    </div>
  );
};

export default SingleSkill;