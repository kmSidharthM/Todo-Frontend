import React from 'react'
import Header from '../Common/Header';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { COMPLETED_TASKS, PENDING_TASK, PROJECT_LIST } from '../constants';
import TaskItem from './TaskItem';

const ProjectPage = () => {
  const { project_id } = useParams();
  return (
    <div className='bg-black overflow-scroll h-screen text-white font-poppins p-2'>
      <Header title={PROJECT_LIST[project_id]} />
      <div className='px-4'>
        <p className='mb-4'>Summary 3/6 completed</p>
        <p>Pending</p>
        <div className='flex flex-col space-y-2 mb-8 py-2'>
        {
          PENDING_TASK.map((task) => <TaskItem {...{task}} />)
        }
        </div>
        <p>Completed</p>
        <div className='flex flex-col space-y-2 py-2'>
        {
          COMPLETED_TASKS.map((task) => <TaskItem {...{task}} />)
        }
        </div>
      </div>
    </div>
  )
}

export default ProjectPage;