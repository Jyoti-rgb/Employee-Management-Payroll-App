// src/pages/Employees.js

import React, { useState } from 'react';
import EmployeeList from '../components/EmployeeList';

const Employees = () => {
  // Mock employee data
  const [employees] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
  ]);

  return (
    <div>
      <h2>Employees</h2>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default Employees;
