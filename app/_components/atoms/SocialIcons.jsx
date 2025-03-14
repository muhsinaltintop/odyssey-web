import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


const SocialIcons = () => {
  return (
    <div className='flex gap-2 items-center'>
      <Link href='facebook.com/odysseycounselling'>
        <div className='text-green-950'><FaFacebook/></div>
      </Link>
      <Link href='https://www.instagram.com/odyssey_counselling/'>
        <div className='text-green-950'><FaInstagram/></div>
      </Link>
      <Link href='https://www.youtube.com/@imranaltintop2830'>
        <div className='text-green-950'><FaYoutube/></div>
      </Link>
    </div>
  )
}

export default SocialIcons