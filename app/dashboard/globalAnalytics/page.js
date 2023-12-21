import BarChart from "@/app/ui/barChart/page";
import DashboardHeader from "@/app/ui/dashboard/dashboardHeader/page";
import LineChart from "@/app/ui/lineChart/page";
import React from "react";

const GlobalAnalytics = () => {
  const data = [
    {
      date: "2023-11-21",
      count: 1,
    },
    {
      date: "2023-11-22",
      count: 2,
    },
    {
      date: "2023-11-23",
      count: 2,
    },
    {
      date: "2023-11-23",
      count: 4,
    },
    {
      date: "2023-11-24",
      count: 5,
    },
    {
      date: "2023-11-25",
      count: 6,
    },
    {
      date: "2023-12-20",
      count: 70,
    },
    {
      date: "2023-12-26",
      count: 108,
    },
  ];
  return (
    <div className="w-full space-y-10">
      <DashboardHeader heading={"Dashboard Analytics"} />
        <h3 className="text-center">Users Count</h3>
      <div className="flex ">
        <LineChart data={data} />
        <BarChart data={data} />
      </div>
    </div>
  );
};

export default GlobalAnalytics;
