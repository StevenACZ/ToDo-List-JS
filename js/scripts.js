// API MANUAL
const userName = document.querySelector('.user-name');

const gridCategories = document.querySelector('.grid-categories');

const userData = {
  userName: 'Steven',
  categories: [
    {
      id: 'a123',
      name: 'Personal Errands',
      image: './img/icons8-user-clock-32.png',
      tasks: [
        {
          name: 'Corres a las 5pm',
          priority: true,
          complete: false
        },
        {
          name: 'Comer antes de salir a correr',
          priority: false,
          complete: false
        },
        {
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
          name: 'Ir a la clase de CTA',
          priority: true,
          complete: false
        },
        {
          name: 'Entregar 4 soles a pepito',
          priority: false,
          complete: false
        },
        {
          name: 'Hacer deveres con Luis',
          priority: true,
          complete: false
        },
        {
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
          name: 'Hacer un ToDo List con JavaScript',
          priority: true,
          complete: false
        }
      ]
    }
  ]
}

// Pintando el nombre del usuario
userName.textContent = userData.userName;

// Pintando las categorias creadas por el usuario
const drawCategories = () => {
  userData.categories.forEach(({ id, name, tasks, image }) => {
    const categoryItemElement = document.createElement('li');
    categoryItemElement.classList.add('category__item');
    categoryItemElement.id = id;
    categoryItemElement.innerHTML = `
    <div class="item__icon">
      <img src="${image}">
    </div>
    <div class="item__name">
      <h4>${ name }</h4>
      <p>${ tasks.length } tasks</p>
    </div>
    `;
    
    gridCategories.appendChild(categoryItemElement);
  })
}

const searchCategoryById = (categoryItem) => {
  return userData.categories.find(category => category.id == categoryItem.id);
}

const drawAllCategoryProjects = ({name:categoryName, tasks}) => {
  // Limpiar las tareas anteriores
  mainTasks.innerHTML = '';

  // Dibujando el nombre de la categoria
  headerCategoryProjectsTitle.textContent = categoryName;

  tasks.forEach( ({name, priority, complete}) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
    <div class="task__button">
      <input type="checkbox" ${ complete && 'checked' }>
    </div>
    
    <div class="task__info">
      <div class="info__main">
        <h4>${name}</h4>
        <p>${categoryName}</p>
      </div>

      <div class="info__more">
        <button class="btn task--edit">
          <img src="./img/icons8-editar-24.png" alt="edit">
        </button>
        <button class="btn task--delete">
          <img src="./img/icons8-basura-24.png" alt="trash">
        </button>
        <button class="btn task--priority">
          <img src="./img/icons8-estrella-24.png" alt="star">
        </button>
      </div>
    </div>
    `;
    
    mainTasks.appendChild(taskElement);
  })
}

drawCategories()

const btnToAddNewCategory = document.querySelector('.btn-to-add-new-category');
const btnToAddNewTask = document.querySelector('.btn-to-add-new-task');

const sectionAddNewTask = document.querySelector('.add-new-task');
const sectionAddNewCategory = document.querySelector('.add-new-category');
const sectionCategoryProjects = document.querySelector('.category-projects');

const btnBackToMainMenuFromNewCategory = document.querySelector('.btn-back-to-main-menu-from-new-category');
const btnBackToMainMenuFromCategoryProjects = document.querySelector('.btn-back-to-main-menu-from-category-projects');
const btnBackToCategoryProjectsFromNewTask = document.querySelector('.btn-back-to-category-projects-from-new-task');

const categoriesItem = document.querySelectorAll('.category__item');

const headerCategoryProjectsTitle = document.querySelector('.header__information__title');
const mainTasks = document.querySelector('.main__tasks')

// OPEN BUTTONS
btnToAddNewCategory.addEventListener('click', () => {
  sectionAddNewCategory.classList.add('section-active');
});

btnToAddNewTask.addEventListener('click', () => {
  sectionAddNewTask.classList.add('section-active');
});

// Click en una categoria
categoriesItem.forEach((categoryItem) => {
  categoryItem.addEventListener('click', () => {
    drawAllCategoryProjects(searchCategoryById(categoryItem));
    sectionCategoryProjects.classList.add('section-active');
    btnToAddNewTask.style.zIndex = '20';
  })
})

// BACK BUTTONS
btnBackToMainMenuFromNewCategory.addEventListener('click', () => {
  sectionAddNewCategory.classList.remove('section-active');
})

btnBackToMainMenuFromCategoryProjects.addEventListener('click', () => {
  sectionCategoryProjects.classList.remove('section-active');
  btnToAddNewTask.style.zIndex = '-20';
})

btnBackToCategoryProjectsFromNewTask.addEventListener('click', () => {
  sectionAddNewTask.classList.remove('section-active');
})