import React from "react";

const Banner = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold">
            Hey Explorer ! Welcome back to HiFiveCommunity. Enter some cool
            stuff and let's get started with mailing !!
          </div>
          <div className="max-w-md text-xl font-semibold text-left mt-4">
            Anirudh Ehmaad
          </div>
          <div className="max-w-md text-sm font-light text-slate-700">
            SDE | Austin
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
