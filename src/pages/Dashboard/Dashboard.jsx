import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

import Charts from './Charts';

const MainContainer = styled.div`
  display: flex; 
`;


const Dashboard = () => {
  return (
    <MainContainer>
        <Sidebar />
        <Charts />
    </MainContainer>
  );
};

export default Dashboard;
