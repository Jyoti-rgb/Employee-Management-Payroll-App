// src/services/AuthService.js

let currentUser = null;

const signInWithEmailAndPassword = (email, password) => {
  // Simulating login, replace with actual authentication logic
  if (email === 'admin@example.com' && password === 'password') {
    currentUser = {
      email: 'admin@example.com',
      role: 'admin',
    };
    return Promise.resolve(currentUser);
  } else {
    return Promise.reject(new Error('Invalid credentials'));
  }
};

const signOut = () => {
  // Simulating logout
  currentUser = null;
  return Promise.resolve();
};

const getCurrentUser = () => {
  return currentUser;
};

export {
  signInWithEmailAndPassword,
  signOut,
  getCurrentUser,
};
