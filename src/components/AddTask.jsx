import axios from "axios";
import { useAlert } from "react-alert";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = (fetchTasks) => {
  const [task, setTask] = useState("");

  const alert = useAlert();

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return alert.error(
          "A tarefa precisa de uma descrição para ser addicionada."
        );
      }

      await axios.post(
        "https://almeida-task-manager-11f6877e11ed.herokuapp.com/tasks",
        {
          description: task,
          isCompleted: false,
        }
      );

      await fetchTasks();

      setTask("");

      alert.success("A talefa foi adicionada com sucesso!");
    } catch (_e) {
      alert.error("Algo deu errado.");
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa"
        value={task}
        onChange={onChange}
        onEnterPress={handleTaskAddition}
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#ffffff" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
