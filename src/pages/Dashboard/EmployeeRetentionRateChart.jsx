import React from "react";
import { Line } from "react-chartjs-2";
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

const EmployeeRetentionRateChart = () => {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Retention Rate (%)",
        data: [90, 85, 88, 92],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <ChartContainer>
      <Line data={data} />
    </ChartContainer>
  );
};

export default EmployeeRetentionRateChart;
