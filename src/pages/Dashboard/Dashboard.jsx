import React from 'react';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Wrapper>
      <h2>Dashboard</h2>
      <Outlet />
    </Wrapper>
  );
};

export default Dashboard;
