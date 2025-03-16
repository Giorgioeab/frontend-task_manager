const TaskItem = ({ task }) => {
  return (
    <>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? "Você aprendeu" : "Você ainda não aprendeu"}</p>
    </>
  );
};

export default TaskItem;
