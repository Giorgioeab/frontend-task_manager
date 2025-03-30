import { AiFillDelete } from "react-icons/ai";
import { toast } from "sonner";
import axios from "axios";

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
  const handleTaskDeletion = async () => {
    try {
      await axios.delete(
        `https://almeida-task-manager-11f6877e11ed.herokuapp.com/tasks/${task._id}`
      );

      await fetchTasks();

      toast.success("Tarefa deletada com sucesso!");
    } catch (_error) {
      toast.error("Algo deu errado.");
    }
  };

  const handleTaskCompletionChange = async (e) => {
    try {
      await axios.patch(
        `https://almeida-task-manager-11f6877e11ed.herokuapp.com/tasks/${task._id}`,
        {
          isCompleted: e.target.checked,
        }
      );

      await fetchTasks();

      toast.success("Tarefa modificada com sucesso!");
    } catch (_error) {
      toast.error("Algo deu errado.");
    }
  };

  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? "checkbox-container-completed"
              : "checkbox-container"
          }
        >
          {task.description}
          <input
            type="checkbox"
            defaultChecked={task.isCompleted}
            onChange={(e) => handleTaskCompletionChange(e)}
          />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>

      <div className="delete">
        <AiFillDelete size={18} color="#f97474" onClick={handleTaskDeletion} />
      </div>
    </div>
  );
};

export default TaskItem;
