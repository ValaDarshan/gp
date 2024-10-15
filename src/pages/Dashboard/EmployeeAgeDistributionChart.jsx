import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styled from 'styled-components';

// Register the necessary chart.js components
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

const EmployeeAgeDistributionChart = () => {
  const data = {
    labels: ["18-25", "26-35", "36-45", "46-55", "56+"],
    datasets: [
      {
        label: "Age Distribution",
        data: [12, 25, 30, 10, 3],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <ChartContainer>
      <Pie data={data} />
    </ChartContainer>
  );
};

export default EmployeeAgeDistributionChart;
