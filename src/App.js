import { useState } from "react";
import "./App.css";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
const todoList = [
  {
    id: Math.random(),
    action: "Learn HTML",
    isDone: true,
  },
  {
    id: Math.random(),
    action: "Learn CSS",
    isDone: true,
  },
  {
    id: Math.random(),
    action: "Learn Redux",
    isDone: true,
  },
];
function App() {
  //--------------states------------
  const [todos, setTodos] = useState(todoList);
 
  //--------------functions---------

  return (
    <div className="App">
      <AddTask />
      <TaskList todos={todos} />
    </div>
  );
}

export default App;
