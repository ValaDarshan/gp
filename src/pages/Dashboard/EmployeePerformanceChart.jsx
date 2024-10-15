import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styled from 'styled-components';

Chart.register(...registerables);

const ChartContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
  max-width: 800px; 
  margin-left: auto; 
  margin-right: auto; 
`;

const EmployeePerformanceChart = () => {
  const data = {
    labels: ["Communication", "Teamwork", "Problem Solving", "Technical Skills", "Time Management"],
    datasets: [
      {
        label: "Employee Performance",
        data: [90, 80, 70, 85, 75],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <ChartContainer>
      <Radar data={data} />
    </ChartContainer>
  );
};

export default EmployeePerformanceChart;
