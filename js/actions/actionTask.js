import { openSectionEditTask } from '../toggleSection/openSections.js';
import { closeSectionEditTask } from '../toggleSection/closeSections.js';
import {
  renderAllTasks,
  renderDoneTasks,
  renderPriorityTasks
} from '../render/renderTasks.js';

// DELETE TASK
function deleteTasks(userData) {
  const btnsDeleteTask = document.querySelectorAll('.btn-delete-task-js');
  btnsDeleteTask.forEach((btnDeleteTask) => {
    btnDeleteTask.addEventListener('click', () => {
      let currentTaskId = btnDeleteTask.parentNode.parentNode.parentNode.id;
      let currentCategoryId = btnDeleteTask.parentNode.parentNode.parentNode.title;

      // GET THE CURRENT CATEGORY
      let nowCategory = userData.categories.find(category => category.id == currentCategoryId);
      
      // DELETE THE TASK FROM THE OTHERS TASKS
      let updateTasks = nowCategory.tasks.filter(task => task.id !== currentTaskId);

      // NOW CURRENT CATEGORY DON'T HAVE THE CURRENT TASK WHAT WE WANNA DELETE
      nowCategory.tasks = updateTasks;

      // DELETE THE CURRENT CATEGORY FROM THE USERDATA
      let withoutCurrentCategory = userData.categories.filter(category => category.id !== currentCategoryId);

      // PUSH THE NEW CURRENT CATEGORY WITHOUT THE TASK WHAT WE WANNA DELETE
      withoutCurrentCategory.push(nowCategory);

      // WE CHANGE THE OLD DATA WITH THE UPDATE DATA
      userData.categories = withoutCurrentCategory;

      // DELETE FROM THE DOM
      btnDeleteTask.parentNode.parentNode.parentNode.style.display = 'none';
    });
  });
};

// DONE TASK
function doneTasks(currentCategory, userData) {
  const btnsDoneTask = document.querySelectorAll('.btn-done-task-js');
  btnsDoneTask.forEach((btnDoneTask) => {
    btnDoneTask.addEventListener('click', () => {
      let currentTaskId = btnDoneTask.parentNode.parentNode.id;
      let currentCategoryId = btnDoneTask.parentNode.parentNode.title;

      // GET THE CURRENT CATEGORY
      let nowCategory = userData.categories.find(category => category.id == currentCategoryId);

      // UPDATE THE TASK FROM THE OTHERS TASKS
      let updateTask = nowCategory.tasks.find(task => task.id == currentTaskId);
      
      updateTask = {
        ...updateTask,
        complete: !updateTask.complete,
      }
      
      // DELETE THE TASK FROM THE OTHERS TASKS
      let updateTasks = nowCategory.tasks.filter(task => task.id !== currentTaskId);

      // PUSH THE NEW CURRENT TASK
      updateTasks.push(updateTask)

      // // NOW CURRENT CATEGORY DON'T HAVE THE CURRENT TASK WHAT WE WANNA DELETE
      nowCategory.tasks = updateTasks;

      // // DELETE THE CURRENT CATEGORY FROM THE USERDATA
      let withoutCurrentCategory = userData.categories.filter(category => category.id !== currentCategoryId);

      // // PUSH THE NEW CURRENT CATEGORY WITHOUT THE TASK WHAT WE WANNA DELETE
      withoutCurrentCategory.push(nowCategory);

      // // WE CHANGE THE OLD DATA WITH THE UPDATE DATA
      userData.categories = withoutCurrentCategory;

      // // UPDATE FROM THE DOM
      btnDoneTask.classList.toggle('active');

      if (btnDoneTask.parentElement.parentElement.parentElement.parentElement.querySelector('.show-done-tasks-js').className.includes('active')) {
        renderDoneTasks(currentCategory, userData);
      }
    })
  })
}

// PRIORITY TASK
function priorityTasks(currentCategory, userData) {
  const btnsPriorityTask = document.querySelectorAll('.btn-priority-task-js');
  btnsPriorityTask.forEach((btnPriorityTask) => {
    btnPriorityTask.addEventListener('click', () => {
      let currentTaskId = btnPriorityTask.parentNode.parentNode.parentNode.id;
      let currentCategoryId = btnPriorityTask.parentNode.parentNode.parentNode.title;

      // GET THE CURRENT CATEGORY
      let nowCategory = userData.categories.find(category => category.id == currentCategoryId);

      // TAKE THE CURREN TASK
      let nowTask = nowCategory.tasks.find(task => task.id == currentTaskId);
      
      // UPDATE CURRENT TASK
      nowTask = {
        ...nowTask,
        priority: !nowTask.priority,
      }
      
      // DELETE THE TASK FROM THE OTHERS TASKS
      let updateTasks = nowCategory.tasks.filter(task => task.id !== currentTaskId);

      // PUSH THE NEW CURRENT TASK
      updateTasks.push(nowTask)

      // NOW CURRENT CATEGORY DON'T HAVE THE CURRENT TASK WHAT WE WANNA DELETE
      nowCategory.tasks = updateTasks;

      // DELETE THE CURRENT CATEGORY FROM THE USERDATA
      let withoutCurrentCategory = userData.categories.filter(category => category.id !== currentCategoryId);

      // PUSH THE NEW CURRENT CATEGORY WITHOUT THE TASK WHAT WE WANNA DELETE
      withoutCurrentCategory.push(nowCategory);

      // WE CHANGE THE OLD DATA WITH THE UPDATE DATA
      userData.categories = withoutCurrentCategory;

      // // UPDATE FROM THE DOM
      btnPriorityTask.classList.toggle('active');

      if (btnPriorityTask.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.show-priority-tasks-js').className.includes('active')) {
        renderPriorityTasks(currentCategory, userData);
      };
    });
  });
};

// EDIT TASK
function editTasks(){
  const btnsEditTask = document.querySelectorAll('.btn-edit-task-js');
  const formEditTask = document.querySelector('.edit-form-js');
  const inputEditName = formEditTask.querySelector('.input-edit-name-js');
  btnsEditTask.forEach((btnEditTask) => {
    btnEditTask.removeEventListener('click', openSectionEditTask)
    btnEditTask.addEventListener('click', (e) => {
      openSectionEditTask()
      inputEditName.value = e.target.parentNode.parentNode.parentNode.querySelector('h4').textContent;
      formEditTask.id = e.target.parentNode.parentNode.parentNode.parentNode.id;
      formEditTask.title = e.target.parentNode.parentNode.parentNode.parentNode.title;
    });
  })
};

function submitEditListen(e, formEditTask, currentCategory, userData) {
  e.preventDefault();

  let currentTaskId = formEditTask.id;
  let currentCategoryId = formEditTask.title;

  // GET THE CURRENT CATEGORY
  let nowCategory = userData.categories.find(category => category.id == currentCategoryId);

  // TAKE THE CURREN TASK
  let nowTask = nowCategory.tasks.find(task => task.id == currentTaskId);

  const inputEditName = formEditTask.querySelector('.input-edit-name-js');

  // UPDATE CURRENT TASK
  nowTask = {
    ...nowTask,
    name: inputEditName.value,
  }

  // DELETE THE TASK FROM THE OTHERS TASKS
  let updateTasks = nowCategory.tasks.filter(task => task.id !== currentTaskId);

  // PUSH THE NEW CURRENT TASK
  updateTasks.push(nowTask)

  // NOW CURRENT CATEGORY DON'T HAVE THE CURRENT TASK WHAT WE WANNA DELETE
  nowCategory.tasks = updateTasks;

  // DELETE THE CURRENT CATEGORY FROM THE USERDATA
  let withoutCurrentCategory = userData.categories.filter(category => category.id !== currentCategoryId);

  // PUSH THE NEW CURRENT CATEGORY WITHOUT THE TASK WHAT WE WANNA DELETE
  withoutCurrentCategory.push(nowCategory);

  // WE CHANGE THE OLD DATA WITH THE UPDATE DATA
  userData.categories = withoutCurrentCategory;

  closeSectionEditTask()

  const btnShowAllTasks = document.querySelector('.show-all-tasks-js');
  const btnShowDoneTasks = document.querySelector('.show-done-tasks-js');
  const btnShowPriorityTasks = document.querySelector('.show-priority-tasks-js');

  btnShowAllTasks.classList.add('active');
  btnShowDoneTasks.classList.remove('active');
  btnShowPriorityTasks.classList.remove('active');

  renderAllTasks(currentCategory, userData);
}

function summitEdit(currentCategory, userData) {
  const formEditTask = document.querySelector('.edit-form-js');
  formEditTask.addEventListener("submit", (e) => submitEditListen(e, formEditTask, currentCategory, userData));
}

export {
  deleteTasks,
  doneTasks,
  priorityTasks,
  editTasks,
  summitEdit
};