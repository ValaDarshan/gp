import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styled from 'styled-components';

// Register the necessary chart.js components
Chart.register(...registerables);

// Styled container for the chart
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

const EmployeeStatsChart = () => {
  const data = {
    labels: ["Interns", "Freshers", "Junior", "Senior", "Manager"],
    datasets: [
      {
        label: "Employee Count",
        data: [10, 15, 20, 5, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      x: {
        grid: {
          color: '#e0e0e0',
        },
        ticks: {
          color: '#333',
        },
      },
      y: {
        grid: {
          color: '#e0e0e0',
        },
        ticks: {
          color: '#333',
        },
      },
    },
  };

  return (
    <ChartContainer>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};

export default EmployeeStatsChart;
