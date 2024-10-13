import React from "react";

const ProjectOverviewCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-zinc-800 mb-2">
        Project Overview
      </h2>
      <p className="text-gray-300 mb-4">
        You can check the overview of the project here.
      </p>
      <div className="flex items-center justify-between mb-2">
        <div className="relative size-48">
          <svg
            className="size-full -rotate-90"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-gray-200 dark:text-white-700"
              stroke-width="2"
            ></circle>
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current text-blue-600 dark:text-green-600"
              stroke-width="2"
              stroke-dasharray="150"
              stroke-dashoffset="65"
              stroke-linecap="round"
            ></circle>
          </svg>
          <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-4xl font-bold text-black">50%</span>
            <span className="text-gray-300 text-sm block">
              Overall Completion Percentage
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="text-gray-300">Ground Floor</span>
              </div>
              <span className="text-2xl font-bold text-black">26%</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                <span className="text-gray-300">First Floor</span>
              </div>
              <span className="text-2xl font-bold text-black">17%</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-300">Second Floor</span>
              </div>
              <span className="text-2xl font-bold text-black">5%</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                <span className="text-gray-300">Third Floor</span>
              </div>
              <span className="text-2xl font-bold text-black">6%</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span className="text-gray-300">Kitchen Floor</span>
              </div>
              <span className="text-2xl font-bold text-black">4%</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                <span className="text-gray-300">Other</span>
              </div>
              <span className="text-2xl font-bold text-black">10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverviewCard;
