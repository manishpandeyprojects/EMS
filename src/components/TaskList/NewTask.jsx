import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="w-[300px] block max-w-sm p-6 bg-blue-400 rounded-lg shadow flex-shrink-0">
      <div className="flex justify-between items-center flex-wrap gap-1 mb-4">
        <div className="text-xl font-semibold bg-red-600 p-1 px-4 rounded-[4px]">
          {data.category}
        </div>
        <div className="text-xl font-semibold">{data.date}</div>
      </div>

      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {data.title}
      </h5>
      <p className="font-normal text-white">{data.description}</p>

      <div className="mt-4 flex items-center justify-between gap-4">
        <button className="w-full bg-green-700 py-1.5 px-2 rounded-md text-md">
          Accept
        </button>
        <button className="w-full bg-orange-700 py-1.5 px-2 rounded-md text-md">
          Failed
        </button>
      </div>
    </div>
  );
};

export default NewTask;
