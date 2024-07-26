import React, { useState } from 'react'
import Header from '../Common/Header';
import { PROJECT_LIST } from '../constants';
import ProjectItem from '../Project/ProjectItem';
import AddNewProject from './AddNewProject';


const HomePage = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const updateTitle = (title) => {
    setProjectTitle(title);
  }
  const handleSubmit = () => {
    if(projectTitle != "")
      PROJECT_LIST.push(projectTitle);
    setProjectTitle("");
  }

  return (
    <div className='bg-black font-poppins h-screen overflow-scroll p-2'>
      <Header title="Projects" />
      <div className='flex justify-center relative'>
        <div className='flex flex-col space-y-2 w-80'> 
          {
            PROJECT_LIST.map((title, index) => <ProjectItem {...{title, project_id: index}} />)
          }
        </div>
        <AddNewProject {...{updateTitle, handleSubmit}} />
      </div>
    </div>
  )
}

export default HomePage;