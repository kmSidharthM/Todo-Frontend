export const buildUrlProject = (path, {username='', todo_id='', project_id=''}) => {
  let modifiedPath = path;
  if (path.includes(":username")) {
    modifiedPath = modifiedPath.replace(/:username/g, username);
  }
  if (path.includes(":project_id")) {
    modifiedPath = modifiedPath.replace(/:project_id/g, project_id);
  }
  if (path.includes(":todo_id")) {
    modifiedPath = modifiedPath.replace(/:todo_id/g, todo_id);
  }
  return modifiedPath;
}