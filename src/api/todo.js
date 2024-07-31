import axios from "axios";

const show = (todo_id) => axios.get(`todos/${todo_id}`);

const addTodo = (project_id, todo_details) => axios.post(`projects/${project_id}/todos`, todo_details);

const editTodo = (todo_id, todo_details) => axios.put(`todos/${todo_id}`, todo_details);

const deleteTodo = (todo_id) => axios.delete(`todos/${todo_id}`);

export const todoApi = { show, addTodo, editTodo, deleteTodo };
