const btnToAddNewCategory = document.querySelector('.btn-to-add-new-category');
const btnToAddNewTask = document.querySelector('.btn-to-add-new-task');

const sectionAddNewTask = document.querySelector('.add-new-task');
const sectionAddNewCategory = document.querySelector('.add-new-category');
const sectionCategoryProjects = document.querySelector('.category-projects');

const btnBackToMainMenuFromNewCategory = document.querySelector('.btn-back-to-main-menu-from-new-category');
const btnBackToMainMenuFromCategoryProjects = document.querySelector('.btn-back-to-main-menu-from-category-projects');
const btnBackToCategoryProjectsFromNewTask = document.querySelector('.btn-back-to-category-projects-from-new-task');

const categoriesItem = document.querySelectorAll('.category__item');


// OPEN BUTTONS
btnToAddNewCategory.addEventListener('click', () => {
  sectionAddNewCategory.classList.add('section-active');
});

btnToAddNewTask.addEventListener('click', () => {
  sectionAddNewTask.classList.add('section-active');
});

categoriesItem.forEach((categoryItem) => {
  categoryItem.addEventListener('click', () => {
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

