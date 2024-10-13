import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow">
      <div className="text-xl font-semibold text-zinc-800">Green Building Monitoring</div>
      <div className="flex items-center space-x-4">
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full relative">
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
          <span className="text-gray-600 font-semibold">M</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
