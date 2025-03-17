import { useEffect } from "react";

const TaskItem = ({ task }) => {
  useEffect(() => {
    console.log('componente montado')
    return () => {
      console.log('componente desmontado')
    }
  }, []);

  return (
    <>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? "Você aprendeu" : "Você ainda não aprendeu"}</p>
    </>
  );
};

export default TaskItem;

// import React from "react";

// class TaskItem extends React.Component {
//     componentDidMount() {
//         console.log('componente montado')
//     }

//     componentWillUnmount() {
//         console.log('componente desmontado')
//     }
//   render() {
//     const { task } = this.props;
//     return (
//       <>
//         <h1>{task.description}</h1>
//         <p>{task.isCompleted ? "Concluído" : "Não concluído"}</p>
//       </>
//     );
//   }
// }

// export default TaskItem;
