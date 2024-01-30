import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ todos }) => {
  return (
    <div>
      {todos.map((el) => {
        return <TaskItem todos={el} />;
      })}
    </div>
  );
};

export default TaskList;
