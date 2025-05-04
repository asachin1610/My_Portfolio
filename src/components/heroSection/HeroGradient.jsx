import React from 'react'

const HeroGradient = () => {
  return (
    <div>
      <div
        style={{
          boxShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)"
        }} 
        className='absolute top-0 right-[400px] -z-10 animate-pulse'>
      </div>
      <div
        style={{
          boxShadow: "10px 10px 200px 150px rgba(240,169,79,0.5)"
        }} 
        className='absolute top-0 right-0 -z-10 animate-pulse'>
      </div>
      <div
        style={{
          boxShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)"
        }} 
        className='absolute top-[300px] left-0 -z-10 opacity-50'>
      </div>
      <div
        style={{
          boxShadow: "10px 10px 200px 150px rgba(240,169,79,0.5)"
        }} 
        className='absolute top-[500px] left-0 -z-10 opacity-50'>
      </div>

    </div>
  );
};

export default HeroGradient;