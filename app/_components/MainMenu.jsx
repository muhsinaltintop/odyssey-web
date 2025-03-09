import React from 'react'
import Logo from './atoms/Logo'
import SingleMenuItem from './atoms/singleMenuItem'
import menuItems from '../../public/menuItems.json'

const MainMenu = () => {
  return (
    <div className='flex justify-center gap-4'>
      <div><Logo/></div>
      <div className='flex'>
          {menuItems.map((menuItem) => {
            return (
              <div key={menuItem.id} className='ml-8 mt-4'>{<SingleMenuItem menuName={menuItem.menuName} pathName={menuItem.pathName}/>}</div>
            )
          })}

      </div>
    </div>
  )
}

export default MainMenu