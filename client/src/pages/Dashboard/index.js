import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';

const SuperAdminPanel = () => {
  return (
      <Outlet />
  );
};
const CompanyAdmin = () => {
  return <h1>Yes its a Company admin</h1>;
};
const ManufacturerAdmin = () => {
  return <h1>Yes its a Manufacturer admin</h1>;
};

const DashBoardElement = () => {
  let role = Number(localStorage.getItem("role"));

  return (
    <>
      {role === 1 && <SuperAdminPanel />}
      {role === 2 && <CompanyAdmin />}
      {role === 3 && <ManufacturerAdmin />}
    </>
  );
};

const DashBoard = () => {
  return (
    <DashboardLayout>
      <DashBoardElement />
    </DashboardLayout>
  );
};

export default DashBoard;