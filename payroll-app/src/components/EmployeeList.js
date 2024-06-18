// src/components/EmployeeList.js

import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <ul>
      {employees.map(employee => (
        <li key={employee.id}>{employee.name}</li>
      ))}
    </ul>
  );
};

export default EmployeeList;
