import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ScheduleIcon from "@mui/icons-material/Schedule";
import EmailIcon from "@mui/icons-material/Email";

const WarmupAnalyticsCard = ({heading ,subHeading,  count, scheduledCount, emailCount, onViewDetails,bgColor='bg-fadedBg',shadow='shadow-lg' }) => {
  return (
    <div className={`${shadow} bg-blue-50 font-bold text-xl text-textSoft `}>
      <div className="relative p-0 h-32 space-y-5">
        <h6  className="px-4 pt-2">
          {heading}
        </h6>

        <div className="flex justify-between items-center w-[300px] px-4 pb-2">
          <div>
            <Typography variant="subtitle1">{subHeading}</Typography>
            <Typography variant="h4">{count}</Typography>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-secondary h-[3px]"></div>
      </div>
    </div>
  );
};

export default WarmupAnalyticsCard;
