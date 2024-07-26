import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { PROJECT_LIST } from '../constants';

const AddNewProject = ({ updateTitle, handleSubmit}) => {
  return (
    <>
      <Dialog.Root className="font-poppins">
        <Dialog.Trigger asChild>
          <button className='bg-yellow-400 text-black p-3 rounded-full flex space-x-1 fixed bottom-4'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg> 
            <span>Add Project</span>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black bg-opacity-30 fixed inset-0" />
          <Dialog.Content className=" bg-white text-black rounded-md p-4 w-80 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className='text-xl font-bold' >Project Details</Dialog.Title>
            <Dialog.Description className='flex flex-col space-y-1 mb-4 mt-4 text-gray-700' >
                <label htmlFor="projectName">Enter project name</label>
                <input type="text" placeholder='Enter a name..' className='p-2 rounded text-black border-2 border-black' onChange={(e) => updateTitle(e.target.value)} />
            </Dialog.Description>
              <Dialog.Close asChild>
                <div className='flex justify-end'>
                  <button className='bg-black text-white p-2 w-24 rounded-full' onClick={handleSubmit}>Create</button>
                </div>  
              </Dialog.Close>
            <Dialog.Close asChild>
              <button className='absolute top-2 right-2'>X
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default AddNewProject