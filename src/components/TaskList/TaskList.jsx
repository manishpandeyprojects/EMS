import React from "react";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";

const TaskList = ({ data }) => {
  return (
    <div className="p-10">
      <div
        id="TaskList"
        className="flex flex-nowrap overflow-x-auto gap-5 pb-2"
      >
        {data.taskLists.map((task, index) => {
          if (task.active) {
            return <AcceptTask key={index} data={task} />;
          }
          if (task.newTask) {
            return <NewTask key={index} data={task} />;
          }
          if (task.completed) {
            return <CompleteTask key={index} data={task} />;
          }
          if (task.failed) {
            return <FailedTask key={index} data={task} />;
          }
        })}
      </div>
    </div>
  );
};

export default TaskList;
