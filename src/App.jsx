import { useState, useEffect } from "react";
import "./App.css";
import List from "./List";

function App() {
  const storedList = JSON.parse(localStorage.getItem("myList"));
  const [toDoList, setToDoList] = useState(storedList || []);
  const [newTask, setNewTask] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("What is your name?"));
  }, []);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(toDoList));
  }, [toDoList]);

  const addTask = () => {
    const newTaskObject = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      title: newTask,
      isCompleted: false,
    };
    newTaskObject.title && setToDoList([...toDoList, newTaskObject]);
    clear();
  };

  const clear = () => {
    setNewTask("");
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleDelete = (taskId) => {
    setToDoList(toDoList.filter((task) => task.id !== taskId));
  };

  const handleComplete = (taskId) => {
    const newList = toDoList.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: true };
      } else {
        return task;
      }
    });
    setToDoList(newList);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="App">
      <h1>{userName || "Roshak"}&apos;s To Do List</h1>
      <div className="new-task">
        <input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <button onClick={addTask} className="new-task-button">
          Add
        </button>
      </div>
      <div className="list">
        {toDoList.map((task) => {
          return (
            <List
              key={task.id}
              id={task.id}
              title={task.title}
              isCompleted={task.isCompleted}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
