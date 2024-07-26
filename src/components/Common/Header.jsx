import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='p-5 flex space-x-2 items-center sticky top-0 z-50 bg-black bg-opacity-80'>
      <p className='text-white text-2xl'>{title}</p>
    </div>
  )
}

export default Header