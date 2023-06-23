import React from "react";

export default function List() {
  const [inputText, setInputText] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);

  const addTask = function () {
    setTaskList((prevList) => {
      return [...prevList, inputText];
    });
  };

  const textUpdate = function (event) {
    setInputText(event.target.value);
  };

  return (
    <div className="list-container">
      <div className="new-task">
        <input type="text" placeholder="New task..." onChange={textUpdate} />
        <button onClick={addTask}>Add New Task</button>
      </div>
      <div className="tasks">{console.log(taskList)};</div>
    </div>
  );
}
