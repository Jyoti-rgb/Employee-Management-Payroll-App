import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Settings from "./pages/Settings";
import PayrollForm from "./components/PayrollForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-content">
          <Sidebar />
          <main>
            <Routes>
              <Route exact path="/" component={Dashboard} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/payroll-form" element={<PayrollForm />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
