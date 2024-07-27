import axios from "axios";

const addTodo = (project_id, todo_details) => axios.post(`projects/${project_id}/todos`, todo_details)

const editTodo = (todo_id, todo_details) => axios.put(`todos/${todo_id}`, todo_details)

const todoApi = { addTodo, editTodo };
export default todoApi;