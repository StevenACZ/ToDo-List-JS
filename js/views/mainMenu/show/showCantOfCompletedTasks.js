function showCantOfCompletedTasks(userData) {
  let cantOfCompletedTasks = 0;
  userData.categories.forEach(category => {
    category.tasks.forEach(task => {
      if (task.complete) {
        cantOfCompletedTasks += 1;
      }
    })
  })

  const completedTasks = document.querySelector('.completed-task-js');
  completedTasks.textContent = cantOfCompletedTasks;
};

export default showCantOfCompletedTasks;