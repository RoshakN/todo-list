import React from "react";
// import List from "./List";
import "./App.css";

function App() {
  const [counter, setCounter] = React.useState[0];

  return (
    <>
      <h1>Roshak&apos;s To Do List</h1>
      <p>made with REACT</p>
      <button onClick={() => setCounter((count) => count + 1)}>
        count is {counter}
      </button>
    </>
  );
}

export default App;
