import React from "react";
import SidebarWithTopbar from "../MainPage/SidebarWithTopbar";

const Dashboard = () => {
  return (
    <SidebarWithTopbar title="Dashboard">
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-semibold">Welcome to the Admin Dashboard!</h1>
      </div>
    </SidebarWithTopbar>
  );
};

export default Dashboard;
