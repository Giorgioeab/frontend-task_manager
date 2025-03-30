import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { toast } from "sonner";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        "https://almeida-task-manager-11f6877e11ed.herokuapp.com/tasks"
      );
      setTasks(data);
    } catch (_error) {
      toast.error("Não foi possivel recuperar as tarefas.");
    }
  };

  const lastTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === false);
  }, [tasks]);

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === true);
  }, [tasks]);

  useEffect(() => {
    fetchTasks();
  });

  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
        <AddTask fetchTasks={fetchTasks} />
        <div className="tasks-list">
          {lastTasks.map((lastTask) => (
            <TaskItem
              task={lastTask}
              fetchTasks={fetchTasks}
              key={lastTask._id}
            />
          ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluidas</h3>
        <div className="tasks-list">
          {completedTasks.map((completedTask) => (
            <TaskItem
              task={completedTask}
              fetchTasks={fetchTasks}
              key={completedTask._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
