function drawCategory({id, name, image, tasks}) {
  let newCategoryElement = document.createElement('li');
  newCategoryElement.classList.add('category__item');
  newCategoryElement.id = id;
  newCategoryElement.innerHTML = `
    <div class="item__icon">
      <img src="${image}" alt="icon">
    </div>
    <div class="item__name">
      <h4>${name.split(' ').length > 1 ? `${name.split(' ')[0]}` : `${name}`}${name.split(' ').length > 1 ? '<br />' : ''}${name.split(' ').length > 1 ? `${name.split(' ')[1]}` : ''}${name.split(' ').length > 2 ? '...' : ''}</h4>
      <p>${tasks.length} tasks</p>
    </div>
  `;

  return newCategoryElement;
};

export { drawCategory };