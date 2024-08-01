export const routes = {
  root: "/",
  auth: "/auth",
  home: {
    index: "/:username/home",
    project: "/:username/home/project/:project_id",
    editProject: "/:username/home/edit/:project_id",
    editTodo: "/:username/home/edit/:project_id/:todo_id"
  }
}