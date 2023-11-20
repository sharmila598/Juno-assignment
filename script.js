
document.addEventListener('DOMContentLoaded', function () {
  // Sample user data
  const users = [
    { name: 'User1', risky: true },
    { name: 'User2', risky: false },
    { name: 'User3', risky: true },
    // Add more users as needed
  ];

  const userListElement = document.getElementById('userList');

  // Populate user list
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    if (user.risky) {
      userDiv.classList.add('user-risky');
    }
    userDiv.textContent = user.name;
    userListElement.appendChild(userDiv);
  });
});