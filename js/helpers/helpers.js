function findCategory(categoryItem, userData) {
  return userData.categories.find(category => category.id == categoryItem.id);
};

const getOrdinalNum = (number) => {
  let selector;

  if (number <= 0) {
    selector = 4;
  } else if ((number > 3 && number < 21) || number % 10 > 3) {
    selector = 0;
  } else {
    selector = number % 10;
  }

  return number + ['th', 'st', 'nd', 'rd', ''][selector];
};

function getNameOfDay(day) {
  if (day == 0) return 'Sunday';
  else if (day == 1) return 'Monday';
  else if (day == 2) return 'Tuesday';
  else if (day == 3) return 'Wednesday';
  else if (day == 4) return 'Thursday';
  else if (day == 5) return 'Friday';
  return 'Saturday';
}

export {
  getOrdinalNum,
  getNameOfDay,
  findCategory
}