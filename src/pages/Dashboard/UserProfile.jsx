import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Position: {user.position}</p>
      <p>Joined: {user.joinedDate}</p>
      {/* Add a button or form for updating the profile if necessary */}
    </div>
  );
};

export default UserProfile;
