import React from "react";

const TaskListCards = () => {
  return (
    <div className="p-10 pt-5 flex items-center justify-between gap-5">
      <div className="w-[45%] bg-blue-400 py-6 px-10 rounded-xl">
        <h2 className="text-4xl font-semibold">5</h2>
        <h3 className="text-2xl font-semibold">New Task</h3>
      </div>

      <div className="w-[45%] bg-green-400 py-6 px-10 rounded-xl">
        <h2 className="text-4xl font-semibold">5</h2>
        <h3 className="text-2xl font-semibold">Completed Task</h3>
      </div>

      <div className="w-[45%] bg-yellow-400 py-6 px-10 rounded-xl ">
        <h2 className="text-4xl font-semibold text-black">5</h2>
        <h3 className="text-2xl font-semibold text-black">Accepted Task</h3>
      </div>

      <div className="w-[45%] bg-red-400 py-6 px-10 rounded-xl">
        <h2 className="text-4xl font-semibold">5</h2>
        <h3 className="text-2xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListCards;
