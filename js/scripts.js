const userData = {
  userName: 'Steven',
  categories: [
    {
      id: 'a123',
      name: 'Personal Errands',
      image: './img/icons8-user-clock-32.png',
      tasks: [
        {
          id: 'sadasd2',
          name: 'Corres a las 5pm',
          priority: true,
          complete: false
        },
        {
          id: 'sa23dasd2',
          name: 'Comer antes de salir a correr',
          priority: false,
          complete: true
        },
        {
          id: 'sada23123123sd2',
          name: 'Aprender React',
          priority: true,
          complete: false
        }
      ]
    },
    {
      id: 'a121',
      name: 'School',
      image: './img/icons8-buscar-trabajo-correspondiente-24.png',
      tasks: [
        {
          id: 's2d2',
          name: 'Ir a la clase de CTA',
          priority: true,
          complete: false
        },
        {
          id: 'AAAAA',
          name: 'Entregar 4 soles a pepito',
          priority: false,
          complete: true
        },
        {
          id: 'sadasdasd223',
          name: 'Hacer deveres con Pepe',
          priority: true,
          complete: false
        },
        {
          id: 'AAA332332',
          name: 'Jaja prueba 1',
          priority: false,
          complete: true
        }
      ]
    },
    {
      id: 'a123232',
      name: 'Codeable',
      image: './img/icons8-edificio-escolar-30.png',
      tasks: [
        {
          id: 'WTF',
          name: 'Hacer un ToDo List con JavaScript',
          priority: true,
          complete: false
        }
      ]
    }
  ]
};

function init() {
  renderCategories();
  clickOverCategoriesOpenTasks();
  showCantOfCompleteTasks();
  showCantOfCreatedTasks();
  showDateOfToday();
}

function showCantOfCompleteTasks() {

};

function showCantOfCreatedTasks() {

};

function showDateOfToday() {

};

function showUserName() {

};

function findCategory(categoryItem) {
  return userData.categories.find(category => category.id == categoryItem.id);
};

let currentCategory = {};
function clickOverCategoriesOpenTasks() {
  const allCategoriesItem = document.querySelectorAll('.category__item');
  allCategoriesItem.forEach(categoryItem => {
    categoryItem.addEventListener('click', () => {
      currentCategory = findCategory(categoryItem);
      
      renderAllTasks(currentCategory);
      openSectionCategoryProjects();
    });
  });
};

function openSectionAddNewCategory() {
  const sectionAddNewCategory = document.querySelector('.add-new-category-js');
  sectionAddNewCategory.classList.add('section-active');
};

function closeSectionAddNewCategory() {
  const sectionAddNewCategory = document.querySelector('.add-new-category-js');
  sectionAddNewCategory.classList.remove('section-active');
};

function openSectionCategoryProjects() {
  const sectionCategoryProjects = document.querySelector('.category-projects-js');
  const btnOpenSectionAddNewTask = document.querySelector('.btn-open-section-add-new-task-js');
  const sectionCategoryProjectsTitle = document.querySelector('.header__information__title-category-projects-js');
  sectionCategoryProjects.classList.add('section-active');
  btnOpenSectionAddNewTask.style.zIndex = 20;
  sectionCategoryProjectsTitle.textContent = currentCategory.name;
};

function closeSectionCategoryProjects() {
  const sectionCategoryProjects = document.querySelector('.category-projects-js');
  const btnOpenSectionAddNewTask = document.querySelector('.btn-open-section-add-new-task-js');
  sectionCategoryProjects.classList.remove('section-active');
  btnOpenSectionAddNewTask.style.zIndex = -20;
  init();
};

function openSectionAddNewTask() {
  const sectionAddNewTask = document.querySelector('.add-new-task-js');
  sectionAddNewTask.classList.add('section-active');
};

function closeSectionAddNewTask() {
  const sectionAddNewTask = document.querySelector('.add-new-task-js');
  sectionAddNewTask.classList.remove('section-active');
};

function openSectionEditTask() {
  const sectionEditTask = document.querySelector('.edit-task-js');
  sectionEditTask.classList.add('section-active');
};

function closeSectionEditTask() {
  const sectionEditTask = document.querySelector('.edit-task-js');
  sectionEditTask.classList.remove('section-active');
};

function drawCategory({id, name, image, tasks}) {
  let newCategoryElement = document.createElement('li');
  newCategoryElement.classList.add('category__item');
  newCategoryElement.id = id;
  newCategoryElement.innerHTML = `
    <div class="item__icon">
      <img src="${image}" alt="icon">
    </div>
    <div class="item__name">
      <h4>${name}</h4>
      <p>${tasks.length} tasks</p>
    </div>
  `;

  return newCategoryElement;
};

const drawTask = ({id, name, priority, complete}, categoryName, idCategory) => {
  let newTaskElement = document.createElement('li');
  newTaskElement.classList.add('task');
  newTaskElement.id = id;
  newTaskElement.title = idCategory;
  newTaskElement.innerHTML = `
  <div class="task__button">
    <div class="done-button ${ complete && 'active' } btn-done-task-js"></div>
  </div>
  
  <div class="task__info">
    <div class="info__main">
      <h4>${name}</h4>
      <p>${categoryName}</p>
    </div>

    <div class="info__more">
      <button class="btn task--edit btn-edit-task-js">
        <img src="./img/icons8-editar-24.png" alt="edit">
      </button>
      <button class="btn task--delete btn-delete-task-js">
        <img src="./img/icons8-basura-24.png" alt="trash">
      </button>
      <button class="btn task--priority btn-priority-task-js ${ priority && 'active' }">
      </button>
    </div>
  </div>
  `;

  return newTaskElement;
};

// RENDER CATEGORIES
function renderCategories() {
  const gridCategories = document.querySelector('.grid-categories-js');
  
  // CLEAR GRID
  gridCategories.innerHTML = '';

  // DRAW CATEGORY
  userData.categories.forEach((category) => {
    gridCategories.appendChild(drawCategory(category));
  });
};

function renderAllTasks({id, name, tasks}) {
  const gridTasks = document.querySelector('.main__tasks-js');

  // CLEAR GRID
  gridTasks.innerHTML = '';

  // DRAW TASK
  tasks.forEach(task => {
    gridTasks.appendChild(drawTask(task, name, id));
  })

  priorityTasks();
  deleteTasks();
  doneTasks();
  editTasks();
  summitEdit();
};

function renderDoneTasks({id, name, tasks}) {
  const gridTasks = document.querySelector('.main__tasks-js');

  // CLEAR GRID
  gridTasks.innerHTML = '';

  // DRAW TASK
  searchDoneTasks(tasks).forEach(task => {
    gridTasks.appendChild(drawTask(task, name, id));
  })

  priorityTasks();
  deleteTasks();
  doneTasks();
  editTasks();
  summitEdit();
};

function renderPriorityTasks({id, name, tasks}) {
  const gridTasks = document.querySelector('.main__tasks-js');

  // CLEAR GRID
  gridTasks.innerHTML = '';

  // DRAW TASK
  searchPriorityTasks(tasks).forEach(task => {
    gridTasks.appendChild(drawTask(task, name, id));
  })

  priorityTasks();
  deleteTasks();
  doneTasks();
  editTasks();
  summitEdit();
};

const searchDoneTasks = (tasks) => {
  return tasks.filter(task => task.complete == true);
};

const searchPriorityTasks = (tasks) => {
  return tasks.filter(task => task.priority == true);
};

//// SECTION - MAIN MENU ////
const btnOpenSectionAddNewCategory = document.querySelector('.btn-open-section-add-new-category-js');
btnOpenSectionAddNewCategory.addEventListener('click', () => {
  openSectionAddNewCategory();
});

//// SECTION - ADD NEW CATEGORY ////
const btnCloseSectionAddNewCategory = document.querySelector('.btn-close-section-add-new-category-js');
btnCloseSectionAddNewCategory.addEventListener('click', () => {
  closeSectionAddNewCategory();
});

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

//// TASKS OPTIONS ////
// DELETE TASK
function deleteTasks() {
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
function doneTasks() {
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
        renderDoneTasks(currentCategory);
      }
    })
  })
}

// PRIORITY TASK
function priorityTasks() {
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
        renderPriorityTasks(currentCategory);
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
}
 
function submitEditListen(e, formEditTask) {
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

  btnShowAllTasks.classList.add('active');
  btnShowDoneTasks.classList.remove('active');
  btnShowPriorityTasks.classList.remove('active');

  renderAllTasks(currentCategory);
}

function summitEdit() {
  const formEditTask = document.querySelector('.edit-form-js');
  formEditTask.addEventListener("submit", (e) => submitEditListen(e, formEditTask));
}

//// SECTION - CATEGORY PROJECTS ////
const btnCloseSectionCategoryProjects = document.querySelector('.btn-close-section-category-projects-js');
btnCloseSectionCategoryProjects.addEventListener('click', () => {
  closeSectionCategoryProjects();
});

const btnOpenSectionAddNewTask = document.querySelector('.btn-open-section-add-new-task-js');
btnOpenSectionAddNewTask.addEventListener('click', () => {
  openSectionAddNewTask();
});

const btnShowAllTasks = document.querySelector('.show-all-tasks-js');
const btnShowDoneTasks = document.querySelector('.show-done-tasks-js');
const btnShowPriorityTasks = document.querySelector('.show-priority-tasks-js');

// SHOW ALL TASKS
btnShowAllTasks.addEventListener('click', () => {
  btnShowAllTasks.classList.add('active');
  btnShowDoneTasks.classList.remove('active');
  btnShowPriorityTasks.classList.remove('active');

  renderAllTasks(currentCategory);
});

// SHOW DONE TASKS
btnShowDoneTasks.addEventListener('click', () => {
  btnShowDoneTasks.classList.add('active');
  btnShowAllTasks.classList.remove('active');
  btnShowPriorityTasks.classList.remove('active');
  
  renderDoneTasks(currentCategory)
});

// SHOW PRIORITY TASKS
btnShowPriorityTasks.addEventListener('click', () => {
  btnShowPriorityTasks.classList.add('active');
  btnShowDoneTasks.classList.remove('active');
  btnShowAllTasks.classList.remove('active');
  
  renderPriorityTasks(currentCategory);
});

//// SECTION - EDIT TASK ////
const btnCloseSectionEditTask = document.querySelector('.btn-close-section-edit-task-js');
btnCloseSectionEditTask.addEventListener('click', () => {
  closeSectionEditTask();
});

//// SECTION - NEW TASK ////
const btnCloseSectionAddNewTask = document.querySelector('.btn-close-section-add-new-task-js');
btnCloseSectionAddNewTask.addEventListener('click', () => {
  closeSectionAddNewTask();
});

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

  btnShowAllTasks.classList.add('active');
  btnShowDoneTasks.classList.remove('active');
  btnShowPriorityTasks.classList.remove('active');

  renderAllTasks(currentCategory);
});

init();