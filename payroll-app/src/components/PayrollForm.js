// src/components/PayrollForm.js

import React, { useState } from 'react';

const PayrollForm = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [hoursWorked, setHoursWorked] = useState(0);
  const [deductions, setDeductions] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock implementation, replace with actual logic
    console.log('Submitted:', { employeeId, hoursWorked, deductions });
    // Reset form fields after submission
    setEmployeeId('');
    setHoursWorked(0);
    setDeductions(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Hours Worked"
        value={hoursWorked}
        onChange={(e) => setHoursWorked(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Deductions"
        value={deductions}
        onChange={(e) => setDeductions(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PayrollForm;
