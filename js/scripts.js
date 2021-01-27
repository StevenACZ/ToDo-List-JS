const btnToAddNewCategory = document.querySelector('.btn-to-add-new-category');
const sectionAddNewTask = document.querySelector('.add-new-task');
const sectionAddNewCategory = document.querySelector('.add-new-category');
const sectionCategoryProjects = document.querySelector('.category-projects');

const btnBackCategory = document.querySelector('.btn-back-category');
const categoriesItem = document.querySelectorAll('.category__item');


btnToAddNewCategory.addEventListener('click', () => {
  sectionAddNewCategory.classList.add('section-active');
});

btnBackCategory.addEventListener('click', () => {
  sectionAddNewCategory.classList.remove('section-active');
})

categoriesItem.forEach((categoryItem) => {
  categoryItem.addEventListener('click', () => {
    sectionCategoryProjects.classList.add('section-active');
  })
})