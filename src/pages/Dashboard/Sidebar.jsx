import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ showSidebar, onSidebarHide }) => {
  return (
    <div className={`sidebar ${showSidebar ? 'visible' : ''}`}>
      <button className="close-btn" onClick={onSidebarHide}>✖️</button>
      <h2>Dashboard Menu</h2>
      <ul>
        <li>
          <Link to="/" onClick={onSidebarHide}>Home</Link>
        </li>
        <li>
          <Link to="/users" onClick={onSidebarHide}>Users</Link>
        </li>
        <li>
          <Link to="/tasks" onClick={onSidebarHide}>Tasks</Link>
        </li>
        <li>
          <Link to="/reports" onClick={onSidebarHide}>Reports</Link>
        </li>
        <li>
          <Link to="/settings" onClick={onSidebarHide}>Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
