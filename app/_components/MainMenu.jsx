"use client"
import React, { useState } from 'react';
import Logo from './atoms/Logo';
import SingleMenuItem from './atoms/SingleMenuItem';
import menuItems from '../../public/menuItems.json';

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative'>
      <div className='flex justify-left items-center p-4'>
        <div><Logo /></div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-green-950'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
        <div className='hidden md:flex md:flex-row md:items-center mx-auto px-4'>
          {menuItems.map((menuItem) => (
            <div key={menuItem.id} className='ml-8 mt-4 md:mt-0'>
              <SingleMenuItem menuName={menuItem.menuName} pathName={menuItem.pathName} />
            </div>
          ))}
        </div>
      </div>
      <div className={`fixed top-0 right-0 h-full bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out w-3/4 md:hidden z-50`}>
        <div className='flex flex-col items-center mt-8'>
          <button onClick={toggleMenu} className='absolute top-4 left-4 text-green-950'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
          {menuItems.map((menuItem) => (
            <div key={menuItem.id} className='mb-4'>
              <SingleMenuItem menuName={menuItem.menuName} pathName={menuItem.pathName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;