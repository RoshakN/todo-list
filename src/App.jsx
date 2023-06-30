import { useState } from "react";
// import List from "./List";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const newTaskObject = {
      title: newTask,
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
    };
    setToDoList([...toDoList, newTaskObject]);
    clear();
  };

  const clear = () => {
    setNewTask("");
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDelete = (taskName) => {
    setToDoList(toDoList.filter((task) => task.id !== taskName.id));
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="App">
      <h1>Roshak&apos;s To Do List</h1>
      <div className="new-task">
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <button onClick={addTask}>Add New Task</button>
      </div>
      <div className="list">
        {toDoList.map((task) => {
          return (
            <div>
              <p key={task.id}>{task.title}</p>
              <button onClick={() => handleDelete(task)}>Delete Task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
