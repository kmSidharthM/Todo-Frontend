import React from 'react'

const PageNotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-black font-poppins lg:flex-row lg:space-x-8'>
      <p className='text-white text-lg font-black lg:text-4xl'>404</p>
      <p className='text-gray-400 lg:text-xl'>The page could not be found.</p>
    </div>
  )
}

export default PageNotFound;