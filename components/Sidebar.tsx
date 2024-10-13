import React from "react";
import {
  HomeIcon,
  ChartBarSquareIcon,
  TableCellsIcon,
  RectangleStackIcon,
  ChartPieIcon,
  UsersIcon,
  StopCircleIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-100 p-4 flex flex-col">
      <div className="text-xl font-bold mb-6 ml-6 text-black">Sample Work</div>
      <nav>
        <ul>
          <li className="mb-4 hover:bg-slate-200">
            <a href="#" className="flex items-center font-bold text-gray-700">
              <span className="material-icons mr-2">
                <HomeIcon className="size-6" />
              </span>
              Home
            </a>
          </li>
          <li className="mb-4 hover:bg-slate-200">
            <a href="#" className="flex items-center font-bold text-gray-700 ">
              <span className="material-icons mr-2">
                <ChartBarSquareIcon className="size-6" />
              </span>
              Dashboard
            </a>
          </li>
          <li className="mb-4 hover:bg-slate-200">
            <a href="#" className="flex items-center font-bold text-gray-700 ">
              <span className="material-icons mr-2">
                <TableCellsIcon className="size-6" />
              </span>
              Projects
            </a>
          </li>
          <li className="mb-4 hover:bg-slate-200">
            <a href="#" className="flex items-center font-bold text-gray-700 ">
              <span className="material-icons mr-2">
                <RectangleStackIcon className="size-6" />
              </span>
              Tasks
            </a>
          </li>
          <li className="mb-4 hover:bg-slate-200">
            <a href="#" className="flex items-center font-bold text-gray-700 ">
              <span className="material-icons mr-2">
                <ChartPieIcon className="size-6" />
              </span>
              Reporting
            </a>
          </li>
          <li className="mb-4 hover:bg-slate-200">
            <a href="#" className="flex items-center font-bold text-gray-700 ">
              <span className="material-icons mr-2">
                <UsersIcon className="size-6" />
              </span>
              Users
            </a>
          </li>
          <li className="mb-4 hover:bg-slate-200">
            <a href="#" className="flex items-center font-bold text-gray-700 ">
              <span className="material-icons mr-2">
                <StopCircleIcon className="size-6" />
              </span>
              Support
            </a>
          </li>
          <li className="mb-4 hover:bg-slate-200">
            <a href="#" className="flex items-center font-bold text-gray-700 ">
              <span className="material-icons mr-2">
                <Cog8ToothIcon className="size-6" />
              </span>
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <div className="relative size-16">
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
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className="text-center text-l font-bold text-black">
                80%
              </span>
            </div>
          </div>
        </div>
        <span className="font-bold text-gray-500">Used space</span>
        <p className="text-gray-500 text-sm mb-2">
          Your team has used 80% of your available space. Need more?
        </p>
        <div className="flex justify-between">
          <button className="text-slate-400 font-bold hover:text-sky-900">
            Dismiss
          </button>
          <button className="text-slate-400 font-bold hover:text-sky-900">
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
