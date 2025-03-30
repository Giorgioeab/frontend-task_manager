import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = (fetchTasks) => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return toast.error(
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

      setTimeout(() => fetchTasks, 0);

      setTask("");

      toast.success("A tarefa foi adicionada com sucesso!");
    } catch (_e) {
      toast.error("Algo deu errado.");
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
