import React from "react";

const CreateTask = () => {
  return (
    <div className="p-10">
      <form className="flex gap-4 justify-between">
        <div className="w-[45%]">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-white"
            >
              Task List
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Task Title"
                required
                className="block w-full bg-transparent px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-md outline-none border-2 border-gray-600"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-white"
            >
              Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                required
                className="block w-full bg-transparent px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-md outline-none border-2 border-gray-600"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-white"
            >
              Assign To
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                placeholder="Employee Name"
                className="block w-full bg-transparent px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-md outline-none border-2 border-gray-600"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-white"
            >
              Category
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                placeholder="Design, developerment etc"
                className="block w-full bg-transparent px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-md outline-none border-2 border-gray-600"
              />
            </div>
          </div>
        </div>
        <div className="w-[45%]">
          <div className="">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-white"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                type="text"
                required
                placeholder="Design, developerment etc"
                className="block w-full bg-transparent px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-md outline-none border-2 border-gray-600"
                rows={11}
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 block w-full px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-md outline-none border-none bg-emerald-600"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
