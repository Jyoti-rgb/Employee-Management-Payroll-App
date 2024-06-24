// src/components/Sidebar.js

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="Sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li>
          <Link to="/payroll-form">Payroll Form</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
