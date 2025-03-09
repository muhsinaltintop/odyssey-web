import React from 'react'
import SocialIcons from './atoms/SocialIcons'

const TopBar = () => {
  return (
    <div className='flex justify-center gap-6 bg-yellow-500 py-1'>
        <div>Adress: Leicester, Online</div>
        <div>Working Hours: Monday-Friday: 9am-5pm</div>
        <div>e-mail: imran@odysseycounselling.uk</div>
        <div className='flex'>
            <SocialIcons/>
        </div>
    </div>
  )
}

export default TopBar