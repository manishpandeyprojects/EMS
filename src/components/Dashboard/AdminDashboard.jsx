import React from "react";
import Header from "../common/Header";
import CreateTask from "../common/CreateTask";
import AllTasks from "../common/AllTasks";

const AdminDashboard = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Header />
      <CreateTask />
      <AllTasks />
    </>
  );
};

export default AdminDashboard;
