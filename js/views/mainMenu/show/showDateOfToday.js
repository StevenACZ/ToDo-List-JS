import { getNameOfDay, getOrdinalNum } from '../../../helpers/helpers.js';

function showDateOfToday() {
  const event = new Date();
  const date = event.getDate();
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][event.getMonth()];

  const currentDayString = document.querySelector('.main-current-day-string-js');
  const currentDay = document.querySelector('.main-current-day-js');
  const currentMonth = document.querySelector('.main-current-month-string-js');

  const currentDayString1 = document.querySelector('.category-projects-current-day-string-js');
  const currentDay1 = document.querySelector('.category-projects-current-day-js');
  const currentMonth1 = document.querySelector('.category-projects-current-month-string-js');

  currentDayString.textContent = getNameOfDay(date);
  currentDay.textContent = getOrdinalNum(date);
  currentMonth.textContent = month;

  currentDayString1.textContent = getNameOfDay(date);
  currentDay1.textContent = getOrdinalNum(date);
  currentMonth1.textContent = month;
};

export default showDateOfToday;