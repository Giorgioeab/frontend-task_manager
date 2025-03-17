import { useState, useRef, useEffect } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current === false) {
      mounted.current = true;
    } else {
      console.log("componente atualizado");
    }
  });

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

  const handleCleanTasks = () => {
    setTasks([]);
  }
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <button onClick={handleCleanTasks}>Limpar Tarefas</button>
    </>
  );
};

export default App;

// import React from "react";
// import TaskItem from "./components/TaskItem";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleStateChange = this.handleStateChange.bind(this);
//     this.state = {
//       tasks: [
//         {
//           id: 1,
//           description: "Learn React",
//           isCompleted: true,
//         },
//         {
//           id: 2,
//           description: "Learn Vue",
//           isCompleted: true,
//         },
//         {
//           id: 3,
//           description: "Learn Angular",
//           isCompleted: false,
//         },
//       ],
//     };
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevState)
//     console.log("componente atualizado");
//   }

//   handleStateChange() {
//     this.setState({
//       tasks: [],
//     });
//   }

//   render() {
//     return (
//       <>
//         {this.state.tasks.map((task) => (
//           <TaskItem key={task.id} task={task} />
//         ))}
//         <button onClick={this.handleStateChange}>Limpar Tarefas</button>
//       </>
//     );
//   }
// }

// export default App;
