import React from "react";

const AllTasks = () => {
  return (
    <>
      <h2 className="text-3xl mb-5 font-semibold px-10 mt-10">Task Lists</h2>
      <div className="scroll bg-[#1c1c1c] px-10 rounded h-48 overflow-auto">
        <div className="flex items-center justify-between bg-red-400 mb-2 py-2 px-4 rounded-md text-xl min-h-12">
          <h2>Manish</h2>
          <h3>Create The layout</h3>
          <h5>Status</h5>
        </div>
        <div className="flex items-center justify-between bg-blue-400 mb-2 py-2 px-4 rounded-md text-xl min-h-12">
          <h2>Manish</h2>
          <h3>Create The layout</h3>
          <h5>Status</h5>
        </div>
        <div className="flex items-center justify-between bg-green-400 mb-2 py-2 px-4 rounded-md text-xl min-h-12">
          <h2>Manish</h2>
          <h3>Create The layout</h3>
          <h5>Status</h5>
        </div>
        <div className="flex items-center justify-between bg-yellow-400 mb-2 py-2 px-4 rounded-md text-xl min-h-12">
          <h2>Manish</h2>
          <h3>Create The layout</h3>
          <h5>Status</h5>
        </div>
      </div>
    </>
  );
};

export default AllTasks;
