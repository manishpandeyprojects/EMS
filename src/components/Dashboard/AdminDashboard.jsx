import React, { useContext, useState } from "react";
import Header from "../common/Header";
import CreateTask from "../common/CreateTask";
import AllTasks from "../common/AllTasks";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({ data, handleLogout }) => {
  const contextData = useContext(AuthContext);
  const [employeeData, setEmployeeData] = useState(contextData);

  const handleCreateTask = (task) => {
    console.log("HandleCreateTask");

    const updatedEmployees = employeeData.employees.map((elem, index) => {
      if (elem.firstname == task.assignTo) {
        elem.taskLists.push({
          id: 103 + 1,
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

      return elem;
    });

    const updatedEmployeeData = {
      ...employeeData,
      employees: updatedEmployees,
    };

    setEmployeeData(updatedEmployeeData);

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <>
      <Header
        data={data}
        dashboardName="Admin Dashboard"
        handleLogout={handleLogout}
      />
      <CreateTask
        employeeData={employeeData.employees}
        handleCreateTask={handleCreateTask}
      />
      <AllTasks employeeData={employeeData.employees} />
    </>
  );
};

export default AdminDashboard;
