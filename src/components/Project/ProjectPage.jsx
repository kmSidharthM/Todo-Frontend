import React, { useEffect, useState } from 'react'
import Header from '../Common/Header';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import TaskItem from './TaskItem';
import { projectApi } from '../../api/project';
import { ClipLoader } from 'react-spinners';
import { todoApi } from '../../api/todo';
import AddNewProject from '../Home/AddNewProject'

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

  return (
    <div className='bg-black overflow-auto h-screen text-white font-poppins p-2'>
      <Header title={project_title} />
      <div className="flex justify-center" >
        <div>
          <p className='mb-4'>Summary {completed_todo_list.length}/{todo_list.length} completed</p>
          <p>Pending</p>
          <div className='flex flex-col space-y-2 mb-8 py-2 w-80'>
          {
            pending_todo_list.map((todo) => <TaskItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.todo_id} />)
          }
          </div>
          <p>Completed</p>
          <div className='flex flex-col space-y-2 py-2 w-80'>
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