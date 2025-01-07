import React from "react";
import Header from "../common/Header";
import TaskListCards from "../common/TaskListCards";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <>
      <Header data={data} />
      <TaskListCards data={data} />
      <TaskList data={data} />
    </>
  );
};

export default EmployeeDashboard;
