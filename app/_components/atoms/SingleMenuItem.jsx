import Link from 'next/link'
import React from 'react'

const SingleMenuItem = ({menuName, pathName}) => {
  return (
    <div className='text-yellow-600 font-bold px-4 py-2 bg-green-900 rounded-xl'>
      <Link href={pathName}>{menuName}</Link>
    </div>
  )
}

export default SingleMenuItem