import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar is in the same directory
import Content from './Content'; // Assuming Content is in the same directory
import Graph from './Graph'; // Graph component for displaying revenue trends
import UserList from './UserList'; // UserList component
import RevenueSummary from './RevenueSummary'; // RevenueSummary component
import TaskCompletion from './TaskCompletion'; // TaskCompletion component

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/path/to/your/data.json') // Update the path as needed
      .then(response => response.json())
      .then(data => {
        setEmployeeData(data.employeeData);
        setGraphData(data.graphData);
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
      </div>
    </div>
  );
};

export default Dashboard;
