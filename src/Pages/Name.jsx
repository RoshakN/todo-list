// import React from "react";

import { useNavigate } from "react-router-dom";

function Name() {
  let navigate = useNavigate();
  return (
    <div className="name-container">
      <h1>What is Your Name?</h1>
      <input type="text" placeholder="Your name..." className="name-input" />
      <button className="submit-btn" onClick={() => navigate("/list")}>
        Submit
      </button>
    </div>
  );
}

export default Name;
