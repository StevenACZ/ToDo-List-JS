function closeSectionAddNewCategory() {
  const btnOpenSectionAddNewCategory = document.querySelector('.btn-open-section-add-new-category-js');
  btnOpenSectionAddNewCategory.style.display = 'block';
  
  const sectionAddNewCategory = document.querySelector('.add-new-category-js');
  sectionAddNewCategory.classList.remove('section-active');
};

function closeSectionCategoryProjects(init) {
  const btnOpenSectionAddNewCategory = document.querySelector('.btn-open-section-add-new-category-js');
  const btnOpenSectionAddNewTask = document.querySelector('.btn-open-section-add-new-task-js');
  btnOpenSectionAddNewCategory.style.display = 'block';
  btnOpenSectionAddNewTask.style.display = 'none';

  const sectionCategoryProjects = document.querySelector('.category-projects-js');
  sectionCategoryProjects.classList.remove('section-active');

  init();
};

function closeSectionAddNewTask() {
  const sectionAddNewTask = document.querySelector('.add-new-task-js');
  sectionAddNewTask.classList.remove('section-active');
};

function closeSectionEditTask() {
  const sectionEditTask = document.querySelector('.edit-task-js');
  sectionEditTask.classList.remove('section-active');
};

export {
  closeSectionAddNewCategory,
  closeSectionCategoryProjects,
  closeSectionAddNewTask,
  closeSectionEditTask
};