import React, { useEffect, useState } from "react";
import EmployeeStatsChart from "./EmployeeStatsChart";
import EmployeeAgeDistributionChart from "./EmployeeAgeDistributionChart";
import EmployeeDepartmentChart from "./EmployeeGenderRatioChart";
import EmployeePerformanceChart from "./EmployeeRetentionRateChart";
import EmployeeRetentionRateChart from "./EmployeeRetentionRateChart";
import styled from "styled-components";
import empData from '../../data/data.json';

// Styled container for the dashboard
const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Two columns for the first row */
  grid-template-rows: auto auto 1fr; /* Two rows for first two charts and one for the last */
  gap: 20px; /* Space between charts */
  margin: 20px; /* Margin around the grid */
  max-height: 80vh; /* Set maximum height for scrolling */
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  padding: 20px; /* Optional: add some padding */
  border: 1px solid #ddd; /* Optional: add border for better visibility */
  border-radius: 8px; /* Optional: rounded corners */
`;

// Styled chart item
const ChartItem = styled.div`
  width: 100%; /* Full width of the grid cell */
`;

// Styled heading
const Title = styled.h1`
  grid-column: span 2; /* Span both columns */
  text-align: center; /* Center the text */
  margin-bottom: 20px; /* Space below the heading */
`;

const Dashboard = () => {
    const [empData, setempData] = useState({});
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchData(empData); // Correct path
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setempData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!empData) {
    console.log(empData)
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  return (
    <DashboardContainer>
      <Title>Employee Statistics Dashboard</Title>
      <ChartItem>
        {/* <EmployeeStatsChart data={empData.performance} /> */}
      </ChartItem>
      <ChartItem>
        <EmployeePerformanceChart data={empData.performance} />
      </ChartItem>
      <ChartItem>
        <EmployeeRetentionRateChart data={empData.retentionRate} />
      </ChartItem>
      <ChartItem>
        <EmployeeStatsChart data={empData.performance} />
      </ChartItem>
      <ChartItem>
        <EmployeeAgeDistributionChart data={empData.ageDistribution} />
      </ChartItem>
      <ChartItem style={{ gridColumn: 'span 2' }}>
        <EmployeeDepartmentChart data={empData.department} />
      </ChartItem>
    </DashboardContainer>
  );
};

export default Dashboard;
