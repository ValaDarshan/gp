import React from 'react';

const RevenueSummary = ({ data }) => {
  const totalRevenue = data.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalExpectedRevenue = data.reduce((acc, curr) => acc + curr.expectedRevenue, 0);

  return (
    <div>
      <h2>Revenue Summary</h2>
      <p>Total Revenue: ${totalRevenue}</p>
      <p>Total Expected Revenue: ${totalExpectedRevenue}</p>
    </div>
  );
};

export default RevenueSummary;
