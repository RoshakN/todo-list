import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Name() {
  let navigate = useNavigate();

  // A state to keep track of the name user puts inside the Input
  const [name, setName] = useState("");

  // Functions
  const handleChangeName = (event) => {
    return setName(event.target.value);
  };

  const handleClick = () => {
    name && navigate(`/list/${name}`);
  };
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="name-container">
      <h1>What is Your Name?</h1>
      <input
        type="text"
        placeholder="Your name..."
        className="name-input"
        value={name}
        onChange={handleChangeName}
        onKeyDown={handleEnter}
      />
      <button className="submit-btn" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default Name;
