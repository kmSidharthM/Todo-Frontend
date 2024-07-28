import React from 'react'

const TaskItem = ({ todo, deleteTodo, updateTodo}) => {

  const { 
    todo_id, 
    todo_title, 
    todo_description, 
    status, 
    created_date, 
    updated_date
   } = todo;
  return (
    <div className='bg-neutral-800 font-poppins rounded-md flex items-center p-5 text-white space-x-4 relative'>
      <input type='checkbox' checked={!status} onChange={() => {
        updateTodo(todo_id, {...todo, status: !status})
      }}></input>
      <div className='max-w-56'>
        <p className={!status ? 'line-through text-gray-400' : ''}>{todo_title}</p>
        <p className={!status ? 'line-through text-gray-400 text-sm' : 'text-sm'}>{todo_description}</p>
        <p className='text-xs text-gray-400'>{created_date}</p>
      </div>
      <button className='absolute right-4 w-6 h-6 lg:w-9 lg:h-9' onClick={
        (e) => {
          e.preventDefault();
          deleteTodo(todo_id);
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#FFFFFF"><path d="M304.62-160q-26.85 0-45.74-18.88Q240-197.77 240-224.62V-720h-40v-40h160v-30.77h240V-760h160v40h-40v495.38q0 27.62-18.5 46.12Q683-160 655.38-160H304.62ZM680-720H280v495.38q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92h350.76q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93V-720ZM392.31-280h40v-360h-40v360Zm135.38 0h40v-360h-40v360ZM280-720v520-520Z"/></svg>
      </button>
      
    </div>
  )
}

export default TaskItem