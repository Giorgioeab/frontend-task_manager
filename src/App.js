import React from "react";
import TaskItem from "./components/TaskItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {
      tasks: [
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
      ],
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
    console.log("componente atualizado");
  }

  handleStateChange() {
    this.setState({
      tasks: [],
    });
  }

  render() {
    return (
      <>
        {this.state.tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
        <button onClick={this.handleStateChange}>Limpar Tarefas</button>
      </>
    );
  }
}

export default App;

// import { useState } from "react";
// import TaskItem from "./components/TaskItem";

// const App = () => {
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       description: "Learn React",
//       isCompleted: true,
//     },
//     {
//       id: 2,
//       description: "Learn Vue",
//       isCompleted: true,
//     },
//     {
//       id: 3,
//       description: "Learn Angular",
//       isCompleted: false,
//     },
//   ]);
//   return (
//     <>
//       {tasks.map((task) => (
//         <TaskItem key={task.id} task={task}/>
//       ))}
//     </>
//   );
// };

// export default App;
