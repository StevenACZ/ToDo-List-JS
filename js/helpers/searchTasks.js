const searchDoneTasks = (tasks) => {
  return tasks.filter(task => task.complete == true);
};

const searchPriorityTasks = (tasks) => {
  return tasks.filter(task => task.priority == true);
};

export {
  searchDoneTasks,
  searchPriorityTasks
}