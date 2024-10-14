import React from 'react';

const UserList = ({ employees }) => {
  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Transactions</th>
            <th>Tasks Completed</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.transactions}</td>
              <td>{employee.tasksCompleted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
