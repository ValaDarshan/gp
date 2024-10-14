import React from 'react';

const UpcomingTasks = ({ tasks }) => {
  return (
    <div>
      <h2>Upcoming Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name} - Due: {task.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingTasks;
