// src/services/AuthService.js

const users = [
  { username: 'admin', password: 'admin' },
  { username: 'manager', password: 'manager' },
  { username: 'employee', password: 'employee' },
];

export const login = (username, password) => {
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }
  return null;
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};

export const signOut = () => {
  localStorage.removeItem('currentUser');
};
