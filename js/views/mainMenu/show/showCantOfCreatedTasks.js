function showCantOfCreatedTasks(userData) {
  let cantOfCreatedTasks = 0;
  userData.categories.forEach(category => {
    cantOfCreatedTasks += category.tasks.length;
  })

  const createdTasks = document.querySelector('.created-task-js');
  createdTasks.textContent = cantOfCreatedTasks;
};

export default showCantOfCreatedTasks;