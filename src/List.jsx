import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export default function List() {
  // Task (To Do) List
  const [taskList, setTaskList] = React.useState([]);

  // Temporary Input
  const [newTask, setNewTask] = React.useState("");

  const addTask = function () {
    if (newTask) {
      let num = taskList.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      // let newEntry = newTask;
      setTaskList([...taskList, newEntry]);
      setNewTask("");
    }
  };

  const textUpdate = function (event) {
    setNewTask(event.target.value);
  };

  const mapTasks = taskList.map((task) => (
    <li>{`Task ${task.id}: ${task.title}`}</li>
  ));

  return (
    <div className="list-container">
      <div className="new-task">
        <input type="text" placeholder="New task..." onChange={textUpdate} />
        <button onClick={addTask}>Add New Task</button>
      </div>
      <div className="tasks">
        <ul>{mapTasks}</ul>
      </div>
    </div>
  );
}
