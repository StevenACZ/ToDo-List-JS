import userData from './db/dataBase.js';
import { renderCategories } from './render/renderCategories.js';
import {
  renderAllTasks,
  renderDoneTasks,
  renderPriorityTasks
} from './render/renderTasks.js';
import {
  closeSectionAddNewCategory,
  closeSectionCategoryProjects,
  closeSectionAddNewTask,
  closeSectionEditTask
} from './toggleSection/closeSections.js';
import {
  openSectionAddNewCategory,
  openSectionCategoryProjects,
  openSectionAddNewTask,
} from './toggleSection/openSections.js';
import showCantOfCompletedTasks from './views/mainMenu/show/showCantOfCompletedTasks.js';
import showCantOfCreatedTasks from './views/mainMenu/show/showCantOfCreatedTasks.js';
import showDateOfToday from './views/mainMenu/show/showDateOfToday.js';
import showUserName from './views/mainMenu/show/showUserName.js';
import { findCategory } from './helpers/helpers.js';

// INIT
function init() {
  renderCategories(userData);
  clickOverCategoriesOpenTasks();
  showCantOfCompletedTasks(userData);
  showCantOfCreatedTasks(userData);
  showDateOfToday();
  showUserName(userData);  
}

//////////////////////////////
//// SECTION - MAIN MENU ////
////////////////////////////
const btnOpenSectionAddNewCategory = document.querySelector('.btn-open-section-add-new-category-js');
btnOpenSectionAddNewCategory.addEventListener('click', () => {
  openSectionAddNewCategory();
});

// CURRENT CATEGORY
let currentCategory = {};

// CLICK OVER CATEGORIES TO OPEN TASKS
function clickOverCategoriesOpenTasks() {
  const allCategoriesItem = document.querySelectorAll('.category__item');
  allCategoriesItem.forEach(categoryItem => {
    categoryItem.addEventListener('click', () => {
      currentCategory = findCategory(categoryItem, userData);
      
      renderAllTasks(currentCategory, userData, currentCategory);
      openSectionCategoryProjects(currentCategory);
    });
  });
};

/////////////////////////////////////
//// SECTION - ADD NEW CATEGORY ////
///////////////////////////////////
const btnCloseSectionAddNewCategory = document.querySelector('.btn-close-section-add-new-category-js');
btnCloseSectionAddNewCategory.addEventListener('click', () => {
  closeSectionAddNewCategory();
});

// FORM NEW CATEGORY
const formAddNewCategory = document.querySelector('.form-add-new-category-js');
formAddNewCategory.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInputCategory = document.querySelector('.name-input-category-js');
  const radioJoob = document.getElementById('joob-radio');
  const radioSchool = document.getElementById('school-radio');
  const radioGrocery = document.getElementById('grocery-radio');
  const radioSchedule = document.getElementById('schedule-radio');
  const radioUser = document.getElementById('user-radio');

  let imageUrl = '';
  if (radioJoob.checked) {
    imageUrl = radioJoob.value;
  } else if (radioSchool.checked) {
    imageUrl = radioSchool.value;
  } else if (radioGrocery.checked) {
    imageUrl = radioGrocery.value;
  } else if (radioSchedule.checked) {
    imageUrl = radioSchedule.value;
  } else if (radioUser.checked) {
    imageUrl = radioUser.value;
  } else {
    imageUrl = radioUser.value;
  };

  const newCategory = {
    id: 'a32' + Math.floor(Math.random() * 2000) + Math.floor(Math.random() * 10000) + '14',
    name: nameInputCategory.value,
    image: imageUrl,
    tasks: []
  };

  nameInputCategory.value = '';
  radioJoob.checked = false;
  radioSchool.checked = false;
  radioGrocery.checked = false;
  radioSchedule.checked = false;
  userData.categories.push(newCategory);
  closeSectionAddNewCategory();
  init();
});


//////////////////////////////////////
//// SECTION - CATEGORY PROJECTS ////
////////////////////////////////////
const btnCloseSectionCategoryProjects = document.querySelector('.btn-close-section-category-projects-js');
btnCloseSectionCategoryProjects.addEventListener('click', () => {
  closeSectionCategoryProjects(init);
});

const btnOpenSectionAddNewTask = document.querySelector('.btn-open-section-add-new-task-js');
btnOpenSectionAddNewTask.addEventListener('click', () => {
  openSectionAddNewTask();
});

// TASK OPERATIONS
const btnShowAllTasks = document.querySelector('.show-all-tasks-js');
const btnShowDoneTasks = document.querySelector('.show-done-tasks-js');
const btnShowPriorityTasks = document.querySelector('.show-priority-tasks-js');

// SHOW ALL TASKS
btnShowAllTasks.addEventListener('click', () => {
  btnShowAllTasks.classList.add('active');
  btnShowDoneTasks.classList.remove('active');
  btnShowPriorityTasks.classList.remove('active');

  renderAllTasks(currentCategory, userData);
});

// SHOW DONE TASKS
btnShowDoneTasks.addEventListener('click', () => {
  btnShowDoneTasks.classList.add('active');
  btnShowAllTasks.classList.remove('active');
  btnShowPriorityTasks.classList.remove('active');
  
  renderDoneTasks(currentCategory, userData)
});

// SHOW PRIORITY TASKS
btnShowPriorityTasks.addEventListener('click', () => {
  btnShowPriorityTasks.classList.add('active');
  btnShowDoneTasks.classList.remove('active');
  btnShowAllTasks.classList.remove('active');
  
  renderPriorityTasks(currentCategory, userData);
});


//////////////////////////////
//// SECTION - EDIT TASK ////
////////////////////////////
const btnCloseSectionEditTask = document.querySelector('.btn-close-section-edit-task-js');
btnCloseSectionEditTask.addEventListener('click', () => {
  closeSectionEditTask();
});


/////////////////////////////
//// SECTION - NEW TASK ////
///////////////////////////
const btnCloseSectionAddNewTask = document.querySelector('.btn-close-section-add-new-task-js');
btnCloseSectionAddNewTask.addEventListener('click', () => {
  closeSectionAddNewTask();
});

// FORM ADD NEW TASK
const formAddNewTask = document.querySelector('.add-new-task-form-js');
formAddNewTask.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const inputAddNewTaskName = formAddNewTask.querySelector('.input-add-name-js');

  const newTask = {
    id: 's' + Math.floor(Math.random() * 99999) + 'ad' + Math.floor(Math.random() * 999999) + 'as' + Math.floor(Math.random() * 999999) + 'd2',
    name: inputAddNewTaskName.value,
    priority: false,
    complete: false
  }

  currentCategory.tasks.push(newTask);

  // DELETE THE CURRENT CATEGORY FROM THE USERDATA
  let withoutCurrentCategory = userData.categories.filter(category => category.id !== currentCategory.id);

  // PUSH THE NEW CURRENT CATEGORY WITHOUT THE TASK WHAT WE WANNA DELETE
  withoutCurrentCategory.push(currentCategory);

  // WE CHANGE THE OLD DATA WITH THE UPDATE DATA
  userData.categories = withoutCurrentCategory;

  inputAddNewTaskName.value = '';

  closeSectionAddNewTask()

  const btnShowAllTasks = document.querySelector('.show-all-tasks-js');
  const btnShowDoneTasks = document.querySelector('.show-done-tasks-js');
  const btnShowPriorityTasks = document.querySelector('.show-priority-tasks-js');

  btnShowAllTasks.classList.add('active');
  btnShowDoneTasks.classList.remove('active');
  btnShowPriorityTasks.classList.remove('active');

  renderAllTasks(currentCategory, userData, currentCategory);
});

init();