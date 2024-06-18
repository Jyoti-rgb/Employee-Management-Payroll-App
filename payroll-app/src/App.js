// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-content">
          <Sidebar />
          <main>
            <Route exact path="/" component={Dashboard} />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
