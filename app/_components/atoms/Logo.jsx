import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image src={"/odyssey-logo.png"} width={200} height={100} alt='odyssey logo'/>
    </div>
  )
}

export default Logo