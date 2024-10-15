import React from "react";
import { Bar } from "react-chartjs-2";
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

const EmployeeGenderRatioChart = () => {
  const data = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        label: "Gender Ratio",
        data: [40, 50, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <ChartContainer>
      <Bar data={data} />
    </ChartContainer>
  );
};

export default EmployeeGenderRatioChart;
