export const routes = {
  root: "/",
  auth: "/auth",
  home: {
    index: "/:username/home",
    project: "/:username/home/project/:project_id"
  }
}