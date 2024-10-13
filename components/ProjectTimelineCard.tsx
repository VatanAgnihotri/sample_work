import React from "react";
import { FlagIcon } from "@heroicons/react/16/solid";
import { CalendarIcon } from "@heroicons/react/24/outline";
const ProjectTimelineCard = () => {
  return (
    <div className=" mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-black">Project Timeline</h2>
      <p className="text-gray-300">
        You can check timeline of the project here.
      </p>

      <div>
        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="border-black bg=black rounded-full">
                <FlagIcon className="size-6 bg-green-300 rounded-full" />
              </div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">
              Milestone Name
            </h3>
            <div className="mt-1 flex gap-2 text-sm text-gray-600">
              <CalendarIcon className="size-6 display-inline" /> 25 Aug 2022 -
              11:30AM
            </div>
          </div>
        </div>
        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="border-black bg=black rounded-full">
                <FlagIcon className="size-6 bg-green-300 rounded-full" />
              </div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">
              Milestone Name
            </h3>
            <div className="mt-1 flex gap-2 text-sm text-gray-600">
              <CalendarIcon className="size-6 display-inline" /> 25 Aug 2022 -
              11:30AM
            </div>
          </div>
        </div>
        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="border-black bg=black rounded-full">
                <FlagIcon className="size-6 bg-green-300 rounded-full" />
              </div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">
              Milestone Name
            </h3>
            <div className="mt-1 flex gap-2 text-sm text-gray-600">
              <CalendarIcon className="size-6 display-inline" /> 25 Aug 2022 -
              11:30AM
            </div>
          </div>
        </div>
        <button className="bg-transparent hover:bg-gray-500 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded">
          Check More
        </button>
      </div>
    </div>
  );
};

export default ProjectTimelineCard;
