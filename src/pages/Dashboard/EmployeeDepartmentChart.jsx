import React from "react";
import { Doughnut } from "react-chartjs-2";
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

const EmployeeDepartmentChart = ({props}) => {
  const data = {
    labels: ["HR", "IT", "Finance", "Marketing", "Sales"],
    datasets: [
      {
        label: "Department Distribution",
        data: [10, 20, 15, 25, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <ChartContainer>
      <Doughnut data={data} />
    </ChartContainer>
  );
};

export default EmployeeDepartmentChart;
