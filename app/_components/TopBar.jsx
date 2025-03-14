import React from 'react';
import SocialIcons from './atoms/SocialIcons';

const TopBar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-2 md:gap-6 bg-yellow-500 py-1 text-center md:text-left'>
      <div className='hidden md:block text-green-950 font-bold'>Address: Leicester, Online</div>
      <div className='hidden md:block text-green-950 font-bold'>Working Hours: Monday-Friday: 9am-5pm</div>
      <div className='hidden md:block text-green-950 font-bold'>e-mail: imran@odysseycounselling.uk</div>
      <div className='flex justify-center md:justify-start'>
        <SocialIcons />
      </div>
    </div>
  );
};

export default TopBar;