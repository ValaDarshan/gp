import React from 'react';

const Content = ({ onSidebarHide, employeeData }) => {
  return (
    <div className="content">
      <button onClick={onSidebarHide}>Toggle Sidebar</button>
      <h1>Employee Data</h1>
      <ul>
        {employeeData.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.position} - Transactions: {employee.transactions}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
