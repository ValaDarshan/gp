import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PerformanceMetrics = ({ metricsData }) => {
  return (
    <div>
      <h2>Performance Metrics</h2>
      <LineChart width={600} height={300} data={metricsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="performance" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default PerformanceMetrics;
