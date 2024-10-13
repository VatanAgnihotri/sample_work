import React from "react";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
const DocumentRepository = () => {
  return (
    <div className=" mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Document Repository</h2>
      <p className="text-gray-300 mb-4">
        You can check overview of project here.
      </p>
      <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg mb-4 flex items-center justify-center">
        <CloudArrowDownIcon className="size-6 mr-2" />
        Upload Document
      </button>
      <div className="space-y-4">
        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-800">
              First Floor Plan.doc
            </h3>
            <span className="text-sm text-orange-500">In Progress</span>
          </div>
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-orange-500 text-xs text-white text-center whitespace-nowrap transition duration-500 w-2/3"></div>
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-800">
              Second Floor Plan.doc
            </h3>
            <span className="text-sm text-red-500">Rejected</span>
          </div>
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-red-500 text-xs text-white text-center whitespace-nowrap transition duration-500 w-full"></div>
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-sm font-semibold text-gray-800">
              Building OVerall Plan.doc
            </h3>
            <span className="text-sm text-green-500">Approved</span>
          </div>
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-green-500 text-xs text-white text-center whitespace-nowrap transition duration-500 w-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DocumentRepository;
