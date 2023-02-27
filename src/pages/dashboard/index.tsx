import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import { SalesTable } from "../../components/SalesTable/SalesTable";
import { DashboardCards } from "../../components/DashboardCards/DashboardCards";
import { DashboardHeader } from "../../components/DashboardHeader/DashboardHeader";

export const Dashboard = () => {
  return (
    <PrivatePage>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-10">
          <DashboardHeader />
          <DashboardCards />
          <SalesTable />
        </div>
      </div>
    </PrivatePage>
  );
};

export default Dashboard;
