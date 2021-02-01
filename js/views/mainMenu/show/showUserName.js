function showUserName(userData) {
  const userName = document.querySelector('.user-name-js');
  userName.textContent = userData.userName;
};

export default showUserName;