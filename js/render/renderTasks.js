import {
  searchDoneTasks,
  searchPriorityTasks
} from '../helpers/searchTasks.js'
import { drawTask } from '../draw/drawTask.js';
import {
  deleteTasks,
  doneTasks,
  priorityTasks,
  editTasks,
  summitEdit
} from '../actions/actionTask.js';
import { openOptions } from '../toggleSection/openSections.js';

function renderAllTasks(currentCategory, userData) {
  const gridTasks = document.querySelector('.main__tasks-js');

  // CLEAR GRID
  gridTasks.innerHTML = '';

  // DRAW TASK
  currentCategory.tasks.forEach(task => {
    gridTasks.appendChild(drawTask(task, currentCategory.name, currentCategory.id));
  })

  openOptions();
  priorityTasks(currentCategory, userData);
  deleteTasks(userData);
  doneTasks(currentCategory, userData);
  editTasks();
  summitEdit(currentCategory, userData);
};

function renderDoneTasks(currentCategory, userData) {
  const gridTasks = document.querySelector('.main__tasks-js');

  // CLEAR GRID
  gridTasks.innerHTML = '';

  // DRAW TASK
  searchDoneTasks(currentCategory.tasks).forEach(task => {
    gridTasks.appendChild(drawTask(task, currentCategory.name, currentCategory.id));
  })

  openOptions();
  priorityTasks(currentCategory, userData);
  deleteTasks(userData);
  doneTasks(currentCategory, userData);
  editTasks();
  summitEdit(currentCategory, userData);
};

function renderPriorityTasks(currentCategory, userData) {
  const gridTasks = document.querySelector('.main__tasks-js');

  // CLEAR GRID
  gridTasks.innerHTML = '';

  // DRAW TASK
  searchPriorityTasks(currentCategory.tasks).forEach(task => {
    gridTasks.appendChild(drawTask(task, currentCategory.name, currentCategory.id));
  })

  openOptions();
  priorityTasks(currentCategory, userData);
  deleteTasks(userData);
  doneTasks(currentCategory, userData);
  editTasks();
  summitEdit(currentCategory, userData);
};

export {
  renderAllTasks,
  renderDoneTasks,
  renderPriorityTasks
};