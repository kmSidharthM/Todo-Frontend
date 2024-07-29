export const exportFile = (project_title, created_date, pending_todo_list, completed_todo_list) => {
  const content = 
`
# ${project_title}
##### ${created_date}
___

### Summary : ${completed_todo_list.length}/${completed_todo_list.length+pending_todo_list.length} completed.

## Pending
${pending_todo_list.map((item) => `- [ ] ${item.todo_title}`).join('\n')}

## Completed
${completed_todo_list.map((item) => `- [x] ${item.todo_title}`).join('\n')}
`;

  const element = document.createElement('a');
  const file = new Blob([content], { type: "text/markdown" });
  element.href = URL.createObjectURL(file);
  element.download = `${project_title}.md`;
  element.click();
}