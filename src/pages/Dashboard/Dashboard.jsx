import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Graph from './Graph';
import UserList from './UserList';
import RevenueSummary from './RevenueSummary';
import TaskCompletion from './TaskCompletion';
import ActivityFeed from './ActivityFeed';
import Notifications from './Notifications';
import PerformanceMetrics from './PerformanceMetrics';
import UpcomingTasks from './UpcomingTasks';
import UserProfile from './UserProfile';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [activities, setActivities] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [performanceMetrics, setPerformanceMetrics] = useState([]);
  const [upcomingTasks, setUpcomingTasks] = useState([]);
  const [currentUser, setCurrentUser] = useState({}); // Assume you fetch the current user data

  useEffect(() => {
    fetch('/path/to/your/data.json')
      .then(response => response.json())
      .then(data => {
        setEmployeeData(data.employeeData);
        setGraphData(data.graphData);
        setActivities(data.activities);
        setNotifications(data.notifications);
        setPerformanceMetrics(data.performanceMetrics);
        setUpcomingTasks(data.upcomingTasks);
        setCurrentUser(data.currentUser);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex">
      <Sidebar showSidebar={showSidebar} onSidebarHide={() => setShowSidebar(false)} />
      <div className="content">
        <button onClick={() => setShowSidebar(!showSidebar)}>Toggle Sidebar</button>
        <Content employeeData={employeeData} />
        <Graph data={graphData} />
        <RevenueSummary data={graphData} />
        <UserList employees={employeeData} />
        <TaskCompletion employees={employeeData} />
        <ActivityFeed activities={activities} />
        <Notifications notifications={notifications} />
        <PerformanceMetrics metricsData={performanceMetrics} />
        <UpcomingTasks tasks={upcomingTasks} />
        <UserProfile user={currentUser} />
      </div>
    </div>
  );
};

export default Dashboard;
