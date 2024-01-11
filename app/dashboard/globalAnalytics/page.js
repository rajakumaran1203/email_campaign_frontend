"use client";
import React, { useEffect, useState } from "react";
import BarChart from "@/app/ui/barChart/page";
import DashboardHeader from "@/app/ui/dashboard/dashboardHeader/page";
import LineChart from "@/app/ui/lineChart/page";
import WarmupAnalyticsCard from "@/app/ui/card/card";
import { backendBaseUrl } from "@/constants";
import axios from "axios";
import CountsCardShimmer from "@/app/ui/dashboard/shimmer/countsCardShimmer/countsCardShimmer";

const GlobalAnalytics = () => {
  const [isLoading , setIsLoading] = useState(true)
  const [data, setData] = useState([]);
  const [counts, setCounts] = useState(null)
  const [emailAccountsData , setEmailAccountsData] = useState([])

  useEffect(() => {
    fetch("https://email-campaign-lnfx.onrender.com/user/users-data")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));

      axios.get(`${backendBaseUrl}/email/details`).then((res) => {
        setEmailAccountsData(res.data);
        setIsLoading(false)
      });

      axios.get(`${backendBaseUrl}/user/email-counts`).then((res) => {
        setCounts(res.data);
        setIsLoading(false)
      });
  }, []); 

  return (
    <div className="w-full ">
      <DashboardHeader heading={"Dashboard Analytics"} />
      <div className="px-8 space-y-10 mt-10">
      {isLoading ? <CountsCardShimmer /> : (
        <div className='flex  justify-around'>
        <WarmupAnalyticsCard heading={'Total Emails Listed'} count={emailAccountsData.length}  shadow='shadow-xl' />
        <WarmupAnalyticsCard heading={'Total Emails Sent'} count={counts?.emailSent}  shadow='shadow-xl' />
        <WarmupAnalyticsCard heading={'Total Opened Emails '} count={counts?.totalSeen}  shadow='shadow-xl' />
        <WarmupAnalyticsCard heading={'Total Bounced Emails '} count={counts?.totalWarmupEmailSent}  shadow='shadow-xl' />
      </div>
      )}
      <h3 className="text-center">Users Count</h3>
      <div className="flex">
        <LineChart data={data} />
        <BarChart data={data} />
      </div>
      </div>
    </div>
  );
};

export default GlobalAnalytics;