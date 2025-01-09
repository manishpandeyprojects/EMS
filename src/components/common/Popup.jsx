import React from "react";

const Popup = (props) => {
  //   console.log(props.modalData);

  return (
    <div
      id="employee-task"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
    >
      <div className="relative p-4 w-full max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 min-h-[90vh]">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {props.modalData.firstname} Task List
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
              onClick={() => props.closeModal()}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-[1px]">
                <tr>
                  <th scope="col" className="px-6 py-3 font-bold">
                    Task Name
                  </th>
                  <th scope="col" className="px-6 py-3 font-bold">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 font-bold">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 font-bold">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 font-bold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.modalData.taskLists.map((task, idx) => {
                  return (
                    <tr
                      key={idx}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {task.title}
                      </th>
                      <td className="px-6 py-4">{task.category}</td>
                      <td className="px-6 py-4">{task.description}</td>
                      <td className="px-6 py-4">{task.date}</td>
                      <td className="px-6 py-4">
                        {task.completed ? "Completed" : "Pending"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
