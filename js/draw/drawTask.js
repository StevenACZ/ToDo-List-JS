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
    <div class="info__main info__main-js">
      <h4>${name}</h4>
      <p>${categoryName}</p>
    </div>

    <div class="info__more info__more-js">
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

export { drawTask };