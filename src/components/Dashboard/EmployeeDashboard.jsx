import React from "react";
import Header from "../common/Header";
import TaskListCards from "../common/TaskListCards";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, handleLogout }) => {
  return (
    <>
      <Header
        data={data}
        dashboardName="Employee Dashboard"
        handleLogout={handleLogout}
      />
      <TaskListCards data={data} />
      <TaskList data={data} />
    </>
  );
};

export default EmployeeDashboard;
