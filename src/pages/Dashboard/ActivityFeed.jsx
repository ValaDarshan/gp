import React from 'react';

const ActivityFeed = ({ activities }) => {
  return (
    <div>
      <h2>Activity Feed</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <strong>{activity.user}</strong>: {activity.action} at {activity.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
