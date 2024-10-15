import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const simpleData = {
  labels: ["Interns", "Fresher", "Junior", "Senior", "Manager"],
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

const SimpleBarChart = () => {
  return <Bar data={simpleData} options={{ responsive: true }} />;
};

export default SimpleBarChart;
