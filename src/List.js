import React from "react";

export default function List() {
  const [counter, setCounter] = React.useState[0];

  return (
    <div>
      <button onClick={() => setCounter((count) => count + 1)}>
        count is {counter}
      </button>
    </div>
  );
}
