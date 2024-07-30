export const buildUrlProject = (path, username='', project_id='') => {
  let modifiedPath = path;
  if (username) {
    modifiedPath = modifiedPath.replace(/:username/g, username);
  }
  if (project_id) {
    modifiedPath = modifiedPath.replace(/:project_id/g, project_id);
  }
  return modifiedPath;
}