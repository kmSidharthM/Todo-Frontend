import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { projectApi } from '../../api/project';
import { ClipLoader } from 'react-spinners';
import { todoApi } from '../../api/todo';

const ProjectEdit = () => {
  const { project_id, todo_id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const showProject = async () => {
    try {
      const response = await projectApi.show(project_id);
      setItem(response);
    }
    catch(error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
  }

  const editProject = async () => {
    try {
      await projectApi.editPoject(project_id, item);
    }
    catch(error) {
      console.log(error);
    }
    finally {
      history.goBack();
    }
  }

  const editTodo = async () => {
    try {
      await todoApi.editTodo(todo_id, item);
    }
    catch(error) {
      console.log(error);
    }
    finally {
      history.goBack();
    }
  }

  const showTodo = async () => {
    try {
      const response = await todoApi.show(todo_id);
      setItem(response);
    }
    catch(error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = () => {
    if(todo_id)
      editTodo();
    else
      editProject();
  }

  useEffect(()=>{
    if(todo_id)
      showTodo();
    else
    showProject();
  }, []);

  if(isLoading) {
    return (
      <div className='flex justify-center items-center h-screen bg-black'> 
        <ClipLoader color='gold' />
      </div>
    )
  }
  if(!todo_id)
    return (
      <div className='bg-black font-poppins h-screen overflow-auto text-white flex flex-col justify-center items-center space-y-4'>
          <label>New Project Name</label>
          <input className='bg-transparent border-2 border-white p-2 rounded-md'  type="text" id='projectTitle' value={item.project_title} onChange={(e) => setItem((prev) => ({ ...prev, project_title: e.target.value }))} />
          <button className='bg-yellow-400 p-2 rounded-md text-black' onClick={handleSubmit}>Submit</button>
      </div>
    )
  return(
    <div className='bg-black font-poppins h-screen overflow-auto text-white flex flex-col justify-center space-y-4 px-8'>
          <label>New Todo Name</label>
          <input className='bg-transparent border-2 border-white p-2 rounded-md'  type="text" value={item.todo_title} onChange={(e) => setItem((prev) => ({ ...prev, todo_title: e.target.value }))} />

          <label>New Todo Description</label>
          <input className='bg-transparent border-2 border-white p-2 rounded-md'  type="text" value={item.todo_description} onChange={(e) => setItem((prev) => ({ ...prev, todo_description: e.target.value }))} />

          <button className='bg-yellow-400 p-2 rounded-md text-black' onClick={handleSubmit}>Submit</button>
      </div>
  );
}

export default ProjectEdit