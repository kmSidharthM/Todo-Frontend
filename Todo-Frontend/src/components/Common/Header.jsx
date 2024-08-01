import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='p-5 flex items-center sticky top-0 z-50 bg-black bg-opacity-80 lg:justify-center'>
      <p className='text-white text-xl lg:text-2xl'>{title}</p>
    </div>
  )
}

export default Header