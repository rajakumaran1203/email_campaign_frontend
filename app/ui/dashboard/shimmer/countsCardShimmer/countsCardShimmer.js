import React from "react";

const CountsCardShimmer = () => {
  const ShimmerCard = () => {
    return (
      <div className="animate-pulse flex-1 max-w-[300px] mx-2">
        <div className="bg-gray-200 h-24 rounded-md"></div>
        <div className="bg-gray-200 h-6 mt-2 rounded-md"></div>
      </div>
    );
  };
  return (
    <div className="flex justify-around mx-6">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default CountsCardShimmer;
