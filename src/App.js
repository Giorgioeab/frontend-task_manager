import { useState, useEffect } from "react";
import axios from "axios";

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
      isCompleted: false,
    },
  ]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        "https://almeida-task-manager-11f6877e11ed.herokuapp.com/tasks"
      );
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default App;
