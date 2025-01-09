import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Popup from "./Popup";

const AllTasks = () => {
  const authData = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleModal = (elem) => {
    if (show && modalData) {
      setShow(false);
      setModalData({});
    }
    setShow(true);
    setModalData(elem);
    // console.log(elem);
    // console.log(show);
    // console.log(modalData);
  };

  const handleCloseModal = () => {
    console.log("Closed Clicked");

    setShow(false);
    setModalData({});
  };

  return (
    <>
      <h2 className="text-3xl mb-5 font-semibold px-10 mt-10">Task Lists</h2>
      <div className="scroll bg-[#1c1c1c] px-10 rounded pb-10">
        <div className="flex items-center justify-between bg-blue-400 mb-2 py-2 px-4 rounded-md text-xl min-h-12">
          <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
          <h3 className="w-1/5 text-lg font-medium">New Task</h3>
          <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
          <h3 className="w-1/5 text-lg font-medium">Completed Task</h3>
          <h5 className="w-1/5 text-lg font-medium">Failed Task</h5>
          <h5 className="w-1/5 text-lg font-medium">Action</h5>
        </div>

        {authData.employees.map((elem, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between border-[1px] border-emerald-400 mb-2 py-2 px-4 rounded-md text-xl min-h-12"
            >
              <h2 className="w-1/5 text-lg font-medium">{elem.firstname}</h2>
              <h3 className="w-1/5 text-lg font-medium">
                {elem.taskCount.newTask}
              </h3>
              <h5 className="w-1/5 text-lg font-medium">
                {elem.taskCount.active}
              </h5>
              <h3 className="w-1/5 text-lg font-medium">
                {elem.taskCount.completed}
              </h3>
              <h5 className="w-1/5 text-lg font-medium">
                {elem.taskCount.failed}
              </h5>
              <h5
                className="w-1/5 text-lg font-medium text-blue-400 hover:underline cursor-pointer"
                data-modal-target="employee-task"
                data-modal-toggle="employee-task"
                onClick={() => handleModal(elem)}
              >
                View Task
              </h5>
            </div>
          );
        })}
      </div>

      {show && modalData && (
        <Popup
          show={show}
          modalData={modalData}
          closeModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default AllTasks;
