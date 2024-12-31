import React from "react";
import Header from "../common/Header";
import TaskListCards from "../common/TaskListCards";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <>
      <Header />
      <TaskListCards />
      <TaskList />
    </>
  );
};

export default EmployeeDashboard;
