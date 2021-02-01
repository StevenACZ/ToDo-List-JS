import { drawCategory } from '../draw/drawCategory.js';

function renderCategories({categories}) {
  const gridCategories = document.querySelector('.grid-categories-js');
  
  // CLEAR GRID
  gridCategories.innerHTML = '';

  // DRAW CATEGORY
  categories.forEach((category) => {
    gridCategories.appendChild(drawCategory(category));
  });
};

export { renderCategories };