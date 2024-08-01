import axios from "axios";

const fetch = (username) => axios.get(`projects/user/${username}`);

const show = (project_id) => axios.get(`projects/${project_id}`);

const postProject = (username, project_details) => axios.post(`projects/user/${username}`, project_details);

const editPoject = (project_id, project_details) => axios.put(`projects/${project_id}`, project_details);

const deleteProject = (project_id) => axios.delete(`projects/${project_id}`);

export const projectApi = { fetch, show, postProject, editPoject, deleteProject };
