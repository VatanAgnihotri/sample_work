import React from "react";

const ComplianceSectionCard = () => {
  return (
    <div className="bg-white p-6 flex h-3/4 rounded-lg shadow-md">
      <div>
        <h2 className="text-xl font-semibold text-black mb-2">
          Compliance Section
        </h2>
        <p className="text-gray-300 mb-4">
          You can check overview of project here
        </p>
        <div>
          <div className="relative size-60">
            <svg
              className="size-full rotate-180"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-orange-100"
                stroke-width="3"
                stroke-dasharray="50 100"
                stroke-linecap="round"
              ></circle>

              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-orange-600"
                stroke-width="1"
                stroke-dasharray="25 100"
                stroke-linecap="round"
              ></circle>
            </svg>

            <div className="absolute top-9 start-1/2 transform -translate-x-1/2 text-center">
              <span className="text-4xl font-bold text-orange-600">25%</span>
            </div>
          </div>
          <div className="relative bottom-10">
            <div className="text-xlg font-bold text-black mb-4">
              Water Efficiency is Low
            </div>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-lg text-green-600 font-semibold rounded-lg  text-right mb-6">
          Non-compliant
        </div>

        <div className=" p-4 rounded-lg">
          <div className="font-semibold text-black mb-2">
            AI-powered compliance check assistant to Improve Water Efficiency
            Level
          </div>
          <div className="flex flex-col space-y-2">
            <button className="py-2 px-4 bg-gray-100 text-black rounded-lg hover:bg-blue-600">
              Follow these steps to fix water efficiency
            </button>
            <button className="py-2 px-4 bg-gray-100 text-black rounded-lg hover:bg-green-600">
              Prevent Water Efficiency in Future
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSectionCard;
