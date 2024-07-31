import React from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { routes } from '../routes'
import { buildUrlProject } from '../Utils/buildUrl'

const ProjectItem = ({project_title, project_id, created_date, deleteProject}) => {
  const { username } = useParams();
  return (
    <Link to={buildUrlProject(routes.home.project, { username, project_id } )}>
      <div className='bg-neutral-800 font-poppins rounded-md flex items-center p-5 text-white space-x-4 relative'>
        <div className='max-w-56 lg:text-xl'>
          <p>{project_title}</p>
          <p className='text-xs text-gray-400 lg:text-base'>{created_date}</p>
        </div>
        <div className='absolute right-4 flex space-x-6 items-center '>
          <Link title='Edit' className='w-5 h-5 lg:w-6 lg:h-6' to={buildUrlProject(routes.home.editProject, { username, project_id })}>
            <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#FFFFFF"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
          </Link>
          <button title='Delete' className='w-6 h-6 lg:w-8 lg:h-8' onClick={
            (e) => {
              e.preventDefault();
              deleteProject(project_id);
              }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#FFFFFF"><path d="M304.62-160q-26.85 0-45.74-18.88Q240-197.77 240-224.62V-720h-40v-40h160v-30.77h240V-760h160v40h-40v495.38q0 27.62-18.5 46.12Q683-160 655.38-160H304.62ZM680-720H280v495.38q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92h350.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93V-720ZM392.31-280h40v-360h-40v360Zm135.38 0h40v-360h-40v360ZM280-720v520-520Z"/></svg>  
          </button>
        </div>       
      </div>
    </Link>
  )
}

export default ProjectItem