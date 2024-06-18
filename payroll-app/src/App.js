// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import './App.css';
import logo from './logo.svg';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Login from './pages/Login';
import PayrollForm from './components/PayrollForm';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import { getCurrentUser, signOut } from './services/AuthService';

function App() {
  const [user, setUser] = useState(getCurrentUser());

  const handleLogin = () => {
    setUser(getCurrentUser());
  };

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Route path="/" element={<Login onLogin={handleLogin} />} /> // Use 'element' instead of 'component'
          )}
        </header>
        {user && (
          <div className="App-content">
            <main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/payroll-form" element={<PayrollForm />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
