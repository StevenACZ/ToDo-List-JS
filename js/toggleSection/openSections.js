function openOptions() {
  const infoMains = document.querySelectorAll('.info__main-js');
  infoMains.forEach((infoMain) => {
    infoMain.addEventListener('click', () => {
      infoMain.parentNode.querySelector('.info__more-js').classList.toggle('active');
    })
  })
};

function openSectionAddNewCategory() {
  const btnOpenSectionAddNewCategory = document.querySelector('.btn-open-section-add-new-category-js');
  btnOpenSectionAddNewCategory.style.display = 'none';
  
  const sectionAddNewCategory = document.querySelector('.add-new-category-js');
  sectionAddNewCategory.classList.add('section-active');
};

function openSectionCategoryProjects(currentCategory) {
  const btnOpenSectionAddNewCategory = document.querySelector('.btn-open-section-add-new-category-js');
  const btnOpenSectionAddNewTask = document.querySelector('.btn-open-section-add-new-task-js');
  btnOpenSectionAddNewCategory.style.display = 'none';
  btnOpenSectionAddNewTask.style.display = 'block';
  
  const sectionCategoryProjects = document.querySelector('.category-projects-js');
  const sectionCategoryProjectsTitle = document.querySelector('.header__information__title-category-projects-js');
  sectionCategoryProjects.classList.add('section-active');
  sectionCategoryProjectsTitle.textContent = currentCategory.name;
};

function openSectionAddNewTask() {
  const sectionAddNewTask = document.querySelector('.add-new-task-js');
  sectionAddNewTask.classList.add('section-active');
};

function openSectionEditTask() {
  const sectionEditTask = document.querySelector('.edit-task-js');
  sectionEditTask.classList.add('section-active');
};

export {
  openOptions,
  openSectionAddNewCategory,
  openSectionCategoryProjects,
  openSectionAddNewTask,
  openSectionEditTask
};