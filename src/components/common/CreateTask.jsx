import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = ({ employeeData, handleCreateTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");

  let data = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    // data.employees.forEach((elem, idx) => {
    //   // console.log(assignTo);
    //   if (elem.firstname == assignTo) {
    //     elem.taskLists.push({
    //       id: idx,
    //       title: title,
    //       description: description,
    //       category: category,
    //       date: date,
    //       bgColor: "bg-blue",
    //       priority: "Medium",
    //       newTask: true,
    //       completed: false,
    //       failed: false,
    //       active: false,
    //     });
    //     elem.taskCount.newTask = elem.taskCount.newTask + 1;
    //   }
    // });

    // localStorage.setItem("employees", JSON.stringify(data.employees));
    // console.log(data);

    handleCreateTask({ title, description, category, date, assignTo });

    // setTitle("");
    // setDescription("");
    // setCategory("");
    // setDate("");
    // setAssignTo("");
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl mb-5 font-semibold mt-10">Create Task</h2>

      <form
        className="flex gap-4 justify-between"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
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
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
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
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
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
              Select Employee
            </label>
            <div className="mt-2">
              <select
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                type="text"
                required
                placeholder="Employee Name"
                className="block w-full bg-transparent px-3 py-3 text-base text-white placeholder:text-gray-400 sm:text-sm/6 rounded-md outline-none border-2 border-gray-600 bg-black"
              >
                <option value="" className="bg-black">
                  Select employee
                </option>
                {employeeData.map((elem, index) => {
                  return (
                    <option
                      key={index}
                      className="bg-black"
                      value={elem.firstname}
                    >
                      {elem.firstname}
                    </option>
                  );
                })}
              </select>
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
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
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
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
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
