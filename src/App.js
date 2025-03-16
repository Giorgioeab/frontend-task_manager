import { useState } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Learn React",
      isCompleted: true,
    },
    {
      id: 2,
      description: "Learn Vue",
      isCompleted: true,
    },
    {
      id: 3,
      description: "Learn Angular",
      isCompleted: false,
    },
  ]);
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task}/>
      ))}
    </>
  );
};

export default App;
