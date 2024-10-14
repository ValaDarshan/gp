import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const TaskCompletion = ({ employees }) => {
  const data = [
    { name: 'Completed', value: employees.reduce((acc, emp) => acc + emp.tasksCompleted, 0) },
    { name: 'Pending', value: employees.length * 5 - employees.reduce((acc, emp) => acc + emp.tasksCompleted, 0) } // Assuming each has a total of 5 tasks
  ];

  const COLORS = ['#00C49F', '#FFBB28'];

  return (
    <div>
      <h2>Task Completion</h2>
      <PieChart width={400} height={400}>
        <Pie data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default TaskCompletion;
