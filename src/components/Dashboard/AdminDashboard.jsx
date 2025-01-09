import React, { useContext } from "react";
import Header from "../common/Header";
import CreateTask from "../common/CreateTask";
import AllTasks from "../common/AllTasks";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ data, handleLogout }) => {
  const contextData = useContext(AuthContext);

  const handleCreateTask = (task) => {
    console.log("HandleCreateTask");

    contextData.employees.forEach((elem, idx) => {
      if (elem.firstname == task.assignTo) {
        // console.log(elem);
        elem.taskLists.push({
          id: idx,
          title: task.title,
          description: task.description,
          category: task.category,
          date: task.date,
          bgColor: "bg-blue",
          priority: "Medium",
          newTask: true,
          completed: false,
          failed: false,
          active: false,
        });
        elem.taskCount.newTask = elem.taskCount.newTask + 1;
      }
    });

    localStorage.setItem("employees", JSON.stringify(contextData.employees));
    // console.log(contextData.employees);
  };

  return (
    <>
      <Header
        data={data}
        dashboardName="Admin Dashboard"
        handleLogout={handleLogout}
      />
      <CreateTask
        employeeData={contextData.employees}
        handleCreateTask={handleCreateTask}
      />
      <AllTasks employeeData={contextData.employees} />
    </>
  );
};

export default AdminDashboard;
