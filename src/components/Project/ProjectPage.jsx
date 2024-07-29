import React, { useEffect, useState } from 'react'
import Header from '../Common/Header';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import TaskItem from './TaskItem';
import { projectApi } from '../../api/project';
import { ClipLoader } from 'react-spinners';
import { todoApi } from '../../api/todo';
import AddNewProject from '../Home/AddNewProject'
import { exportFile } from '../Utils/exportGist';

const ProjectPage = () => {
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { project_id } = useParams();

  const showProject = async () => {
    try {
      const response = await projectApi.show(project_id);
      setProject(response);
    }
    catch(error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
  }

  const deleteTodo = async (todo_id) => {
    try {
      await todoApi.deleteTodo(todo_id);
      showProject();
    }
    catch(error) {
      console.log(error);
    }
  }

  const updateTodo = async (todo_id, todo_details) => {
    try {
      await todoApi.editTodo(todo_id, todo_details);
      showProject();
    }
    catch(error) {
      console.log(error);
    }
  }

  const addTodo = async (todo_details) => {
    try {
      const response = await todoApi.addTodo(project_id, todo_details);
      setProject(response);
    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    showProject();
  }, []);

  if(isLoading) {
    return (
      <div className='flex justify-center items-center h-screen bg-black'> 
        <ClipLoader color='gold' />
      </div>
    )
  }

  const {
    project_title,
    created_date,
    todo_list=[]
  } = project;
  const pending_todo_list = todo_list.filter(todo => todo.status);
  const completed_todo_list = todo_list.filter(todo => !todo.status);

  const handleClick = () => {
    exportFile(project_title, created_date, pending_todo_list, completed_todo_list);
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white font-poppins'>
      <Header title={project_title} />
      <div className="flex justify-center p-2" >
        <div className='lg:w-2/3' >
          <div className='flex space-x-2 mb-4 '>
          <p className='lg:text-xl'>Summary: {completed_todo_list.length}/{todo_list.length} completed</p>
          <button title='Export Summary' onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="gold"><path d="M480-336.92 338.46-478.46l28.31-28.77L460-414v-346h40v346l93.23-93.23 28.31 28.77L480-336.92ZM264.62-200q-27.62 0-46.12-18.5Q200-237 200-264.62v-96.92h40v96.92q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69h430.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-96.92h40v96.92q0 27.62-18.5 46.12Q723-200 695.38-200H264.62Z"/></svg>
          </button>
          </div>
          <p className='lg:text-xl'>Pending</p>
          <div className='flex flex-col space-y-2 mb-8 py-2 w-80 lg:w-full'>
          {
            pending_todo_list.map((todo) => <TaskItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.todo_id} />)
          }
          </div>
          <p className='lg:text-xl'>Completed</p>
          <div className='flex flex-col space-y-2 py-2 w-80 lg:w-full'>
          {
            completed_todo_list.map((todo) => <TaskItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.todo_id} />)
          }
          </div>
        </div>
        <AddNewProject  item="Todo" isDescription addItem={addTodo} />
      </div>
    </div>
  )
}

export default ProjectPage;